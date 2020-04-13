<template>
  <div id="app">
      <v-toolbar dense dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>ash - Online html css js compiler</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn @click="addContent()" class="ma-2" tile color="indigo" white>➤ Run</v-btn>
    <v-btn href="mailto:adarshreddy9849@gmail.com" text small style="color:#ccffff;">report</v-btn>
    </v-toolbar>

  <v-layout row>
    <v-flex md6 xs6>
       <m-ace-editor height="300px" v-model="htmlCode" :line-number="True" mode="html" theme="monokai"></m-ace-editor> 
    </v-flex>
    <v-flex md6 xs6>
       <m-ace-editor height="300px" v-model="cssCode" :line-number="True" mode="css" theme="monokai"></m-ace-editor>
    </v-flex>
    <v-flex md6 xs6>
      <m-ace-editor height="300px" v-model="jsCode" :line-number="True" mode="javascript" theme="monokai"></m-ace-editor>
    </v-flex>
    <v-flex md6 xs6>
    <iframe id="finalIframe" width="100%" height="100%"> </iframe>
    </v-flex>
  </v-layout> 
        
    <!--<img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />-->
    
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
  color: #000000;
  background-color: #00060f;
}
</style>