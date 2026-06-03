/**
 * 星河漫游 · 配置文件
 * 修改这里的内容来个性化你的星河
 */
const CONFIG = {
  // 她的名字（会出现在星座文案和结尾彩蛋中）
  name: '小云',

  // 结尾彩蛋大标题（{name} 会被替换为上面的名字）
  finaleMessage: '{name}，你是我眼中最亮的星',

  // 副标题（彩蛋页小字）
  finaleSubtitle: '六一儿童节快乐 · 永远做我的小朋友',

  // 星座列表（5-7个，每个星座包含名称和描述文案）
  // 文案中的 {name} 会被替换
  constellations: [
    {
      name: '初见',
      text: '那天遇见了{name}，\n整个星河都黯然失色。',
    },
    {
      name: '温柔',
      text: '{name}的笑容，\n比极光还要温柔几分。',
    },
    {
      name: '陪伴',
      text: '想和{name}一起，\n看遍宇宙所有的星光。',
    },
    {
      name: '唯一',
      text: '在亿万星辰里，\n{name}是我唯一想遇见的那颗。',
    },
    {
      name: '永恒',
      text: '时间会流逝，星辰会熄灭，\n但我对{name}的喜欢永远不会。',
    },
  ],

  // ===== 以下为技术参数，一般不需要修改 =====

  // 粒子数量（移动端自动减半）
  particleCount: 2000,

  // 拖尾长度
  trailLength: 30,

  // 星座发现半径（屏幕空间，值越小越难触发）
  gravityRadius: 140,

  // 星座形成持续时间（秒）
  formationDuration: 2.5,

  // 星座展示持续时间（秒）
  displayDuration: 8,

  // Bloom 辉光强度
  bloomStrength: 1.3,
};
