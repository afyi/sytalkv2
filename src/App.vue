<template>
  <Loading msg="You did it!" v-if="loading" @increase="handleIncrease"/>
  <div id="sytalk_part1">
    <div id="shuoshuo_content">
      <div id="content">
        <ul class="cbp_tmtimeline" id="maina"></ul>
      </div>
      <div id="readButton">
        <button id="readmore" class="at_button" @click="change()">阅读更多</button>
      </div>
    </div>
    <div id="shuoshuo_input" class="shuoshuo_active">
      <div id="shuoshuo_edit">
        <textarea class="shuoshuo_text" id="neirong" placeholder="占位符" style="background-image:url('')"></textarea>
        <span id="drag_area" class="z-index: -1;"></span>
      </div>
      <div id="shuoshuo_parttwo" class="shuoshuo_parttwo">
        <div id="shuoshuo_emoji_Tieba" class="shuoshuo_emoji"></div>
        <div id="shuoshuo_emoji_BiliBili" class="shuoshuo_emoji"></div>
        <div id="shuoshuo_emoji_QQ" class="shuoshuo_emoji"></div>
        <div id="shuoshuo_emoji_custom" class="shuoshuo_emoji"></div>
        <div id="shuoshuo_emojiswitch" class="shuoshuo_emojiswitch">
          <div id="switch_Tieba" class="shuoshuo_emoji_part active">贴吧</div>
          <div id="switch_BiliBili" class="shuoshuo_emoji_part">哔哩哔哩</div>
          <div id="switch_QQ" class="shuoshuo_emoji_part">QQ</div>
          <div id="switch_custom" class="shuoshuo_emoji_part">自定义</div>
        </div>
      </div>
      <div class="shuoshuo_submit">
        <div class="shuoshuo_row">
          <div class="sytalk_child">
            <button class="at_button" id="atSave">提交</button>
            <button class="at_button" id="atPreview">预览</button>
            <button class="at_button" id="loadEmoji">表情</button>
          </div>
        </div>
      </div>
      <div id="shuoshuo_preview"></div>
    </div> 
  </div>
  <div class="power">
    <div class="op">
      <div id="pubShuo" title=""><i class="syicon sy-edit"></i></div>
      <div id="switchUser" title="用户"><i class="syicon sy-login"></i></div>
    </div>
    <div class="copyright">
      <a href="https://github.com/afyi/sytalk" target="_blank" :title="'sytalk评论系统 V' + atVersion + ',基于Artitalk V3.3.4'">
        sytalk {{ atVersion }}
      </a>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { ref, onMounted} from 'vue';
  import { getCurrentInstance} from 'vue';
  // leancloud官方包
  import AV from "leancloud-storage";
  // 浏览器识别
  // import Bowser from "bowser";
  // markdown转换
  // import showdown from "showdown";

  // 引入组件
  import Loading from './components/loading.vue';

  // 当前的版本号
  const atVersion = "2.0.0";

  // 这破地方，没救了,读取全局文件中的配置参数
  // @ts-ignore
  const { proxy } = getCurrentInstance();

  // 当前的配置文件 
  const SYTALK_CONFIG = {
    // leancloud appid
    appId: proxy.$config.appId || "",
    // leancloud appkey
    appKey: proxy.$config.appKey || "",
    // leancloud serverUrl
    serverURL: proxy.$config.serverURL || "https://yfbtuvs4.lc-cn-n1-shared.com",
    // 每页加载数量
    pageSize: proxy.$config.pageSize || 10,
    // 表情的CDN路径，默认是jsdelivr.net的加速地址
    emojiServer: proxy.$config.emojiServer || "https://fastly.jsdelivr.net/gh/afyi/sytalk/dist/emoji/",
    // 发说说框的背景图，默认是https://github.com/afyi/sytalk/dist/img/bgImg.webp
    bgImg: proxy.$config.bgImg || "https://fastly.jsdelivr.net/gh/afyi/sytalk/dist/img/bgImg.webp",
    // css的地址，默认也是jsdelivr加速过的github地址，可以更换为你自己的
    cssUrl: proxy.$config.cssUrl || "https://fastly.jsdelivr.net/gh/afyi/sytalk/dist/css/sytalk.min.css",
    // 说说框的默认占位文字
    shuoPla: proxy.$config.shuoPla || "请输入你的心情吧 ^_^~",
    // 发说说的个人头像，默认用的是cravatar.cn默认头像
    avatarUrl: proxy.$config.avatarUrl || "https://cravatar.cn/avatar/0?s=128",
    // 自定义不同设备的显示名称，可以定义一个或者多个
    osName: proxy.$config.osName || {android: "Android", macos: "MacOS", win: "Windows", linux: "Linux", other: "other"},
    // 是否开启点赞功能
    isZan: proxy.$config.isZan || 1,
    // 点赞间隔，单位：秒，点赞时间间隔，默认是1天，如果设置为0，则只要有记录就不会清除
    zanIntval: typeof proxy.$config.zanIntval == "undefined" ? 24 * 3600 : proxy.$config.zanIntval,  
    // 说说加载完成后回调
    onLoad: proxy.$config.onLoad || null,
    // 登陆后回调事件
    onLogin: proxy.$config.onLogin || null,
    // 发布说说后的回调事件
    onPublished: proxy.$config.onPublished || null
  }
  try {
    AV.init({
      appId: SYTALK_CONFIG.appId,
      appKey: SYTALK_CONFIG.appKey,
      serverURL: SYTALK_CONFIG.serverURL
    });
    console.log(AV);
  } catch(e: any) {
    console.log("这里是av初始化失败!");
    console.log(SYTALK_CONFIG);
    console.log(e.message);
  }
  // const browser = Bowser.getParser(window.navigator.userAgent);
  // console.log(browser);

  // const converter = new showdown.Converter() ;
  // console.log(converter.makeHtml('# hello, markdown!'));

  // 这里让顶部的welcome不显示
  const loading = ref(false);

  function change() {
    loading.value = !loading.value;
  }

  // 点击返回值 
  const handleIncrease = (...args: Array<any>) => {
    console.log(args);
    console.log("这里调用了这个事件");
  }
</script>