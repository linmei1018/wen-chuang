"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var link_1=require("./../mixins/link.js"),component_1=require("./../common/component.js");component_1.VantComponent({classes:["title-class","label-class","value-class","right-icon-class","hover-class"],mixins:[link_1.link],props:{title:null,value:null,icon:String,size:String,label:String,center:Boolean,isLink:Boolean,required:Boolean,clickable:Boolean,titleWidth:String,customStyle:String,arrowDirection:String,border:{type:Boolean,value:!0}},methods:{onClick:function(e){this.$emit("click",e.detail),this.jumpLink()}}});