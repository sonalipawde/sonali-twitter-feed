// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/api/sentences.ts":[function(require,module,exports) {
"use strict";

/* eslint-disable @typescript-eslint/no-use-before-define */
Object.defineProperty(exports, "__esModule", {
  value: true
});
var sentences = [];
getTextDump().split(/\n\n/).forEach(function (paragraph) {
  if (paragraph.length <= 50) {
    return;
  }
  if (paragraph.length <= 150) {
    sentences.push(paragraph.trim());
    return;
  }
  // (words in brackets) or combination of words followed by a full stop.
  var sentencesInPara = paragraph.match(/(\([^)]+\)|([^.()]+\.))/g);
  if (sentencesInPara) {
    sentences = sentences.concat(sentencesInPara.map(function (sentence) {
      return sentence.trim();
    }).filter(function (sentence) {
      return sentence.length > 50;
    }));
  }
});
exports.default = sentences;
function getTextDump() {
  return "Alice was beginning to get very tired of sitting by her sister on the\nbank, and of having nothing to do: once or twice she had peeped into the\nbook her sister was reading, but it had no pictures or conversations in\nit, \u2018and what is the use of a book,\u2019 thought Alice \u2018without pictures or\nconversations?\u2019\n\nSo she was considering in her own mind (as well as she could, for the\nhot day made her feel very sleepy and stupid), whether the pleasure\nof making a daisy-chain would be worth the trouble of getting up and\npicking the daisies, when suddenly a White Rabbit with pink eyes ran\nclose by her.\n\nThere was nothing so VERY remarkable in that; nor did Alice think it so\nVERY much out of the way to hear the Rabbit say to itself, \u2018Oh dear!\nOh dear! I shall be late!\u2019 (when she thought it over afterwards, it\noccurred to her that she ought to have wondered at this, but at the time\nit all seemed quite natural); but when the Rabbit actually TOOK A WATCH\nOUT OF ITS WAISTCOAT-POCKET, and looked at it, and then hurried on,\nAlice started to her feet, for it flashed across her mind that she had\nnever before seen a rabbit with either a waistcoat-pocket, or a watch\nto take out of it, and burning with curiosity, she ran across the field\nafter it, and fortunately was just in time to see it pop down a large\nrabbit-hole under the hedge.\n\nIn another moment down went Alice after it, never once considering how\nin the world she was to get out again.\n\nThe rabbit-hole went straight on like a tunnel for some way, and then\ndipped suddenly down, so suddenly that Alice had not a moment to think\nabout stopping herself before she found herself falling down a very deep\nwell.\n\nEither the well was very deep, or she fell very slowly, for she had\nplenty of time as she went down to look about her and to wonder what was\ngoing to happen next. First, she tried to look down and make out what\nshe was coming to, but it was too dark to see anything; then she\nlooked at the sides of the well, and noticed that they were filled with\ncupboards and book-shelves; here and there she saw maps and pictures\nhung upon pegs. She took down a jar from one of the shelves as\nshe passed; it was labelled \u2018ORANGE MARMALADE\u2019, but to her great\ndisappointment it was empty: she did not like to drop the jar for fear\nof killing somebody, so managed to put it into one of the cupboards as\nshe fell past it.\n\n\u2018Well!\u2019 thought Alice to herself, \u2018after such a fall as this, I shall\nthink nothing of tumbling down stairs! How brave they\u2019ll all think me at\nhome! Why, I wouldn\u2019t say anything about it, even if I fell off the top\nof the house!\u2019 (Which was very likely true.)\n\nDown, down, down. Would the fall NEVER come to an end! \u2018I wonder how\nmany miles I\u2019ve fallen by this time?\u2019 she said aloud. \u2018I must be getting\nsomewhere near the centre of the earth. Let me see: that would be four\nthousand miles down, I think--\u2019 (for, you see, Alice had learnt several\nthings of this sort in her lessons in the schoolroom, and though this\nwas not a VERY good opportunity for showing off her knowledge, as there\nwas no one to listen to her, still it was good practice to say it over)\n\u2018--yes, that\u2019s about the right distance--but then I wonder what Latitude\nor Longitude I\u2019ve got to?\u2019 (Alice had no idea what Latitude was, or\nLongitude either, but thought they were nice grand words to say.)\n\nPresently she began again. \u2018I wonder if I shall fall right THROUGH the\nearth! How funny it\u2019ll seem to come out among the people that walk with\ntheir heads downward! The Antipathies, I think--\u2019 (she was rather glad\nthere WAS no one listening, this time, as it didn\u2019t sound at all the\nright word) \u2018--but I shall have to ask them what the name of the country\nis, you know. Please, Ma\u2019am, is this New Zealand or Australia?\u2019 (and\nshe tried to curtsey as she spoke--fancy CURTSEYING as you\u2019re falling\nthrough the air! Do you think you could manage it?) \u2018And what an\nignorant little girl she\u2019ll think me for asking! No, it\u2019ll never do to\nask: perhaps I shall see it written up somewhere.\u2019\n\nDown, down, down. There was nothing else to do, so Alice soon began\ntalking again. \u2018Dinah\u2019ll miss me very much to-night, I should think!\u2019\n(Dinah was the cat.) \u2018I hope they\u2019ll remember her saucer of milk at\ntea-time. Dinah my dear! I wish you were down here with me! There are no\nmice in the air, I\u2019m afraid, but you might catch a bat, and that\u2019s very\nlike a mouse, you know. But do cats eat bats, I wonder?\u2019 And here Alice\nbegan to get rather sleepy, and went on saying to herself, in a dreamy\nsort of way, \u2018Do cats eat bats? Do cats eat bats?\u2019 and sometimes, \u2018Do\nbats eat cats?\u2019 for, you see, as she couldn\u2019t answer either question,\nit didn\u2019t much matter which way she put it. She felt that she was dozing\noff, and had just begun to dream that she was walking hand in hand with\nDinah, and saying to her very earnestly, \u2018Now, Dinah, tell me the truth:\ndid you ever eat a bat?\u2019 when suddenly, thump! thump! down she came upon\na heap of sticks and dry leaves, and the fall was over.\n\nAlice was not a bit hurt, and she jumped up on to her feet in a moment:\nshe looked up, but it was all dark overhead; before her was another\nlong passage, and the White Rabbit was still in sight, hurrying down it.\nThere was not a moment to be lost: away went Alice like the wind, and\nwas just in time to hear it say, as it turned a corner, \u2018Oh my ears\nand whiskers, how late it\u2019s getting!\u2019 She was close behind it when she\nturned the corner, but the Rabbit was no longer to be seen: she found\nherself in a long, low hall, which was lit up by a row of lamps hanging\nfrom the roof.\n\nThere were doors all round the hall, but they were all locked; and when\nAlice had been all the way down one side and up the other, trying every\ndoor, she walked sadly down the middle, wondering how she was ever to\nget out again.\n\nSuddenly she came upon a little three-legged table, all made of solid\nglass; there was nothing on it except a tiny golden key, and Alice\u2019s\nfirst thought was that it might belong to one of the doors of the hall;\nbut, alas! either the locks were too large, or the key was too small,\nbut at any rate it would not open any of them. However, on the second\ntime round, she came upon a low curtain she had not noticed before, and\nbehind it was a little door about fifteen inches high: she tried the\nlittle golden key in the lock, and to her great delight it fitted!\n\nAlice opened the door and found that it led into a small passage, not\nmuch larger than a rat-hole: she knelt down and looked along the passage\ninto the loveliest garden you ever saw. How she longed to get out of\nthat dark hall, and wander about among those beds of bright flowers and\nthose cool fountains, but she could not even get her head through the\ndoorway; \u2018and even if my head would go through,\u2019 thought poor Alice, \u2018it\nwould be of very little use without my shoulders. Oh, how I wish I could\nshut up like a telescope! I think I could, if I only knew how to begin.\u2019\nFor, you see, so many out-of-the-way things had happened lately,\nthat Alice had begun to think that very few things indeed were really\nimpossible.\n\nThere seemed to be no use in waiting by the little door, so she went\nback to the table, half hoping she might find another key on it, or at\nany rate a book of rules for shutting people up like telescopes: this\ntime she found a little bottle on it, [\u2018which certainly was not here\nbefore,\u2019 said Alice,) and round the neck of the bottle was a paper\nlabel, with the words \u2018DRINK ME\u2019 beautifully printed on it in large\nletters.\n\nIt was all very well to say \u2018Drink me,\u2019 but the wise little Alice was\nnot going to do THAT in a hurry. \u2018No, I\u2019ll look first,\u2019 she said, \u2018and\nsee whether it\u2019s marked \u201Cpoison\u201D or not\u2019; for she had read several nice\nlittle histories about children who had got burnt, and eaten up by wild\nbeasts and other unpleasant things, all because they WOULD not remember\nthe simple rules their friends had taught them: such as, that a red-hot\npoker will burn you if you hold it too long; and that if you cut your\nfinger VERY deeply with a knife, it usually bleeds; and she had never\nforgotten that, if you drink much from a bottle marked \u2018poison,\u2019 it is\nalmost certain to disagree with you, sooner or later.\n\nHowever, this bottle was NOT marked \u2018poison,\u2019 so Alice ventured to taste\nit, and finding it very nice, (it had, in fact, a sort of mixed flavour\nof cherry-tart, custard, pine-apple, roast turkey, toffee, and hot\nbuttered toast,) she very soon finished it off.\n\n\u2018What a curious feeling!\u2019 said Alice; \u2018I must be shutting up like a\ntelescope.\u2019\n\nAnd so it was indeed: she was now only ten inches high, and her face\nbrightened up at the thought that she was now the right size for going\nthrough the little door into that lovely garden. First, however, she\nwaited for a few minutes to see if she was going to shrink any further:\nshe felt a little nervous about this; \u2018for it might end, you know,\u2019 said\nAlice to herself, \u2018in my going out altogether, like a candle. I wonder\nwhat I should be like then?\u2019 And she tried to fancy what the flame of a\ncandle is like after the candle is blown out, for she could not remember\never having seen such a thing.\n\nAfter a while, finding that nothing more happened, she decided on going\ninto the garden at once; but, alas for poor Alice! when she got to the\ndoor, she found she had forgotten the little golden key, and when she\nwent back to the table for it, she found she could not possibly reach\nit: she could see it quite plainly through the glass, and she tried her\nbest to climb up one of the legs of the table, but it was too slippery;\nand when she had tired herself out with trying, the poor little thing\nsat down and cried.\n\n\u2018Come, there\u2019s no use in crying like that!\u2019 said Alice to herself,\nrather sharply; \u2018I advise you to leave off this minute!\u2019 She generally\ngave herself very good advice, (though she very seldom followed it),\nand sometimes she scolded herself so severely as to bring tears into\nher eyes; and once she remembered trying to box her own ears for having\ncheated herself in a game of croquet she was playing against herself,\nfor this curious child was very fond of pretending to be two people.\n\u2018But it\u2019s no use now,\u2019 thought poor Alice, \u2018to pretend to be two people!\nWhy, there\u2019s hardly enough of me left to make ONE respectable person!\u2019\n\nSoon her eye fell on a little glass box that was lying under the table:\nshe opened it, and found in it a very small cake, on which the words\n\u2018EAT ME\u2019 were beautifully marked in currants. \u2018Well, I\u2019ll eat it,\u2019 said\nAlice, \u2018and if it makes me grow larger, I can reach the key; and if it\nmakes me grow smaller, I can creep under the door; so either way I\u2019ll\nget into the garden, and I don\u2019t care which happens!\u2019\n\nShe ate a little bit, and said anxiously to herself, \u2018Which way? Which\nway?\u2019, holding her hand on the top of her head to feel which way it was\ngrowing, and she was quite surprised to find that she remained the same\nsize: to be sure, this generally happens when one eats cake, but Alice\nhad got so much into the way of expecting nothing but out-of-the-way\nthings to happen, that it seemed quite dull and stupid for life to go on\nin the common way.\n\nSo she set to work, and very soon finished off the cake.\n\n\u2018Curiouser and curiouser!\u2019 cried Alice (she was so much surprised, that\nfor the moment she quite forgot how to speak good English); \u2018now I\u2019m\nopening out like the largest telescope that ever was! Good-bye, feet!\u2019\n(for when she looked down at her feet, they seemed to be almost out of\nsight, they were getting so far off). \u2018Oh, my poor little feet, I wonder\nwho will put on your shoes and stockings for you now, dears? I\u2019m sure\n_I_ shan\u2019t be able! I shall be a great deal too far off to trouble\nmyself about you: you must manage the best way you can;--but I must be\nkind to them,\u2019 thought Alice, \u2018or perhaps they won\u2019t walk the way I want\nto go! Let me see: I\u2019ll give them a new pair of boots every Christmas.\u2019\n\nAnd she went on planning to herself how she would manage it. \u2018They must\ngo by the carrier,\u2019 she thought; \u2018and how funny it\u2019ll seem, sending\npresents to one\u2019s own feet! And how odd the directions will look!\n\nJust then her head struck against the roof of the hall: in fact she was\nnow more than nine feet high, and she at once took up the little golden\nkey and hurried off to the garden door.\n\nPoor Alice! It was as much as she could do, lying down on one side, to\nlook through into the garden with one eye; but to get through was more\nhopeless than ever: she sat down and began to cry again.\n\n\u2018You ought to be ashamed of yourself,\u2019 said Alice, \u2018a great girl like\nyou,\u2019 (she might well say this), \u2018to go on crying in this way! Stop this\nmoment, I tell you!\u2019 But she went on all the same, shedding gallons of\ntears, until there was a large pool all round her, about four inches\ndeep and reaching half down the hall.\n\nAfter a time she heard a little pattering of feet in the distance, and\nshe hastily dried her eyes to see what was coming. It was the White\nRabbit returning, splendidly dressed, with a pair of white kid gloves in\none hand and a large fan in the other: he came trotting along in a great\nhurry, muttering to himself as he came, \u2018Oh! the Duchess, the Duchess!\nOh! won\u2019t she be savage if I\u2019ve kept her waiting!\u2019 Alice felt so\ndesperate that she was ready to ask help of any one; so, when the Rabbit\ncame near her, she began, in a low, timid voice, \u2018If you please, sir--\u2019\nThe Rabbit started violently, dropped the white kid gloves and the fan,\nand skurried away into the darkness as hard as he could go.\n\nAlice took up the fan and gloves, and, as the hall was very hot, she\nkept fanning herself all the time she went on talking: \u2018Dear, dear! How\nqueer everything is to-day! And yesterday things went on just as usual.\nI wonder if I\u2019ve been changed in the night? Let me think: was I the\nsame when I got up this morning? I almost think I can remember feeling a\nlittle different. But if I\u2019m not the same, the next question is, Who\nin the world am I? Ah, THAT\u2019S the great puzzle!\u2019 And she began thinking\nover all the children she knew that were of the same age as herself, to\nsee if she could have been changed for any of them.\n\n\u2018I\u2019m sure I\u2019m not Ada,\u2019 she said, \u2018for her hair goes in such long\nringlets, and mine doesn\u2019t go in ringlets at all; and I\u2019m sure I can\u2019t\nbe Mabel, for I know all sorts of things, and she, oh! she knows such a\nvery little! Besides, SHE\u2019S she, and I\u2019m I, and--oh dear, how puzzling\nit all is! I\u2019ll try if I know all the things I used to know. Let me\nsee: four times five is twelve, and four times six is thirteen, and\nfour times seven is--oh dear! I shall never get to twenty at that rate!\nHowever, the Multiplication Table doesn\u2019t signify: let\u2019s try Geography.\nLondon is the capital of Paris, and Paris is the capital of Rome, and\nRome--no, THAT\u2019S all wrong, I\u2019m certain! I must have been changed for\nMabel! I\u2019ll try and say \u201CHow doth the little--\u201C\u2019 and she crossed her\nhands on her lap as if she were saying lessons, and began to repeat it,\nbut her voice sounded hoarse and strange, and the words did not come the\nsame as they used to do:--\n\n     \u2018How doth the little crocodile\n      Improve his shining tail,\n     And pour the waters of the Nile\n      On every golden scale!\n\n     \u2018How cheerfully he seems to grin,\n      How neatly spread his claws,\n     And welcome little fishes in\n      With gently smiling jaws!\u2019\n\n\u2018I\u2019m sure those are not the right words,\u2019 said poor Alice, and her eyes\nfilled with tears again as she went on, \u2018I must be Mabel after all, and\nI shall have to go and live in that poky little house, and have next to\nno toys to play with, and oh! ever so many lessons to learn! No, I\u2019ve\nmade up my mind about it; if I\u2019m Mabel, I\u2019ll stay down here! It\u2019ll be no\nuse their putting their heads down and saying \u201CCome up again, dear!\u201D I\nshall only look up and say \u201CWho am I then? Tell me that first, and then,\nif I like being that person, I\u2019ll come up: if not, I\u2019ll stay down here\ntill I\u2019m somebody else\u201D--but, oh dear!\u2019 cried Alice, with a sudden burst\nof tears, \u2018I do wish they WOULD put their heads down! I am so VERY tired\nof being all alone here!\u2019\n\nAs she said this she looked down at her hands, and was surprised to see\nthat she had put on one of the Rabbit\u2019s little white kid gloves while\nshe was talking. \u2018How CAN I have done that?\u2019 she thought. \u2018I must\nbe growing small again.\u2019 She got up and went to the table to measure\nherself by it, and found that, as nearly as she could guess, she was now\nabout two feet high, and was going on shrinking rapidly: she soon found\nout that the cause of this was the fan she was holding, and she dropped\nit hastily, just in time to avoid shrinking away altogether.\n\n\u2018That WAS a narrow escape!\u2019 said Alice, a good deal frightened at the\nsudden change, but very glad to find herself still in existence; \u2018and\nnow for the garden!\u2019 and she ran with all speed back to the little door:\nbut, alas! the little door was shut again, and the little golden key was\nlying on the glass table as before, \u2018and things are worse than ever,\u2019\nthought the poor child, \u2018for I never was so small as this before, never!\nAnd I declare it\u2019s too bad, that it is!\u2019\n\nAs she said these words her foot slipped, and in another moment, splash!\nshe was up to her chin in salt water. Her first idea was that she\nhad somehow fallen into the sea, \u2018and in that case I can go back by\nrailway,\u2019 she said to herself. (Alice had been to the seaside once in\nher life, and had come to the general conclusion, that wherever you go\nto on the English coast you find a number of bathing machines in the\nsea, some children digging in the sand with wooden spades, then a row\nof lodging houses, and behind them a railway station.) However, she soon\nmade out that she was in the pool of tears which she had wept when she\nwas nine feet high.\n\n\u2018I wish I hadn\u2019t cried so much!\u2019 said Alice, as she swam about, trying\nto find her way out. \u2018I shall be punished for it now, I suppose, by\nbeing drowned in my own tears! That WILL be a queer thing, to be sure!\nHowever, everything is queer to-day.\u2019\n\nJust then she heard something splashing about in the pool a little way\noff, and she swam nearer to make out what it was: at first she thought\nit must be a walrus or hippopotamus, but then she remembered how small\nshe was now, and she soon made out that it was only a mouse that had\nslipped in like herself.\n\n\u2018Would it be of any use, now,\u2019 thought Alice, \u2018to speak to this mouse?\nEverything is so out-of-the-way down here, that I should think very\nlikely it can talk: at any rate, there\u2019s no harm in trying.\u2019 So she\nbegan: \u2018O Mouse, do you know the way out of this pool? I am very tired\nof swimming about here, O Mouse!\u2019 (Alice thought this must be the right\nway of speaking to a mouse: she had never done such a thing before, but\nshe remembered having seen in her brother\u2019s Latin Grammar, \u2018A mouse--of\na mouse--to a mouse--a mouse--O mouse!\u2019) The Mouse looked at her rather\ninquisitively, and seemed to her to wink with one of its little eyes,\nbut it said nothing.\n\n\u2018Perhaps it doesn\u2019t understand English,\u2019 thought Alice; \u2018I daresay it\u2019s\na French mouse, come over with William the Conqueror.\u2019 (For, with all\nher knowledge of history, Alice had no very clear notion how long ago\nanything had happened.) So she began again: \u2018Ou est ma chatte?\u2019 which\nwas the first sentence in her French lesson-book. The Mouse gave a\nsudden leap out of the water, and seemed to quiver all over with fright.\n\u2018Oh, I beg your pardon!\u2019 cried Alice hastily, afraid that she had hurt\nthe poor animal\u2019s feelings. \u2018I quite forgot you didn\u2019t like cats.\u2019\n\n\u2018Not like cats!\u2019 cried the Mouse, in a shrill, passionate voice. \u2018Would\nYOU like cats if you were me?\u2019\n\n\u2018Well, perhaps not,\u2019 said Alice in a soothing tone: \u2018don\u2019t be angry\nabout it. And yet I wish I could show you our cat Dinah: I think you\u2019d\ntake a fancy to cats if you could only see her. She is such a dear quiet\nthing,\u2019 Alice went on, half to herself, as she swam lazily about in the\npool, \u2018and she sits purring so nicely by the fire, licking her paws and\nwashing her face--and she is such a nice soft thing to nurse--and she\u2019s\nsuch a capital one for catching mice--oh, I beg your pardon!\u2019 cried\nAlice again, for this time the Mouse was bristling all over, and she\nfelt certain it must be really offended. \u2018We won\u2019t talk about her any\nmore if you\u2019d rather not.\u2019\n\n\u2018We indeed!\u2019 cried the Mouse, who was trembling down to the end of his\ntail. \u2018As if I would talk on such a subject! Our family always HATED\ncats: nasty, low, vulgar things! Don\u2019t let me hear the name again!\u2019\n\n\u2018I won\u2019t indeed!\u2019 said Alice, in a great hurry to change the subject of\nconversation. \u2018Are you--are you fond--of--of dogs?\u2019 The Mouse did not\nanswer, so Alice went on eagerly: \u2018There is such a nice little dog near\nour house I should like to show you! A little bright-eyed terrier, you\nknow, with oh, such long curly brown hair! And it\u2019ll fetch things when\nyou throw them, and it\u2019ll sit up and beg for its dinner, and all sorts\nof things--I can\u2019t remember half of them--and it belongs to a farmer,\nyou know, and he says it\u2019s so useful, it\u2019s worth a hundred pounds! He\nsays it kills all the rats and--oh dear!\u2019 cried Alice in a sorrowful\ntone, \u2018I\u2019m afraid I\u2019ve offended it again!\u2019 For the Mouse was swimming\naway from her as hard as it could go, and making quite a commotion in\nthe pool as it went.\n\nSo she called softly after it, \u2018Mouse dear! Do come back again, and we\nwon\u2019t talk about cats or dogs either, if you don\u2019t like them!\u2019 When the\nMouse heard this, it turned round and swam slowly back to her: its\nface was quite pale (with passion, Alice thought), and it said in a low\ntrembling voice, \u2018Let us get to the shore, and then I\u2019ll tell you my\nhistory, and you\u2019ll understand why it is I hate cats and dogs.\u2019\n\nIt was high time to go, for the pool was getting quite crowded with the\nbirds and animals that had fallen into it: there were a Duck and a Dodo,\na Lory and an Eaglet, and several other curious creatures. Alice led the\nway, and the whole party swam to the shore.";
}
},{}],"src/api/persistent-database.ts":[function(require,module,exports) {
"use strict";

/* eslint-disable @typescript-eslint/no-use-before-define */
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var sentences_1 = __importDefault(require("./sentences"));
var MAX_DB_ENTRIES = 100000;
var INITIAL_ENTRIES;
(function (INITIAL_ENTRIES) {
  INITIAL_ENTRIES[INITIAL_ENTRIES["FEW"] = 5] = "FEW";
  INITIAL_ENTRIES[INITIAL_ENTRIES["MANY"] = 100] = "MANY";
})(INITIAL_ENTRIES || (INITIAL_ENTRIES = {}));
var PREPEND_IDS = false;
var PersistentServer = /** @class */function () {
  function PersistentServer() {
    this.entries = [];
    // 5 entries per second
    this.updateFrequency = 1000 / 10;
    this.lastSuccessfulFetch = Date.now();
    this.lastId = 1;
    this.reset();
  }
  PersistentServer.prototype.reset = function () {
    this.entries.length = 0;
    this.lastSuccessfulFetch = Date.now();
    this.lastId = 1;
    this.lastEntryTimeStamp = undefined;
    this.addEntriesToDatabase(INITIAL_ENTRIES.MANY);
    return {
      success: true
    };
  };
  PersistentServer.prototype.fetchWithDirectionId = function (limit, id, direction) {
    if (direction === void 0) {
      direction = 1;
    }
    this.updateDatabaseWithTimePassage();
    return fetchWithIdAndLimit(this.entries, id, limit, direction);
  };
  PersistentServer.prototype.fetchWithDirectionTimestamp = function (limit, timeStamp, direction) {
    if (direction === void 0) {
      direction = 1;
    }
    this.updateDatabaseWithTimePassage();
    return fetchWithTimeStampAndLimit(this.entries, timeStamp, limit, direction);
  };
  PersistentServer.prototype.fetchWithLimit = function (limit) {
    this.updateDatabaseWithTimePassage();
    return this.entries.slice(0, limit);
  };
  PersistentServer.prototype.setUpdateFrequency = function (frequency) {
    this.updateFrequency = 1000 / frequency;
  };
  PersistentServer.prototype.getComments = function (tweetId) {
    var tweet = this.entries.find(function (tweet) {
      return tweet.id === tweetId;
    });
    if (!tweet) {
      return {
        success: false,
        message: "No tweet found with the given id."
      };
    }
    if (!tweet.comments) {
      tweet.comments = getComments();
      return tweet.comments;
    }
    return tweet.comments;
  };
  PersistentServer.prototype.putComment = function (tweetId, comment) {
    var tweet = this.entries.find(function (tweet) {
      return tweet.id === tweetId;
    });
    if (!tweet) {
      return {
        success: false,
        message: "No tweet found with the given id."
      };
    }
    // Avoid overloading the DB
    var trimmed = comment.substr(0, 1000);
    if (!tweet.comments) {
      tweet.comments = getComments();
    }
    tweet.comments.push(trimmed);
    return tweet.comments;
  };
  PersistentServer.prototype.updateDatabaseWithTimePassage = function () {
    var now = Date.now();
    var timeWaited = now - this.lastSuccessfulFetch;
    var approxEntriesAdded = Math.floor(timeWaited / this.updateFrequency);
    if (approxEntriesAdded > 0) {
      this.lastSuccessfulFetch = now;
      this.addEntriesToDatabase(approxEntriesAdded);
    }
  };
  PersistentServer.prototype.addEntriesToDatabase = function (entries) {
    if (!this.lastEntryTimeStamp) {
      this.lastEntryTimeStamp = Date.now() - 1000 * this.updateFrequency;
    }
    var currentTime = Date.now();
    var diffFromLastEntry = currentTime - this.lastEntryTimeStamp;
    var steps = Math.ceil(diffFromLastEntry / entries);
    for (var i = 0; i < entries; i++) {
      if (this.entries.length > MAX_DB_ENTRIES) {
        return;
      }
      var entryTime = Math.min(currentTime, this.lastEntryTimeStamp + steps * Math.random());
      this.lastEntryTimeStamp = entryTime;
      this.putDatabaseRow(Math.floor(entryTime));
    }
  };
  PersistentServer.prototype.putDatabaseRow = function (timeStamp) {
    var sentence = sentences_1.default[Math.floor(Math.random() * sentences_1.default.length)];
    this.entries.unshift({
      image: "https://i.pravatar.cc/300?u=" + this.lastId,
      id: this.lastId,
      text: PREPEND_IDS ? this.lastId + ". " + sentence : sentence,
      username: "Person " + Math.round(1 + Math.random() * 100),
      timeStamp: timeStamp
    });
    this.lastId++;
  };
  return PersistentServer;
}();
// @ts-ignore
function fetchWithBeforeAndAfter(entries, beforeId, afterId) {
  return entries.filter(function (entry) {
    return entry.id < beforeId && entry.id > afterId;
  });
}
function getComments() {
  var commentsToPopulate = Math.max(2, Math.ceil(Math.random() * 20));
  var comments = [];
  for (var i = 0; i <= commentsToPopulate; i++) {
    comments.push(sentences_1.default[Math.floor(Math.random() * sentences_1.default.length)]);
  }
  return comments;
}
function fetchWithIdAndLimit(entries, id, limit, direction) {
  return sliceEntries(entries.filter(function (entry) {
    if (direction === 1) {
      return entry.id > id;
    } else {
      return entry.id < id;
    }
  }), limit, direction);
}
function fetchWithTimeStampAndLimit(entries, timeStamp, limit, direction) {
  return sliceEntries(entries.filter(function (entry) {
    if (direction === 1) {
      return entry.timeStamp > timeStamp;
    } else {
      return entry.timeStamp < timeStamp;
    }
  }), limit, direction);
}
function sliceEntries(entries, limit, direction) {
  if (direction === 1) {
    return entries.slice(Math.max(0, entries.length - limit), entries.length);
  }
  return entries.slice(0, limit);
}
exports.default = PersistentServer;
},{"./sentences":"src/api/sentences.ts"}],"src/api/index.ts":[function(require,module,exports) {
"use strict";

/* eslint-disable @typescript-eslint/no-use-before-define */
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postCommment = exports.getComments = exports.reset = exports.fetchTweetsBeforeTime = exports.fetchTweetsAfterTime = exports.fetchTweetsAfterId = exports.fetchTweetsBeforeId = exports.fetchTweetsByCount = void 0;
var persistent_database_1 = __importDefault(require("./persistent-database"));
var instance = new persistent_database_1.default();
// Out of 100
var FAILURE_CHANCE;
(function (FAILURE_CHANCE) {
  FAILURE_CHANCE[FAILURE_CHANCE["EXCELLENT"] = 0] = "EXCELLENT";
  FAILURE_CHANCE[FAILURE_CHANCE["RARE"] = 10] = "RARE";
  FAILURE_CHANCE[FAILURE_CHANCE["BAD"] = 40] = "BAD";
})(FAILURE_CHANCE || (FAILURE_CHANCE = {}));
function addRandomFailureAndDelay(latency) {
  return __awaiter(this, void 0, void 0, function () {
    var failureChance, coinToss;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          failureChance = FAILURE_CHANCE.BAD;
          coinToss = Math.ceil(Math.random() * 100);
          return [4 /*yield*/, new Promise(function (resolve) {
            return setTimeout(resolve, Math.ceil(latency * (0.5 + Math.random() * 0.5)));
          })];
        case 1:
          _a.sent();
          if (coinToss < failureChance) {
            throw new Error("API call failed");
          }
          return [2 /*return*/];
      }
    });
  });
}

