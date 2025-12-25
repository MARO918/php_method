

let functions = {
  "number_format()": "数値をフォーマットして桁区切りなどを調整し、文字列として返します。",
  "printf()": "書式付きの文字列を出力します。",
  "strlen()": "与えられた文字列の長さを返します。", 
  "ucwords()": "文字列の各単語の頭文字を大文字に変換します。",
  "strtolower()": "文字列をすべて小文字に変換します。",
  "substr()": "文字列の一部分を返します。",
  "strcasecmp()": "文字列を大文字小文字を区別せずに比較します。",
  "trim()": "文字列の前後の空白を取り除きます。",
  "abs()": "絶対値を返します。", 
  "<=>": "宇宙船演算子。比較して -1, 0, 1 を返します。", 
  "===": "型も値も等しいか比較します。", 
  "&&": "論理 AND 演算子です。", 
  "||": "論理 OR 演算子です。", 
  "asort()": "配列を値で昇順ソートします（キーを維持）。",
  "array_splice()": "配列の指定位置を削除・置換します。",
  "ksort()": "配列をキーで昇順ソートします。",
  "krsort()": "配列をキーで降順ソートします。",
  "sort()": "配列を値で昇順ソートします。",
  "explode()": "文字列を区切りで分割して配列にします。",
  "implode()": "配列の要素を文字列に結合します。",
  "unset()": "変数や配列要素を削除します。",
  "in_array()": "配列内に値が存在するか調べます。",
  "array_search()": "配列内で値を検索しキーを返します。",
  // 追加された例
  "print_r()": "変数の中身を読みやすく出力します。",
  "var_dump()": "変数の型と値を詳細に出力します。"
};

const buttonsDiv = document.getElementById("buttons");
const outputDiv = document.getElementById("output");

// 関数ボタンを生成
function refreshButtons() {
  buttonsDiv.innerHTML = "";
  for (let name in functions) {
    const btn = document.createElement("button");
    btn.className = "func-btn";
    btn.textContent = name;
    btn.onclick = () => {
      outputDiv.textContent = functions[name]; 
    };
    buttonsDiv.appendChild(btn);
  }
}

// 追加登録
document.getElementById("addBtn").onclick = () => {
  const name = document.getElementById("newName").value.trim();
  const desc = document.getElementById("newDesc").value.trim();
  if (name && desc) {
    functions[name] = desc;
    refreshButtons();
    document.getElementById("newName").value = "";
    document.getElementById("newDesc").value = "";
  }
};

refreshButtons();
function refreshButtons() {
    buttonsDiv.innerHTML = "";
    for (const name in functions) {
      const col = document.createElement("div");
      col.className = "col-6 col-md-4 col-lg-3";
  
      const btn = document.createElement("button");
      btn.className = "btn func-btn";
      btn.textContent = name;
      btn.onclick = () => outputDiv.textContent = functions[name];
  
      col.appendChild(btn);
      buttonsDiv.appendChild(col);
    }
  }