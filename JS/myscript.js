
const button = document.querySelector(".fixed-button");
const maintitle = document.querySelector(".maintitle");
const topmenu = document.querySelector(".header");
window.addEventListener("scroll", function(){
    if(document.documentElement.scrollTop > 50){
        button.style.right = "10px";
        maintitle.style.fontSize = "0";
        topmenu.style.top = "0";
    }else{
        button.style.right = "-100px";
        maintitle.style.fontSize = "70px";
        topmenu.style.top = "-30px";
    }
});
function scrollToTop(){
    window.scrollTo({top: 0, behavior: "smooth"});
}

const news2024 = document.getElementById('news2024');
const news2022 = document.getElementById('news2022');
const news2020 = document.getElementById('news2020');
window.onload = function(){ 
    news2024.classList.add('show');
};
const newsyear = document.getElementsByName('newsyear');
newsyear.forEach(radio => {
    radio.addEventListener('change', function(){
        for(const radio of newsyear){
            if(radio.checked){
                switch(radio.value){
                    case "2024":
                        news2024.classList.add('show');
                        news2022.classList.remove('show');
                        news2020.classList.remove('show');
                        break;
                    case "2022":
                        news2022.classList.add('show');
                        news2024.classList.remove('show');
                        news2020.classList.remove('show');
                        break;
                    case "2020":
                        news2020.classList.add('show');
                        news2022.classList.remove('show');
                        news2024.classList.remove('show');
                }
            }
            if(news2020.classList.show == false){
                news2020.style.display = "none";
            }
            if(news2022.classList.show == false){
                news2022.style.display = "none";
            }
            if(news2024.classList.show == false){
                news2024.style.display = "none";    
                }
        }
    });
});
var china_map = echarts.init(document.getElementById("china_map"), 'infographic');
            var mydata = [{
                    name: '北京',value: 89000,
                    top1:'曼玲粥·现熬粥(六道口店)',
                    top2:'拌将·干拌麻辣烫(第8档口星选闪电美食城)',
                    top3:'刘文祥麻辣烫●麻辣拌●炸串(对外经贸店)'
                }, {
                    name: '天津',value: 71000,
                    top1: '嘎嘎香东北老饭盒(解放北路店)',
top2: '小谷姐姐麻辣拌●麻辣烫(白堤路店)',
top3: '米村拌饭(物美华苑店)'

                },{
                    name: '上海',value: 90000,
                    top1: '拌将·干拌麻辣烫(东川路店)',
top2: '塔斯汀·中国汉堡(交大华师大店)',
top3: '拌将·干拌麻辣烫(凯旋路店)'

                }, {
                    name: '重庆',value: 35000,
                    top1: '擂饭(重庆沙坪坝店)',
top2: '十八梯邓板凳面(十八梯店)',
top3: '赵酸酸老坛四鲜米线(沙坪坝店)'

                },{
                    name: '河北',value: 32000,
                    top1: '放心食堂·小份菜',
top2: '嘎嘎好吃·东北老饭盒(长安店)',
top3: '放心食堂·小碗菜八宝粥(翟营满大街店)'

                }, {
                    name: '河南',value: 25000,
                    top1: '洛阳马坡烧烤(放心吃店)',
top2: '炒方便面是招牌·炒饭·炒面·炒粉(郑州店)',
top3: '三米粥铺(郑东店)'

                },{
                    name: '云南',value: 17100,
                    top1: '华莱士·全鸡汉堡(呈贡大学城店)',
top2: '袁记云饺(仕林街店)',
top3: '疆小乐·新疆炒米粉(昆明呈贡店)'

                }, {
                    name: '辽宁',value: 34000,
                    top1: '杨妈妈粥店(盛京医院店)',
top2: '三五瓶烧烤店.海鲜.小龙虾(铁西旗舰店)',
top3: '杨妈妈粥店(太原街店旗舰店)'

                },{
                    name: '黑龙江',value: 50000,
                    top1: '汤火功夫麻辣烫·麻辣拌(闽江店)',
top2: '江川右·一家有态度的粥店(中央大街店)',
top3: '一粥七天健康粥馆(哈西总店)'

                }, {
                    name: '湖南',value: 102000,
                    top1: '正宗桂林特色卤粉(长沙总店)',
top2: '湘府私厨·地道湘菜',
top3: '浏阳蒸菜现炒小碗菜'

                },{
                    name: '安徽',value: 87000,
                    top1: '老乡鸡(望江西路店)',
top2: '老乡鸡(青阳南路店)',
top3: '隆江猪脚饭(桐城路店)'

                }, {
                    name: '山东',value: 33000,
                    top1: '桥下把子肉(山大南路店)',
top2: '嘎嘎香东北老饭盒(世茂天城店)',
top3: '嘎嘎香东北老饭盒(山大路店)'

                },{
                    name: '新疆', value: 3044,
                    top1: '80.90年代记忆烧烤(乌市店)',
top2: '辣风芹酱香米粉(胜利路店)',
top3: '淄博烧烤-相约乌市(沙依巴克区旗舰店)'

                }, {
                    name: '江苏',value: 63000,
                    top1: '御宅族烧烤(炭火烧烤TOP必吃榜店)',
top2: '小辣椒湖南米粉(珠江路总店)',
top3: '三米粥铺(新街口店)'

                },{
                    name: '浙江', value: 134000,
                    top1: '周际老师傅烧烤(庆春路店)',
top2: '老桂林米粉(滨江总店)',
top3: '膳当家黄焖鸡米饭(嘉悦广场店)'

                }, {
                    name: '江西',value: 39000,
                    top1: '杨记·老南昌拌粉拌面',
top2: '这家炒菜真的很好吃(红谷滩店)',
top3: '馋嘴·烤鸭饭(可送南师校内店)'

                },{
                    name: '湖北',value: 93000,
                    top1: '这一碗·川湘菜小碗菜(石牌岭店)',
top2: '三米粥铺(南湖店)',
top3: '麦稻中式健康菜(武汉光谷店)'

                }, {
                    name: '广西',value: 20500,
                    top1: '蚝滋味.烧烤.小龙虾.田螺鸭脚煲',
top2: '老香港炸鸡(南宁店)',
top3: '金邕老友·老友粉·生料粉·渔粉(友爱店)'

                },{
                    name: '甘肃',value: 19900,
                    top1: '这一碗火爆小碗菜(城关店)',
top2: '舌尖疯狂·地道川菜馆(城关店)',
top3: '一粉一城新疆炒米粉(城关店)'

                }, {
                    name: '山西',value: 20200,
                    top1: '饭盒故事(太原二店)',
top2: '米村拌饭(太原吾悦广场店)',
top3: '塔斯汀·中国汉堡(千峰汇都商贸店)'

                },{
                    name: '内蒙古',value: 4700,
                    top1: '班长烧烤(一分吃串店)',
top2: '德克士(万锦店)',
top3: '苏氏牛肉面(秋实店)'

                }, {
                    name: '陕西',value: 52000,
                    top1: '江川右·一家有态度的粥店(立丰国际店)',
top2: '超享乐剁椒面(量子晨店)',
top3: '米村拌饭(西安立丰国际店)'

                },{
                    name: '吉林',value: 24400,
                    top1: '蜀王砂锅麻辣烫(红旗街店)',
top2: '盛宝粥店(朝阳路店)',
top3: '状元阁猪手烧烤烧鸽子'

                }, {
                    name: '福建',value: 54000,
                    top1: '串武门烧烤·小龙虾·生蚝·虾尾(上街店)',
                    top2: '黄金烤猪蹄(学生街店)',
                    top3: '塔斯汀·中国汉堡(正荣财富中心店)'
                },{
                    name: '贵州',value: 15860,
                    top1: '塔斯汀·中国汉堡(可进贵大店)',
top2: '回忆·奉天精炒老饭盒(可进贵大店)',
top3: '鸡祥物地锅小鲜鸡(可进贵大老朝阳店)'

                }, {
                    name: '广东',value: 63000,
                    top1: '亦晚老长沙烧烤·龙虾·海鲜(天河店)',
top2: '财记正宗隆江猪脚饭',
top3: '顺德猪杂粥·炒粉·肠粉(天河店)'

                },{
                    name: '青海', value: 3006,
                    top1: '堡王莱',
top2: '东北饺子馆',
top3: '柒子其水煮肉片米饭(青海大学店)'

                }, {
                    name: '西藏',value: 5800,
                    top1: '爆吼·山城市井菜(拉萨城关店)',
top2: '马尕五·新疆炒米粉·烧烤',
top3: '舌尖疯狂在成都(拉萨城西店)'

                },{
                    name: '四川', value: 80000,
                    top1: '李豆汤饭庄(东门大桥总店)',
                    top2: '年轻20年(银海中心店)',
                    top3: '陈氏烧烤(华阳总店)'

                }, {
                    name: '宁夏',value: 19400,
                    top1: '清真·佳美味吴忠秘制麻辣烫(银川总店)',
top2: '高原阿爸汆面馆·新疆拌面·清真食品',
top3: '尹辰牛肉面·新疆拉条子·清真食品(富宁街店)'

                },{
                    name: '海南',value: 31000,
                    top1: '阿梅快餐店',
top2: '潮琼记·潮汕牛肉店(八灶店)',
top3: '寻味师·包点·肠粉·粥·油条豆浆(海口店)'

                }, {
                    name: '台湾',value: 0,
                    top1: '无',
top2: '无',
top3: '无'

                },{
                    name: '香港',value: 0,
                    top1: '无',
top2: '无',
top3: '无'

                }, {
                    name: '澳门',value: 0,
                    top1: '无',
top2: '无',
top3: '无'

                }
            ];

            var option = {
                grid: {
                    top: '10%',
                    left: '10%',
                    right: '10%',
                    bottom: '10%',
                    containLabel: true
                },
                tooltip: {
                    trigger: 'item',
                    formatter: function(params) {
                        let title = '外卖订单量';
                        return '<div style="font-weight:bold">' + title + '</div>' +
                            '<div style="font-size:14px">' + params.name + ' : ' + params.value + '</div>' +
                            '<div style="font-size:14px">' + 'TOP1:' + params.data.top1 + '</div>' +
                            '<div style="font-size:14px">' + 'TOP2:' + params.data.top2 + '</div>' +
                            '<div style="font-size:14px">' + 'TOP3:' + params.data.top3 + '</div>';
                    }
                },
                visualMap: {
                    show: false,
                    x: 'left',
                    y: 'bottom',
                    splitList: [
                        { start: 0, end: 5000 },
                        { start: 5000, end: 10000 },
                        { start: 10000, end: 15000 },
                        { start: 15000, end: 20000 },
                        { start: 20000, end: 25000 },
                        { start: 25000, end: 30000 },
                        { start: 30000, end: 35000 },
                        { start: 35000, end: 40000 },
                        { start: 40000, end: 45000 },
                        { start: 45000, end: 50000 },
                        { start: 50000, end: 55000 },
                        { start: 55000, end: 60000 },
                        { start: 60000, end: 65000 },
                        { start: 65000, end: 70000 },
                        { start: 70000, end: 75000 },
                        { start: 75000, end: 80000 },
                        { start: 80000, end: 85000 },
                        { start: 85000, end: 90000 },
                        { start: 90000, end: 95000 },
                        { start: 95000, end: 100000 },
                        { start: 100000, end: 105000 },
                        { start: 105000, end: 110000 },
                        { start: 110000, end: 115000 },
                        { start: 115000, end: 120000 },
                        { start: 120000, end: 125000 },
                        { start: 125000, end: 130000 },
                        { start: 130000, end: 135000 },
                        { start: 135000, end: 140000 }
                    ],
                    color: [
                        '#2b662e', '#2f7a3a', '#328e46', '#36a352', '#3ab05e',
                        '#3db26b', '#40b878', '#44bc84', '#48c490', '#4cd59d',
                        '#50d6a9', '#54d5b4', '#58d3c0', '#5cd2cb', '#60d1d7',
                        '#64d0e2', '#68cee8', '#6cd8e8', '#70e3e8', '#74eef0',
                        '#78f3f6', '#7ef8f9', '#84f4f2', '#8af0f0', '#90ebeb',
                        '#96e7e7', '#9ce3e3', '#cbe5cc'
                    ]
                    
                    
                },
                series: [{
                    name: '外卖订单量',
                    type: 'map',
                    mapType: 'china',
                    roam: true,
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    data: mydata
                }]
            };
            china_map.setOption(option);
            const imageContainer = document.getElementById('imageContainer');
            const images = document.querySelectorAll('.images img'); 
            let currentIndex = 0;
            imageContainer.addEventListener('wheel', function(event) {
                event.preventDefault();
                if (event.deltaY > 0) {
                    currentIndex = (currentIndex + 1) % images.length;
                } else {
                    currentIndex = (currentIndex - 1 + images.length) % images.length;
                }
                imageContainer.style.transform = `translateX(-${currentIndex * 600}px)`; 
            });