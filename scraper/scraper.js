var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var PrismaClient = require('@prisma/client').PrismaClient;
var puppeteer = require("puppeteer");
var prisma = new PrismaClient();
var url = "https://www.sreality.cz/hledani/prodej/byty?strana=";
// interface result {
//   name: string;
//   locality: string;
//   imgUrls: string[];
// };
var scrapePage = function (url) { return __awaiter(_this, void 0, void 0, function () {
    var browser, page, i, imgUrls, x, element, src, imgUrl, error_1, imgUrl, names, localities;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, puppeteer.launch({ headless: true })];
            case 1:
                browser = _a.sent();
                return [4 /*yield*/, browser.newPage()];
            case 2:
                page = _a.sent();
                return [4 /*yield*/, page.goto(url, { waitUntil: "networkidle2" })];
            case 3:
                _a.sent();
                i = 1;
                _a.label = 4;
            case 4:
                if (!(i < 20)) return [3 /*break*/, 18];
                imgUrls = [];
                // img urls
                return [4 /*yield*/, page.waitForSelector("span.locality.ng-binding")];
            case 5:
                // img urls
                _a.sent();
                x = 1;
                _a.label = 6;
            case 6:
                if (!(x < 7)) return [3 /*break*/, 13];
                return [4 /*yield*/, page.$x("/html/body/div[2]/div[1]/div[2]/div[3]/div[3]/div/div/div/div/div[3]/div/div[".concat(i, "]/preact/div/div/a[").concat(x, "]/img"))];
            case 7:
                element = (_a.sent())[0];
                _a.label = 8;
            case 8:
                _a.trys.push([8, 11, , 12]);
                return [4 /*yield*/, element.getProperty("src")];
            case 9:
                src = _a.sent();
                return [4 /*yield*/, src.jsonValue()];
            case 10:
                imgUrl = _a.sent();
                imgUrls.push(imgUrl);
                return [3 /*break*/, 12];
            case 11:
                error_1 = _a.sent();
                imgUrl = "No Img";
                imgUrls.push(imgUrl);
                return [3 /*break*/, 12];
            case 12:
                x++;
                return [3 /*break*/, 6];
            case 13: return [4 /*yield*/, page.evaluate(function () { return Array.from(document.querySelectorAll("span.name.ng-binding"), function (element) { return element.textContent; }); })];
            case 14:
                names = _a.sent();
                return [4 /*yield*/, page.evaluate(function () { return Array.from(document.querySelectorAll("span.locality.ng-binding"), function (element) { return element.textContent; }); })];
            case 15:
                localities = _a.sent();
                // results.push({
                //   name: names[i],
                //   locality: localities[i],
                //   imgUrls: imgUrls
                // })
                return [4 /*yield*/, prisma.flats.create({
                        data: {
                            name: names[i],
                            locality: localities[i],
                            imgUrls: imgUrls
                        }
                    })];
            case 16:
                // results.push({
                //   name: names[i],
                //   locality: localities[i],
                //   imgUrls: imgUrls
                // })
                _a.sent();
                _a.label = 17;
            case 17:
                i++;
                return [3 /*break*/, 4];
            case 18: 
            // cleanup
            return [4 /*yield*/, browser.close()];
            case 19:
                // cleanup
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
// Scraping
for (var i = 1; i < 25; i++) {
    scrapePage(url + String(i));
}
