
// 0. ひも付きチェック
// alert(1111);


// 1.商品情報の出し分けのための配列を定義

// var object = {"image":"null","title":"null","detail":"null"}; の構造になっています。

var object_itemlist= [
 {"image":'img/st_1.jpeg',"title":"上品見え2wayキャミワンピース","detail":"胸元のVカットと上品見えする細ストライプ柄がストレートタイプにぴったりの1着。華奢なストラップや深めのスリットなど、ドキッとする女性らしさも演出。ストレッチ性がありながらも薄すぎない生地感だから、レイヤードしてももたつかず◎。"},
 {"image":'img/st_2.jpeg',"title":"トレンドライクハーフパンツ","detail":"トレンドのハーフパンツをストレートさんが取り入れるなら、こちらのラインナップ。カジュアル見えする丈ながらも、センタープレスが入りかっちり見えるのがポイントです。トレンドムードたっぷりのデザインで快適にはける高機能素材に注目。"},
 {"image":'img/st_3.jpeg',"title":"クリアツイルコクーンパンツ","detail":"ベーシックで使い回しの効くテーパードパンツ。広がりすぎないコクーンシルエットやフェイクレザーで、定番ながらも遊びを加えるのがポイントです。NOBLEのジョガーパンツは次のシーズンを見据えたフェイクレザーをレコメンド。見た目に対して軽くて柔らかな素材の、リラックスした履き心地が◎。"},
 {"image":'img/st_4.jpeg',"title":"センタープレスドビーパンツ","detail":"センタープレス入りで脚にフィットするフレアシルエットは、まさにストレートタイプのための美脚パンツ！トップス次第でオン＆オフともに活躍すること間違いなしです。ドライな肌触りの清涼素材なら、真夏の今からヘビロテできそう。"},
 {"image":'img/st_5.jpeg',"title":"ローフリルスリーブワンピース","detail":"ダボっとした着こなしにまとまりがちな長袖ワンピースはスタイルにメリハリをつけて。てろっとした素材のVネック＆コクーンシルエットで、ボディラインに沿ったスッキリ感を演出。１枚で上品にまとまるから、オンにもオフにも活躍すること間違いなし。"},
 {"image":'img/st_6.jpeg',"title":"絶妙バランスフレアドレス","detail":"シンプルなフレアワンピースは、トレンド感もありつつ広がりすぎない絶妙なバランスがおすすめ。スッキリしたトップに対して裾がエレガントに広がるシルエットだから、デイリーコーデを素敵に格上げしてくれます。"},
 {"image":'img/st_7.jpeg',"title":"ウェザーリバーシブルステンカラーコート","detail":"ステンカラーコートは、袖からのぞくチェック柄に注目。ストレートタイプはどうしてもデザインがシンプルになりがちなので、ワンポイントで遊びを加えるのもおすすめです。ハリのある素材が上質感もあり、チェック柄をメインにも着られるリバーシブル仕様なのが嬉しい。"},
 {"image":'img/st_8.jpeg',"title":"フーデットブルゾン","detail":"ボリューミーなブルゾンは着膨れしやすいストレートタイプ。なるべくボリュームをおさえたIラインで、表面のデザインも少なめの方がすっきりと好印象に。気軽に羽織れて、大人の品も漂うゴールドのパーツがキレイめなムードもアップ。"},
 {"image":'img/st_9.jpeg',"title":"コクーンミドルコート","detail":"今季おさえておきたいミドル丈のアウターは、シンプルなコクーンコートをチョイス。ベーシックなデザインをおさえつつもドロップショルダーなど、トレンド感のあるサイジングがポイントです。インナーを選ばないノーカラー仕立てなのですっきり着られておすすめ。"},
 {"image":'img/st_10.jpeg',"title":"メタルボタンダブルブレストジャケット","detail":"シックなコーデの似合うストレートタイプの鉄板アイテムであるジャケット。Vゾーンが広めで、オーバーサイズ過ぎないすっきりとしたIラインシルエットがおすすめです。この秋冬トレンドのトラッドムードに最適な、金ボタンのネイビーブレザーをカジュアルに着こなすのが気分。"},
 {"image":'img/wv_1.jpeg',"title":"華やかカラーの華奢見えワンピ","detail":"ウェーブタイプの華奢さを引き立ててくれるキャミワンピース。こっくり秋カラーのサテンワンピースなら、今からロングシーズン活躍します。1枚で着るときはアクセサリーなどで首元にポイントをおいて。薄手のインナーとのレイヤードスタイルもおすすめです。"},
 {"image":'img/wv_2.jpeg',"title":"こっくり秋カラーのサテンワンピース","detail":"ウェーブタイプの華奢さを引き立ててくれるキャミワンピース。こっくり秋カラーのサテンワンピースなら、今からロングシーズン活躍します。1枚で着るときはアクセサリーなどで首元にポイントをおいて。薄手のインナーとのレイヤードスタイルもおすすめです。"},
 {"image":'img/wv_3.jpeg',"title":"Dramaticな切替ワンピース","detail":"ストンと落ち感のあるシンプルなキャミワンピはもちろん、ギャザーで切り替えたドレッシーなワンピースも◎。分厚くなりすぎない薄手の素材感がポイントです。ロゴTシャツやスニーカーなど、カジュアルにハズしたコーデにまとめて。"},
 {"image":'img/wv_4.jpeg',"title":"落ち感ソフトレザーワンピ","detail":"ほんのりツヤ感のあるフェイクスエードも、ウェーブタイプがお得意の素材の1つ。デコルテの開きが控えめなデザインが今どき。自宅で洗えるイージーケアなのも嬉しいポイント。シンプルトップスを重ねるだけでワンランク上の着こなしに。"},
 {"image":'img/wv_5.jpeg',"title":"マーメイドリブニットワンピ","detail":"身体にフィットするニットワンピースはウェーブタイプだからこそ着こなせるアイテム。裾にかけて広がるフレアやマーメイドシルエットが、さらに女性らしさを引き立ててくれます。"},
 {"image":'img/wv_6.jpeg',"title":"落ち感フリルシャツワンピ","detail":"かっちり見えするシャツワンピースも、テロっとした素材感と襟のフリルならウェーブさんにお似合い。オケージョン対応にもぴったりなクラシカルなブラックワンピースは、フェミニンすぎるアイテムが苦手な方にもおすすめです。"},
 {"image":'img/wv_7.jpeg',"title":"新鮮ツイードポプリンパンツ","detail":"デニムなどのカジュアル素材の多いショート・ハーフパンツですが、ウェーブさんにはツイードなどの華やかな素材がおすすめ。ジャケットとのセットアップスタイルは、ウェーブタイプだからこそ似合うコーデです。一気に秋のムードを醸せるショートパンツは、カジュアル合わせで遊びを効かせても◎。"},
 {"image":'img/wv_8.jpeg',"title":"モチーフプリントクラシックパンツ","detail":"軽い素材のイージーパンツがウェーブタイプにおすすめ。柄は小さめでコントラストの弱いものを選んで。オリジナルプリントパンツは、コーデに馴染みの良い小ぶりな柄。シルクのような光沢が、上質感も演出してくれます。"},
 {"image":'img/wv_9.jpeg',"title":"クリンクルチェックイージーパンツ","detail":"ウェーブタイプらしいすっきりとしたシルエットがポイント。レディにもカジュアルにも着れるギンガムチェックがウェーブタイプによく似合います。サイドのパイピングがアクセントのイージーパンツで、大人可愛いコーデを楽しんで。"},
 {"image":'img/wv_10.jpeg',"title":"大人可愛いスッキリ見えテーパード","detail":"テーパードパンツは足首をすっきりと見せてくれるおすすめのシルエット。ウェーブタイプにはかっちりとしたデザインより、ストレッチが効いた柔らかい素材がおすすめです。ウエストゴムなのも嬉しいポイント。"},
 {"image":'img/nt_1.jpeg',"title":"ボタンジレワンピ","detail":"ワンピースとしてもジレとしても着られるジャンパースカートは、オーバーな着こなしが得意なナチュラルタイプにピッタリ！夏コーデにプラスオンするだけで簡単に季節を更新。"},
 {"image":'img/nt_2.jpeg',"title":"64クロスタックフレアスカート","detail":"スカートはロング丈でボリュームのあるデザインのものがおすすめ。チュールなどの甘すぎる素材や、ひざ丈以上のアイテムは避けた方がベターです。ハリ感のある素材のマキシフレアスカートは、黒だけどドラマティックで華やかなムードたっぷり。"},
 {"image":'img/nt_3.jpeg',"title":"ダブルブレスドツーピース","detail":"リラックス感のあるコーデが得意なナチュラルタイプにはややオーバーサイズなパンツのセットアップがおすすめ。ほどよいラフさも漂うリネン素材のマニッシュなデザインは、ありそうでないダスティーブルーがさらにお洒落指数をアップ。オケージョンのきちんと感も出つつ、こなれ感のあるコーディネートに。"},
 {"image":'img/nt_4.jpeg',"title":"＆NAVY コットンナイロンオーバーラップコート","detail":"ぴったりとしたサイズ感よりもややオーバーめの着こなしの方がこなれて見えるナチュラルタイプ。ベーシックなデザインでも、丈が長めでゆとりのあるサイズ感を選ぶことで洗練されて見えます。オケージョン対応に必須なキチンと感に加えて、洒落たこなれ感も漂うゆるめなハンサムシルエットがお洒落。"},
 {"image":'img/nt_5.jpeg',"title":"ホワイトツイードジャケット","detail":"カジュアルなアイテムを連想しがちなナチュラルタイプですが、ツイードなどのキレイめアイテムもグッド。今季マストで持っておきたいツイードジャケットは、ラフに羽織れるデザインが旬。着丈が短いとチグハグな印象になってしまうので、ややオーバーサイズをチョイスするのがおすすめです。"},
 {"image":'img/nt_6.jpeg',"title":"ハイウエストチノ","detail":"ナチュラルタイプに似合うのは、スカート見えするようなたっぷりとしたワイドパンツ。Tシャツと合わせたカジュアルなコーデがおすすめです。キレイめ派さんはタック入りをチョイスして。ステッチがアクセントのバギーパンツは、マニッシュも香るドラマティックなシルエットが魅力。"},
 {"image":'img/nt_7.jpeg',"title":"タックバギーデニム","detail":"定番のデニムも、ナチュラルタイプならさまざまなスタイルを選べます！ポイントは、ピッタリとしたスキニーは避けてバギーやワイドシルエットなどのラフなもの。クラッシュ加工もおすすめです！トレンドムードたっぷりのローライズが◎。"},
 {"image":'img/nt_8.jpeg',"title":"カルゼオーバージャンパースカート","detail":"カジュアル派のナチュラルさんには、ジャンパースカートもおすすめ。大人カジュアルにぴったりなデニムサロペットは、シックなブラックがグッド。元々生地のしっかりしたタイプのものが多いため、デザインを選ばず着こなせます！"},
 {"image":'img/nt_9.jpeg',"title":"ステンスタンドネックブルゾン","detail":"カジュアルコーデに欠かせないMA-1は、あえてダボっとしたシルエットで着こなすのがおすすめ。定番のミリタリーテイストなデザインはもちろん、サテン地スタンドネックなどモードなデザインもOK。女っぽコーデに羽織って辛さを足し算して。"},
 {"image":'img/nt_10.jpeg',"title":"デシンマキシティアードワンピ","detail":"ラフなアイテムの多いナチュラルタイプですが、細かすぎなければフリル使いもOK。マキシ丈のティアードやマーメイドワンピースは甘くなりすぎず、絶妙なバランスになりおすすめです。表情豊かなフリンジジャカードドレスなら、まわりと差がつくワンピスタイルに。"}
];

