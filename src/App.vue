<template>
  <div id="app">
    
       <v-btn @click="addContent()" class="ma-2" tile color="indigo" dark>➤ Run</v-btn>
   
        <p>html</p>
          <m-ace-editor height="50px" v-model="htmlCode" :line-number="True" mode="html"  class="purple darken-2" theme="monokai"></m-ace-editor>
          <p>CSS</p>
          <m-ace-editor height="50px" v-model="cssCode" :line-number="True" mode="css"  class="purple darken-2" theme="monokai"></m-ace-editor>
          <p>JS</p>
          <m-ace-editor height="50px" v-model="jsCode" :line-number="True" mode="javascript"  class="purple darken-2" theme="monokai"></m-ace-editor>
        <b-col> <iframe id="finalIframe" width="100%" height="100%"> </iframe></b-col>
    <!--<img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />-->
    <div class="js-online-wrapper">
      <div class="editor-wrapper"></div>
      <div class="editor-wrapper"></div>
    </div>
    <div></div>
    <div id="logger"></div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  },
  data: function() {
    return {
      htmlCode: "<p>welcome to ash!</p>",
      cssCode: "body{ color: red; background:#fff; }",
      jsCode: "console.log('welcome to ash')"
    };
  },
  methods: {
    addContent() {
      let x = document.getElementById("finalIframe").contentWindow.document;
      x.open();
      console.log(this.htmlCode, this.jsCode);
      x.write(this.htmlCode);
      //console.log(this.jsCode.search('console.log'))
      x.write(`<script>${this.jsCode}<\/script>`);
      x.write(`<style>${this.cssCode}<\/style>`);
      x.close();
    }
  },
  mounted: function() {
    // Overriding console object
    var console = {};

    // Getting div to insert logs
    var logger = document.getElementById("logger");

    // Adding log method from our console object
    console.log = function(text) {
      var element = document.createElement("div");
      var txt = document.createTextNode(text);

      element.appendChild(txt);
      logger.appendChild(element);
    };
    // console.log(44444);
    this.addContent();
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #d9dde2;
  background-color: #f0f2f5;
}
</style>