(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2138ed"],{acd9:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form",{ref:"tableForm",staticClass:"demo-ruleForm",attrs:{model:t.tableForm,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"标题",prop:"title"}},[a("el-input",{model:{value:t.tableForm.title,callback:function(e){t.$set(t.tableForm,"title",e)},expression:"tableForm.title"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"操作人",prop:"author"}},[a("el-input",{model:{value:t.tableForm.author,callback:function(e){t.$set(t.tableForm,"author",e)},expression:"tableForm.author"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"展示项"}},[a("el-button",{attrs:{type:"primary"},on:{click:t.addDomain}},[t._v("新增")])],1),t._v(" "),t._l(t.tableForm.data.list,function(e,r){return a("el-form-item",{key:r,staticStyle:{"margin-bottom":"20px"},attrs:{label:"第"+(r+1)+"项",prop:"vote_rules"}},[a("el-row",[a("el-col",{attrs:{span:15}},[a("el-form-item",{attrs:{label:"小标题"}},[a("el-input",{model:{value:e.title,callback:function(a){t.$set(e,"title",a)},expression:"item.title"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:4}},[0!==r?a("el-button",{staticStyle:{"margin-left":"40px"},on:{click:function(e){return e.preventDefault(),t.removeDomain(r)}}},[t._v("删除\n        ")]):t._e()],1)],1),t._v(" "),a("el-col",{attrs:{span:15}},[a("el-form-item",{staticStyle:{"margin-bottom":"20px","margin-top":"20px"},attrs:{label:"数量"}},[a("el-input",{model:{value:e.number,callback:function(a){t.$set(e,"number",a)},expression:"item.number"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:15}},[a("el-form-item",{attrs:{label:"地址"}},[a("el-input",{model:{value:e.address,callback:function(a){t.$set(e,"address",a)},expression:"item.address"}})],1)],1)],1)}),t._v(" "),a("el-form-item",[a("el-button",{staticStyle:{"margin-top":"30px"},attrs:{type:"primary",loading:t.loading},on:{click:function(e){return t.submitForm("tableForm")}}},[t._v("\n      "+t._s(t.$route.params["id"]?"更新":"立即创建")+"\n    ")]),t._v(" "),a("el-button",{on:{click:function(e){return t.resetForm("tableForm")}}},[t._v("重置")])],1)],2)},i=[],n=a("bc3a"),o=a.n(n),l=a("5c96"),s={name:"CreatStateMent",data:function(){return{tableForm:{title:"",author:"币趣星球",data:{list:[{title:"",number:"",address:""}]},type:3},loading:!1,rules:{name:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],region:[{required:!0,message:"请选择活动区域",trigger:"change"}],date1:[{type:"date",required:!0,message:"请选择日期",trigger:"change"}],date2:[{type:"date",required:!0,message:"请选择时间",trigger:"change"}],type:[{type:"array",required:!0,message:"请至少选择一个活动性质",trigger:"change"}],resource:[{required:!0,message:"请选择活动资源",trigger:"change"}],desc:[{required:!0,message:"请填写活动形式",trigger:"blur"}]},pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-6048e5),t.$emit("pick",[a,e])}},{text:"最近一个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-2592e6),t.$emit("pick",[a,e])}},{text:"最近三个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-7776e6),t.$emit("pick",[a,e])}}]}}},mounted:function(){var t=this;this.$route.params&&this.$route.params["id"]&&o.a.post("/information/api/information",this.$route.params).then(function(e){if(e&&200===e.status){t.loading=!1;var a=e.data;a&&0===a.status&&a["result"]&&(t.tableForm=a["result"],t.tableForm["data"]=JSON.parse(a["result"]["data"]))}}).catch(function(t){})},methods:{removeDomain:function(t){this.tableForm.data.list.splice(t,1)},addDomain:function(){this.tableForm.data.list.push({title:"",number:"",address:""})},submitForm:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return!1;e.loading=!0;var a={};a["title"]=e.tableForm.title,a["data"]=JSON.stringify(e.tableForm.data),a["author"]=e.tableForm.author,a["type"]=e.tableForm.type;var r="/api/backend/information/new";e.$route.params&&e.$route.params["id"]&&(r="/api/backend/information/update",a["id"]=e.tableForm.id),o.a.post(r,a).then(function(t){if(t&&200===t.status){e.loading=!1;var a=t.data;a&&0===a.status&&a["result"]&&Object(l["Message"])({message:e.$route.params["id"]?"更新成功":"创建成功",type:"success"})}}).catch(function(t){})})},resetForm:function(t){this.$refs[t].resetFields()}}},m=s,u=a("2877"),c=Object(u["a"])(m,r,i,!1,null,"347c5d98",null);e["default"]=c.exports}}]);