//出力チェック
// console.log(object_itemlist[10].title);



// 2.以下にて乱数を生成・商品情報の配列リストを指定して情報をひっぱってくる処理


// 2-B.変数リストは１つで中の数字を骨格別に分ける方法（後の処理が楽）

// documentが読み込まれた時点から処理がスタートする合図
// fav処理のため即時関数を廃止（追記）


//2-B-1. 場合分けのためにまずパラメーターを取ってくる（判定する）準備

var url = location.href;
var paramArray = [];
urlsplt = url.split("?");
parsplt = urlsplt[1].split("&");

for ( i = 0; i < parsplt.length; i++ ) {
param = parsplt[i].split("=");
paramArray.push(param[0]);
paramArray[param[0]] = param[1];
}

//2.B-2. min以上max以下の整数値の乱数を返す準備

const pickN = (min, max, n) => {
  const list = new Array(max-min+1).fill().map((_, i) => i + min);
  const ret = [];
  while(n--) {
    const rand = Math.floor(Math.random() * (list.length + 1)) - 1;
    ret.push(...list.splice(rand, 1))
  }
  return ret;
}

//2.B-3.取ってきたパラメーターの値ごとにif分岐で文字を表示するためのハコ

var X = null; //文字を表示するための箱
let Y = ['Straight', 'Wave', 'Natural','Unknown']; //文字を表示するための配列