function fetchTweetsByCount(_a) {
  var count = _a.count;
  return fetchTweets({
    count: count
  });
}
exports.fetchTweetsByCount = fetchTweetsByCount;
function fetchTweetsBeforeId(_a) {
  var beforeId = _a.beforeId,
    count = _a.count;
  return fetchTweets({
    beforeId: beforeId,
    count: count
  });
}
exports.fetchTweetsBeforeId = fetchTweetsBeforeId;
function fetchTweetsAfterId(_a) {
  var afterId = _a.afterId,
    count = _a.count;
  return fetchTweets({
    afterId: afterId,
    count: count
  });
}
exports.fetchTweetsAfterId = fetchTweetsAfterId;
function fetchTweetsAfterTime(_a) {
  var afterTime = _a.afterTime,
    count = _a.count;
  return fetchTweets({
    afterTime: afterTime,
    count: count
  });
}
exports.fetchTweetsAfterTime = fetchTweetsAfterTime;
function fetchTweetsBeforeTime(_a) {
  var beforeTime = _a.beforeTime,
    count = _a.count;
  return fetchTweets({
    beforeTime: beforeTime,
    count: count
  });
}
exports.fetchTweetsBeforeTime = fetchTweetsBeforeTime;
function fetchTweets(params) {
  return __awaiter(this, void 0, void 0, function () {
    var count, tweetsPerSecond, _a, latency, response;
    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          count = params.count, tweetsPerSecond = params.tweetsPerSecond, _a = params.latency, latency = _a === void 0 ? 3000 : _a;
          return [4 /*yield*/, addRandomFailureAndDelay(latency)];
        case 1:
          _b.sent();
          // Sanitize input
          count = count ? 20 : Math.max(1, Math.min(50, Number(count)));
          if (tweetsPerSecond) {
            tweetsPerSecond = Math.max(0.2, Math.min(20, Number(tweetsPerSecond)));
            instance.setUpdateFrequency(tweetsPerSecond);
          }
          if ("beforeId" in params) {
            response = instance.fetchWithDirectionId(count, params.beforeId, -1);
          } else if ("afterId" in params) {
            response = instance.fetchWithDirectionId(count, params.afterId, 1);
          } else if ("beforeTime" in params) {
            response = instance.fetchWithDirectionTimestamp(count, params.beforeTime, -1);
          } else if ("afterTime" in params) {
            response = instance.fetchWithDirectionTimestamp(count, params.afterTime, 1);
          } else if (count) {
            response = instance.fetchWithLimit(count);
          } else {
            throw new Error("Invalid arguments to fetchTweets");
          }
          return [2 /*return*/, response];
      }
    });
  });
}
function reset() {
  return instance.reset();
}
exports.reset = reset;
function getComments(tweetId) {
  return instance.getComments(tweetId);
}
exports.getComments = getComments;
function postCommment(tweetId, comment) {
  return instance.putComment(tweetId, comment);
}
exports.postCommment = postCommment;
},{"./persistent-database":"src/api/persistent-database.ts"}],"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }
  return bundleURL;
}
function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }
  return '/';
}
function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/styles.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/index.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};
var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Hello candidate, this is the index file which lands to the solution of your problem.
 * As you can see a rudimentry code has been implemented to load the feeds.
 * You have several API options available at your disposal to achieve your task.
 * They are documented below.
 */
