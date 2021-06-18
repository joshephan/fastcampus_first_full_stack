<template>
  <article>
    <div v-if="!isEditing" class="content">{{article.content}}</div>
    <textarea v-else class="content" v-model="content"></textarea>
    <div class="created-at">{{ article.createdAt | moment("M월 D일 HH:mm:ss")}}</div>
    <button v-if="!isEditing" @click="moveToArticle">이동</button>
    <button @click="toggleTextArea">{{!isEditing ? "수정" : "수정 취소"}}</button>
    <button v-if="!isEditing" @click="deleteArticle">삭제</button>
    <button v-else @click="updateArticle">수정 완료</button>
  </article>
</template>
<script>
import axios from "axios";
export default {
  props: {
    article: {
      default: {
        content: null,
        _id: null,
        createdAt: null
      }
    }
  },
  data() {
    return {
      content: "",
      isEditing: false
    };
  },
  methods: {
    toggleTextArea() {
      this.content = this.article.content;
      this.isEditing = !this.isEditing;
    },
    moveToArticle() {
      this.$router.push({
        name: "Article",
        params: {
          id: this.article._id
        }
      });
    },
    async updateArticle() {
      const { data } = await axios.patch("http://localhost:3000/update", {
        id: this.article._id,
        content: this.content
      });
      if (!data) return;
      this.$emit("update", { content: this.content, id: this.article._id });
      this.isEditing = false;
    },
    async deleteArticle() {
      const { data } = await axios.delete(
        `http://localhost:3000/delete/${this.article._id}`
      );
      if (!data) return;
      this.$emit("delete", this.article._id);
    }
  }
};
</script>
<style>
article {
  padding: 1em;
  box-shadow: 0 3px 3px #22222222;
  margin-bottom: 1em;
  background: #fafafa;
}
</style>