//2-B-4.取ってきたパラメーターの値ごとにif分岐で数字を割り付けるための箱

var list = null;

//2-B-5.取ってきたパラメーターの値ごとにif分岐で数字をXとlistに入れていく

if ( paramArray["id"] == "Straight") { //idにstraightというパラメーターを持つ場合の処理
  var list = pickN(0, 9, 3); //数字を格納する配列リストlistに0-9の数字の中から3つ入れる
  var X = 0; //ハコにストレートの場合は0と定義
  // console.log(list); //ストレートを選んだ人向けのリストを出力（一応）

  } else if ( paramArray["id"] == "Wave") { //idにwaveというパラメーターを持つ場合の処理
  var list = pickN(10, 19, 3); //数字を格納する配列リストlistに10-19の数字の中から3つ入れる
  var X = 1; //ハコにWVの場合は1と定義

  } else if ( paramArray["id"] == "Natural") { //以下natural向け
    var list = pickN(20, 29, 3);
    var X = 2;  
    
  } else if ( paramArray["id"] == "unknown") { //以下骨格不明向け
    var list = pickN(0, 29, 3); 
    var X = 3;
};

//出力チェック
console.log(list); 

//2-B-6.リストに３つ入った数字をそれぞれnum1/num2/num3に置き換える（object_itemlistのインデックス番号を指定するため）

