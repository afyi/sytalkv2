<script setup lang="ts">
  defineProps<{msg: string}>();
</script>


<template>
  <div id="content">
    <ul class="cbp_tmtimeline" id="maina">
      <li id="li_639ef5a41d35662164eecdf8">  
        <span class="shuoshuo_author_img">    
          <img id="atAvatar639ef5a41d35662164eecdf8" src="https://cravatar.cn/avatar/140ca652b7fbed3147c72c7c3942be92?s=128" class="sytalk_avatar gallery-group-img" width="48" height="48">  
        </span>  
        <span class="cbp_tmlabel" id="atId639ef5a41d35662164eecdf8">    
          <a href="javascript:void(0)" style="display: inline" id="operate639ef5a41d35662164eecdf8" class="delete_right" onclick="sytalk.delete('639ef5a41d35662164eecdf8', '639ef5a460195e6845e165a8')" title="删除本条说说">      
            <i class="syicon sy-close"></i>    
          </a>    
          <div class="atContent" id="forEdit639ef5a41d35662164eecdf8">
            <p>大约阳了吧，很难受哈哈</p>
          </div>    
          <p class="shuoshuo_time">      
            <span class="os"><i class="syicon sy-android"></i>风决定不了方向的Max3</span>      
            <span class="date"><i class="syicon sy-day5"></i>2022-12-18 19:12:36</span>      
            <span class="zan" id="zan-639ef5a460195e6845e165a8" data-id="639ef5a41d35662164eecdf8" data-zanid="639ef5a460195e6845e165a8" onclick="javascript:sytalk.zan(this)">
              <i class="syicon sy-zan"></i>
              <span class="num">0</span>
            </span>    
          </p>  
        </span>
      </li>       
    </ul>
  </div>
</template>

<style lang="scss">
/** 列表部分 */    
.cbp_tmtimeline{margin:30px 0 0 0;padding:0;list-style:none;display:inline;position:relative;}
.cbp_tmtimeline li {cursor:pointer}
/** 头像 */ 
.cbp_tmtimeline>li .shuoshuo_author_img img{border:1px solid #ddd;padding:2px;float:left;border-radius:64px;transition: all 1s;}
.cbp_tmtimeline>li .shuoshuo_author_img .sytalk_avatar{border-radius:100%;box-shadow:inset 0 -1px 0 3333sf;transition:transform 0.4s ease-out;}
.cbp_tmtimeline>li .shuoshuo_author_img .sytalk_avatar:hover{transform:rotateZ(360deg);}
/** 说说内容框 */ 
.cbp_tmtimeline>li .cbp_tmlabel{margin:0 0 45px 65px;z-index:1;background:var(--list-even-color);color:#333;padding:.8em 1.2em .4em 1.2em;font-weight:300;line-height:1.6;position:relative;border-radius:5px;transition:all .3s ease 0s;box-shadow:0 1px 12px rgba(0,0,0,.3);display:block}
.cbp_tmtimeline>li .cbp_tmlabel:after{right:100%;border:solid transparent;z-index:-1;content:' ';height:0;width:0;position:absolute;pointer-events:none;border-right-color:var(--list-even-color);border-width:10px;top:4px;}
.cbp_tmlabel:hover {transform:translateY(-3px);z-index:1;box-shadow:0 15px 32px rgba(0,0,0,0.15);}
.cbp_tmtimeline>li .cbp_tmlabel img.atemoji{max-height: 28px;width: 28px;display:inline;vertical-align:middle;}
.cbp_tmtimeline>li .cbp_tmlabel a{text-decoration:none;}
/** 隔行不同色 */ 
.cbp_tmtimeline>li:nth-child(odd) .cbp_tmlabel{background: var(--list-odd-color);color:#333;}
.cbp_tmtimeline>li:nth-child(odd) .cbp_tmlabel:after{border-right-color: var(--list-odd-color);}
/** 删除图标 */ 
.cbp_tmtimeline>li .delete_right{cursor:pointer;position:absolute;right: 12px;display:none}
.cbp_tmtimeline>li .delete_right i{font-size:1.35rem;line-height:22px}
</style>