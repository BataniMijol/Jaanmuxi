if(typeof keyman === 'undefined') {
  console.log('Keyboard requires KeymanWeb 10.0 or later');
  if(typeof tavultesoft !== 'undefined') tavultesoft.keymanweb.util.alert("This keyboard requires KeymanWeb 10.0 or later");
} else {
KeymanWeb.KR(new Keyboard_jaanmuxi());
}
function Keyboard_jaanmuxi()
{
  var modCodes = keyman.osk.modifierCodes;
  var keyCodes = keyman.osk.keyCodes;

  this._v=(typeof keyman!="undefined"&&typeof keyman.version=="string")?parseInt(keyman.version,10):9;
  this.KI="Keyboard_jaanmuxi";
  this.KN="Jaanmuxi";
  this.KMINVER="10.0";
  this.KV={F:' 1em "Calibri"',K102:0};
  this.KV.KLS={
    "shift-alt": ["€","¥","₹","؋","$","؉","؊","£","¢","﴿","﴾","؁","؀","","","","ڧ","ؓ","ۓ","ړ","ټ","ێ","ٚ","ې","ۄ","ٌ","؆","؇","؈","","","","ٳ","ؕ","ډ","ڨ","ڰ","۟","ۤ","ګ","ڵ","ۘ","ڄ","","","","","","","ؔ","ؐ","ؑ","ڦ","ؒ","ڠ","ڼ","إ","۩","۝","","","","","",""],
    "shift": ["ۂ","!","؏","#","₨","٪","ﷲ","&","٭","(",")","_","+","","","","ق","ۋ","ے","ڑ","ٹ","غ","ئ","ۍ","ص","ﷺ","{","}","|","","","","ٓ","ث","ڈ","آ","ݣ","ح","ژ","خ","ڷ",":","\"","","","","","","","ض","ڞ","څ","ذ","ط","ں","أ","<",">","؟","","","","","",""],
    "alt": ["ع","۱","۲","۳","۴","۵","۶","۷","۸","۹","۰","ة","ء","","","","ٚ","ؠ","ە","ڙ","ٿ","ۆ","ۈ","ً","ٍ","ُ","؍","؎","۝","","","","ٔ","ّ","ڐ","ظ","ٰ","ه","ږ","ك","ﻻ","۞","۩","","","","","","","ڙ","ښ","ڇ","ْ","ڀ","ڻ","ڠ","ِ","َ","ٌ","","","","","",""],
    "default": ["ھ","1","2","3","4","5","6","7","8","9","0","-","=","","","","ۉ","و","ي","ر","ت","ى","ۇ","ې","ۏ","پ","[","]","\\","","","","ا","س","د","ف","گ","ہ","ج","ک","ل","؛","٬","","","","","","","ز","ش","چ","ڤ","ب","ن","م","،","۔","/","","","","","",""]
  };
  this.KV.BK=(function(x){
    var
      empty=Array.apply(null, Array(65)).map(String.prototype.valueOf,""),
      result=[], v, i,
      modifiers=['default','shift','ctrl','shift-ctrl','alt','shift-alt','ctrl-alt','shift-ctrl-alt'];
    for(i=modifiers.length-1;i>=0;i--) {
      v = x[modifiers[i]];
      if(v || result.length > 0) {
        result=(v ? v : empty).slice().concat(result);
      }
    }
    return result;
  })(this.KV.KLS);
  this.KDU=0;
  this.KH='';
  this.KM=0;
  this.KBVER="1.0";
  this.KMBM=modCodes.SHIFT | modCodes.ALT /* 0x0050 */;
  this.KRTL=1;
  this.KVKL={
  "tablet": {
    "displayUnderlying": false,
    "layer": [
      {
        "id": "default",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_1",
                "text": "1"
              },
              {
                "id": "K_2",
                "text": "2"
              },
              {
                "id": "K_3",
                "text": "3"
              },
              {
                "id": "K_4",
                "text": "4"
              },
              {
                "id": "K_5",
                "text": "5"
              },
              {
                "id": "K_6",
                "text": "6"
              },
              {
                "id": "K_7",
                "text": "7"
              },
              {
                "id": "K_8",
                "text": "8"
              },
              {
                "id": "K_9",
                "text": "9"
              },
              {
                "id": "K_0",
                "text": "0"
              },
              {
                "id": "K_HYPHEN",
                "text": "-"
              },
              {
                "id": "K_EQUAL",
                "text": "="
              },
              {
                "width": "100",
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_Q",
                "pad": "75",
                "text": "\u06C9"
              },
              {
                "id": "K_W",
                "text": "\u0648"
              },
              {
                "id": "K_E",
                "text": "\u064A"
              },
              {
                "id": "K_R",
                "text": "\u0631"
              },
              {
                "id": "K_T",
                "text": "\u062A"
              },
              {
                "id": "K_Y",
                "text": "\u0649"
              },
              {
                "id": "K_U",
                "text": "\u06C7"
              },
              {
                "id": "K_I",
                "text": "\u06D0"
              },
              {
                "id": "K_O",
                "text": "\u06CF"
              },
              {
                "id": "K_P",
                "text": "\u067E"
              },
              {
                "id": "K_LBRKT",
                "text": "["
              },
              {
                "id": "K_RBRKT",
                "text": "]"
              },
              {
                "width": "10",
                "id": "T_new_138",
                "sp": "10"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "id": "K_BKQUOTE",
                "text": "\u06BE"
              },
              {
                "id": "K_A",
                "text": "\u0627"
              },
              {
                "id": "K_S",
                "text": "\u0633"
              },
              {
                "id": "K_D",
                "text": "\u062F"
              },
              {
                "id": "K_F",
                "text": "\u0641"
              },
              {
                "id": "K_G",
                "text": "\u06AF"
              },
              {
                "id": "K_H",
                "text": "\u06C1"
              },
              {
                "id": "K_J",
                "text": "\u062C"
              },
              {
                "id": "K_K",
                "text": "\u06A9"
              },
              {
                "id": "K_L",
                "text": "\u0644"
              },
              {
                "id": "K_COLON",
                "text": "\u061B"
              },
              {
                "id": "K_QUOTE",
                "text": "\u066C"
              },
              {
                "id": "K_BKSLASH",
                "text": "\\"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "width": "160",
                "id": "K_SHIFT",
                "sp": "1",
                "text": "*Shift*"
              },
              {
                "id": "K_oE2"
              },
              {
                "id": "K_Z",
                "text": "\u0632"
              },
              {
                "id": "K_X",
                "text": "\u0634"
              },
              {
                "id": "K_C",
                "text": "\u0686"
              },
              {
                "id": "K_V",
                "text": "\u06A4"
              },
              {
                "id": "K_B",
                "text": "\u0628"
              },
              {
                "id": "K_N",
                "text": "\u0646"
              },
              {
                "id": "K_M",
                "text": "\u0645"
              },
              {
                "id": "K_COMMA",
                "text": "\u060C"
              },
              {
                "id": "K_PERIOD",
                "text": "\u06D4"
              },
              {
                "id": "K_SLASH",
                "text": "/"
              },
              {
                "width": "10",
                "id": "T_new_164",
                "sp": "10"
              }
            ]
          },
          {
            "id": "5",
            "key": [
              {
                "nextlayer": "alt",
                "width": "130",
                "id": "K_LCONTROL",
                "sp": "1",
                "text": "alt",
                "sk": [
                  {
                    "nextlayer": "alt",
                    "id": "K_LCONTROL",
                    "sp": "1",
                    "text": "alt"
                  },
                  {
                    "nextlayer": "shift-alt",
                    "id": "K_LCONTROL",
                    "sp": "1",
                    "text": "shift-alt"
                  }
                ]
              },
              {
                "width": "140",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "930",
                "id": "K_SPACE"
              },
              {
                "width": "145",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      },
      {
        "id": "shift",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_1",
                "text": "!"
              },
              {
                "id": "K_2",
                "text": "\u060F"
              },
              {
                "id": "K_3",
                "text": "#"
              },
              {
                "id": "K_4",
                "text": "\u20A8"
              },
              {
                "id": "K_5",
                "text": "\u066A"
              },
              {
                "id": "K_6",
                "text": "\uFDF2"
              },
              {
                "id": "K_7",
                "text": "&"
              },
              {
                "id": "K_8",
                "text": "\u066D"
              },
              {
                "id": "K_9",
                "text": "("
              },
              {
                "id": "K_0",
                "text": ")"
              },
              {
                "id": "K_HYPHEN",
                "text": "_"
              },
              {
                "id": "K_EQUAL",
                "text": "+"
              },
              {
                "width": "100",
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_Q",
                "pad": "75",
                "text": "\u0642"
              },
              {
                "id": "K_W",
                "text": "\u06CB"
              },
              {
                "id": "K_E",
                "text": "\u06D2"
              },
              {
                "id": "K_R",
                "text": "\u0691"
              },
              {
                "id": "K_T",
                "text": "\u0679"
              },
              {
                "id": "K_Y",
                "text": "\u063A"
              },
              {
                "id": "K_U",
                "text": "\u0626"
              },
              {
                "id": "K_I",
                "text": "\u06CD"
              },
              {
                "id": "K_O",
                "text": "\u0635"
              },
              {
                "id": "K_P",
                "text": "\uFDFA"
              },
              {
                "id": "K_LBRKT",
                "text": "{"
              },
              {
                "id": "K_RBRKT",
                "text": "}"
              },
              {
                "width": "10",
                "id": "T_new_194",
                "sp": "10"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "id": "K_BKQUOTE",
                "text": "\u06C2"
              },
              {
                "id": "K_A",
                "text": "\u0653"
              },
              {
                "id": "K_S",
                "text": "\u062B"
              },
              {
                "id": "K_D",
                "text": "\u0688"
              },
              {
                "id": "K_F",
                "text": "\u0622"
              },
              {
                "id": "K_G",
                "text": "\u0763"
              },
              {
                "id": "K_H",
                "text": "\u062D"
              },
              {
                "id": "K_J",
                "text": "\u0698"
              },
              {
                "id": "K_K",
                "text": "\u062E"
              },
              {
                "id": "K_L",
                "text": "\u06B7"
              },
              {
                "id": "K_COLON",
                "text": ":"
              },
              {
                "id": "K_QUOTE",
                "text": "\""
              },
              {
                "id": "K_BKSLASH",
                "text": "|"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "width": "160",
                "id": "K_SHIFT",
                "sp": "1",
                "text": "*Shift*"
              },
              {
                "id": "K_oE2"
              },
              {
                "id": "K_Z",
                "text": "\u0636"
              },
              {
                "id": "K_X",
                "text": "\u069E"
              },
              {
                "id": "K_C",
                "text": "\u0685"
              },
              {
                "id": "K_V",
                "text": "\u0630"
              },
              {
                "id": "K_B",
                "text": "\u0637"
              },
              {
                "id": "K_N",
                "text": "\u06BA"
              },
              {
                "id": "K_M",
                "text": "\u0623"
              },
              {
                "id": "K_COMMA",
                "text": "<"
              },
              {
                "id": "K_PERIOD",
                "text": ">"
              },
              {
                "id": "K_SLASH",
                "text": "\u061F"
              },
              {
                "width": "10",
                "id": "T_new_220",
                "sp": "10"
              }
            ]
          },
          {
            "id": "5",
            "key": [
              {
                "nextlayer": "alt",
                "width": "130",
                "id": "K_LCONTROL",
                "sp": "1",
                "text": "alt",
                "sk": [
                  {
                    "nextlayer": "alt",
                    "id": "K_LCONTROL",
                    "sp": "1",
                    "text": "alt"
                  },
                  {
                    "nextlayer": "shift-alt",
                    "id": "K_LCONTROL",
                    "sp": "1",
                    "text": "shift-alt"
                  }
                ]
              },
              {
                "width": "140",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "930",
                "id": "K_SPACE"
              },
              {
                "width": "145",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      },
      {
        "id": "alt",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_1",
                "text": "\u06F1"
              },
              {
                "id": "K_2",
                "text": "\u06F2"
              },
              {
                "id": "K_3",
                "text": "\u06F3"
              },
              {
                "id": "K_4",
                "text": "\u06F4"
              },
              {
                "id": "K_5",
                "text": "\u06F5"
              },
              {
                "id": "K_6",
                "text": "\u06F6"
              },
              {
                "id": "K_7",
                "text": "\u06F7"
              },
              {
                "id": "K_8",
                "text": "\u06F8"
              },
              {
                "id": "K_9",
                "text": "\u06F9"
              },
              {
                "id": "K_0",
                "text": "\u06F0"
              },
              {
                "id": "K_HYPHEN",
                "text": "\u0629"
              },
              {
                "id": "K_EQUAL",
                "text": "\u0621"
              },
              {
                "width": "100",
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_Q",
                "pad": "75",
                "text": "\u065A"
              },
              {
                "id": "K_W",
                "text": "\u0620"
              },
              {
                "id": "K_E",
                "text": "\u06D5"
              },
              {
                "id": "K_R",
                "text": "\u0699"
              },
              {
                "id": "K_T",
                "text": "\u067F"
              },
              {
                "id": "K_Y",
                "text": "\u06C6"
              },
              {
                "id": "K_U",
                "text": "\u06C8"
              },
              {
                "id": "K_I",
                "text": "\u064B"
              },
              {
                "id": "K_O",
                "text": "\u064D"
              },
              {
                "id": "K_P",
                "text": "\u064F"
              },
              {
                "id": "K_LBRKT",
                "text": "\u060D"
              },
              {
                "id": "K_RBRKT",
                "text": "\u060E"
              },
              {
                "width": "10",
                "id": "T_new_250",
                "sp": "10"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "id": "K_BKQUOTE",
                "text": "\u0639"
              },
              {
                "id": "K_A",
                "text": "\u0654"
              },
              {
                "id": "K_S",
                "text": "\u0651"
              },
              {
                "id": "K_D",
                "text": "\u0690"
              },
              {
                "id": "K_F",
                "text": "\u0638"
              },
              {
                "id": "K_G",
                "text": "\u0670"
              },
              {
                "id": "K_H",
                "text": "\u0647"
              },
              {
                "id": "K_J",
                "text": "\u0696"
              },
              {
                "id": "K_K",
                "text": "\u0643"
              },
              {
                "id": "K_L",
                "text": "\uFEFB"
              },
              {
                "id": "K_COLON",
                "text": "\u06DE"
              },
              {
                "id": "K_QUOTE",
                "text": "\u06E9"
              },
              {
                "id": "K_BKSLASH",
                "text": "\u06DD"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "width": "160",
                "id": "K_SHIFT",
                "sp": "1",
                "text": "*Shift*"
              },
              {
                "id": "K_oE2"
              },
              {
                "id": "K_Z",
                "text": "\u0699"
              },
              {
                "id": "K_X",
                "text": "\u069A"
              },
              {
                "id": "K_C",
                "text": "\u0687"
              },
              {
                "id": "K_V",
                "text": "\u0652"
              },
              {
                "id": "K_B",
                "text": "\u0680"
              },
              {
                "id": "K_N",
                "text": "\u06BB"
              },
              {
                "id": "K_M",
                "text": "\u06A0"
              },
              {
                "id": "K_COMMA",
                "text": "\u0650"
              },
              {
                "id": "K_PERIOD",
                "text": "\u064E"
              },
              {
                "id": "K_SLASH",
                "text": "\u064C"
              },
              {
                "width": "10",
                "id": "T_new_276",
                "sp": "10"
              }
            ]
          },
          {
            "id": "5",
            "key": [
              {
                "nextlayer": "default",
                "width": "130",
                "id": "K_LCONTROL",
                "sp": "1",
                "text": "default",
                "sk": [
                  {
                    "nextlayer": "shift-alt",
                    "id": "K_LCONTROL",
                    "sp": "1",
                    "text": "shift-alt"
                  }
                ]
              },
              {
                "width": "140",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "930",
                "id": "K_SPACE"
              },
              {
                "width": "145",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      },
      {
        "id": "shift-alt",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_1",
                "text": "\u00A5"
              },
              {
                "id": "K_2",
                "text": "\u20B9"
              },
              {
                "id": "K_3",
                "text": "\u060B"
              },
              {
                "id": "K_4",
                "text": "$"
              },
              {
                "id": "K_5",
                "text": "\u0609"
              },
              {
                "id": "K_6",
                "text": "\u060A"
              },
              {
                "id": "K_7",
                "text": "\u00A3"
              },
              {
                "id": "K_8",
                "text": "\u00A2"
              },
              {
                "id": "K_9",
                "text": "\uFD3F"
              },
              {
                "id": "K_0",
                "text": "\uFD3E"
              },
              {
                "id": "K_HYPHEN",
                "text": "\u0601"
              },
              {
                "id": "K_EQUAL",
                "text": "\u0600"
              },
              {
                "width": "100",
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_Q",
                "pad": "75",
                "text": "\u06A7"
              },
              {
                "id": "K_W",
                "text": "\u0613"
              },
              {
                "id": "K_E",
                "text": "\u06D3"
              },
              {
                "id": "K_R",
                "text": "\u0693"
              },
              {
                "id": "K_T",
                "text": "\u067C"
              },
              {
                "id": "K_Y",
                "text": "\u06CE"
              },
              {
                "id": "K_U",
                "text": "\u065A"
              },
              {
                "id": "K_I",
                "text": "\u06D0"
              },
              {
                "id": "K_O",
                "text": "\u06C4"
              },
              {
                "id": "K_P",
                "text": "\u064C"
              },
              {
                "id": "K_LBRKT",
                "text": "\u0606"
              },
              {
                "id": "K_RBRKT",
                "text": "\u0607"
              },
              {
                "width": "10",
                "id": "T_new_306",
                "sp": "10"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "id": "K_BKQUOTE",
                "text": "\u20AC"
              },
              {
                "id": "K_A",
                "text": "\u0673"
              },
              {
                "id": "K_S",
                "text": "\u0615"
              },
              {
                "id": "K_D",
                "text": "\u0689"
              },
              {
                "id": "K_F",
                "text": "\u06A8"
              },
              {
                "id": "K_G",
                "text": "\u06B0"
              },
              {
                "id": "K_H",
                "text": "\u06DF"
              },
              {
                "id": "K_J",
                "text": "\u06E4"
              },
              {
                "id": "K_K",
                "text": "\u06AB"
              },
              {
                "id": "K_L",
                "text": "\u06B5"
              },
              {
                "id": "K_COLON",
                "text": "\u06D8"
              },
              {
                "id": "K_QUOTE",
                "text": "\u0684"
              },
              {
                "id": "K_BKSLASH",
                "text": "\u0608"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "width": "160",
                "id": "K_SHIFT",
                "sp": "1",
                "text": "*Shift*"
              },
              {
                "id": "K_oE2"
              },
              {
                "id": "K_Z",
                "text": "\u0614"
              },
              {
                "id": "K_X",
                "text": "\u0610"
              },
              {
                "id": "K_C",
                "text": "\u0611"
              },
              {
                "id": "K_V",
                "text": "\u06A6"
              },
              {
                "id": "K_B",
                "text": "\u0612"
              },
              {
                "id": "K_N",
                "text": "\u06A0"
              },
              {
                "id": "K_M",
                "text": "\u06BC"
              },
              {
                "id": "K_COMMA",
                "text": "\u0625"
              },
              {
                "id": "K_PERIOD",
                "text": "\u06E9"
              },
              {
                "id": "K_SLASH",
                "text": "\u06DD"
              },
              {
                "width": "10",
                "id": "T_new_332",
                "sp": "10"
              }
            ]
          },
          {
            "id": "5",
            "key": [
              {
                "nextlayer": "default",
                "width": "130",
                "id": "K_LCONTROL",
                "sp": "1",
                "text": "default",
                "sk": [
                  {
                    "nextlayer": "alt",
                    "id": "K_LCONTROL",
                    "sp": "1",
                    "text": "alt"
                  }
                ]
              },
              {
                "width": "140",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "930",
                "id": "K_SPACE"
              },
              {
                "width": "145",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      }
    ]
  }
}
;
  this.KVER="16.0.144.0";
  this.KVS=[];
  this.gs=function(t,e) {
    return this.g_main_0(t,e);
  };
  this.gs=function(t,e) {
    return this.g_main_0(t,e);
  };
  this.g_main_0=function(t,e) {
    var k=KeymanWeb,r=0,m=0;
    if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 74
        k.KDC(0,t);
        k.KO(-1,t,"¥");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 122
        k.KDC(0,t);
        k.KO(-1,t,"!");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_QUOTE /* 0xDE */)) {
      if(1){
        r=m=1;   // Line 22
        k.KDC(0,t);
        k.KO(-1,t,"ڄ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_QUOTE /* 0xDE */)) {
      if(1){
        r=m=1;   // Line 120
        k.KDC(0,t);
        k.KO(-1,t,"\"");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 72
        k.KDC(0,t);
        k.KO(-1,t,"؋");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 124
        k.KDC(0,t);
        k.KO(-1,t,"#");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 71
        k.KDC(0,t);
        k.KO(-1,t,"$");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 148
        k.KDC(0,t);
        k.KO(-1,t,"₨");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_5 /* 0x35 */)) {
      if(1){
        r=m=1;   // Line 70
        k.KDC(0,t);
        k.KO(-1,t,"؉");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_5 /* 0x35 */)) {
      if(1){
        r=m=1;   // Line 125
        k.KDC(0,t);
        k.KO(-1,t,"٪");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_7 /* 0x37 */)) {
      if(1){
        r=m=1;   // Line 68
        k.KDC(0,t);
        k.KO(-1,t,"£");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_7 /* 0x37 */)) {
      if(1){
        r=m=1;   // Line 127
        k.KDC(0,t);
        k.KO(-1,t,"&");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_QUOTE /* 0xDE */)) {
      if(1){
        r=m=1;   // Line 101
        k.KDC(0,t);
        k.KO(-1,t,"۩");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_QUOTE /* 0xDE */)) {
      if(1){
        r=m=1;   // Line 121
        k.KDC(0,t);
        k.KO(-1,t,"٬");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_9 /* 0x39 */)) {
      if(1){
        r=m=1;   // Line 77
        k.KDC(0,t);
        k.KO(-1,t,"﴿");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_9 /* 0x39 */)) {
      if(1){
        r=m=1;   // Line 130
        k.KDC(0,t);
        k.KO(-1,t,"(");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_0 /* 0x30 */)) {
      if(1){
        r=m=1;   // Line 76
        k.KDC(0,t);
        k.KO(-1,t,"﴾");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_0 /* 0x30 */)) {
      if(1){
        r=m=1;   // Line 129
        k.KDC(0,t);
        k.KO(-1,t,")");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_8 /* 0x38 */)) {
      if(1){
        r=m=1;   // Line 67
        k.KDC(0,t);
        k.KO(-1,t,"¢");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_8 /* 0x38 */)) {
      if(1){
        r=m=1;   // Line 128
        k.KDC(0,t);
        k.KO(-1,t,"٭");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_EQUAL /* 0xBB */)) {
      if(1){
        r=m=1;   // Line 17
        k.KDC(0,t);
        k.KO(-1,t,"؀");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_EQUAL /* 0xBB */)) {
      if(1){
        r=m=1;   // Line 131
        k.KDC(0,t);
        k.KO(-1,t,"+");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_COMMA /* 0xBC */)) {
      if(1){
        r=m=1;   // Line 86
        k.KDC(0,t);
        k.KO(-1,t,"ِ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_COMMA /* 0xBC */)) {
      if(1){
        r=m=1;   // Line 160
        k.KDC(0,t);
        k.KO(-1,t,"،");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(1){
        r=m=1;   // Line 89
        k.KDC(0,t);
        k.KO(-1,t,"ة");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(1){
        r=m=1;   // Line 133
        k.KDC(0,t);
        k.KO(-1,t,"-");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(1){
        r=m=1;   // Line 85
        k.KDC(0,t);
        k.KO(-1,t,"َ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(1){
        r=m=1;   // Line 159
        k.KDC(0,t);
        k.KO(-1,t,"۔");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_SLASH /* 0xBF */)) {
      if(1){
        r=m=1;   // Line 84
        k.KDC(0,t);
        k.KO(-1,t,"ٌ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_SLASH /* 0xBF */)) {
      if(1){
        r=m=1;   // Line 158
        k.KDC(0,t);
        k.KO(-1,t,"/");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_0 /* 0x30 */)) {
      if(1){
        r=m=1;   // Line 90
        k.KDC(0,t);
        k.KO(-1,t,"۰");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_0 /* 0x30 */)) {
      if(1){
        r=m=1;   // Line 165
        k.KDC(0,t);
        k.KO(-1,t,"0");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 99
        k.KDC(0,t);
        k.KO(-1,t,"۱");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 174
        k.KDC(0,t);
        k.KO(-1,t,"1");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 98
        k.KDC(0,t);
        k.KO(-1,t,"۲");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 173
        k.KDC(0,t);
        k.KO(-1,t,"2");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 97
        k.KDC(0,t);
        k.KO(-1,t,"۳");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 172
        k.KDC(0,t);
        k.KO(-1,t,"3");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 96
        k.KDC(0,t);
        k.KO(-1,t,"۴");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 171
        k.KDC(0,t);
        k.KO(-1,t,"4");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_5 /* 0x35 */)) {
      if(1){
        r=m=1;   // Line 95
        k.KDC(0,t);
        k.KO(-1,t,"۵");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_5 /* 0x35 */)) {
      if(1){
        r=m=1;   // Line 170
        k.KDC(0,t);
        k.KO(-1,t,"5");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_6 /* 0x36 */)) {
      if(1){
        r=m=1;   // Line 94
        k.KDC(0,t);
        k.KO(-1,t,"۶");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_6 /* 0x36 */)) {
      if(1){
        r=m=1;   // Line 169
        k.KDC(0,t);
        k.KO(-1,t,"6");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_7 /* 0x37 */)) {
      if(1){
        r=m=1;   // Line 93
        k.KDC(0,t);
        k.KO(-1,t,"۷");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_7 /* 0x37 */)) {
      if(1){
        r=m=1;   // Line 168
        k.KDC(0,t);
        k.KO(-1,t,"7");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_8 /* 0x38 */)) {
      if(1){
        r=m=1;   // Line 92
        k.KDC(0,t);
        k.KO(-1,t,"۸");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_8 /* 0x38 */)) {
      if(1){
        r=m=1;   // Line 167
        k.KDC(0,t);
        k.KO(-1,t,"8");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_9 /* 0x39 */)) {
      if(1){
        r=m=1;   // Line 91
        k.KDC(0,t);
        k.KO(-1,t,"۹");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_9 /* 0x39 */)) {
      if(1){
        r=m=1;   // Line 166
        k.KDC(0,t);
        k.KO(-1,t,"9");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_COLON /* 0xBA */)) {
      if(1){
        r=m=1;   // Line 23
        k.KDC(0,t);
        k.KO(-1,t,"ۘ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_COLON /* 0xBA */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,":");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_COLON /* 0xBA */)) {
      if(1){
        r=m=1;   // Line 100
        k.KDC(0,t);
        k.KO(-1,t,"۞");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_COLON /* 0xBA */)) {
      if(1){
        r=m=1;   // Line 152
        k.KDC(0,t);
        k.KO(-1,t,"؛");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_COMMA /* 0xBC */)) {
      if(1){
        r=m=1;   // Line 81
        k.KDC(0,t);
        k.KO(-1,t,"إ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_COMMA /* 0xBC */)) {
      if(1){
        r=m=1;   // Line 155
        k.KDC(0,t);
        k.KO(-1,t,"<");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_EQUAL /* 0xBB */)) {
      if(1){
        r=m=1;   // Line 64
        k.KDC(0,t);
        k.KO(-1,t,"ء");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_EQUAL /* 0xBB */)) {
      if(1){
        r=m=1;   // Line 134
        k.KDC(0,t);
        k.KO(-1,t,"=");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(1){
        r=m=1;   // Line 82
        k.KDC(0,t);
        k.KO(-1,t,"۩");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(1){
        r=m=1;   // Line 156
        k.KDC(0,t);
        k.KO(-1,t,">");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_SLASH /* 0xBF */)) {
      if(1){
        r=m=1;   // Line 83
        k.KDC(0,t);
        k.KO(-1,t,"۝");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_SLASH /* 0xBF */)) {
      if(1){
        r=m=1;   // Line 157
        k.KDC(0,t);
        k.KO(-1,t,"؟");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 73
        k.KDC(0,t);
        k.KO(-1,t,"₹");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 123
        k.KDC(0,t);
        k.KO(-1,t,"؏");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 42
        k.KDC(0,t);
        k.KO(-1,t,"ٳ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 195
        k.KDC(0,t);
        k.KO(-1,t,"ٓ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 26
        k.KDC(0,t);
        k.KO(-1,t,"ؒ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 141
        k.KDC(0,t);
        k.KO(-1,t,"ط");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 27
        k.KDC(0,t);
        k.KO(-1,t,"ؑ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 161
        k.KDC(0,t);
        k.KO(-1,t,"څ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 36
        k.KDC(0,t);
        k.KO(-1,t,"ډ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 149
        k.KDC(0,t);
        k.KO(-1,t,"ڈ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 62
        k.KDC(0,t);
        k.KO(-1,t,"ۓ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 197
        k.KDC(0,t);
        k.KO(-1,t,"ے");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"ڨ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 153
        k.KDC(0,t);
        k.KO(-1,t,"آ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 53
        k.KDC(0,t);
        k.KO(-1,t,"ڰ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 194
        k.KDC(0,t);
        k.KO(-1,t,"ݣ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_H /* 0x48 */)) {
      if(1){
        r=m=1;   // Line 24
        k.KDC(0,t);
        k.KO(-1,t,"۟");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_H /* 0x48 */)) {
      if(1){
        r=m=1;   // Line 163
        k.KDC(0,t);
        k.KO(-1,t,"ح");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_I /* 0x49 */)) {
      if(1){
        r=m=1;   // Line 40
        k.KDC(0,t);
        k.KO(-1,t,"ې");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_I /* 0x49 */)) {
      if(1){
        r=m=1;   // Line 115
        k.KDC(0,t);
        k.KO(-1,t,"ۍ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 25
        k.KDC(0,t);
        k.KO(-1,t,"ۤ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 145
        k.KDC(0,t);
        k.KO(-1,t,"ژ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_K /* 0x4B */)) {
      if(1){
        r=m=1;   // Line 46
        k.KDC(0,t);
        k.KO(-1,t,"ګ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_K /* 0x4B */)) {
      if(1){
        r=m=1;   // Line 162
        k.KDC(0,t);
        k.KO(-1,t,"خ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 38
        k.KDC(0,t);
        k.KO(-1,t,"ڵ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 118
        k.KDC(0,t);
        k.KO(-1,t,"ڷ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_M /* 0x4D */)) {
      if(1){
        r=m=1;   // Line 34
        k.KDC(0,t);
        k.KO(-1,t,"ڼ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_M /* 0x4D */)) {
      if(1){
        r=m=1;   // Line 112
        k.KDC(0,t);
        k.KO(-1,t,"أ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 43
        k.KDC(0,t);
        k.KO(-1,t,"ڠ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 154
        k.KDC(0,t);
        k.KO(-1,t,"ں");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 39
        k.KDC(0,t);
        k.KO(-1,t,"ۄ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 114
        k.KDC(0,t);
        k.KO(-1,t,"ص");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 33
        k.KDC(0,t);
        k.KO(-1,t,"ٌ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 117
        k.KDC(0,t);
        k.KO(-1,t,"ﷺ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 47
        k.KDC(0,t);
        k.KO(-1,t,"ڧ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 178
        k.KDC(0,t);
        k.KO(-1,t,"ق");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 37
        k.KDC(0,t);
        k.KO(-1,t,"ړ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        k.KO(-1,t,"ڑ");
      }
    }
      if(m) {}
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 30
        k.KDC(0,t);
        k.KO(-1,t,"ؕ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 143
        k.KDC(0,t);
        k.KO(-1,t,"ث");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 35
        k.KDC(0,t);
        k.KO(-1,t,"ټ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 147
        k.KDC(0,t);
        k.KO(-1,t,"ٹ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 32
        k.KDC(0,t);
        k.KO(-1,t,"ٚ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 116
        k.KDC(0,t);
        k.KO(-1,t,"ئ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 45
        k.KDC(0,t);
        k.KO(-1,t,"ڦ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 60
        k.KDC(0,t);
        k.KO(-1,t,"ذ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 31
        k.KDC(0,t);
        k.KO(-1,t,"ؓ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 66
        k.KDC(0,t);
        k.KO(-1,t,"ۋ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 28
        k.KDC(0,t);
        k.KO(-1,t,"ؐ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 142
        k.KDC(0,t);
        k.KO(-1,t,"ڞ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 41
        k.KDC(0,t);
        k.KO(-1,t,"ێ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 150
        k.KDC(0,t);
        k.KO(-1,t,"غ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 29
        k.KDC(0,t);
        k.KO(-1,t,"ؔ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 144
        k.KDC(0,t);
        k.KO(-1,t,"ض");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(1){
        r=m=1;   // Line 58
        k.KDC(0,t);
        k.KO(-1,t,"؍");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(1){
        r=m=1;   // Line 140
        k.KDC(0,t);
        k.KO(-1,t,"[");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_BKSLASH /* 0xDC */)) {
      if(1){
        r=m=1;   // Line 55
        k.KDC(0,t);
        k.KO(-1,t,"۝");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_BKSLASH /* 0xDC */)) {
      if(1){
        r=m=1;   // Line 138
        k.KDC(0,t);
        k.KO(-1,t,"\\");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(1){
        r=m=1;   // Line 57
        k.KDC(0,t);
        k.KO(-1,t,"؎");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(1){
        r=m=1;   // Line 139
        k.KDC(0,t);
        k.KO(-1,t,"]");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_6 /* 0x36 */)) {
      if(1){
        r=m=1;   // Line 69
        k.KDC(0,t);
        k.KO(-1,t,"؊");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_6 /* 0x36 */)) {
      if(1){
        r=m=1;   // Line 126
        k.KDC(0,t);
        k.KO(-1,t,"ﷲ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(1){
        r=m=1;   // Line 18
        k.KDC(0,t);
        k.KO(-1,t,"؁");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(1){
        r=m=1;   // Line 132
        k.KDC(0,t);
        k.KO(-1,t,"_");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_BKQUOTE /* 0xC0 */)) {
      if(1){
        r=m=1;   // Line 61
        k.KDC(0,t);
        k.KO(-1,t,"ھ");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_BKQUOTE /* 0xC0 */)) {
      if(1){
        r=m=1;   // Line 87
        k.KDC(0,t);
        k.KO(-1,t,"ع");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 111
        k.KDC(0,t);
        k.KO(-1,t,"ٔ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 203
        k.KDC(0,t);
        k.KO(-1,t,"ا");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 102
        k.KDC(0,t);
        k.KO(-1,t,"ڀ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 177
        k.KDC(0,t);
        k.KO(-1,t,"ب");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 103
        k.KDC(0,t);
        k.KO(-1,t,"ڇ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 187
        k.KDC(0,t);
        k.KO(-1,t,"چ");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 104
        k.KDC(0,t);
        k.KO(-1,t,"ڐ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 181
        k.KDC(0,t);
        k.KO(-1,t,"د");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 88
        k.KDC(0,t);
        k.KO(-1,t,"ە");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 198
        k.KDC(0,t);
        k.KO(-1,t,"ي");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 113
        k.KDC(0,t);
        k.KO(-1,t,"ظ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 182
        k.KDC(0,t);
        k.KO(-1,t,"ف");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 48
        k.KDC(0,t);
        k.KO(-1,t,"ٰ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 193
        k.KDC(0,t);
        k.KO(-1,t,"گ");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_H /* 0x48 */)) {
      if(1){
        r=m=1;   // Line 52
        k.KDC(0,t);
        k.KO(-1,t,"ه");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_H /* 0x48 */)) {
      if(1){
        r=m=1;   // Line 164
        k.KDC(0,t);
        k.KO(-1,t,"ہ");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_I /* 0x49 */)) {
      if(1){
        r=m=1;   // Line 51
        k.KDC(0,t);
        k.KO(-1,t,"ً");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_I /* 0x49 */)) {
      if(1){
        r=m=1;   // Line 199
        k.KDC(0,t);
        k.KO(-1,t,"ې");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 110
        k.KDC(0,t);
        k.KO(-1,t,"ږ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 188
        k.KDC(0,t);
        k.KO(-1,t,"ج");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_K /* 0x4B */)) {
      if(1){
        r=m=1;   // Line 63
        k.KDC(0,t);
        k.KO(-1,t,"ك");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_K /* 0x4B */)) {
      if(1){
        r=m=1;   // Line 183
        k.KDC(0,t);
        k.KO(-1,t,"ک");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 109
        k.KDC(0,t);
        k.KO(-1,t,"ﻻ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 189
        k.KDC(0,t);
        k.KO(-1,t,"ل");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_M /* 0x4D */)) {
      if(1){
        r=m=1;   // Line 80
        k.KDC(0,t);
        k.KO(-1,t,"ڠ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_M /* 0x4D */)) {
      if(1){
        r=m=1;   // Line 175
        k.KDC(0,t);
        k.KO(-1,t,"م");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 119
        k.KDC(0,t);
        k.KO(-1,t,"ڻ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 176
        k.KDC(0,t);
        k.KO(-1,t,"ن");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 50
        k.KDC(0,t);
        k.KO(-1,t,"ٍ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 201
        k.KDC(0,t);
        k.KO(-1,t,"ۏ");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 16
        k.KDC(0,t);
        k.KO(-1,t,"ُ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 190
        k.KDC(0,t);
        k.KO(-1,t,"پ");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 106
        k.KDC(0,t);
        k.KO(-1,t,"ٚ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 196
        k.KDC(0,t);
        k.KO(-1,t,"ۉ");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 105
        k.KDC(0,t);
        k.KO(-1,t,"ڙ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 179
        k.KDC(0,t);
        k.KO(-1,t,"ر");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 49
        k.KDC(0,t);
        k.KO(-1,t,"ّ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 202
        k.KDC(0,t);
        k.KO(-1,t,"س");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 79
        k.KDC(0,t);
        k.KO(-1,t,"ٿ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 180
        k.KDC(0,t);
        k.KO(-1,t,"ت");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 108
        k.KDC(0,t);
        k.KO(-1,t,"ۈ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 191
        k.KDC(0,t);
        k.KO(-1,t,"ۇ");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 78
        k.KDC(0,t);
        k.KO(-1,t,"ْ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 186
        k.KDC(0,t);
        k.KO(-1,t,"ڤ");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 65
        k.KDC(0,t);
        k.KO(-1,t,"ؠ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 192
        k.KDC(0,t);
        k.KO(-1,t,"و");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 54
        k.KDC(0,t);
        k.KO(-1,t,"ښ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 184
        k.KDC(0,t);
        k.KO(-1,t,"ش");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 107
        k.KDC(0,t);
        k.KO(-1,t,"ۆ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 200
        k.KDC(0,t);
        k.KO(-1,t,"ى");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 56
        k.KDC(0,t);
        k.KO(-1,t,"ڙ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 185
        k.KDC(0,t);
        k.KO(-1,t,"ز");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(1){
        r=m=1;   // Line 21
        k.KDC(0,t);
        k.KO(-1,t,"؆");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(1){
        r=m=1;   // Line 136
        k.KDC(0,t);
        k.KO(-1,t,"{");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_BKSLASH /* 0xDC */)) {
      if(1){
        r=m=1;   // Line 19
        k.KDC(0,t);
        k.KO(-1,t,"؈");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_BKSLASH /* 0xDC */)) {
      if(1){
        r=m=1;   // Line 137
        k.KDC(0,t);
        k.KO(-1,t,"|");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(1){
        r=m=1;   // Line 20
        k.KDC(0,t);
        k.KO(-1,t,"؇");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(1){
        r=m=1;   // Line 135
        k.KDC(0,t);
        k.KO(-1,t,"}");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_BKQUOTE /* 0xC0 */)) {
      if(1){
        r=m=1;   // Line 59
        k.KDC(0,t);
        k.KO(-1,t,"ۂ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_BKQUOTE /* 0xC0 */)) {
      if(1){
        r=m=1;   // Line 75
        k.KDC(0,t);
        k.KO(-1,t,"€");
      }
    }
    return r;
  };
}