var num1 = list[0] //list_numのうち1つめの番号
var num2 = list[1] //list_numのうち2つめの番号
var num3 = list[2] //list_numのうち3つめの番号


//2-B-7.選んだ骨格に合わせてテキストを出し分け（タイトル用）

$(".kokkaku_type_eng").text(Y[X])

//2-B-7.選んだ骨格に合わせて商品情報を出し分け（メインコンテンツ用）
$("#li_item_image_1").attr("src",object_itemlist[num1].image)
$("#li_item_title_1").text(object_itemlist[num1].title)
$("#li_item_detail_1").text(object_itemlist[num1].detail)
$("#li_item_image_2").attr("src",object_itemlist[num2].image)
$("#li_item_title_2").text(object_itemlist[num2].title)
$("#li_item_detail_2").text(object_itemlist[num2].detail)
$("#li_item_image_3").attr("src",object_itemlist[num3].image)
$("#li_item_title_3").text(object_itemlist[num3].title)
$("#li_item_detail_3").text(object_itemlist[num3].detail)

//以上！！！！
//★★ここまでのコードは、一番コンパクトにまとまったバージョン！★★





//＝＝＝＝＝＝ここから保存（localStorage関連）を追記＝＝＝＝＝＝＝



// favマークを押したときにどのアイテムが押されたか判別【不要】


// $("#fav_1").on("click",function(){
//   count = 0;
// });
// $("#fav_2").on("click",function(){
//   count = 1;
// });
// $("#fav_3").on("click",function(){
//   count = 2;
// });

// $("#fav_1").on("click",function(){
//   console.log("商品番号" + num1);
// });

// $("#fav_2").on("click",function(){
//   console.log("商品番号" + num2);
// });

// $("#fav_3").on("click",function(){
//   console.log("商品番号" + num3);
// });




//①最初にページを読み込んだ状態でローカルストレージにあるものを表示

for( let iii = 0; iii < localStorage.length; iii++ ){
  let key = localStorage.key(iii);
  let value = localStorage.getItem(key);



  let html = `
  <tr>
    <td>${key}</td> 
    <td>${value}</td>
    <td>画像</td> 
    <td>商品名</td>
  </tr>  `; //値を埋め込んでいる（テンプレートリテラル）

  if ( value === "ON" ){ //もしvalueがONなら
  $("#list").append(html); //リストの内容を表示（繰り返し処理でONの数だけアペンドしつづける）
  }
};



//画像を表示しようとしたバージョン（未完）


// for( let iii = 0; iii < localStorage.length; iii++ ){
//   let key = localStorage.key(iii);
//   let value = localStorage.getItem(key);

//   let item = list[iii]

//   if ( value === "ON" ){ //もしvalueがONなら取ってきて表示

//   let html = `
//   <dd>
//     <img src="${object_itemlist[item].image}" alt="">
//   </dd>
//   <dt> ${object_itemlist[item].title} </dt>
//   `; //値を埋め込んでいる（テンプレートリテラル）

//   $("#fav_list").append(html); //リストの内容を表示
//   }

//   //ストレージにあるKeyの数だけこここまで繰り返し

//   $(".fav_test").on("click",function(){
//     $("fav_list").reload;
//   });
// };




//②押されたアイテムのお気に入りフラグをONにする準備

