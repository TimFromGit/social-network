(window["webpackJsonpsocial-network"]=window["webpackJsonpsocial-network"]||[]).push([[3],{295:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__1EDAG",profilePhoto:"ProfileInfo_profilePhoto__3w1wE",profilePhotoBlock:"ProfileInfo_profilePhotoBlock__1UTkC",fullName:"ProfileInfo_fullName__2ja5d",status:"ProfileInfo_status__3hXEC",profileData:"ProfileInfo_profileData__196v4",contact:"ProfileInfo_contact__1rJei"}},298:function(e,t,a){e.exports={profile:"Profile_profile__Yw_5B",img:"Profile_img__3TrwR"}},299:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__rFgRQ",addPost:"MyPosts_addPost__2s4Tn",btn:"MyPosts_btn__3Y4H7",posts:"MyPosts_posts__2f6-n"}},300:function(e,t,a){e.exports={post:"Post_post__I9142",item:"Post_item__2QDz1",message:"Post_message__2A-6X",likesCount:"Post_likesCount__W_OZV"}},301:function(e,t,a){"use strict";a.r(t);var s=a(35),n=a(36),o=a(38),l=a(37),r=a(39),i=a(0),c=a.n(i),u=a(298),m=a.n(u),f=a(95),p=a(295),d=a.n(p),E=a(41),b=a(106),v=a.n(b),P=function(e){var t=Object(i.useState)(!1),a=Object(f.a)(t,2),s=a[0],n=a[1],o=Object(i.useState)(e.status),l=Object(f.a)(o,2),r=l[0],u=l[1];Object(i.useEffect)(function(){u(e.status)},[e.status]);return c.a.createElement("div",null,!s&&c.a.createElement("div",null,c.a.createElement("span",{onDoubleClick:function(){n(!0)}},e.status||"No status")),s&&c.a.createElement("div",null,c.a.createElement("input",{onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,onBlur:function(){n(!1),e.updateStatus(r)},value:r})))},h=a(33),_=a(128),k=Object(_.a)({form:"edit-profile"})(function(e){var t=e.profile,a=e.status,s=e.updateStatus,n=e.handleSubmit,o=e.error;return c.a.createElement("form",{className:d.a.profileDataForm,onSubmit:n},c.a.createElement("div",{className:d.a.fullName},c.a.createElement("b",null,"Full name:"),Object(h.c)("Full name","fullName",[],h.a)),c.a.createElement("div",{className:d.a.status},c.a.createElement(P,{className:d.a.status,status:a,updateStatus:s})),c.a.createElement("div",null,c.a.createElement("b",null,"Looking for a job:"),Object(h.c)("","lookingForAJob",[],h.a,{type:"checkbox"})),c.a.createElement("div",null,c.a.createElement("b",null,"My Professional skills:"),Object(h.c)("My Professional skills","lookingForAJobDescription",[],h.b)),c.a.createElement("div",null,c.a.createElement("b",null,"About me:"),Object(h.c)("About me","aboutMe",[],h.b)),c.a.createElement("div",null,c.a.createElement("b",null,"Contacts"),": ",Object.keys(t.contacts).map(function(e){return c.a.createElement("div",{key:e,className:d.a.contact},c.a.createElement("b",null,e)," ",Object(h.c)(e,"contacts."+e,[],h.a))})),c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){}},"save"),o&&c.a.createElement("div",{className:d.a.formSummaryError},o)))}),g=function(e){var t=e.profile,a=e.status,s=e.updateStatus,n=e.isOwner,o=e.goToEditMode;return c.a.createElement("div",{className:d.a.profileData},c.a.createElement("div",{className:d.a.fullName},t.fullName),c.a.createElement("div",{className:d.a.status},c.a.createElement(P,{className:d.a.status,status:a,updateStatus:s})),c.a.createElement("div",null,c.a.createElement("b",null,"Looking for a job:")," ",t.lookingForAJob?"yes":"no"),t.lookingForAJob&&c.a.createElement("div",null,c.a.createElement("b",null,"My Professional skills:")," ",t.lookingForAJobDescription),c.a.createElement("div",null,c.a.createElement("b",null,"About me:")," ",t.aboutMe),c.a.createElement("div",null,c.a.createElement("b",null,"Contacts"),": ",Object.keys(t.contacts).map(function(e){return c.a.createElement(O,{key:e,contactTitle:e,contactValue:t.contacts[e]})})),c.a.createElement("div",null,n&&c.a.createElement("button",{onClick:o},"edit")))},O=function(e){var t=e.contactTitle,a=e.contactValue;return c.a.createElement("div",{className:d.a.contact},c.a.createElement("b",null,t),": ",a)},N=function(e){var t=e.profile,a=e.isOwner,s=e.savePhoto,n=e.status,o=e.updateStatus,l=e.saveProfile,r=Object(i.useState)(!1),u=Object(f.a)(r,2),m=u[0],p=u[1];if(!t)return c.a.createElement(E.a,null);return c.a.createElement("div",null,c.a.createElement("div",{className:d.a.descriptionBlock},c.a.createElement("div",{className:d.a.profilePhotoBlock},c.a.createElement("div",null,c.a.createElement("img",{className:d.a.profilePhoto,alt:"",src:t.photos.large||v.a})),c.a.createElement("div",null,a&&c.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&s(e.target.files[0])}}))),m?c.a.createElement(k,{initialValues:t,classname:d.a.profileData,profile:t,status:n,updateStatus:o,onSubmit:function(e){l(e).then(function(){p(!1)})}}):c.a.createElement(g,{classname:d.a.profileData,profile:t,status:n,updateStatus:o,isOwner:a,goToEditMode:function(){p(!0)}})))},j=a(94),S=a(299),y=a.n(S),w=a(300),C=a.n(w),I=function(e){return c.a.createElement("div",{className:C.a.post},c.a.createElement("div",{className:C.a.item},c.a.createElement("img",{src:e.img,alt:""}),c.a.createElement("div",{className:C.a.message},e.message)),c.a.createElement("div",{className:C.a.likesCount},c.a.createElement("span",null,"Likes: ")," ",e.likesCount))},A=a(88),D=a(85),M=Object(D.a)(10),T=c.a.memo(function(e){var t=e.posts.map(function(e){return c.a.createElement(I,{message:e.message,likesCount:e.likesCount,key:e.id,img:e.img})}).reverse();return c.a.createElement("div",{className:y.a.postsBlock},c.a.createElement("h2",null,"My posts"),c.a.createElement(B,{onSubmit:function(t){e.addPost(t.newPostText)}}),c.a.createElement("div",{className:y.a.posts},t))}),B=Object(_.a)({form:"ProfileAddNewPostForm"})(function(e){return c.a.createElement("form",{className:y.a.addPost,onSubmit:e.handleSubmit},c.a.createElement(A.a,{component:h.b,name:"newPostText",placeholder:"Enter your message",validate:[D.b,M]}),c.a.createElement("div",null,c.a.createElement("button",{className:y.a.btn},"Add post")))}),F=T,x=a(12),J=Object(x.b)(function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}},function(e){return{addPost:function(t){e(Object(j.a)(t))}}})(F),U=function(e){return c.a.createElement("div",{className:m.a.profile},c.a.createElement("div",{className:m.a.img}),c.a.createElement(N,{isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus,savePhoto:e.savePhoto,saveProfile:e.saveProfile}),c.a.createElement(J,{store:e.store}))},V=a(29),z=a(8),L=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(r.a)(t,e),Object(n.a)(t,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return c.a.createElement(U,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile}))}}]),t}(c.a.Component);t.default=Object(z.d)(Object(x.b)(function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}},{getUserProfile:j.d,getStatus:j.c,updateStatus:j.g,savePhoto:j.e,saveProfile:j.f}),V.f)(L)}}]);
//# sourceMappingURL=3.7e8be153.chunk.js.map