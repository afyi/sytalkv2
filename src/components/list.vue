<script setup lang="ts">
  import { computed } from 'vue'
  // 从远程拿来的主体结构
  interface atList {
    id: string, 
    avatar: string,
    atContentHtml: string,
    userOs: string,
    createdAt: string,
    zanId: string,
    zanNum: number,
    timeSvg: string
  }
  const props = defineProps<{
    msg: string,
    shuoList: Array<any>
  }>();

  const shuoListed = computed(() => {
    for (let ind in props.shuoList) {
      let atContent = props.shuoList[ind];
      let nowDate = new Date(atContent.createdAt);
      let nowDateStr = nowDate.getFullYear() + '-' + timeFormat(nowDate.getMonth() + 1) + '-' + timeFormat(nowDate.getDate()) + ' ' + timeFormat(nowDate.getHours()) + ':' + timeFormat(nowDate.getMinutes()) + ':' + timeFormat(nowDate.getSeconds());
      let atHour = nowDate.getHours();
      // 格式化时间
      let timeSvg = "";
      if (atHour >= 0 && atHour < 6) {
        timeSvg = "sy-day1";
      } else if (atHour >= 6 && atHour < 12) {
        timeSvg = "sy-day2";
      } else if (atHour >= 12 && atHour < 15) {
        timeSvg = "sy-day3";          
      } else if (atHour >= 15 && atHour < 19) {
        timeSvg = "sy-day4";          
      } else if (atHour >= 19 && atHour < 24) {
        timeSvg = "sy-day5";          
      } else {
        timeSvg = "sy-day2";
      }
      props.shuoList[ind]["timeSvg"] = timeSvg;
      props.shuoList[ind]["createdAt"] = nowDateStr;
    }
    console.log(props.shuoList);
    return props.shuoList;
  });

  // 时间格式化
  const timeFormat = (time: number) => {
    return time < 10 ? '0' + time : time;
  }


  function del(id:string):void {
    
  }
  function zan(id: string): void {

  }
</script>


<template>
  <div id="content">
    <ul class="cbp_tmtimeline" id="maina">
      <li v-for="shuo in shuoListed" :key="shuo.id">  
        <span class="shuoshuo_author_img">    
          <img :src="shuo.avatar" class="sytalk_avatar gallery-group-img" width="48" height="48">  
        </span>  
        <span class="cbp_tmlabel">    
          <a href="javascript:void(0)" class="delete_right" title="删除本条说说" @click="del(shuo.id)"><i class="syicon sy-close"></i>  </a>    
          <div class="atContent" v-html="shuo.atContentHtml"></div>    
          <p class="shuoshuo_time">      
            <span class="os"><i class="syicon sy-android"></i>{{shuo.userOs}}</span>      
            <span class="date"><i :class="`syicon ` + (shuo.timeSvg || '')"></i>{{shuo.createdAt}}</span>      
            <span class="zan" :id="`zan-` + shuo.zanId" @click="zan(shuo.zanId)">
              <i class="syicon sy-zan"></i>
              <span class="num">{{shuo.zanNum}}</span>
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