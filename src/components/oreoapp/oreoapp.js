
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
export default {
  name: 'oreoapp',
  components: {},
  props: [],
  data () {
    return {
flag:true
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    oreobutton()
{
this.flag=!this.flag;
} 
 }
}


