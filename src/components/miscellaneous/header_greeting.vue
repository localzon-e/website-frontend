<template>
  {{ sIntros.intro }}
</template>

<script>
export default {
  name: 'header-greeting',
  data() {
    return {
      sIntros: {
        intros: [
          'Be a local hero',
          'Buy at 127.0.0.1',
          'We need more local heroes like you!'
        ],
        indexIntros: 0,
        intro: '',
        charPositionIntro: 0
      }
    }
  },
  methods: {
    writeText: function () {
      if (this.sIntros.charPositionIntro < this.sIntros.intros[this.sIntros.indexIntros].length) {
        this.sIntros.intro = this.sIntros.intro + this.sIntros.intros[this.sIntros.indexIntros].charAt(this.sIntros.charPositionIntro)
        this.sIntros.charPositionIntro++
        setTimeout(this.writeText, 150)
      } else {
        this.sIntros.charPositionIntro = 0
      }
    }
  },
  mounted() {
    setInterval(() => {
      this.sIntros.indexIntros = (this.sIntros.indexIntros + 1) % this.sIntros.intros.length
      this.sIntros.intro = ''
      this.writeText()
    }, 2500)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#welcome-msg {

}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
