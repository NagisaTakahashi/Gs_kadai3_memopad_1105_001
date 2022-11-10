
$(function(){ 
    var a = $('.modal_container');
    var b = $('.overlay');
    var c = $('.modal_open');
    var d = $('.modal_close');

    //OPENをクリックでモーダルを開く
    c.on('click',function(){
      a.fadeIn(1000);
    });
    
    //CLOSEをクリックでモーダルを閉じる
    d.on('click',function(){
      a.fadeOut();
    });
    
    //モーダルの周りをクリックで閉じる
    b.on('click',function(){
      a.fadeOut();
    });
  }
);





//★選んだ骨格により、画像表示と文字の切り替え

//★★おためしチェック
// $(function(){ 
//   $('#btn_st').on('click',function(){
//     console.log(1);
//   });
// });


let A = null; //変数Aを用意する

let B = [0,1,2,3]; //共通化するために配列Bに変数Aを入れる

//以下共通化した数字を各ボタンの押下と紐付け（定義）

$("#btn_st").on('click', function(){
  A = 0;
  // console.log(B[A]);
});

$("#btn_wv").on('click', function(){
  A = 1;
  // console.log(B[A]);
});

$("#btn_nt").on('click', function(){
  A = 2;
  // console.log(B[A]);
});

$("#btn_unkown").on('click', function(){
  A = 3;
  // console.log(B[A]);
});



//以下押されたボタンの番号により画像と文字を出し分け

let C = ['Straight', 'Wave', 'Natural','unknown'];
let D = ['ストレート', 'ウェーブ', 'ナチュラル','分からない'];
let E = ['img/girl_straight.png', 'img/girl_wave.png', 'img/girl_natural.png','img/girl_unknown.png'];


// 出し分け用の初期設定

$(".kokkaku_btn").on('click', function(){
  console.log(C[A]);
  $(".kokkaku_type_jpn").text(D[A]); //日本語表記したいので配列Dを使用（案内文内）
  $(".kokkaku_type_eng").text(C[A]); //英語表記したいので配列Cを使用(ボタン内)
  $("#kokkaku_card_img").attr('src', E[A]); //画像切替したいので配列Eを使用
});


//出し分け用の例外処理ボタン対応時の処理（上書きで再指定）

$(".kokkaku_btn").on('click', function(){
  console.log(C[A]);
  $("#message").text("Recoutureのおすすめを見てみよう♥"); //案内文内をもとに戻す
  $("#sub_1").text("＼まずは定番から！／"); //案内文内をもとに戻す
  $("#recommend_design").text(`骨格${C[A]}さんに似合う服はこちら`); //ボタン文章をもとに戻す
  $("#sub_2").text("新しい自分に出会おう！セレンディピティなら"); //案内文内をもとに戻す
  $("#recommend_item").text(`骨格${C[A]}さんにオススメ！厳選３着`); //ボタン文章をもとに戻す
  // $("#sub_3").text("理想を叶える！自分好みにカスタマイズ"); //案内文内をもとに戻す
  // $("#recommend_item").text(`骨格${C[A]}さんにオススメカスタマイズ`); //ボタン文章をもとに戻す

  //骨格わからないを押した人対策：ボタン③の非表示を戻る
  $("#recommend_custom").css('display', 'inline-block'); //再表示
  $("#sub_3").css('display', 'inline-block'); //再表示

});




//骨格「わからない」が選択されたときの例外処理
  //【！備忘メモ】：単純に#btn_unkownのみを指定してinnerHTMLで上書きしてしまうと、それによりHTMLの内容自体を書き換えにいってしまうので、「わからない」を押した後に「ストレート」とかを押しても「分からない」の内容が表示されてしまう！！（書き換えたものを表示しているだけになってしまう）ので、ひとつ上の塊で、再度読み込み処理を追加しました。
 

  // 案内文変更

$("#btn_unkown").on('click', function(){
  console.log(C[A]);
  $("#message").text("骨格診断から始めてみよう♥"); //案内文内を骨格未診断のみ変更

  // ボタン①の表記変更
  $("#sub_1").text("＼まずは簡単１分！お手軽診断／"); //診断に促す
  $("#recommend_design").text("骨格診断してみる♥"); //診断に促す

  // ボタン②の表記変更
  $("#recommend_item").text("偶然の出会いを楽しむ♥"); //骨格●●に似合う〜という表現を削除

  //ボタン③は非表示にする
  $("#sub_3").css('display', 'none'); //非表示
  $("#recommend_custom").css('display', 'none'); //非表示
 

});




// 以下、選んだ骨格ごとにリンクさせる遷移先の設定


//ボタン① 骨格別のオススメ服案内

let F = ['https://www.instagram.com/recouture_official/guide/straight/17964207523716827/', 'https://www.instagram.com/recouture_official/guide/wave/17991004261479437/', 'https://www.instagram.com/recouture_official/guide/natural/17903782181590424/','https://pierrotshop.jp/f/frametype'];

  $("#recommend_design").on('click', function(){
  window.location.href = (F[A]); //リンク遷移切替したいので配列Fを使用
});





//ボタン② 骨格別のオススメ服３枚セレンディピティ
//リンク先は固定URLにして中身の出し分けをJQで設定


//これは動く★けどパラメーターが取得できない
// $("#recommend_item").on('click', function(){
//   window.location.href = ("link_2/index.html"); //下位階層へのリンク遷移
//   console.log(C[A]);
// });


//パラメーターを取得するには

$("#recommend_item").on('click', function(){
  console.log(C[A]);
  console.log(`link_2/index.html?id=${C[A]}`);
  let param = "link_2/index.html?id=" //変数paramにパラメーターの頭文字を固定
  console.log(`${param}${C[A]}`); //パラメーターを出力
  window.location.href = (`link_2/index.html?id=${C[A]}`); //下位階層へのリンク遷移＋末尾の?id以下でパラメーターを付与
  // window.location.href = (`${param}${C[A]}`); //下位階層へのリンク遷移＋末尾の?id以下でパラメーターを付与
});


//★★パラメーターをつけてリンクをとばすところまでできた！！！すごい！


//ボタン③ おすすめカスタマイズレシピへの遷移

  //ボタン②のJQを流用

$("#recommend_custom").on('click', function(){
  console.log(C[A]);
  console.log(`link_3/index.html?id=${C[A]}`);
  let param = "link_3/index.html?id=" //変数paramにパラメーターの頭文字を固定
  console.log(`${param}${C[A]}`); //パラメーターを出力
  window.location.href = (`link_3/index.html?id=${C[A]}`); //下位階層へのリンク遷移＋末尾の?id以下でパラメーターを付与
  // window.location.href = (`${param}${C[A]}`); //下位階層へのリンク遷移＋末尾の?id以下でパラメーターを付与
});







