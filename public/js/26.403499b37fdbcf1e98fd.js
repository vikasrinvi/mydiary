(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"8J3c":function(t,e,a){"use strict";a.r(e);var s={data:function(){return{fields:[{name:"id",trans:"table.id",titleClass:"width-5-percent text-center",dataClass:"text-center"},{name:"title",trans:"table.title",sortField:"title"},{name:"subtitle",trans:"table.subtitle",sortField:"subtitle"},{name:"comment_count",trans:"table.comment_count"},{name:"published_at",trans:"table.published_at",titleClass:"width-10-percent",sortField:"created_at"},{name:"__actions",trans:"table.action",titleClass:"text-center",dataClass:"text-center"}],itemActions:[{name:"view-item",icon:"fas fa-eye",class:"btn btn-success"},{name:"edit-item",permission:"UPDATE_ARTICLE",icon:"fas fa-pencil-alt",class:"btn btn-info"},{name:"delete-item",permission:"DESTROY_ARTICLE",icon:"fas fa-trash-alt",class:"btn btn-danger"}]}},methods:{tableActions:function(t,e){var a=this;"edit-item"==t?this.$router.push({name:"dashboard.article.edit",params:{id:e.id}}):"delete-item"==t?this.$http.delete("article/"+e.id).then((function(t){toastr.success("You delete the article success!"),a.$emit("reload")})).catch((function(t){var e=t.response;"string"!=typeof e.data.error&&e.data.error?toastr.error(e.data.error.message):toastr.error(e.status+" : Resource "+e.statusText)})):"view-item"==t&&window.open("/"+e.slug,"_blank")}}},i=a("KHd+"),n=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("vue-table",{attrs:{title:t.$t("page.articles"),fields:t.fields,"api-url":"article","item-actions":t.itemActions,"show-paginate":""},on:{"table-action":t.tableActions}},[a("template",{slot:"buttons"},[t.checkPermission("CREATE_ARTICLE")?a("router-link",{staticClass:"btn btn-sm btn-success",attrs:{to:{name:"dashboard.article.create"}}},[t._v(t._s(t.$t("page.create")))]):t._e()],1)],2)],1)}),[],!1,null,null,null);e.default=n.exports}}]);