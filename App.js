var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* import React from 'react';
import logo from './logo.svg';
import './App.css'; */

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    //this.freqArray = [["service",1],["commerce",1],["privacy",1],["faq",1],["forward",1],["move",1],["striking",1],["past",1],["collaborated",1],["world",1],["most",1],["celebrated",1],["available",1],["products",1],["bring",1],["love",1],["diverse",1],["pool",1],["fantastic",1],["already",1],["tailored",1],["avail",1],["really",1],["gift",1],["me",1],["film",1],["over",1],["million",1],["written",1],["every",1],["day",1],["opportunities",1],["exploring",1],["interested",1],["show",1],["showreel",1],["shirts",1],["strong",1],["facebook",1],["fb",1],["https",1],["watch",1],["instagram",1],["websites",1],["twitter",1],["terriblytiny",1],["time",1],["terriblytinytalkies",1],["sell",1],["frame",1],["narrative",1],["back",1],["art",1],["found",1],["fading",1],["save",1],["endures",1],["idea",1],["keyword",1],["touch",1],["central",1],["submission",1],["related",1],["queries",1],["around",1],["filmed",1],["minutes",1],["workshops",1],["let",1],["inbox",1],["five",1],["talkie",1],["each",1],["case",1],["provide",1],["thematic",1],["digital",1],["questions",1],["craft",1],["yet",1],["say",1],["hi",1],["ping",1],["attended",1],["country",1],["organize",1],["filmmakers",1],["then",1],["help",1],["eyes",1],["send",1],["submitted",1],["something",1],["talented",1],["distinctive",1],["usually",1],["takes",1],["while",1],["huge",1],["number",1],["coming",1],["request",1],["daily",1],["out",1],["brings",1],["tedious",1],["but",1],["task",1],["gladly",1],["upon",1],["scheduled",1],["eye",1],["receive",1],["saying",1],["terms",1],["keep",1],["collective",1],["writing",1],["individual",1],["logistically",1],["difficult",1],["give",1],["however",1],["updates",1],["represent",1],["systems",1],["into",1],["place",1],["gets",1],["rejected",1],["informed",1],["office",1],["sending",1],["easy",1],["nope",1],["term",1],["writer",1],["interns",1],["picks",1],["dual",1],["post",1],["curate",1],["tirelessly",1],["two",1],["page",1],["curators",1],["come",1],["bunch",1],["dedicated",1],["than",1],["characters",1],["those",1],["accepting",1],["longer",1],["helped",1],["discovered",1],["today",1],["need",1],["mention",1],["word",1],["choice",1],["they",1],["finding",1],["easier",1],["also",1],["lets",1],["wait",1],["began",1],["decides",1],["oh",1],["college",2],["up",2],["team",2],["makes",2],["only",2],["more",2],["pieces",2],["ve",2],["test",2],["copy",2],["taking",2],["group",2],["resume",2],["cover",2],["letter",2],["does",2],["take",2],["handpicked",2],["no",2],["there",2],["working",2],["collaborate",2],["go",2],["upcoming",2],["currently",2],["feedback",2],["under",2],["curation",2],["way",2],["internal",2],["tell",2],["too",2],["submit",2],["haven",2],["received",2],["certificate",2],["simply",2],["other",2],["films",2],["address",2],["collaborations",2],["potential",2],["them",2],["read",2],["exclusive",2],["official",2],["media",2],["nnnow",2],["readers",2],["stories",2],["short",2],["someone",2],["create",2],["brands",2],["together",2],["platforms",2],["storytelling",2],["so",2],["email",3],["which",3],["youtube",3],["collab",3],["here",3],["goes",3],["submissions",3],["become",3],["published",3],["any",3],["are",3],["best",3],["one",3],["who",3],["brand",3],["when",3],["across",3],["this",3],["apply",3],["stttore",3],["shoot",3],["bit",3],["ly",3],["community",3],["social",3],["about",3],["what",3],["workshop",3],["city",3],["hello",3],["want",3],["that",3],["part",3],["write",4],["know",4],["http",4],["by",4],["an",4],["ll",4],["writers",4],["will",4],["merchandise",4],["tales",4],["be",5],["my",5],["select",5],["with",5],["or",5],["www",5],["events",5],["is",6],["talkies",6],["re",6],["have",6],["find",6],["from",6],["get",6],["yes",6],["mail",6],["all",7],["work",7],["ttt",8],["if",8],["tale",8],["how",8],["in",9],["where",9],["your",9],["on",10],["our",10],["tiny",11],["terribly",11],["for",11],["it",12],["do",12],["terriblytinytales",12],["of",13],["com",13],["us",13],["the",15],["at",15],["and",16],["we",16],["can",18],["to",23],["you",23]];
    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.tableData = [];
    _this.state = {
      freqArray: [["sample", 0]],
      topFreq: 2,
      submitted: true
    };

    _this.setTopFreq = _this.setTopFreq.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: "setTopFreq",
    value: function setTopFreq(event) {
      this.setState({
        topFreq: event.target.value
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      this.setState({
        submitted: false
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var topFreq = this.state.topFreq;
      var endPoint = '/freq-map/' + topFreq;

      fetch(endPoint).then(function (res) {
        return res.json();
      }).then(function (result) {
        _this2.setState({
          freqArray: result["freqArray"]
        });
      }, function (error) {
        _this2.setState({
          error: error
        });
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this3 = this;

      if (!this.state.submitted) {
        var endPoint = '/freq-map/' + this.state.topFreq;

        fetch(endPoint).then(function (res) {
          return res.json();
        }).then(function (result) {
          _this3.setState({
            freqArray: result["freqArray"],
            submitted: true
          });
        }, function (error) {
          _this3.setState({
            submitted: true,
            error: error
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {

      this.tableData = this.state.freqArray.map(function (arr, ind) {
        return React.createElement(
          "tr",
          { key: ind },
          React.createElement(
            "td",
            null,
            arr[0]
          ),
          React.createElement(
            "td",
            null,
            arr[1]
          )
        );
      });

      return React.createElement(
        "div",
        { className: "App" },
        React.createElement(
          "div",
          null,
          React.createElement(
            "label",
            null,
            " Frequency value  :",
            React.createElement("input", { type: "number",
              value: this.state.value,
              onChange: this.setTopFreq })
          ),
          React.createElement(
            "button",
            {
              onClick: this.handleSubmit },
            "Show words"
          )
        ),
        React.createElement(
          "div",
          { className: "freq-table" },
          React.createElement(
            "table",
            null,
            React.createElement(
              "thead",
              null,
              React.createElement(
                "tr",
                null,
                React.createElement(
                  "td",
                  null,
                  "word"
                ),
                React.createElement(
                  "td",
                  null,
                  "frequency"
                )
              )
            ),
            React.createElement(
              "tbody",
              null,
              this.tableData
            )
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));

//export default App;