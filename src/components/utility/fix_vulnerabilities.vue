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
      for (let aTag of a) {
        if (aTag.hasAttribute('target')) {
          aTag.setAttribute('rel', 'noopener')
        }
      }
    },
    register_fix: function (fix) {
      this.fixes.push(fix)
    },
    fix: function () {
      const fixes = this.fixes
      for (let fix of fixes) {
        fix()
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