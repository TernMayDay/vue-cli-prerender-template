export default {
  metaInfo () {
    return {
      title: this.title,
      meta: [
        {
          property: `og:${this.title}`,
          content: `this is ${this.title} page`
        }
      ]
    }
  }
}
