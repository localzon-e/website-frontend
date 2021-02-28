<script>
export default {
  name: 'fix_vul',
  data() {
    return {
      fixes: []
    }
  },
  methods: {
    fix_target: function () {
      const a = document.getElementsByTagName('a')
      for (let i = 0; i < a.length; i++) {
        if (a[i].hasAttribute('target'))
          a[i].setAttribute('rel', 'noopener')
      }
    },
    register_fix: function (fix) {
      this.fixes.push(fix)
    },
    fix: function () {
      const fixes = this.fixes
      for (let i = 0; i < fixes.length; i++) {
        fixes[i]()
      }
    }
  },
  mounted() {
    this.register_fix(this.fix_target, '')
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        this.fix()
      }, 2000)
    })
  }
}
</script>