(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{NbCX:function(t,e,s){"use strict";s.r(e);var a={data:function(){return{fields:[{name:"id",trans:"table.id",titleClass:"width-5-percent text-center",dataClass:"text-center"},{name:"name",trans:"table.name",titleClass:"text-center",dataClass:"text-center"},{name:"guard_name",trans:"table.guard_name"},{name:"created_at",trans:"table.created_at"},{name:"__actions",trans:"table.action",titleClass:"text-center",dataClass:"text-center"}],itemActions:[{name:"set-permission-item",permission:"UPDATE_ROLE_PERMISSIONS",icon:"fas fa-cogs",class:"btn btn-success"},{name:"edit-item",permission:"UPDATE_ROLE",icon:"fas fa-pencil-alt",class:"btn btn-info"},{name:"delete-item",permission:"DESTROY_ROLE",icon:"fas fa-trash-alt",class:"btn btn-danger"}]}},methods:{image:function(t){return'<img src="'+t+'" width="50" height="50" class="rounded-circle">'},tableActions:function(t,e){var s=this;"edit-item"==t?this.$router.push({name:"dashboard.role.edit",params:{id:e.id}}):"delete-item"==t?this.$http.delete("role/"+e.id).then((function(e){toastr.success("You delete the role success!"),s.$emit("reload",t)})).catch((function(t){var e=t.response;toastr.error(e.status+" : Resource "+e.statusText)})):"set-permission-item"==t&&this.$router.push({name:"dashboard.role.permission",params:{id:e.id}})}}},n=s("KHd+"),i=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("vue-table",{attrs:{title:t.$t("page.roles"),fields:t.fields,"api-url":"role","item-actions":t.itemActions,"show-paginate":""},on:{"table-action":t.tableActions}},[s("template",{slot:"buttons"},[t.checkPermission("CREATE_ROLE")?s("router-link",{staticClass:"btn btn-sm btn-success",attrs:{to:{name:"dashboard.role.create"}}},[t._v(t._s(t.$t("page.create")))]):t._e()],1)],2)],1)}),[],!1,null,null,null);e.default=i.exports}}]);