var api_1 = require("./api");
require("./styles.css");
var app = document.getElementById("app");
var allTweets = [];
var displayedTweetIds = new Set(); // tweet IDs
var interval;
var timeout;
var afterId = 0;
function fetchApi() {
  return __awaiter(this, void 0, void 0, function () {
    var fetchTweets, uniqueTweets, html_1, err_1;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2,, 4]);
          return [4 /*yield*/, (0, api_1.fetchTweetsAfterId)({
            afterId: afterId,
            count: 10
          })];
        case 1:
          fetchTweets = _a.sent();
          uniqueTweets = fetchTweets.filter(function (tweet) {
            return !displayedTweetIds.has(tweet.id);
          });
          afterId = fetchTweets[0].id; //after this 0th id start fetching
          // Add new ids to the displayedTweetIds set
          uniqueTweets.forEach(function (tweet) {
            displayedTweetIds.add(tweet.id);
          });
          allTweets = __spreadArray(__spreadArray([], allTweets, true), uniqueTweets, true);
          html_1 = "";
          allTweets.sort(function (a, b) {
            return b.id - a.id;
          });
          allTweets.forEach(function (tweet) {
            html_1 += "\n          <div class=\"tweet\">\n            " + tweet.id + "\n            <img src=\"" + tweet.image + "\" width=\"50px\" />\n            <div class=\"tweet-text\">" + tweet.text + "</div>\n          </div>\n        ";
          });
          app.innerHTML = html_1;
          return [3 /*break*/, 4];
        case 2:
          err_1 = _a.sent();
          return [4 /*yield*/, fetchApi()];
        case 3:
          _a.sent();
          return [3 /*break*/, 4];
        case 4:
          return [2 /*return*/];
      }
    });
  });
}

interval = setInterval(function () {
  return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4 /*yield*/, fetchApi()];
        case 1:
          return [2 /*return*/, _a.sent()];
      }
    });
  });
}, 5000);
timeout = setTimeout(fetchApi, 5000);
var oldVal = 0;
var newVal = 0;
window.addEventListener("scroll", function (e) {
  newVal = window.pageYOffset;
  if (oldVal < newVal) {
    // scroll down 
    clearTimeout(timeout);
  } else if (oldVal > newVal) {
    if (newVal === 0) {
      interval = setInterval(function () {
        return __awaiter(void 0, void 0, void 0, function () {
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4 /*yield*/, fetchApi()];
              case 1:
                return [2 /*return*/, _a.sent()];
            }
          });
        });
      }, 1000);
    }
  }
  oldVal = newVal; //update oldval
});
//starts here
fetchApi();
},{"./api":"src/api/index.ts","./styles.css":"src/styles.css"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "46357" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.ts"], null)
//# sourceMappingURL=/src.f10117fe.js.map