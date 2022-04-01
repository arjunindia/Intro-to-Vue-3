app.component("product-details", {
  props: { details: { type: Array, required: false } },
  template:
    /*html*/
    `<div class="product-details" >
    <div class="product-dets" v-for="detail in giveDetails">{{detail}}</div>
    </div>`,
  data() {
    return {
      cols: ["Hello", 23, "World"],
    };
  },
  computed: {
    giveDetails() {
      return this.details ? this.details : this.cols;
    },
  },
});