let flag_1 = "OFF"; //変数flagにONかOFFかを持たせる（初期設定は全部OFF）
let flagnum_1 = 0; //フラグに何回押されたかを数えさせる

//③フラグをクリックするたびに加算する

$("#fav_1").on("click",function(){
  flagnum_1++ ; //ボタンを押すたびにフラグに加算

  if(flagnum_1 % 2 !== 0 ){ //フラグが奇数ならお気に入りON
    flag_1 = "ON";
  } else if ( flagnum_1 % 2 == 0) {//フラグが偶数ならお気に入りOFF
    flag_1 = "OFF";
  }

  console.log(flag_1);//フラグのON/OFF状態を出力
  // console.log(flagnum_1);//フラグの押された回数を出力

  //④グラフの状態をローカルストレージに保存する
  localStorage.setItem("商品番号" + num1,flag_1);

});


//②押されたアイテムのお気に入りフラグをONにする準備

let flag_2 = "OFF"; //変数flagにONかOFFかを持たせる（初期設定は全部OFF）
let flagnum_2 = 0; //フラグに何回押されたかを数えさせる

$("#fav_2").on("click",function(){
  flagnum_2 ++ ; //ボタンを押すたびにフラグに加算

  if(flagnum_2 % 2 !== 0 ){ //フラグが奇数ならお気に入りON
    flag_2 = "ON"
  } else if ( flagnum_2 % 2 == 0) {//フラグが偶数ならお気に入りOFF
    flag_2 = "OFF"
  }

  console.log(flag_2);//フラグのON/OFF状態を出力

  //④グラフの状態をローカルストレージに保存する
  localStorage.setItem("商品番号" + num2,flag_2);

});




let flag_3 = "OFF"; //変数flagにONかOFFかを持たせる（初期設定は全部OFF）
let flagnum_3 = 0; //フラグに何回押されたかを数えさせる

$("#fav_3").on("click",function(){
  flagnum_3++ ; //ボタンを押すたびにフラグに加算

  if(flagnum_3 % 2 !== 0 ){ //フラグが奇数ならお気に入りON
    flag_3 = "ON"
  } else if ( flagnum_3 % 2 == 0) {//フラグが偶数ならお気に入りOFF
    flag_3 = "OFF"
  }

  console.log(flag_3);//フラグのON/OFF状態を出力

  //④グラフの状態をローカルストレージに保存する
  localStorage.setItem("商品番号" + num3,flag_3);

});




//お気に入りリストを出力する




// //②新たにクリックで登録・除外された場合の処理

// $(".fav_test").on("click",function(){

//   for( let iii = 0; iii < localStorage.length; iii++ ){
//     let key = localStorage.key(iii);
//     let value = localStorage.getItem(key);

//     let html = `
//     <tr>
//       <th>${key}</th> 
//       <td>${value}</td>
//     </tr>  `; //値を埋め込んでいる（テンプレートリテラル）

//     if ( value === "ON" ){ //もしvalueをONに変更したなら取ってきて追加表示
//       $("#list").append(html); //リストの内容を表示

//     } else if ( value === "OFF" ){ //もしvalueをOFFに変更したなら削除
//       $("#list").remove(html);
//       // $("#list").append(html); //残ったリストの内容（ONのみ）を再表示      
//     }

//   };

// });


// $(".fav_test").on("click",function(){

//   for( let iii = 0; iii < localStorage.length; iii++ ){
//     let iii = 0;
//     let key = localStorage.key(iii);
//     let value = localStorage.getItem(key);

//     let html = `
//       <tr>
//       <td>${key}</td> 
//       <td>${value}</td>
//       <td>画像</td> 
//       <td>商品名</td>
//       </tr>  `; //値を埋め込んでいる（テンプレートリテラル）

//     if ( value === "ON" ){ //もしvalueをONに変更したなら取ってきて追加表示
//       $("#fav_list").append(html); //リストの内容を表示

//     // } else if ( value === "OFF" ){ //もしvalueをOFFに変更したなら削除
//     //   $("#fav_list").remove(html);
//       // $("#list").append(html); //残ったリストの内容（ONのみ）を再表示      
//     }

//   };

// });



//ONだけソートする

//→この方法がわからなかったため、「全件検索→ONだけソート」ではなく「１件ずつ検索→ONかOFFか条件分岐→ONならリストに表示→これを全件繰り返す」というアプローチに変更


// //出力した後にクリックされても常に最新にする

// $(".fav_test").on("click",function(){
//   list.location.reload();
// });




