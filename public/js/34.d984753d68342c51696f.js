(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{xUo7:function(t,s,e){"use strict";e.r(s);var a={data:function(){return{name:"",desc:""}},methods:{onSubmit:function(){var t=this;this.$http.post("series/new",{name:this.name,description:this.desc}).then((function(s){toastr.success("Series Created!"),t.$emit("reload")})).catch((function(t){var s=t.response;toastr.error(s.status+" : Resource "+s.statusText)}))}}},o=e("KHd+"),r={components:{SeriesForm:Object(o.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("form",{on:{submit:function(s){return s.preventDefault(),t.onSubmit(s)}}},[e("div",{staticClass:"form-group"},[e("div",{staticClass:"row"},[e("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"name"}},[t._v(t._s(t.$t("form.title")))]),t._v(" "),e("div",{staticClass:"col-sm-10"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",id:"name",name:"name"},domProps:{value:t.name},on:{input:function(s){s.target.composing||(t.name=s.target.value)}}})])]),t._v(" "),e("div",{staticClass:"row"},[e("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"description"}},[t._v(t._s(t.$t("form.description")))]),t._v(" "),e("div",{staticClass:"col-sm-10"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.desc,expression:"desc"}],staticClass:"form-control",attrs:{id:"description",name:"description",rows:"2"},domProps:{value:t.desc},on:{input:function(s){s.target.composing||(t.desc=s.target.value)}}})])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-3"},[e("button",{staticClass:"btn btn-success form-control",attrs:{type:"submit"}},[t._v(t._s(t.$t("form.create")))])])])])])}),[],!1,null,null,null).exports}},n=Object(o.a)(r,(function(){var t=this.$createElement,s=this._self._c||t;return s("vue-form",{attrs:{title:this.$t("form.create_series")}},[s("template",{slot:"buttons"},[s("router-link",{staticClass:"btn btn-sm btn-secondary",attrs:{to:{name:"dashboard.series"},exact:""}},[this._v(this._s(this.$t("form.back")))])],1),this._v(" "),s("template",{slot:"content"},[s("series-form")],1)],2)}),[],!1,null,null,null);s.default=n.exports}}]);