(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"/mXO":function(e,t,s){"use strict";s.r(t);var a={data:function(){return{fields:[{name:"id",trans:"table.id",titleClass:"width-5-percent text-center",dataClass:"text-center"},{name:"name",trans:"table.name",sortField:"name"},{name:"created_at",trans:"table.created_at",titleClass:"width-10-percent",sortField:"created_at"},{name:"__actions",trans:"table.action",titleClass:"text-center width-20-percent",dataClass:"text-center"}],itemActions:[{name:"view-item",icon:"fas fa-eye",class:"btn btn-success"},{name:"edit-item",permission:"UPDATE_SERIES",icon:"fas fa-pencil-alt",class:"btn btn-info"},{name:"delete-item",permission:"DESTROY_SERIES",icon:"fas fa-trash-alt",class:"btn btn-danger"}]}},methods:{tableActions:function(e,t){var s=this;"edit-item"==e?this.$router.push({name:"dashboard.series.edit",params:{id:t.id}}):"delete-item"==e?this.$http.delete("series/"+t.id).then((function(e){toastr.success("You delete the series!"),s.$emit("reload")})).catch((function(e){var t=e.response;"string"!=typeof t.data.error&&t.data.error?toastr.error(t.data.error.message):toastr.error(t.status+" : Resource "+t.statusText)})):"view-item"==e&&window.open("/series/"+t.id,"_blank")}}},i=s("KHd+"),n=Object(i.a)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"row"},[s("vue-table",{attrs:{title:e.$t("page.series"),fields:e.fields,"api-url":"series","item-actions":e.itemActions,"show-paginate":""},on:{"table-action":e.tableActions}},[s("template",{slot:"buttons"},[e.checkPermission("CREATE_SERIES")?s("router-link",{staticClass:"btn btn-sm btn-success",attrs:{to:{name:"dashboard.series.create"}}},[e._v(e._s(e.$t("page.create")))]):e._e()],1)],2)],1)])}),[],!1,null,null,null);t.default=n.exports}}]);