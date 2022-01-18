
var vm = new Vue({
  el: '#cal',
  data: function(){
    return {
      price_BF: 0,
      price_lunch: 0,
      price_dinner: 0,

      timeValueH: 0,
      time_BF: 0,
      time_lunch: 0,
      time_dinner: 0,

      
      energyCost_BF: 1,
      enerOptions_BF: [
        { text: '疲労なし', value: 1 },
        { text: '少し疲れた', value: 1.2 },
        { text: '疲れた', value: 1.4 }
      ],
      energyCost_lunch: 1,
      enerOptions_lunch: [
        { text: '疲労なし', value: 1 },
        { text: '少し疲れた', value: 1.2 },
        { text: '疲れた', value: 1.4 }
      ],
      energyCost_dinner: 1,
      enerOptions_dinner: [
        { text: '疲労なし', value: 1 },
        { text: '少し疲れた', value: 1.2 },
        { text: '疲れた', value: 1.4 }
      ],
      
      selectedNutri1_BF: 0,
      selectedNutri2_BF: 0,
      selectedNutri3_BF: 0,
      selectedNutri4_BF: 0,
      selectedNutri5_BF: 0,
      selectedNutri1_lunch: 0,
      selectedNutri2_lunch: 0,
      selectedNutri3_lunch: 0,
      selectedNutri4_lunch: 0,
      selectedNutri5_lunch: 0,
      selectedNutri1_dinner: 0,
      selectedNutri2_dinner: 0,
      selectedNutri3_dinner: 0,
      selectedNutri4_dinner: 0,
      selectedNutri5_dinner: 0,
      
      satisfaction_BF: 1,
      satisOptions_BF: [
        { text: '不満足', value: 0.8 },
        { text: '普通', value: 1 },
        { text: '満足', value: 1.2 }
      ],
      satisfaction_lunch: 1,
      satisOptions_lunch: [
        { text: '不満足', value: 0.8 },
        { text: '普通', value: 1 },
        { text: '満足', value: 1.2 }
      ],
      satisfaction_dinner: 1,
      satisOptions_dinner: [
        { text: '不満足', value: 0.8 },
        { text: '普通', value: 1 },
        { text: '満足', value: 1.2 }
      ],

      timeCostValue: 0,
      nutriTotalValue: 0,
      totalScoreValue: 0,
    };
  },

  computed: {
    // 費用合計
    priceTotal: function() {
      return (this.price_BF + this.price_lunch + this.price_dinner)
    },
    // 分あたり時間価値
    timeValueM: function() {
      return (this.timeValueH / 60)
    },
    // 分あたり時間価値（四捨五入）
    timeValueMRound: function() {
      return Math.round(this.timeValueM)
    },
    // 食事別時間コスト
    timeCost_BF: function() {
      return (this.time_BF * this.timeValueM)
    },
    timeCost_lunch: function() {
      return (this.time_lunch * this.timeValueM)
    },
    timeCost_dinner: function() {
      return (this.time_dinner * this.timeValueM)
    },
    // 食事別時間コスト（四捨五入）
    timeCost_BFRound: function() {
      return Math.round(this.timeCost_BF)
    },
    timeCost_lunchRound: function() {
      return Math.round(this.timeCost_lunch)
    },
    timeCost_dinnerRound: function() {
      return Math.round(this.timeCost_dinner)
    },
    // 時間コスト合計
    timeCostTotal: function() {
      return (this.timeCost_BF + this.timeCost_lunch + this.timeCost_dinner)
    },
    // 時間コスト（100倍）
    timeCostTHundredfold: function() {
      return (this.timeCostTotal * 100)
    },
    // 時間コスト（四捨五入）
    timeCostTHRound: function() {
      return Math.round(this.timeCostTHundredfold)
    },
    // 時間コスト（1/100倍）
    timeCostTHRDivHnd: function() {
      return (this.timeCostTHRound / 100)
    },
    // 心体コスト平均
    energyCostAVG: function() {
      return ((this.energyCost_BF + this.energyCost_lunch + this.energyCost_dinner) / 3)
    },
    // 心体コスト（100倍）
    energyCostAVGHundredfold: function() {
      return (this.energyCostAVG * 100)
    },
    // 心体コスト平均（四捨五入）
    energyCostAVGHRound: function() {
      return Math.round(this.energyCostAVGHundredfold)
    },
    // 心体コスト平均（1/100倍）
    energyCostAVGHRDivHnd: function() {
      return (this.energyCostAVGHRound / 100)
    },
    // 料理区分別摂取量
    nutri1Total: function() {
      return (this.selectedNutri1_BF + this.selectedNutri1_lunch + this.selectedNutri1_dinner)
    },
    nutri2Total: function() {
      return (this.selectedNutri2_BF + this.selectedNutri2_lunch + this.selectedNutri2_dinner)
    },
    nutri3Total: function() {
      return (this.selectedNutri3_BF + this.selectedNutri3_lunch + this.selectedNutri3_dinner)
    },
    nutri4Total: function() {
      return (this.selectedNutri4_BF + this.selectedNutri4_lunch + this.selectedNutri4_dinner)
    },
    nutri5Total: function() {
      return (this.selectedNutri5_BF + this.selectedNutri5_lunch + this.selectedNutri5_dinner)
    },
    // 料理区分別スコア
    nutri1Score: function() {
      return ((this.nutri1Total / 5) * 10)
    },
    nutri2Score: function() {
      return ((this.nutri2Total / 5) * 10)
    },
    nutri3Score: function() {
      return ((this.nutri3Total / 3) * 10)
    },
    nutri4Score: function() {
      return ((this.nutri4Total / 2) * 10)
    },
    nutri5Score: function() {
      return ((this.nutri5Total / 2) * 10)
    },
    // 栄養バランススコア
    nutriScoreTotal: function() {
      return (this.nutri1Score + this.nutri2Score + this.nutri3Score + this.nutri4Score + this.nutri5Score)
    },
    // 栄養バランススコア（100倍）
    nutriScoreTHundredfold: function() {
      return (this.nutriScoreTotal * 100)
    },
    //　栄養バランススコア（四捨五入）
    nutriScoreTHRound: function() {
      return Math.round(this.nutriScoreTHundredfold)
    },
    // 栄養バランススコア（1/100倍）
    nutriScoreTHRDivHnd:function() {
      return (this.nutriScoreTHRound / 100)
    },
    // 満足度平均
    satisAVG: function() {
      return ((this.satisfaction_BF + this.satisfaction_lunch + this.satisfaction_dinner) / 3)
    },
    // 満足度（100倍）
    satisAVGHundredfold: function() {
      return (this.satisAVG * 100)
    },
    // 満足度（四捨五入）
    satisAVGHRound: function() {
      return Math.round(this.satisAVGHundredfold)
    },
    // 満足度（1/100倍）
    satisAVGHRDivHnd: function() {
      return (this.satisAVGHRound / 100)
    },
    // トータルスコア
    totalScore: function() {
      return (((this.priceTotal + this.timeCostTotal) * this.energyCostAVG) / (this.nutriScoreTotal * this.satisAVG))
    },
    // トータルスコア（四捨五入）
    totalScoreRound: function() {
      return Math.round(this.totalScore)
    },
  },

  methods: {
    changeScoreValue: function() {
      this.totalScoreValue = this.totalScoreRound ;
    },
  },

})


function popupEditor() {
  var popup = document.getElementById('js-popup');
  if(!popup) return;

  var blackBg = document.getElementById('js-black-bg');
  var closeBtn = document.getElementById('js-close-btn');
  var showBtn = document.getElementById('js-show-popup');
  var addCard = document.getElementById('addCard')

  closePopUp(blackBg);
  closePopUp(closeBtn);
  closePopUp(showBtn);
  closePopUp(addCard);
  function closePopUp(elem) {
    if(!elem) return;
    elem.addEventListener('click', function() {
      popup.classList.toggle('is-show');
    });
  }
}
popupEditor();
