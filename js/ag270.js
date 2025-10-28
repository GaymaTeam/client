const objectsApiVersion = 2;
const wearablesApiVersion = 9;

function _0x15f517(_0x4cb6b6, _0x4921cc, _0x1e1fcb) {
    _0x4cb6b6 = (_0x4cb6b6 << 16 | _0x4921cc << 8 | _0x1e1fcb).toString(16);
    return "#" + "0".repeat(6 - _0x4cb6b6.length) + _0x4cb6b6;
}
Array.prototype.remove = function(_0x9d5af4) {
    var _0x9d5af4 = this.indexOf(_0x9d5af4);
    var _0x42d279 = -1 !== _0x9d5af4;
    if (_0x42d279) {
        this.splice(_0x9d5af4, 1);
    }
    return _0x42d279;
};
Math.clamp = function(_0x244c0d, _0x20b919, _0x4da5fe) {
    return Math.min(Math.max(_0x244c0d, _0x20b919), _0x4da5fe);
};
debugDataSize = 0;
debugFail = false;
let ws;

function isReady(force) {
    return ws && ws.readyState === WebSocket.OPEN && (_0x3b0762 && ws.bufferedAmount < 8192 || force);
}

var _0x3b4e10 = {
    s: 56,
    c: "UCTB0RGol-BnYKe0XliITlYg",
    cc: true
};
var _0x3970f6 = {
    s: 2281,
    c: "UC9v2PgTIQ24XaW7hhzfZAkQ",
    cc: false
};
var _0x4343d0 = {
    s: 2282,
    c: "UCDlg1maSU9SLQyD2o5zg-LQ",
    cc: true
};
var _0x59b443 = {
    s: 2297,
    c: "UCnZf3yC2jRNoRYV_Z7A7VJg",
    cc: true
};
var _0x47e1db = {
    s: 2331,
    c: "UCiQ9ppFo-X24RrF-h9Grbgw",
    cc: false
};
var _0x5b0b2b = {
    s: 2529,
    c: "UCmnPF8dH7sJN8qvxhXg7eSA",
    cc: true
};
var _0x3de215 = {
    s: 2683,
    c: "UCWSKctuGO6dOPp-9FRUpGUA",
    cc: false
};
var _0x5aaa29 = {
    s: 2832,
    c: "UCNaj0L-_RJziNMZTzJghiuw",
    cc: false
};
var _0x262c61 = {
    x: 0,
    y: 0
};
var _0x5d9340 = {
    x: 0,
    y: 0
};
var _0x256390;
window.onload = function() {
    windowIsLoaded = true;
    if (_0x396332) {
        _0x396332.port.postMessage("register");
    }
    _0xeb6d2b();
    setTimeout(_0xeb6d2b, 0);
    setTimeout(_0xeb6d2b, 30000);
    _0x4eac2b.focus();
    (function _0x353b54(_0x56e762) {
        _0xb14342.font = "18px Ubuntu, sans-serif";
        var _0x58b4a0 = _0xb14342.measureText("QW@HhsXJ").width;
        _0xb14342.font = "18px Ubuntu";
        if (_0x58b4a0 == _0xb14342.measureText("QW@HhsXJ").width) {
            for (_0x58b4a0 = 1; _0x58b4a0 <= 1500; _0x58b4a0++) {
                _0xb14342.font = _0x58b4a0 + "px Ubuntu";
            }
            setTimeout(function() {
                _0x2332bb = true;
            }, 500);
        } else if ((_0x56e762 = _0x56e762 || 1) < 300) {
            setTimeout(function() {
                _0x353b54(_0x56e762 + 1);
            }, 10);
        } else {
            _0x2332bb = true;
        }
    })();
    var _0xbbfdd2 = false;
    var _0x4a595d = false;
    if (null != window.localStorage.settings && (undefined !== (_0x492d1e = JSON.parse(window.localStorage.settings)).nickName && (_0x1b60af.nickName = _0x492d1e.nickName), undefined !== _0x492d1e.user && '' == _0x492d1e.user && (undefined !== _0x492d1e.skinId && (_0x1b60af.skinId = _0x492d1e.skinId), undefined !== _0x492d1e.wearablesSelected && (_0x1b60af.wearablesSelected = _0x492d1e.wearablesSelected.slice(0)), _0x1b60af.user = ''), undefined !== _0x492d1e.sSounds && (_0x1b60af.sSounds = _0x492d1e.sSounds), undefined !== _0x492d1e.sSkins && (_0x1b60af.sSkins = _0x492d1e.sSkins), undefined !== _0x492d1e.sWearables && (_0x1b60af.sWearables = _0x492d1e.sWearables), undefined !== _0x492d1e.sColors && (_0x1b60af.sColors = _0x492d1e.sColors), undefined !== _0x492d1e.sNames && (_0x1b60af.sNames = _0x492d1e.sNames), undefined !== _0x492d1e.sMinionNames && (_0x1b60af.sMinionNames = _0x492d1e.sMinionNames), undefined !== _0x492d1e.sMass && (_0x1b60af.sMass = _0x492d1e.sMass), undefined !== _0x492d1e.sFood && (_0x1b60af.sFood = _0x492d1e.sFood), undefined !== _0x492d1e.sFoodHalf && (_0x1b60af.sFoodHalf = _0x492d1e.sFoodHalf), undefined !== _0x492d1e.sCellAnimations && (_0x1b60af.sCellAnimations = _0x492d1e.sCellAnimations), undefined !== _0x492d1e.sSkinAnimations && (_0x1b60af.sSkinAnimations = _0x492d1e.sSkinAnimations), undefined !== _0x492d1e.sMapBorder && (_0x1b60af.sMapBorder = _0x492d1e.sMapBorder), undefined !== _0x492d1e.sFancyGrid && (_0x1b60af.sFancyGrid = _0x492d1e.sFancyGrid), undefined !== _0x492d1e.sSectionGrid && (_0x1b60af.sSectionGrid = _0x492d1e.sSectionGrid), undefined !== _0x492d1e.sGrid && (_0x1b60af.sGrid = _0x492d1e.sGrid && false), undefined !== _0x492d1e.sCustomBack && (_0x1b60af.sCustomBack = _0x492d1e.sCustomBack), undefined !== _0x492d1e.sCustomBackType && (_0x1b60af.sCustomBackType = _0x492d1e.sCustomBackType), undefined !== _0x492d1e.sCustomBackOpacity && (_0x1b60af.sCustomBackOpacity = _0x492d1e.sCustomBackOpacity), undefined !== _0x492d1e.sCustomBackClip && (_0x1b60af.sCustomBackClip = _0x492d1e.sCustomBackClip), undefined !== _0x492d1e.sCustomBackEnableColor && (_0x1b60af.sCustomBackEnableColor = _0x492d1e.sCustomBackEnableColor), undefined !== _0x492d1e.sCustomBackColor && (_0x1b60af.sCustomBackColor = _0x492d1e.sCustomBackColor), undefined !== _0x492d1e.sDark && (_0x1b60af.sDark = _0x492d1e.sDark), undefined !== _0x492d1e.sSlowMotion && (_0x1b60af.sSlowMotion = _0x492d1e.sSlowMotion), undefined !== _0x492d1e.sFPS && (_0x1b60af.sFPS = _0x492d1e.sFPS), undefined !== _0x492d1e.sZoom && (_0x1b60af.sZoom = _0x492d1e.sZoom), undefined !== _0x492d1e.sFixedZoom && (_0x1b60af.sFixedZoom = _0x492d1e.sFixedZoom), undefined !== _0x492d1e.fixedZoomScale && (_0x1b60af.fixedZoomScale = _0x492d1e.fixedZoomScale), undefined !== _0x492d1e.sMinionUi && (_0x1b60af.sMinionUi = _0x492d1e.sMinionUi), undefined !== _0x492d1e.sLeaderboard && (_0x1b60af.sLeaderboard = _0x492d1e.sLeaderboard), undefined !== _0x492d1e.sChat && (_0x1b60af.sChat = _0x492d1e.sChat), undefined !== _0x492d1e.sChatSize && (_0x1b60af.sChatSize = _0x492d1e.sChatSize), undefined !== _0x492d1e.sMinimap && (_0x1b60af.sMinimap = _0x492d1e.sMinimap), undefined !== _0x492d1e.sCellBorders && (_0x1b60af.sCellBorders = _0x492d1e.sCellBorders), undefined !== _0x492d1e.sLargeNames && (_0x1b60af.sLargeNames = _0x492d1e.sLargeNames), undefined !== _0x492d1e.sNameOutlines && (_0x1b60af.sNameOutlines = _0x492d1e.sNameOutlines), undefined !== _0x492d1e.sCellSpikes && (_0x1b60af.sCellSpikes = _0x492d1e.sCellSpikes), undefined !== _0x492d1e.sTransparentViruses && (_0x1b60af.sTransparentViruses = _0x492d1e.sTransparentViruses), undefined !== _0x492d1e.sClassicViruses && (_0x1b60af.sClassicViruses = _0x492d1e.sClassicViruses), undefined !== _0x492d1e.sPolygonShapes && (_0x1b60af.sPolygonShapes = _0x492d1e.sPolygonShapes), undefined !== _0x492d1e.sLineShapes && (_0x1b60af.sLineShapes = _0x492d1e.sLineShapes), undefined !== _0x492d1e.sBubbleCells && (_0x1b60af.sBubbleCells = _0x492d1e.sBubbleCells), undefined !== _0x492d1e.sGraphics && (_0x1b60af.sGraphics = _0x492d1e.sGraphics), undefined !== _0x492d1e.sMobileLeft && (_0x1b60af.sMobileLeft = _0x492d1e.sMobileLeft), undefined !== _0x492d1e.sMobileFeedLock)) {
        _0x1b60af.sMobileFeedLock = _0x492d1e.sMobileFeedLock;
    }
    if (isMobile && _0x492d1e && (_0x492d1e.version || 0) < 2) {
        setDefaults();
    }
    _0x536824 = false;
    _0x5df715(0);
    _0x5cfc91(_0x1b60af.wearablesSelected);
    $("#cSkins").prop("checked", _0x1b60af.sSkins).change();
    $("#cWearables").prop("checked", true).change();
    $("#cColors").prop("checked", true).change();
    $("#cNames").prop("checked", true).change();
    $("#cMinionNames").prop("checked", true).change();
    $("#cMass").prop("checked", true).change();
    $("#cFood").prop("checked", true).change();
    $("#cFoodHalf").prop("checked", false).change();
    $("#cCellAnimations").prop("checked", true).change();
    $("#cSkinAnimations").prop("checked", true).change();
    $("#cMapBorder").prop("checked", true).change();
    $("#cFancyGrid").prop("checked", true).change();
    $("#cSectionGrid").prop("checked", false).change();
    $("#cGrid").prop("checked", false).change();
    $("#cCustomBack").prop("checked", false).change();
    $("input[name=customBackType][value=0]").prop("checked", true).change();
    $("#customBackOpacitySlider").val(50).change();
    $("#cCustomBackClip").prop("checked", false).change();
    $("#cCustomBackEnableColor").prop("checked", false).change();
    $("#customBackColorPicker").val("#000000").change();
    $("#cDark").prop("checked", false).change();
    $("#cSlowMotion").prop("checked", false).change();
    $("#cFPS").prop("checked", true).change();
    $("#cZoom").prop("checked", true).change();
    $("#cSounds").prop("checked", true).change();
    $("#cFixedZoom").prop("checked", false).change();
    $("#cMinionUi").prop("checked", false).change();
    $("#cLeaderboard").prop("checked", true).change();
    $("#cChat").prop("checked", true).change();
    $("#cChatSize").prop("checked", false).change();
    $("#cMinimap").prop("checked", true).change();
    $("#cCellBorders").prop("checked", false).change();
    $("#cLargeNames").prop("checked", false).change();
    $("#cNameOutlines").prop("checked", true).change();
    $("#cCellSpikes").prop("checked", true).change();
    $("#cClassicViruses").prop("checked", false).change();
    $("#cPolygonShapes").prop("checked", false).change();
    $("#cLineShapes").prop("checked", false).change();
    $("#cBubbleCells").prop("checked", false).change();
    $("#oGraphics").val('0').change();
    if (isMobile) {
        $("#cMobileLeft").prop("checked", false).change();
        $("#cMobileFeedLock").prop("checked", true).change();
    }
    _0x536824 = true;
    (() => {
        var _0xde8d5d;
        if (window.localStorage.hotkeys && (undefined !== (_0xde8d5d = JSON.parse(window.localStorage.hotkeys)).Space && (_0x3569f8.Space = _0xde8d5d.Space), undefined !== _0xde8d5d.W && (_0x3569f8.W = _0xde8d5d.W), undefined !== _0xde8d5d.V && (_0x3569f8.V = _0xde8d5d.V), undefined !== _0xde8d5d.Z && (_0x3569f8.Z = _0xde8d5d.Z), undefined !== _0xde8d5d.F && (_0x3569f8.F = _0xde8d5d.F), undefined !== _0xde8d5d.Q && (_0x3569f8.Q = _0xde8d5d.Q), undefined !== _0xde8d5d.E && (_0x3569f8.E = _0xde8d5d.E), undefined !== _0xde8d5d.S && (_0x3569f8.S = _0xde8d5d.S), undefined !== _0xde8d5d.A && (_0x3569f8.A = _0xde8d5d.A), undefined !== _0xde8d5d.X && (_0x3569f8.X = _0xde8d5d.X), undefined !== _0xde8d5d.I && (_0x3569f8.I = _0xde8d5d.I), undefined !== _0xde8d5d.C && (_0x3569f8.C = _0xde8d5d.C), undefined !== _0xde8d5d.D && (_0x3569f8.D = _0xde8d5d.D), undefined !== _0xde8d5d.T && (_0x3569f8.T = _0xde8d5d.T), undefined !== _0xde8d5d.M && (_0x3569f8.M = _0xde8d5d.M), undefined !== _0xde8d5d.W360 && (_0x3569f8.W360 = _0xde8d5d.W360), undefined !== _0xde8d5d.DW)) {
            _0x3569f8.DW = _0xde8d5d.DW;
        }
        _0x3b71b7();
    })();
    _0x11c620();
    ((_0x116508, _0x2ae0ae, _0x3958df) => {
        function _0x2f0e62() {
            try {
                var _0xc9f244 = _0x123859.transaction(_0x116508, "readonly").objectStore(_0x116508).get(_0x2ae0ae);
                _0xc9f244.onsuccess = function(_0x5b13cf) {
                    if ("function" == typeof _0x3958df) {
                        _0x3958df(_0xc9f244.result);
                    }
                };
            } catch (_0x20ead8) {}
        }
        if (_0x123859) {
            _0x2f0e62();
        } else {
            _0xbe31b4(_0x2f0e62);
        }
    })("general", "cbgDataURL", function(_0x5a56e4) {
        if ('' != (_0x5a56e4 = _0x5a56e4 || '')) {
            if (_0x12e7a7 || _0x14d497) {
                _0x350e59(_0x5a56e4, false);
            } else {
                _0x2d537c = _0x5a56e4;
            }
        }
    });
    (() => {
        var _0x4d53d9;
        if ($("#level2").is(":visible")) {
            _0x4d53d9 = 'force-hide';
            $("#level2").addClass(_0x4d53d9);
            if (!$("#level2").is(":visible")) {
                _0x305b0f = true;
            }
            $("#level2").removeClass(_0x4d53d9);
        }
    })();

    function _0x234e04(_0x1feef2) {
        _0x1feef2.stopPropagation();
    }

    function _0x4c920b(_0x56aabc) {
        _0x56aabc.preventDefault();
        _0x56aabc.stopPropagation();
    }
    var _0x3ac4f2;
    var _0x492d1e = document.body;
    var _0x472070 = document.getElementById("chtbox");
    var _0x5b5711 = document.getElementById("chtControls");
    var _0x5bcc48 = document.getElementById("emojiDropdown");
    var _0x376468 = document.getElementById("commandsDropdown");
    var _0x2216eb = document.getElementById("skinExampleMenu");
    var _0x5f4cbe = document.getElementById("cellExampleShop");
    var _0x7a8f57 = document.getElementById("friendDialog");
    var _0x1e0756 = document.getElementById("friendAddInput");
    var _0x1954b9 = document.getElementById("settingsBtn");
    var _0x56cf6a = document.getElementById("settingsDialog");
    var _0x118a13 = document.getElementById("customBackContainer");
    var _0x5c6f1b = document.getElementById("inventory");
    var _0x400f7b = document.getElementById("contextMenu");
    var _0x2baa42 = document.getElementById("contextSubMenu");
    $("#loginMobile").click(_0x5f12f2);
    $("#serverMobile").click(_0x412b);
    $(".mainPanelNavMob").click(_0x3200d3);
    _0x4eac2b.onfocus = _0x472070.onblur = function() {
        _0xbbfdd2 = false;
        _0x472070.placeholder = "Press Enter To Chat";
        if (isMobile) {
            _0x472070.placeholder = "Press To Chat";
        }
    };
    _0x472070.onfocus = function() {
        _0xbbfdd2 = true;
        _0x472070.placeholder = '';
        chatConfirmRules();
    };
    _0x492d1e.ondragstart = _0x492d1e.ondrop = function(_0xbf1007) {
        _0xbf1007.preventDefault();
    };
    _0x492d1e.ondragenter = _0x492d1e.ondragover = function(_0x3ee492) {
        _0x3ee492.preventDefault();
        if (_0x5ebb13 && _0x3ee492.dataTransfer) {
            _0x3ee492.dataTransfer.dropEffect = "none";
        }
    };
    _0x492d1e.onmousedown = function(_0x5d2ff5) {
        _0x6da0af();
        if (2 == _0x5d2ff5.button && _0x181957) {
            _0x34f96a = _0x5d2ff5.clientX;
            _0x5079ce = _0x5d2ff5.clientY;
            _0x28c1e5();
            _0x56a8e8();
        }
    };
    _0x5b5711.onmousedown = function(_0x538727) {
        _0x6da0af(1);
        _0x538727.stopPropagation();
    };
    document.getElementById("emojiBtn").onclick = function(_0x26b902) {
        var _0x1784e2;
        if (_0x29894d) {
            _0x488b2a();
        }
        _0x1784e2 = document.getElementById("chtbox");
        if (_0x2bc2d5) {
            $("#emojiDropdown").slideUp(50);
            _0x2bc2d5 = false;
            if (0 != _0x1784e2.value.length) {
                _0x1784e2.focus();
            }
        } else {
            $("#emojiDropdown").slideDown(50);
            _0x2bc2d5 = true;
            _0x1784e2.focus();
        }
        _0x26b902.stopPropagation();
    };
    document.getElementById("commandsBtn").onclick = function(_0x302385) {
        var _0x403bd6;
        if (_0x2bc2d5) {
            _0x42b2d5();
        }
        _0x403bd6 = document.getElementById("chtbox");
        if (_0x29894d) {
            $("#commandsDropdown").slideUp(50);
            _0x29894d = false;
            if (0 != _0x403bd6.value.length) {
                _0x403bd6.focus();
            }
        } else {
            $("#commandsDropdown").slideDown(50);
            _0x29894d = true;
            _0x403bd6.focus();
        }
        _0x302385.stopPropagation();
    };
    $("#reg").on("show.bs.tab", function(_0x55803b) {
        if (window.AG && window.AG.showCaptchaReg) {
            window.AG.showCaptchaReg();
        }
    });
    _0x5bcc48.onclick = function(_0x171da7) {
        var _0x21ead3;
        var _0x29bb4d;
        var _0x3e2199;
        var _0x1643a0 = _0x171da7.target;
        if (_0x1643a0 && "TD" == _0x1643a0.tagName && (_0x1643a0 = _0x1643a0.title) && (_0x21ead3 = document.getElementById("chtbox"), _0x29bb4d = _0x21ead3.value, _0x1643a0 = (0 < (_0x3e2199 = _0x21ead3.selectionEnd) && 0 < _0x29bb4d.length && " " != _0x29bb4d.substr(_0x3e2199 - 1, 1) ? " " : '') + _0x1643a0 + " ", _0x29bb4d.length + _0x1643a0.length <= _0x21ead3.maxLength)) {
            _0x21ead3.value = _0x29bb4d.substring(0, _0x3e2199) + _0x1643a0 + _0x29bb4d.substring(_0x3e2199);
            _0x21ead3.selectionStart = _0x21ead3.selectionEnd = _0x3e2199 + _0x1643a0.length;
            _0x21ead3.focus();
        }
        _0x171da7.stopPropagation();
    };
    _0x376468.onclick = function(_0x58c846) {
        _0x495b59(_0x58c846.target);
        _0x58c846.stopPropagation();
    };
    document.getElementById("curser").onclick = function(_0x53addc) {
        _0x34efff();
        _0x53addc.stopPropagation();
    };
    document.getElementById("chtTabs").onclick = function(_0x1c5eb2) {
        var _0x3b9b7f;
        var _0x21e4e6;
        var _0x5b1a3b = _0x1c5eb2.target;
        if (_0x5b1a3b && (_0x21e4e6 = $(_0x5b1a3b)) && _0x21e4e6.hasClass("chat-tab")) {
            _0x3b9b7f = document.getElementById("chtbox");
            if (!_0x21e4e6.hasClass("selected")) {
                $("#chtTabs").find("div.selected").removeClass("selected");
                $("#chtTabs").find("div.semi-selected").removeClass("semi-selected");
                _0x21e4e6.removeClass("blink").addClass("selected");
                _0xd835b8 = parseInt(_0x5b1a3b.getAttribute("data-category"));
                if (isNaN(_0xd835b8)) {
                    _0xd835b8 = 0;
                }
                _0x1723aa = (_0x1723aa = _0x5b1a3b.getAttribute("data-username")) || '';
                _0x40774a = (_0x40774a = _0x5b1a3b.getAttribute("data-insert")) || '';
                _0x21e4e6 = (_0x21e4e6 = _0x5b1a3b.getAttribute("data-tooltip")) || '';
                _0x3b9b7f.title = _0x21e4e6;
                if (0 == _0xd835b8) {
                    $("#chtTabs").find("div").not("#chtTabPublic").removeClass("blink").addClass("semi-selected");
                } else if (2 == _0xd835b8 && '' == _0x1723aa) {
                    $("#chtTabs").find("[data-username!=\"\"]").removeClass("blink").addClass("semi-selected");
                }
                _0x4cb089 = true;
            }
            if (1 != _0x190280) {
                _0x190280 = 1;
                _0x4cb089 = true;
            }
            _0x3b9b7f.value = _0x40774a;
            _0x3b9b7f.focus();
            _0x3b9b7f.selectionStart = _0x3b9b7f.selectionEnd = _0x40774a.length;
            _0x3b9b7f.blur();
        }
        _0x1c5eb2.stopPropagation();
    };
    document.getElementById("btnFriends").onclick = document.getElementById("friendDialogClose").onclick = _0x2e104c;
    document.getElementById("friendHeader").onmousedown = _0x569497;
    document.getElementById("friendResizer").onmousedown = _0x20ddff;
    _0x1e0756.onblur = function() {
        _0x4a595d = false;
    };
    _0x1e0756.onfocus = function() {
        _0x4a595d = true;
    };
    $("#skinsTab a").on("show.bs.tab", function(_0x1a13e2) {
        if (_0x64a0d5) {
            _0x4b2336();
        }
    });
    $("#wearablesTab a").on("show.bs.tab", function(_0xe997f1) {
        if (_0x1518ea) {
            _0x5a2fbe();
        }
    });
    _0x2216eb.onclick = function(_0xd6bc5) {
        showSkin(_0x28aabd, false);
        _0xd6bc5.stopPropagation();
    };
    _0x2216eb.onmousedown = function(_0x29fb33) {
        if (2 == _0x29fb33.button) {
            _0x5df715(0);
            _0x94dbbc();
            _0xbb1a8c();
        }
    };
    _0x2216eb.oncontextmenu = _0x5f4cbe.oncontextmenu = _0x4c920b;
    _0x5f4cbe.onmousemove = _0x5eca46;
    _0x5f4cbe.onmouseleave = _0x29cf6b;
    _0x5f4cbe.onclick = _0x35e23c;
    _0x5f4cbe.onmousedown = _0x22a3b0;
    $("#hiscoresTab a").on("show.bs.tab", _0x38aef7);
    _0x1954b9.onclick = function(_0xe69804) {
        _0x4d8d48();
        _0x6da0af(3);
        _0xe69804.stopPropagation();
    };
    _0x1954b9.onmousedown = _0x56cf6a.onmousedown = function(_0x4cfa90) {
        _0x6da0af(3);
        _0x4cfa90.stopPropagation();
    };
    _0x56cf6a.onkeyup = function(_0x480ba7) {
        if (32 == _0x480ba7.keyCode) {
            _0x480ba7.preventDefault();
        }
    };
    document.getElementById("megaholder").onclick = function(_0x535e31) {
        $("#megaholder").hide();
    };
    $(".hotkey-input:not(.hotkey-unchangeable)").click(hotkeySelect).contextmenu(hotkeyClear);
    $("input[type=\"checkbox\"]").click(function(_0x542603) {
        if (_0x542603 && _0x542603.originalEvent && undefined !== _0x542603.originalEvent.isTrusted && !_0x542603.originalEvent.isTrusted) {
            _0x542603.originalEvent.preventDefault();
        }
    });
    document.getElementById("invisibleOverlay").onclick = _0x234e04;
    _0x118a13.onmousedown = function(_0x1015a8) {
        if (2 == _0x1015a8.button) {
            _0x350e59('');
        }
    };
    _0x118a13.oncontextmenu = _0x4c920b;
    _0x118a13.onmouseenter = _0x118a13.onmousemove = function(_0x43b52c) {
        if (!_0x1cf392) {
            _0x1cf392 = true;
            _0x5cfda7();
        }
    };
    _0x118a13.onmouseleave = function(_0x7beeb1) {
        if (_0x1cf392) {
            _0x1cf392 = false;
            _0x5cfda7();
        }
    };
    $.fn.o = function(_0x5312fa, _0x36c5ab, _0x5de99e) {
        _0x5312fa = undefined === _0x5312fa ? 100 : _0x5312fa;
        _0x36c5ab = undefined === _0x36c5ab ? 10 : _0x36c5ab;
        _0x5de99e = undefined === _0x5de99e ? 3 : _0x5de99e;
        var _0x15803d = $(this);
        _0x15803d.css("position", "relative");
        for (var _0x2ab861 = 0; _0x2ab861 < _0x5de99e + 1; _0x2ab861++) {
            _0x15803d.animate({
                "left": _0x2ab861 % 2 == 0 ? _0x36c5ab : -1 * _0x36c5ab
            }, _0x5312fa);
        }
        var _0x5594a9 = {
            left: 0
        };
        return _0x15803d.animate(_0x5594a9, _0x5312fa);
    };
    if (_0x5ebb13) {
        (_0x2216eb = document.getElementById("customBackBtn")).ondragenter = _0x2216eb.ondragover = _0xc081b2;
        _0x2216eb.ondragleave = _0xa3fe4;
        _0x2216eb.ondrop = _0x2808de;
        $("#customBackDragText").show();
    }
    if (_0x591623) {
        _0x5d968e(_0x492d1e, _0x3169a6);
        _0x5d968e(_0x4110a1, _0x491923);
        _0x472070.ontouchstart = _0x5bcc48.ontouchstart = _0x376468.ontouchstart = _0x7a8f57.ontouchstart = _0x1954b9.ontouchstart = _0x56cf6a.ontouchstart = _0x400f7b.ontouchstart = _0x2baa42.ontouchstart = _0x234e04;
        document.getElementById("fullscreenBtn").ontouchstart = _0x234e04;
        document.getElementById("respawnTouch").ontouchstart = _0x234e04;
        document.getElementById("startMinionButton").ontouchstart = _0x234e04;
        document.getElementById("btnFriends").ontouchstart = _0x234e04;
        _0x5b5711.ontouchstart = _0x234e04;
    } else {
        _0x492d1e.addEventListener("contextmenu", _0x3169a6, false);
        _0x4110a1.oncontextmenu = _0x491923;
    }
    _0x4110a1.onmouseover = _0x4110a1.onmousemove = function(_0x528b00) {
        if (_0x10e53d && _0x10e53d !== _0x191230(_0x528b00.clientX, _0x528b00.clientY)) {
            _0x4cb089 = !(_0x10e53d = null);
        }
        _0xe31aef = _0x581015 + 200;
    };
    _0x4110a1.onmousedown = function(_0x323b3f) {
        if (!(0 != _0x323b3f.button || _0x3e08c0 || (!isSpectating && 1 != _0x47ccce || _0x191230(_0x323b3f.clientX, _0x323b3f.clientY) || (1 == _0x47ccce && _0xed8399(_0x323b3f), !isSpectating) || _0xed8399(_0x323b3f), _0x10e53d))) {
            _0xe31aef = _0x581015;
        }
    };
    _0x4110a1.onmouseout = function(_0x4b76a6) {
        if (_0x10e53d) {
            _0x4cb089 = !(_0x10e53d = null);
        }
        _0xe31aef = 0;
    };
    _0x4110a1.ondblclick = _0x38ee8a;
    _0x472070.oncontextmenu = _0x5bcc48.oncontextmenu = _0x376468.oncontextmenu = _0x7a8f57.oncontextmenu = _0x1954b9.oncontextmenu = _0x56cf6a.oncontextmenu = _0x234e04;
    _0x400f7b.oncontextmenu = _0x2baa42.oncontextmenu = _0x4c920b;
    _0x400f7b.onmouseover = _0x2baa42.onmouseover = _0x400f7b.onmousemove = _0x2baa42.onmousemove = _0x46c13b;
    _0x400f7b.onmousedown = _0x2baa42.onmousedown = function(_0xe66de2) {
        _0x46c13b(_0xe66de2);
        _0xe66de2.stopPropagation();
    };
    _0x400f7b.onmouseleave = _0x2baa42.onmouseleave = _0x30d539;
    _0x400f7b.onclick = function(_0x19b525) {
        if (isMobile) {
            setTimeout(_0x460313, 0);
        } else {
            _0x460313();
        }
        _0x19b525.stopPropagation();
    };
    _0x2baa42.onclick = function(_0x1b16bc) {
        if (isMobile) {
            setTimeout(function() {
                _0x11d4f6(_0x1b16bc);
                _0x432cde();
            }, 0);
        } else {
            _0x11d4f6(_0x1b16bc);
            _0x432cde();
        }
        _0x1b16bc.stopPropagation();
    };
    _0x4eac2b.onmousedown = function(_0x34757a) {
        if (0 == _0x34757a.button) {
            if (1 == _0x47ccce) {
                var _0x2f8185 = _0x34757a;
                if (!_0x3e08c0 && !_0x181957 && 0 < _0x335282.length) {
                    var _0x5deb31 = null;
                    var _0x5ec5a8 = (_0x2f8185.pageX - _0x53f1a5 / 2) / _0x3e50d9 + _0x59034c;
                    var _0x12065b = (_0x2f8185.pageY - _0x1058ed / 2) / _0x3e50d9 + _0x4ce984;
                    for (var _0x3f31de = _0x34b545.length - 1; 0 <= _0x3f31de; _0x3f31de--) {
                        var _0x1e76ee = _0x34b545[_0x3f31de];
                        if (0 == _0x1e76ee.i) {
                            var _0x32d268 = _0x1e76ee.x - _0x5ec5a8;
                            var _0x396c39 = _0x1e76ee.y - _0x12065b;
                            if (_0x32d268 * _0x32d268 + _0x396c39 * _0x396c39 < _0x1e76ee.size * _0x1e76ee.size) {
                                _0x5deb31 = _0x1e76ee;
                                break;
                            }
                        }
                    }
                    if (_0x5deb31) {
                        _0x2f8185 = _0x335282.indexOf(_0x5deb31.id);
                        new PacketWriter(6).setUint8(162).setUint8(_0x2f8185).setUint32(_0x5deb31.l).send();
                    }
                }
            }
            _0xed8399(_0x34757a);
        }
    };
    if (isMobile) {
        _0x472070.placeholder = "Press To Chat";
        _0x5f4cbe = document.getElementById("zoomBtnMinus");
        _0x118a13 = document.getElementById("zoomBtnPlus");
        _0x2216eb = document.getElementById("touchSplitBtn");
        _0x5bcc48 = document.getElementById("touchEjectBtn");
        _0x376468 = document.getElementById("touchEjectLockBtn");
        tFreezeBtn = document.getElementById("touchFreezeBtn");
        btnToggleQ = document.getElementById("btnToggleQ");
        window.addEventListener("touchstart", function(_0x26087c) {
            _0x53cfb7 = _0x2e944b;
            if (_0x26087c.touches.length <= 1 && (null !== _0x1c0802 && (_0x1c0802 = null, $("#touchPad").hide(), $("#touchPadThumb").hide()), null !== _0x47bcb0 && (_0x47bcb0 = null, $(_0x541b5c).removeClass("active"), $(".inventory-box.hover").removeClass("hover"), _0x492dec(), _0x1f4eee = null), null !== _0x2106d0 && (_0x2106d0 = null, _0x544018 = false), null !== _0x399c6b)) {
                _0x399c6b = null;
                $("#btnToggleQ").removeClass("active");
            }
        }, true);
        window.addEventListener("touchmove", function(_0x1c5554) {
            _0x53cfb7 = _0x2e944b;
        }, true);
        window.addEventListener("touchend", function(_0x395a10) {
            _0x53cfb7 = _0x2e944b;
        }, true);
        _0x4eac2b.addEventListener("touchstart", _0x397340, false);
        _0x4eac2b.addEventListener("touchmove", _0x405de7, false);
        _0x4eac2b.addEventListener("touchend", _0x39b514, false);
        _0x4110a1.addEventListener("touchstart", _0x397340, false);
        _0x4110a1.addEventListener("touchmove", _0x405de7, false);
        _0x4110a1.addEventListener("touchend", _0x39b514, false);
        _0x2216eb.addEventListener("touchstart", _0x3f6aca, false);
        _0x2216eb.addEventListener("touchmove", _0x4c920b, false);
        _0x2216eb.addEventListener("touchend", _0x44dd1e, false);
        _0x5bcc48.addEventListener("touchstart", _0x22e6a6, false);
        _0x5bcc48.addEventListener("touchmove", _0x4c920b, false);
        _0x5bcc48.addEventListener("touchend", _0x1bd91c, false);
        _0x376468.addEventListener("touchstart", _0x2594cd, false);
        _0x376468.addEventListener("touchmove", _0x4c920b, false);
        _0x376468.addEventListener("touchend", _0x4c920b, false);
        tFreezeBtn.addEventListener("touchstart", _0x399411, false);
        tFreezeBtn.addEventListener("touchmove", _0x4c920b, false);
        tFreezeBtn.addEventListener("touchend", _0x4c920b, false);
        _0x5f4cbe.addEventListener("touchstart", _0xc55078, false);
        _0x5f4cbe.addEventListener("touchmove", _0x4c920b, false);
        _0x5f4cbe.addEventListener("touchend", _0x35fff4, false);
        _0x118a13.addEventListener("touchstart", _0x71452a, false);
        _0x118a13.addEventListener("touchmove", _0x4c920b, false);
        _0x118a13.addEventListener("touchend", _0x35fff4, false);
        _0x243c1f.addEventListener("touchstart", _0xe944ac, false);
        _0x243c1f.addEventListener("touchmove", _0x51ee3c, false);
        _0x243c1f.addEventListener("touchend", _0x3d16b2, false);
        _0x11f3e0.addEventListener("touchstart", _0x4ae55c, false);
        _0x11f3e0.addEventListener("touchmove", _0x4c920b, false);
        _0x11f3e0.addEventListener("touchend", _0x4c920b, false);
        (_0x3ac4f2 = document.getElementById("invRecombine")).ontouchstart = function(_0x25692a) {
            _0x2537e8(_0x25692a, 1, _0xf4910b);
        };
        (_0x3ac4f2 = document.getElementById("invSpeed")).ontouchstart = function(_0x28358c) {
            sendSignal(31);
            _0x2537e8(_0x28358c, 2, _0x2b1b31);
        };
        (_0x3ac4f2 = document.getElementById("invGrowth")).ontouchstart = function(_0x29c4f7) {
            _0x2537e8(_0x29c4f7, 3);
        };
        (_0x3ac4f2 = document.getElementById("invSpawnVirus")).ontouchstart = function(_0x5dcc83) {
            _0x2537e8(_0x5dcc83, 4);
        };
        (_0x3ac4f2 = document.getElementById("invSpawnMothercell")).ontouchstart = function(_0x1eced6) {
            _0x2537e8(_0x1eced6, 5);
        };
        (_0x3ac4f2 = document.getElementById("invSpawnPortal")).ontouchstart = function(_0x2f2585) {
            _0x2537e8(_0x2f2585, 6);
        };
        (_0x3ac4f2 = document.getElementById("invSpawnGoldOre")).ontouchstart = function(_0x35ed58) {
            _0x2537e8(_0x35ed58, 9);
        };
        (_0x3ac4f2 = document.getElementById("invWall")).ontouchstart = function(_0x4bbad2) {
            _0x2537e8(_0x4bbad2, 10);
        };
        (_0x3ac4f2 = document.getElementById("inv360Shot")).ontouchstart = function(_0x3c284) {
            _0x2537e8(_0x3c284, 7);
            _0x465950(1);
        };
        (_0x3ac4f2 = document.getElementById("invFreeze")).ontouchstart = function(_0x125776) {
            _0x2537e8(_0x125776, 8);
        };
        (_0x3ac4f2 = document.getElementById("invAntiFreeze")).ontouchstart = function(_0x21745f) {
            _0x2537e8(_0x21745f, 11);
        };
        (_0x3ac4f2 = document.getElementById("invAntiRecombine")).ontouchstart = function(_0xff254) {
            _0x2537e8(_0xff254, 12);
        };
        (_0x3ac4f2 = document.getElementById("invFrozenVirus")).ontouchstart = function(_0x5c7f28) {
            _0x2537e8(_0x5c7f28, 13);
            _0x465950(3);
        };
        (_0x3ac4f2 = document.getElementById("invShield")).ontouchstart = function(_0x242e8e) {
            _0x2537e8(_0x242e8e, 14);
        };
        (_0x3ac4f2 = document.getElementById("invCloak")).ontouchstart = function(_0x33403a) {
            _0x2537e8(_0x33403a, 15, _0x1f73d2);
        };
        _0x5c6f1b.ontouchstart = _0x1cb96b;
        _0x5c6f1b.ontouchmove = _0x595a05;
        _0x5c6f1b.ontouchend = _0x3b18da;
        btnToggleQ.addEventListener("touchstart", _0x2b5d79, false);
        btnToggleQ.addEventListener("touchmove", _0x4c920b, false);
        btnToggleQ.addEventListener("touchend", _0x370ab1, false);
        document.addEventListener("fullscreenchange", function() {
            if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
                $("#fullscreenBtn").addClass("inFullscreen");
            } else {
                $("#fullscreenBtn").removeClass("inFullscreen");
            }
        }, false);
        document.getElementById("fullscreenBtn").onclick = _0x1b0f36;
        document.getElementById("fullscreenBtn").oncontextmenu = _0x234e04;
        document.getElementById("respawnTouch").oncontextmenu = _0x234e04;
        document.getElementById("startMinionButton").oncontextmenu = _0x234e04;
        document.getElementById("btnFriends").oncontextmenu = _0x234e04;
        _0x5b5711.oncontextmenu = _0x234e04;
    } else {
        _0x492d1e.onmousemove = _0x492d1e.onmouseenter = _0x3c6fac;
        (_0x3ac4f2 = document.getElementById("invRecombine")).onmouseenter = _0x3ac4f2.onmousedown = function(_0x17af86) {
            if (_0x17af86.isTrusted) {
                _0x4c710c(1);
            }
        };
        (_0x3ac4f2 = document.getElementById("invSpeed")).onmouseenter = _0x3ac4f2.onmousedown = function(_0x77f344) {
            if (_0x77f344.isTrusted) {
                _0x4c710c(2);
            }
        };
        (_0x3ac4f2 = document.getElementById("invGrowth")).onmouseenter = _0x3ac4f2.onmousedown = function(_0x29d3de) {
            if (_0x29d3de.isTrusted) {
                _0x4c710c(3);
            }
        };
        (_0x3ac4f2 = document.getElementById("invSpawnVirus")).onmouseenter = _0x3ac4f2.onmousedown = function(_0x5f2e5c) {
            if (_0x5f2e5c instanceof Event && _0x5f2e5c.isTrusted) {
                _0x4c710c(4);
            }
        };
        (_0x3ac4f2 = document.getElementById("invSpawnMothercell")).onmouseenter = _0x3ac4f2.onmousedown = function(_0x4a0120) {
            if (_0x4a0120 instanceof Event && _0x4a0120.isTrusted) {
                _0x4c710c(5);
            }
        };
        (_0x3ac4f2 = document.getElementById("invSpawnPortal")).onmouseenter = _0x3ac4f2.onmousedown = function(_0x6da1cf) {
            if (_0x6da1cf.isTrusted) {
                _0x4c710c(6);
            }
        };
        (_0x3ac4f2 = document.getElementById("invSpawnGoldOre")).onmouseenter = _0x3ac4f2.onmousedown = function(_0x2cb7fc) {
            if (_0x2cb7fc.isTrusted) {
                _0x4c710c(9);
            }
        };
        (_0x3ac4f2 = document.getElementById("invWall")).onmouseenter = function() {
            _0x4c710c(10);
        };
        _0x3ac4f2.onmousedown = function(_0x187e32) {
            if (0 == _0x187e32.button) {
                _0x54aa2f(10);
            }
            _0x4c710c(10);
        };
        _0x3ac4f2.onclick = function(_0x35cbe3) {
            if (!(10 != _0x14f2d3 || _0x3e08c0)) {
                _0x17c18f(_0x35cbe3.currentTarget, 10);
            }
        };
        (_0x3ac4f2 = document.getElementById("inv360Shot")).onmouseenter = function() {
            _0x4c710c(7);
        };
        _0x3ac4f2.onmousedown = function(_0x374298) {
            _0x4c710c(7);
            if (0 == _0x374298.button) {
                _0x465950(1);
            }
        };
        (_0x3ac4f2 = document.getElementById("invFreeze")).onmouseenter = _0x3ac4f2.onmousedown = function(_0x100c2c) {
            if (_0x100c2c.isTrusted) {
                _0x4c710c(8);
            }
        };
        (_0x3ac4f2 = document.getElementById("invAntiFreeze")).onmouseenter = _0x3ac4f2.onmousedown = function(_0x5e7a1c) {
            if (_0x5e7a1c.isTrusted) {
                _0x4c710c(11);
            }
        };
        (_0x3ac4f2 = document.getElementById("invAntiRecombine")).onmouseenter = _0x3ac4f2.onmousedown = function(_0x2b508e) {
            if (_0x2b508e instanceof Event && _0x2b508e.isTrusted) {
                _0x4c710c(12);
            }
        };
        (_0x3ac4f2 = document.getElementById("invShield")).onmouseenter = _0x3ac4f2.onmousedown = function(_0x264109) {
            if (_0x264109.isTrusted) {
                _0x4c710c(14);
            }
        };
        (_0x3ac4f2 = document.getElementById("invFrozenVirus")).onmouseenter = function() {
            _0x4c710c(13);
        };
        _0x3ac4f2.onmousedown = function(_0x286cda) {
            _0x4c710c(13);
            if (0 == _0x286cda.button) {
                _0x465950(3);
            }
        };
        (_0x3ac4f2 = document.getElementById("invCloak")).onmouseenter = function() {
            _0x4c710c(15);
        };
        _0x3ac4f2.onmousedown = function(_0x4e1adf) {
            if (0 == _0x4e1adf.button) {
                _0x54aa2f(15);
            }
            _0x4c710c(15);
        };
        _0x3ac4f2.onclick = function() {
            if (!(15 != _0x14f2d3 || _0x3e08c0)) {
                _0x1f73d2();
            }
        };
        _0x5c6f1b.onmouseleave = function() {
            _0x4c710c(0);
        };
        _0x5c6f1b.onmousedown = function(_0x26acb9) {
            if (_0x26acb9.isTrusted && 0 == _0x26acb9.button) {
                _0x34f96a = _0x26acb9.clientX;
                _0x5079ce = _0x26acb9.clientY;
                _0x28c1e5();
                _0x4801bb();
            }
        };
        _0x5c6f1b.onmouseup = function(_0xc8c226) {
            if (_0xc8c226.isTrusted && 0 == _0xc8c226.button) {
                _0x492dec();
                _0xc8c226.stopPropagation();
            }
        };
        _0x492d1e.onmouseup = function(_0x3c2c7c) {
            if (0 == _0x3c2c7c.button) {
                _0x34f96a = _0x3c2c7c.clientX;
                _0x5079ce = _0x3c2c7c.clientY;
                _0x28c1e5();
                _0x2f7348();
            }
        };
        _0x243c1f.onmousedown = _0xe944ac;
        _0x11f3e0.onmousedown = _0x4ae55c;
    }
    _0x492d1e.addEventListener("wheel", _0x3359de, false);
    var _0x3b6c7d = false;
    var _0x15ba70 = false;
    var _0x24ef11 = false;
    var _0xad8aa9 = false;
    var _0x38584f = false;
    var _0x2bf6bb = false;
    var _0x13ad94 = false;
    var _0x5a26dc = false;
    var _0x4ae953 = false;
    var _0x23f8db = false;
    var _0x16195f = false;
    var _0x1f5d9c = false;
    var _0x4ad9fe = false;
    var _0x1c4ea8 = false;
    var _0x1f7f29 = false;
    var _0x12210f = 0;
    var _0x2a2619 = 0;
    var _0x3d1664 = 0;
    var _0x5717ed = 0;
    var _0x1374cb = 0;
    var _0x40d597 = 0;
    var _0x449184 = 0;
    var _0x4a16be = 0;
    var _0x575e12 = 0;
    var _0x451003 = 0;
    var _0x27d666 = 0;
    var _0x10d51e = 0;
    var _0x415203 = 0;
    var _0x4d3e60 = 0;
    var _0x440cd8 = 0;
    var _0x36acf7 = 0;
    multiEjectCellsAmountChosen = 5;
    multiEjectCells = 1;
    multiEjectServerChanged = false;
    window.onresize = _0x51c554;
    window.addEventListener("click", _0x1c81ac, true);
    window.addEventListener("change", _0x11d4f6, true);
    window.addEventListener("mousedown", function(_0x38b092) {
        _0x53cfb7 = _0x2e944b;
        if (!(!_0xf6ede0 || $(_0x38b092.target).hasClass("hotkey-input") && $(_0x38b092.target).hasClass("selected"))) {
            _0x4204cb();
        }
    }, true);
    window.addEventListener("keydown", function(_0x5f057a) {
        var _0xd60e14;
        var _0x83c4c2;
        var _0x572def;
        _0x53cfb7 = _0x2e944b;
        if (!(undefined !== _0x5f057a.isTrusted && !_0x5f057a.isTrusted)) {
            _0x36acf7 = _0x5f057a.keyCode;
        }
        if (_0xf6ede0) {
            _0xd60e14 = _0x5f057a;
            if (!(!_0xf6ede0 || _0x3e08c0 && $("#settingPage2").is(":visible"))) {
                _0x4204cb();
            }
            if (_0xf6ede0) {
                if (13 == _0xd60e14.keyCode || 27 == _0xd60e14.keyCode) {
                    _0x4204cb();
                } else if (_0x83c4c2 = "keySplit" == _0xf6ede0.id ? _0x3569f8.Space : "keyDoubleSplit" == _0xf6ede0.id ? _0x3569f8.D : "keyTripleSplit" == _0xf6ede0.id ? _0x3569f8.T : "keyRespawn" == _0xf6ede0.id ? _0x3569f8.M : "keyMacroSplit" == _0xf6ede0.id ? _0x3569f8.Z : "keyMacroFeed" == _0xf6ede0.id ? _0x3569f8.W : "keyMultiFeed" == _0xf6ede0.id ? _0x3569f8.V : "keyFixedMouse" == _0xf6ede0.id ? _0x3569f8.C : "keyToggleCamera" == _0xf6ede0.id ? _0x3569f8.Q : "keyFreezeCamera" == _0xf6ede0.id ? _0x3569f8.F : "keyRecombine" == _0xf6ede0.id ? _0x3569f8.E : "keySpeed" == _0xf6ede0.id ? _0x3569f8.S : "key360" == _0xf6ede0.id ? _0x3569f8.W360 : "keyFreezeSelf" == _0xf6ede0.id ? _0x3569f8.F : "keyInvisibility" == _0xf6ede0.id ? _0x3569f8.I : "keyToggleControlBots" == _0xf6ede0.id ? _0x3569f8.Q : "keySplitBots" == _0xf6ede0.id ? _0x3569f8.A : "keyFeedBots" == _0xf6ede0.id ? _0x3569f8.X : "keyDropWall" == _0xf6ede0.id ? _0x3569f8.DW : null) {
                    _0x83c4c2.c = _0xd60e14.keyCode;
                    _0x83c4c2.d = _0x5f2da0[_0xd60e14.keyCode] || _0xd60e14.key || '';
                    (_0x572def = _0x58bb5b(_0xf6ede0)).addClass("updated");
                    setTimeout(function() {
                        _0x572def.removeClass("updated");
                    }, 50);
                    _0x3b71b7();
                    _0x554f52();
                    _0x4204cb();
                }
            }
            _0x5f057a.stopImmediatePropagation();
        }
    }, true);
    window.onkeydown = function(_0x244728) {
        if (!_0xbbfdd2 && !_0x4a595d) {
            var _0x5ad31e;
            var _0xb8b260 = Date.now();
            if (!_0x3e08c0) {
                if (_0x244728.keyCode == _0x3569f8.Space.c && !_0x3b6c7d && _0x12210f <= _0xb8b260 - 50) {
                    if (!_0x244728.isTrusted) {
                        return false;
                    }
                    _0x12210f = _0xb8b260;
                    _0x3d0428(1);
                    _0x3b6c7d = true;
                }
                if (_0x244728.keyCode == _0x3569f8.W.c && !_0x15ba70 && _0x2a2619 <= _0xb8b260 - 50) {
                    if (1 != multiEjectCells && (multiEjectCells = 1, isReady())) {
                        new PacketWriter(2).setUint8(180).setUint8(multiEjectCells).send();
                    }
                    _0x2a2619 = _0xb8b260;
                    if (1 == _0x47ccce && _0x3569f8.W.c != _0x3569f8.W360.c) {
                        _0x465950(1, true);
                    }
                    _0x580067();
                    sendSignal(21);
                    _0x15ba70 = true;
                }
                if (_0x244728.keyCode == _0x3569f8.V.c && !_0x15ba70 && _0x2a2619 <= _0xb8b260 - 50) {
                    if ((multiEjectCells != multiEjectCellsAmountChosen || multiEjectServerChanged) && (multiEjectServerChanged = false, multiEjectCells = multiEjectCellsAmountChosen, isReady())) {
                        new PacketWriter(2).setUint8(180).setUint8(multiEjectCells).send();
                    }
                    _0x2a2619 = _0xb8b260;
                    if (1 == _0x47ccce && _0x3569f8.V.c != _0x3569f8.W360.c) {
                        _0x465950(1, true);
                    }
                    _0x580067();
                    sendSignal(21);
                    _0x15ba70 = true;
                }
                if (_0x244728.keyCode == _0x3569f8.Z.c && !_0x24ef11 && _0x3d1664 <= _0xb8b260 - 50) {
                    if (!_0x244728.isTrusted) {
                        return false;
                    }
                    _0x3d1664 = _0xb8b260;
                    _0x580067();
                    sendSignal(37);
                    _0x24ef11 = true;
                }
                if (_0x244728.keyCode == _0x3569f8.F.c && !_0xad8aa9 && _0x5717ed <= _0xb8b260 - 50) {
                    _0x5717ed = _0xb8b260;
                    sendSignal(35);
                    _0xad8aa9 = true;
                }
                if (_0x244728.keyCode == _0x3569f8.Q.c && !_0x38584f && _0x1374cb <= _0xb8b260 - 50) {
                    _0x1374cb = _0xb8b260;
                    sendSignal(18);
                    _0x38584f = true;
                }
                if (_0x244728.keyCode == _0x3569f8.E.c && !_0x2bf6bb && _0x40d597 <= _0xb8b260 - 50) {
                    _0x40d597 = _0xb8b260;
                    sendSignal(30);
                    _0x2bf6bb = true;
                }
                if (_0x244728.keyCode == _0x3569f8.S.c && !_0x13ad94 && _0x449184 <= _0xb8b260 - 50) {
                    _0x449184 = _0xb8b260;
                    sendSignal(31);
                    _0x13ad94 = true;
                }
                if (_0x244728.keyCode == _0x3569f8.A.c && !_0x5a26dc && _0x4a16be <= _0xb8b260 - 50) {
                    _0x4a16be = _0xb8b260;
                    _0x580067();
                    sendSignal(32);
                    _0x5a26dc = true;
                }
                if (_0x244728.keyCode == _0x3569f8.X.c && !_0x4ae953 && _0x575e12 <= _0xb8b260 - 50) {
                    _0x575e12 = _0xb8b260;
                    _0x580067();
                    sendSignal(39);
                    _0x4ae953 = true;
                }
                if (_0x244728.keyCode == _0x3569f8.I.c && !_0x23f8db && _0x451003 <= _0xb8b260 - 50) {
                    _0x451003 = _0xb8b260;
                    sendSignal(28);
                    _0x23f8db = true;
                }
                if (!(_0x244728.keyCode != _0x3569f8.C.c || _0x4400ec)) {
                    _0x312d0a = _0x28fccb;
                    _0x2435c4 = _0x4bd57d;
                    _0x4400ec = true;
                }
                if (_0x244728.keyCode == _0x3569f8.D.c && !_0x16195f && _0x27d666 <= _0xb8b260 - 50) {
                    _0x27d666 = _0xb8b260;
                    _0x3d0428(2);
                    _0x16195f = true;
                }
                if (_0x244728.keyCode == _0x3569f8.T.c && !_0x1f5d9c && _0x10d51e <= _0xb8b260 - 50) {
                    _0x10d51e = _0xb8b260;
                    _0x3d0428(3);
                    _0x1f5d9c = true;
                }
                if (_0x244728.keyCode == _0x3569f8.W360.c && !_0x1c4ea8 && _0x4d3e60 <= _0xb8b260 - 50 && !_0x15ba70 && _0x3569f8.W.c != _0x3569f8.W360.c) {
                    _0x4d3e60 = _0xb8b260;
                    if (1 != _0x47ccce) {
                        _0x465950(1, true);
                    }
                    if (1 == _0x47ccce) {
                        _0x580067();
                        sendSignal(21);
                        sendSignal(36);
                    }
                    _0x1c4ea8 = true;
                }
                if (_0x244728.keyCode == _0x3569f8.DW.c && !_0x1f7f29 && _0x440cd8 <= _0xb8b260 - 50) {
                    _0x440cd8 = _0xb8b260;
                    if (_0x181957 && _0x19bc6d) {
                        _0x492dec();
                    } else {
                        _0x5ad31e = _0x489844;
                        _0x489844 = 10;
                        _0x34f96a = _0x36887a;
                        _0x5079ce = _0x19f1c7;
                        _0x28c1e5();
                        _0x4801bb();
                        _0x489844 = _0x5ad31e;
                        _0x19bc6d = true;
                        $("#invWall").addClass("active");
                    }
                    _0x1f7f29 = true;
                }
                if (arrayOfKeyCodes.includes(_0x244728.keyCode)) {
                    for (var _0x152558 in _0x3569f8)
                        if (_0x244728.keyCode == _0x3569f8[_0x152558].c && -1 < arrayOfKeyCodes.indexOf(_0x3569f8[_0x152558].c)) {
                            arrayOfKeyCodes.splice(arrayOfKeyCodes.indexOf(_0x3569f8[_0x152558].c), 1);
                        }
                }
            }
            if (_0x244728.keyCode == _0x3569f8.M.c && !_0x4ad9fe && _0x415203 <= _0xb8b260 - 50 && (!_0x3e08c0 || ("INPUT" != _0x244728.target.tagName || "checkbox" == _0x244728.target.type) && "TEXTAREA" != _0x244728.target.tagName && "SELECT" != _0x244728.target.tagName && 0 == $("div.modal.in:visible").length)) {
                _0x415203 = _0xb8b260;
                if (!_0x244728.isTrusted) {
                    return false;
                }
                rspwn(document.getElementById("nick").value);
                _0x4ad9fe = true;
            }
        }
        switch (_0x244728.keyCode) {
            case 27:
                var _0x4f6092 = $("div.modal.in:visible");
                if (disabledModalClose || 0 == _0x4f6092.length) {
                    if (_0xbbfdd2 || _0x2bc2d5 || _0x29894d || _0x12c259 || _0x181957 || _0x4a595d || _0x34cf3b) {
                        _0x472070.blur();
                        _0x1e0756.blur();
                        _0x6da0af();
                        _0x492dec();
                    } else if (_0x1fc846) {
                        window.closeAdvert();
                    } else {
                        if (!$("#dashPanel").is(":visible") && $("#login").is(":visible")) {
                            _0x186b83 = 0;
                        }
                        azad(true);
                    }
                } else {
                    _0x4f6092.last().modal("hide");
                }
                if (_0x2e06e0 || _0x465e4b) {
                    _0x244728.preventDefault();
                }
                break;
            case 13:
                if (_0x12c259) {
                    (_0x218784 ? (_0x11d4f6(_0x244728), _0x432cde) : _0x460313)();
                } else if (_0xbbfdd2) {
                    _0x42b2d5();
                    _0x488b2a();
                    if (13 == _0x36acf7) {
                        _0x483c7e(_0x472070.value);
                    }
                    _0x472070.value = _0x40774a;
                    _0x472070.selectionStart = _0x472070.selectionEnd = _0x40774a.length;
                    _0x472070.blur();
                    _0xbbfdd2 = false;
                } else if (!(_0x5eeb3b || 0 != $("div.modal.in:visible").length)) {
                    _0x472070.focus();
                    _0xbbfdd2 = true;
                }
                break;
            case 38:
                if (_0x12c259) {
                    _0x194510(-1);
                }
                break;
            case 40:
                if (_0x12c259) {
                    _0x194510(1);
                }
                break;
            case 37:
                if (_0x218784) {
                    _0x2b63fd();
                }
                break;
            case 39:
                if (_0x12c259 && (_0x4f6092 = $("#contextMenu").find("li.context-has-submenu.hover")) && _0x4f6092.length && _0x4f6092[0] !== _0xab54f2 && (_0x2b63fd(), _0x460313(), _0x218784)) {
                    $("#contextSubMenu").find("li.enabled").first().addClass("hover");
                }
        }
        _0x36acf7 = 0;
    };
    window.onkeyup = function(_0xe5126b) {
        if (_0xe5126b.keyCode == _0x3569f8.Space.c) {
            _0x3b6c7d = _0x3b6c7d && false;
        }
        if (_0xe5126b.keyCode == _0x3569f8.W.c && _0x15ba70) {
            sendSignal(36);
            _0x15ba70 = false;
        }
        if (_0xe5126b.keyCode == _0x3569f8.V.c && _0x15ba70) {
            sendSignal(36);
            _0x15ba70 = false;
        }
        if (_0xe5126b.keyCode == _0x3569f8.Z.c && _0x24ef11) {
            sendSignal(38);
            _0x24ef11 = false;
        }
        if (_0xe5126b.keyCode == _0x3569f8.F.c) {
            _0xad8aa9 = _0xad8aa9 && false;
        }
        if (_0xe5126b.keyCode == _0x3569f8.Q.c) {
            _0x38584f = _0x38584f && false;
        }
        if (_0xe5126b.keyCode == _0x3569f8.E.c) {
            _0x2bf6bb = _0x2bf6bb && false;
        }
        if (_0xe5126b.keyCode == _0x3569f8.S.c) {
            _0x13ad94 = _0x13ad94 && false;
        }
        if (_0xe5126b.keyCode == _0x3569f8.A.c) {
            _0x5a26dc = _0x5a26dc && false;
        }
        if (_0xe5126b.keyCode == _0x3569f8.X.c && _0x4ae953) {
            sendSignal(40);
            _0x4ae953 = false;
        }
        if (_0xe5126b.keyCode == _0x3569f8.I.c) {
            _0x23f8db = _0x23f8db && false;
        }
        if (_0xe5126b.keyCode == _0x3569f8.C.c && _0x4400ec) {
            _0x580067(!(_0x4400ec = false));
        }
        if (_0xe5126b.keyCode == _0x3569f8.D.c) {
            _0x16195f = _0x16195f && false;
        }
        if (_0xe5126b.keyCode == _0x3569f8.T.c) {
            _0x1f5d9c = _0x1f5d9c && false;
        }
        if (_0xe5126b.keyCode == _0x3569f8.M.c) {
            _0x4ad9fe = _0x4ad9fe && false;
        }
        if (_0xe5126b.keyCode == _0x3569f8.W360.c) {
            _0x1c4ea8 = _0x1c4ea8 && false;
        }
        if (_0xe5126b.keyCode == _0x3569f8.DW.c) {
            _0x1f7f29 = _0x1f7f29 && false;
        }
    };
    window.onblur = function() {
        if (_0x15ba70) {
            sendSignal(36);
        }
        if (_0x24ef11) {
            sendSignal(38);
        }
        if (_0x4ae953) {
            sendSignal(40);
        }
        _0x3b6c7d = _0x15ba70 = _0x24ef11 = _0xad8aa9 = _0x38584f = _0x2bf6bb = _0x13ad94 = _0x5a26dc = _0x4ae953 = _0x23f8db = _0x4400ec = _0x16195f = _0x1f5d9c = _0x4ad9fe = _0x1c4ea8 = _0x1f7f29 = false;
    };
    window.requestAnimationFrame(_0x3a188d);
    _0x67e7da = setTimeout(function() {
        _0x67e7da = 0;
    }, 0);
    setInterval(_0x580067, 50);
    setInterval(_0x44d9fa, 1000);
    setInterval(function() {
        var _0xa2ae65;
        var _0x399743;
        sendSignal(95);
        _0xa2ae65 = 23 - new Date().getUTCHours();
        _0x399743 = 60 - new Date().getUTCMinutes();
        _0xa2ae65 = _0xa2ae65 + "h " + _0x399743 + "m ";
        $("#challengeTimeLeft").text(_0xa2ae65);
    }, 18000);
    setInterval(_0x4c97d2, 1000);
    setInterval(_0x442a2f, 6500);
    var _0x128934 = window.swal.close;
    var _0xa19570 = window.onkeydown;
    var _0x198171 = window.onfocus;
    window.swal.close = function() {
        $("div.modal").css("overflow-y", '');
        _0x128934();
        window.onkeydown = _0xa19570;
        window.onfocus = _0x198171;
    };
    if (_0x67e7da) {
        clearTimeout(_0x67e7da);
        _0x67e7da = 0;
    } else {
        _0x4d3d52 = true;
    }
    if ((parseInt(window.localStorage.serverlistVersion) || 0) <= 6) {
        window.localStorage.removeItem("gameservers");
    }
    var _0x54a038 = '';
    if (null != window.localStorage.gameservers) {
        _0x2c8f2a = JSON.parse(window.localStorage.gameservers);
        var _0x3bc263 = 0;
        for (var _0x16fb36 = 0; _0x16fb36 < _0x2c8f2a.length; ++_0x16fb36) {
            var _0x51d225 = _0x2c8f2a[_0x16fb36];
            _0x51d225.players = 0;
            if (_0x51d225.isCurrent) {
                if (_0x51d225.address) {
                    _0x54a038 = _0x51d225.address;
                    _0x38891d = _0x51d225.name;
                    _0x826efd = _0x51d225.id;
                }
                if (!isNaN(_0x51d225.location)) {
                    _0x3bc263 = _0x51d225.location;
                }
            }
        }
        _0x28b056(_0x3bc263);
    }
    if ('' == _0x54a038 || _0x40ffc9) {
        connectDefault();
    } else {
        connectserver(_0x54a038, _0x38891d);
    }
    $("#overlays").show();
    ++framesCounter;
    _0x51c554();
    ignoreTrustedEvent = false;
    $(".innerBoxDashboard2").show();
    $("#btnFriends").show();
    $("#settingsBtn").show();
    if (isMobile) {
        $("#touch").show();
        $("#fullscreenBtn").show();
        $("#zoomControls").show();
        $("#respawnTouch").show();
    }
};
window.connectserver = window.setserver = function(_0x4537b3, _0x148016) {
    if (0 == _0x2b8278) {
        _0x46c79d = _0x4537b3;
        _0x518a09 = _0x148016;
    } else if (_0x4537b3 != _0x256390) {
        _0x26af75();
        _0x256390 = _0x4537b3;
        _0x38891d = _0x148016 || '';
        _0x4a52b8();
        if (_0x148016 = _0x23f78f(_0x4537b3)) {
            _0x40eece(_0x148016.gamemode);
        }
        _0x826efd = _0x148016 ? _0x148016.id : 0;
    }
    setTimeout(function() {
        if (!window.isAniLdd) {
            window.isAniLdd = true;
            _0x18ce16[23] = {
                "time": _0x200aca,
                "duration": 1,
                "u": {
                    "canvas": _0xe8817a("img/animations/shield_blue2" + _0x4e3826 + "png"),
                    "m": 15,
                    "h": 5,
                    "v": 7,
                    "k": 3,
                    "scale": 1.7,
                    "xOffset": _0x3b0e1f,
                    "yOffset": 0,
                    "globalAlpha": 0.9,
                    "globalAlphaBub": 0.9
                }
            };
            _0x18ce16[24] = {
                "time": _0x200aca,
                "duration": 1,
                "u": {
                    "canvas": _0xe8817a("img/animations/shield_green2" + _0x4e3826 + "png"),
                    "m": 10,
                    "h": 5,
                    "v": 10,
                    "k": 3,
                    "scale": 1.7,
                    "xOffset": _0x3b0e1f,
                    "yOffset": 0,
                    "globalAlpha": 0.9,
                    "globalAlphaBub": 0.9
                }
            };
            _0x18ce16[25] = {
                "time": _0x200aca,
                "duration": 1,
                "u": {
                    "canvas": _0xe8817a("img/animations/shield_red2" + _0x4e3826 + "png"),
                    "m": 10,
                    "h": 5,
                    "v": 10,
                    "k": 3,
                    "scale": 1.7,
                    "xOffset": _0x3b0e1f,
                    "yOffset": 0,
                    "globalAlpha": 0.9,
                    "globalAlphaBub": 0.9
                }
            };
            _0x18ce16[26] = {
                "time": _0x200aca,
                "duration": 1,
                "u": {
                    "canvas": _0xe8817a("img/animations/shield_purple2" + _0x4e3826 + "png"),
                    "m": 10,
                    "h": 5,
                    "v": 10,
                    "k": 3,
                    "scale": 1.7,
                    "xOffset": _0x3b0e1f,
                    "yOffset": 0,
                    "globalAlpha": 0.9,
                    "globalAlphaBub": 0.9
                }
            };
            _0x18ce16[30] = {
                "time": _0x200aca,
                "duration": 1,
                "u": {
                    "canvas": _0xe8817a("img/animations/wave.png"),
                    "m": 4,
                    "h": 4,
                    "v": 5,
                    "k": 8,
                    "scale": 1.25,
                    "xOffset": 25,
                    "yOffset": -24,
                    "globalAlpha": 0.9,
                    "globalAlphaBub": 0.7
                }
            };
            _0x18ce16[31] = {
                "time": _0x200aca,
                "duration": 1,
                "u": {
                    "canvas": _0xe8817a("img/animations/explo_head2.png"),
                    "m": 60,
                    "h": 5,
                    "v": 3,
                    "k": 1,
                    "scale": 1.28,
                    "xOffset": 0,
                    "yOffset": -5,
                    "globalAlpha": 0.9,
                    "globalAlphaBub": 0.7
                }
            };
            _0x18ce16[32] = {
                "time": _0x200aca,
                "duration": 1,
                "u": {
                    "canvas": _0xe8817a("img/animations/hearts.png"),
                    "m": 6,
                    "h": 3,
                    "v": 7,
                    "k": 5,
                    "scale": 1.37,
                    "xOffset": -5,
                    "yOffset": -2,
                    "globalAlpha": 0.9,
                    "globalAlphaBub": 0.7
                }
            };
            _0x18ce16[41] = {
                "time": _0x200aca,
                "duration": 1,
                "u": {
                    "canvas": _0xe8817a("img/animations/angry_pumpkin6.png"),
                    "m": 22,
                    "h": 5,
                    "v": 4,
                    "k": 2,
                    "scale": 1.88,
                    "xOffset": 0,
                    "yOffset": -36,
                    "globalAlpha": 1,
                    "globalAlphaBub": 0.7
                }
            };
            _0x18ce16[42] = {
                "time": _0x200aca,
                "duration": 1,
                "u": {
                    "canvas": _0xe8817a("img/animations/scared_pumpkin3.png"),
                    "m": 34,
                    "h": 5,
                    "v": 3,
                    "k": 2,
                    "scale": 1.8,
                    "xOffset": 0,
                    "yOffset": -15,
                    "globalAlpha": 1,
                    "globalAlphaBub": 0.7
                }
            };
            _0x18ce16[43] = {
                "time": _0x200aca,
                "duration": 1,
                "u": {
                    "canvas": _0xe8817a("img/animations/yawn_pumpkin3.png"),
                    "m": 28,
                    "h": 5,
                    "v": 5,
                    "k": 1,
                    "scale": 1.8,
                    "xOffset": 0,
                    "yOffset": -18,
                    "globalAlpha": 1,
                    "globalAlphaBub": 0.7
                }
            };
            _0x18ce16[44] = {
                "time": _0x200aca,
                "duration": 1,
                "u": {
                    "canvas": _0xe8817a("img/animations/threm2.png"),
                    "m": 11,
                    "h": 5,
                    "v": 10,
                    "k": 1,
                    "scale": 1.2,
                    "xOffset": 0,
                    "yOffset": 25,
                    "globalAlpha": 1,
                    "globalAlphaBub": 0.7
                }
            };
            _0x18ce16[45] = {
                "time": _0x200aca,
                "duration": 1,
                "u": {
                    "canvas": _0xe8817a("img/animations/sweatface.png"),
                    "m": 9,
                    "h": 5,
                    "v": 10,
                    "k": 2,
                    "scale": 1.05,
                    "xOffset": 0,
                    "yOffset": 0,
                    "globalAlpha": 1,
                    "globalAlphaBub": 0.7
                }
            };
            _0x18ce16[46] = {
                "time": _0x200aca,
                "duration": 1,
                "u": {
                    "canvas": _0xe8817a("img/animations/tearsjoy.png"),
                    "m": 9,
                    "h": 5,
                    "v": 10,
                    "k": 2,
                    "scale": 1.05,
                    "xOffset": 0,
                    "yOffset": 0,
                    "globalAlpha": 1,
                    "globalAlphaBub": 0.7
                }
            };
            _0x18ce16[47] = {
                "time": _0x200aca,
                "duration": 1,
                "u": {
                    "canvas": _0xe8817a("img/animations/nono.png"),
                    "m": 7,
                    "h": 5,
                    "v": 5,
                    "k": 6,
                    "scale": 1.15,
                    "xOffset": 0,
                    "yOffset": -5,
                    "globalAlpha": 1,
                    "globalAlphaBub": 0.7
                }
            };
            _0x18ce16[48] = {
                "time": _0x200aca,
                "duration": 1,
                "u": {
                    "canvas": _0xe8817a("img/animations/clap.png"),
                    "m": 16,
                    "h": 5,
                    "v": 3,
                    "k": 3,
                    "scale": 1.25,
                    "xOffset": 0,
                    "yOffset": 0,
                    "globalAlpha": 1,
                    "globalAlphaBub": 0.7
                }
            };
            _0x18ce16[49] = {
                "time": _0x200aca,
                "duration": 1,
                "u": {
                    "canvas": _0xe8817a("img/animations/crying.png"),
                    "m": 32,
                    "h": 5,
                    "v": 3,
                    "k": 2,
                    "scale": 1.22,
                    "xOffset": 0,
                    "yOffset": 0,
                    "globalAlpha": 1,
                    "globalAlphaBub": 0.7
                }
            };
            _0x18ce16[50] = {
                "time": _0x200aca,
                "duration": 1,
                "u": {
                    "canvas": _0xe8817a("img/animations/devsmile.png"),
                    "m": 48,
                    "h": 5,
                    "v": 3,
                    "k": 1,
                    "scale": 1.39,
                    "xOffset": 0,
                    "yOffset": 0,
                    "globalAlpha": 1,
                    "globalAlphaBub": 0.7
                }
            };
            _0x18ce16[51] = {
                "time": _0x200aca,
                "duration": 1,
                "u": {
                    "canvas": _0xe8817a("img/animations/eatman.png"),
                    "m": 12,
                    "h": 5,
                    "v": 3,
                    "k": 3,
                    "scale": 1,
                    "xOffset": 0,
                    "yOffset": 0,
                    "globalAlpha": 1,
                    "globalAlphaBub": 0.7
                }
            };
            _0x18ce16[52] = {
                "time": _0x200aca,
                "duration": 1,
                "u": {
                    "canvas": _0xe8817a("img/animations/trophy.png"),
                    "m": 33,
                    "h": 5,
                    "v": 3,
                    "k": 2,
                    "scale": 1.7,
                    "xOffset": 0,
                    "yOffset": 0,
                    "globalAlpha": 1,
                    "globalAlphaBub": 0.7
                }
            };
            _0x18ce16[53] = {
                "time": _0x200aca,
                "duration": 2,
                "u": {
                    "canvas": _0xe8817a("img/animations/heartsv.png"),
                    "m": 44,
                    "h": 5,
                    "v": 3,
                    "k": 2,
                    "scale": 1.2,
                    "xOffset": 0,
                    "yOffset": 0,
                    "globalAlpha": 1,
                    "globalAlphaBub": 0.7
                }
            };
            for (var _0xa3d487 = 0; _0xa3d487 <= 255; _0xa3d487++) {
                var _0x21fcb3;
                var _0x4ddf8a = _0x18ce16[_0xa3d487];
                if (_0x4ddf8a && ((_0x21fcb3 = _0x4ddf8a.u) && (_0x4ddf8a.duration = _0x21fcb3.m * _0x21fcb3.v * _0x21fcb3.k * 1000 / 60), 0 == _0x4ddf8a.duration)) {
                    _0x4ddf8a.duration = _0x4ddf8a.time === _0xb6c6e7 ? 1800 : 30000;
                }
            }
        }
    }, 10);
};
window.connectDefault = function(_0x26e115) {
    if (windowIsLoaded && null == _0x256390 && '' == _0x46c79d) {
        var _0x2cc525;
        var _0x37ba00 = [{
            "id": 9,
            "name": "Crazy EU",
            "description": '',
            "address": "s9.agma.io:2087",
            "location": 0,
            "gamemode": _0x13936d(0),
            "players": 0,
            "maxPlayers": 150,
            "isCurrent": false
        }, {
            "id": 11,
            "name": "Gigantic",
            "description": '',
            "address": "s11.agma.io:2053",
            "location": 0,
            "gamemode": _0x13936d(2),
            "players": 0,
            "maxPlayers": 150,
            "isCurrent": false
        }, {
            "id": 19,
            "name": "Gigantic 2",
            "description": '',
            "address": "s19.agma.io:451",
            "location": 0,
            "gamemode": _0x13936d(2),
            "players": 0,
            "maxPlayers": 150,
            "isCurrent": false
        }, {
            "id": 37,
            "name": "MegaSplit EU",
            "description": '',
            "address": "s37.agma.io:452",
            "location": 0,
            "gamemode": _0x13936d(2),
            "players": 0,
            "maxPlayers": 150,
            "isCurrent": false
        }, {
            "id": 38,
            "name": "SOLO Agf.io",
            "description": '',
            "address": "s38.agma.io:452",
            "location": 1,
            "gamemode": _0x13936d(0),
            "players": 0,
            "maxPlayers": 150,
            "isCurrent": false
        }, {
            "id": 20,
            "name": "Crazy NA",
            "description": '',
            "address": "s20.agma.io:2087",
            "location": 1,
            "gamemode": _0x13936d(0),
            "players": 0,
            "maxPlayers": 150,
            "isCurrent": false
        }, {
            "id": 5,
            "name": "Splitrun Paradise",
            "description": '',
            "address": "s5.agma.io:456",
            "location": 1,
            "gamemode": _0x13936d(0),
            "players": 0,
            "maxPlayers": 150,
            "isCurrent": false
        }, {
            "id": 12,
            "name": "Giant",
            "description": '',
            "address": "s12.agma.io:2087",
            "location": 1,
            "gamemode": _0x13936d(2),
            "players": 0,
            "maxPlayers": 150,
            "isCurrent": false
        }, {
            "id": 17,
            "name": "Crazy Asia",
            "description": '',
            "address": "s17.agma.io:452",
            "location": 2,
            "gamemode": _0x13936d(0),
            "players": 0,
            "maxPlayers": 150,
            "isCurrent": false
        }, {
            "id": 18,
            "name": "Giga",
            "description": '',
            "address": "s18.agma.io:452",
            "location": 2,
            "gamemode": _0x13936d(2),
            "players": 0,
            "maxPlayers": 150,
            "isCurrent": false
        }, {
            "id": 26,
            "name": "Giga 2",
            "description": '',
            "address": "s26.agma.io:451",
            "location": 2,
            "gamemode": _0x13936d(2),
            "players": 0,
            "maxPlayers": 150,
            "isCurrent": false
        }, {
            "id": 39,
            "name": "MegaSplit AS",
            "description": '',
            "address": "s39.agma.io:452",
            "location": 2,
            "gamemode": _0x13936d(2),
            "players": 0,
            "maxPlayers": 150,
            "isCurrent": false
        }, {
            "id": 40,
            "name": "Infection EU",
            "description": '',
            "address": "s40.agma.io:451",
            "location": 0,
            "gamemode": _0x13936d(17),
            "players": 0,
            "maxPlayers": 150,
            "isCurrent": false
        }];
        if (_0x17c3d4) {
            _0x468e60 = [_0x37ba00[5], _0x37ba00[0], _0x37ba00[1], _0x2cc525 = _0x37ba00[4]];
        } else {
            if (_0x1a5d8) {
                _0x468e60 = [_0x37ba00[0], _0x37ba00[5], _0x37ba00[8], _0x2cc525 = _0x37ba00[12]];
            } else {
                if (_0x38288f) {
                    if (_0x37ba00[_0x38288f]) {
                        _0x28b056((_0x2cc525 = _0x37ba00[_0x38288f]).location);
                    } else {
                        _0x2cc525 = _0x37ba00[0];
                    }
                    _0x468e60 = [_0x37ba00[1], _0x37ba00[5], _0x37ba00[8], _0x37ba00[12]];
                } else {
                    if (null == (_0x26e115 = _0x26e115 || ("undefined" != typeof Storage ? localStorage.contAg : "?"))) {
                        return void setTimeout(function() {
                            connectDefault("?");
                        }, 3000);
                    }
                    _0x468e60 = "AS" == _0x26e115 || "OC" == _0x26e115 ? Math.random() < 1 ? [_0x37ba00[9], _0x37ba00[10], _0x37ba00[11], _0x2cc525 = _0x37ba00[8]] : [_0x37ba00[8], _0x37ba00[10], _0x37ba00[11], _0x2cc525 = _0x37ba00[9]] : "NA" == _0x26e115 || "SA" == _0x26e115 ? Math.random() < 1 ? [_0x37ba00[7], _0x37ba00[6], _0x37ba00[4], _0x2cc525 = _0x37ba00[5]] : [_0x37ba00[5], _0x37ba00[6], _0x37ba00[4], _0x2cc525 = _0x37ba00[7]] : Math.random() < 1 ? [_0x37ba00[1], _0x37ba00[2], _0x37ba00[3], _0x2cc525 = _0x37ba00[0]] : [_0x37ba00[0], _0x37ba00[2], _0x37ba00[3], _0x2cc525 = _0x37ba00[1]];
                }
            }
        }
        if (0 == _0x2c8f2a.length) {
            _0x2c8f2a = _0x37ba00;
            _0x2cc525.isCurrent = true;
            _0x28b056(_0x2cc525.location);
        }
        connectserver(_0x2cc525.address, _0x2cc525.name);
    }
};
if (!Date.now) {
    Date.now = function() {
        return new Date().getTime();
    };
}
if (!window.performance) {
    window.performance = {};
}
if (!window.performance.now) {
    window.performance.now = Date.now;
}
var _0x465e4b = /firefox/i.test(navigator.userAgent);
var _0x4df5e1 = !!document.documentMode;
/edg/i.test(navigator.userAgent);
var isMobile = ("ontouchstart" in window || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints) && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Macintosh/i.test(navigator.userAgent);
var _0x591623 = isMobile && /iPhone|iPad|iPod|Macintosh/i.test(navigator.userAgent);
var _0x4386c1 = false;
var _0x5ebb13 = "ondrop" in document.createElement("div") && "FormData" in window && "FileReader" in window;
var _0x40ffc9 = false;
var _0x17c3d4 = !!(decodeURIComponent((new RegExp("[?|&]agf=([^&;]+?)(&|#|;|$)").exec(location.search) || [null, ''])[1].replace(/\+/g, "%20")) || null);
var _0x1a5d8 = !!(decodeURIComponent((new RegExp("[?|&]zombies=([^&;]+?)(&|#|;|$)").exec(location.search) || [null, ''])[1].replace(/\+/g, "%20")) || null);
var _0x38288f = decodeURIComponent((new RegExp("[?|&]server=([^&;]+?)(&|#|;|$)").exec(location.search) || [null, ''])[1].replace(/\+/g, "%20")) || null;
if (0 < ~~_0x38288f) {
    _0x40ffc9 = true;
}
var _0x26690d = [_0x3b4e10, {
    "s": 1657,
    "c": "UCneU-0NP-BUHGoahZ8xsiTg",
    "cc": true
}, _0x3970f6, _0x4343d0, _0x59b443, _0x47e1db, _0x5b0b2b, {
    "s": 2626,
    "c": "UCGvx6BbsFg1IB1nJTRvm1DQ",
    "cc": false
}, _0x3de215, {
    "s": 2816,
    "c": "UCYIzeLC1Jp7y1klvoPEW1sA",
    "cc": false
}, _0x5aaa29];
var _0x1c0802 = null;
var _0x5a219c = 0;
var _0xff0f52 = _0x5d9340;
var _0x27324d = [];
var _0x32f181 = 0;
var _0x10e829 = 0;
var _0x1d3023 = 0;
var _0x4b6359 = 0;
var _0x186b83 = 0;
var _0x582d99 = 0;
var _0x4ade31 = 0;
var _0x540edc = 0;
var _0x7895bb = 0;
var _0x24d21a = 0;
var _0x1f573a = 0;
var _0x2029fe = 0;
var _0x2402ca = 0;
var _0x3f3ed9 = 0;
var _0x53e3b2 = 0;
var _0x21e585 = 0;
var _0xd3f6e4 = 0;
var _0x4fd0d2 = 0;
var _0x352baf = 0;
var _0x3902ef = 0;
var _0x1e6b2c = 0;
var _0x44a9fb = 0;
var _0x32316b = 0;
var _0x441f0a = 0;
var _0x483209 = false;
var _0x386e1f = 0;
var _0x1a6afb = false;
var _0x38c122 = 0;
var _0x5c9b82 = 0;
var hasWatchedAd = false;
var _0x17f189 = false;
var spawnCooldownLowTimeoutId = 0, spawnCooldownHighTimeoutId = 0;
var spawnCooldownLow = 0;
var spawnCooldownHigh = 0;
var _0x1cc38d = 0;
var _0x514d47 = false;
var _0x173058 = false;
var waitPlayButtonDone = false, waitAdvertContinueDone = false;
var _0x1fc846 = false;
var _0x4bcc93 = false;
var _0x6b0fd0 = 0;
var _0x1c6763 = 0;
var _0x492c36 = true;
var _0x384d50 = 0;
var _0xcc8490 = 0;
var _0x57f39f = false;
var _0x357e04 = true;
var _0x3f104e = 0;
var _0x35cd4a = 0;
var _0x6dd07a = 0;
var _0x51e494 = {};

function _0x488b2a() {
    if (_0x29894d) {
        $("#commandsDropdown").hide();
        _0x29894d = false;
    }
}

function _0x495b59(_0x5e7ad1) {
    if (_0x5e7ad1 && "KBD" == _0x5e7ad1.tagName) {
        var _0x1340ae = document.getElementById("chtbox");
        var _0x5e7ad1 = _0x5e7ad1.innerHTML;
        if (_0x5e7ad1) {
            if ("/ping" == _0x5e7ad1) {
                if (!_0x1566f5) {
                    setFPS(1);
                }
                if (!pingTime) {
                    return void _0x1340ae.focus();
                }
                _0x5e7ad1 = "📢 My ping is: " + pingTime + ". FPS: " + _0xe31776;
            } else if ("/fps" == _0x5e7ad1) {
                if (!_0x1566f5) {
                    setFPS(1);
                }
                _0x5e7ad1 = "📢 My FPS is: " + _0xe31776 + ". Ping: " + pingTime;
            }
            _0x1340ae.value = _0x5e7ad1;
            _0x1340ae.focus();
        }
    }
}

function _0x42b2d5() {
    if (_0x2bc2d5) {
        $("#emojiDropdown").hide();
        _0x2bc2d5 = false;
    }
}

function _0x191230(_0x5b7ebf, _0x3c2fed) {
    var _0x627fa6 = null;
    if (!_0x3e08c0) {
        var _0x39db36 = $("#chtCanvas").offset();
        if (_0x39db36) {
            _0x5b7ebf -= _0x39db36.left;
            _0x3c2fed -= _0x39db36.top;
        }
        for (var _0x42d2f9 = 0; _0x42d2f9 < _0x1937c1.length; _0x42d2f9++) {
            var _0x56c33e = _0x1937c1[_0x42d2f9];
            if (_0x5b7ebf >= _0x56c33e.x0 && _0x3c2fed >= _0x56c33e.y0 && _0x5b7ebf <= _0x56c33e.x1 && _0x3c2fed <= _0x56c33e.y1) {
                _0x627fa6 = _0x56c33e.ch;
                break;
            }
        }
    }
    return _0x627fa6;
}

function _0x491923(_0x4c7278) {
    var _0x203d30;
    if (!_0x3e08c0 && (_0x203d30 = _0xfe046f, _0xfe046f = _0x191230(_0x4c7278.clientX, _0x4c7278.clientY), _0x203d30 || _0xfe046f)) {
        _0x4cb089 = !(_0x10e53d = null);
    }
}

function _0x38ee8a(_0x42c4a5) {
    if (!(_0x3e08c0 || _0x181957)) {
        _0x491923(_0x42c4a5);
        if (_0xfe046f) {
            _0x3169a6(_0x42c4a5);
            $("#contextMenu").find("li.hover").removeClass("hover");
            $("#contextUserProfile.enabled").addClass("hover");
            _0x460313();
            _0x2b8f46();
        }
    }
}

function _0xed8399(_0x4c53ad) {
    if (!(_0x3e08c0 || _0x181957 || !isSpectating || 0 != _0x335282.length)) {
        _0x2b8f46();
        _0x3169a6(_0x4c53ad);
        $("#contextMenu").find("li.hover").removeClass("hover");
        $("#contextSpectate.enabled").addClass("hover");
        _0x460313();
        _0x2b8f46();
    }
}

function _0x3169a6(_0x4dc13e) {
    if (!_0x3e08c0 && (_0x4dc13e.preventDefault(), !_0x181957)) {
        document.getElementById("chtbox").blur();
        var _0x5c09e8 = null;
        if (!_0xfe046f) {
            var _0x3e0f5a = (_0x4dc13e.pageX - _0x53f1a5 / 2) / _0x3e50d9 + _0x59034c;
            var _0x56bce2 = (_0x4dc13e.pageY - _0x1058ed / 2) / _0x3e50d9 + _0x4ce984;
            for (var _0x57a21f = _0x34b545.length - 1; 0 <= _0x57a21f; _0x57a21f--) {
                var _0x3c9855 = _0x34b545[_0x57a21f];
                if (0 == _0x3c9855.i) {
                    var _0x4d892b = _0x3c9855.x - _0x3e0f5a;
                    var _0x19beeb = _0x3c9855.y - _0x56bce2;
                    if (_0x4d892b * _0x4d892b + _0x19beeb * _0x19beeb < _0x3c9855.size * _0x3c9855.size) {
                        _0x5c09e8 = _0x3c9855;
                        break;
                    }
                }
            }
        }
        var _0x2ca1ee = {
            "background-image": '',
            "background-color": ''
        };
        if (_0xfe046f || _0x5c09e8) {
            if (_0xfe046f) {
                if (isReady() && _0xfe046f.$ == _0x826efd && 0 != _0xfe046f.l) {
                    new PacketWriter(6).setUint8(60).setUint8(0).setUint32(_0xfe046f.l).send();
                }
                $("#contextPlayerSkin").css({
                    "background-image": '',
                    "background-color": _0xfe046f.color
                });
                $(".context-player-wear").css("background-image", '').hide();
                $("#contextPlayerName").text(_0xfe046f.name).css("color", '').removeClass("gold black");
                if (_0xfe046f.goldMember) {
                    $("#contextPlayerName").addClass("gold");
                }
                if (_0xfe046f.$ == _0x826efd && 0 != _0xfe046f.l) {
                    $("#contextPartyInvite").addClass("enabled");
                    $("#contextFriendAdd").addClass("enabled");
                    $("#contextUserProfile").addClass("enabled");
                    $("#contextPrivateMessage").addClass("enabled");
                    if (0 < _0x35cd4a || _0x6dd07a) {
                        $("#contextModerate").addClass("enabled");
                    } else {
                        $("#contextModerate").removeClass("enabled");
                    }
                    if (isSpectating && 0 == _0x335282.length) {
                        $("#contextSpectate").addClass("enabled");
                    } else {
                        $("#contextSpectate").removeClass("enabled");
                    }
                } else {
                    $("#contextModerate").removeClass("enabled");
                    $("#contextPartyInvite").removeClass("enabled");
                    $("#contextUserProfile").removeClass("enabled");
                    if (2 == _0xfe046f.category) {
                        $("#contextFriendAdd").addClass("enabled");
                        $("#contextPrivateMessage").addClass("enabled");
                    } else {
                        $("#contextFriendAdd").removeClass("enabled");
                        $("#contextPrivateMessage").removeClass("enabled");
                    }
                    $("#contextSpectate").removeClass("enabled");
                }
                $("#contextPickpocket").removeClass("enabled");
                $("#contextMute").addClass("enabled");
            } else {
                if (isReady()) {
                    new PacketWriter(6).setUint8(60).setUint8(1).setUint32(_0x5c09e8.l).send();
                }
                $("#contextPlayerSkin").css("background-color", _0x5c09e8.color);
                if (_0x5c09e8._ && _0xfd65d9 && (0 != _0x5c09e8.skinId && !_0x3df17b || 0 != _0x5c09e8.N)) {
                    if (0 == _0x5c09e8.skinId || _0x3df17b) {
                        $("#contextPlayerSkin").css("background-image", "url(skins/objects/" + _0x5c09e8.N.toString() + "_lo.png?v=" + objectsApiVersion + ")");
                    } else {
                        $("#contextPlayerSkin").css("background-image", "url(skins/" + _0x5c09e8.skinId.toString() + "_lo.png?u=" + (_0x48a780[_0x5c09e8.skinId] || 0) + ")");
                    }
                } else {
                    $("#contextPlayerSkin").css("background-image", '');
                }
                for (var _0x5673e8 = 1; _0x5673e8 <= 5; _0x5673e8++) {
                    if (_0x5c09e8.B && _0x4b4ed5 && _0x5673e8 <= _0x5c09e8.B.length) {
                        var _0x77372b = _0x5c09e8.B[_0x5673e8 - 1];
                        var _0x37c0a3 = _0x464b91[_0x77372b.P] || '';
                        try {
                            $("#contextPlayerWear" + _0x5673e8).css("background-image", "url(wearables/" + _0x77372b.wearId.toString() + "_lo.png?v=" + wearablesApiVersion + ")").removeClass("center top bottom left right max".replace(_0x37c0a3, '')).addClass(_0x37c0a3).show();
                        } catch (_0x343cc0) {
                            console.log("ERROR IN wear.wearId.toString()");
                            console.log(_0x343cc0);
                        }
                    } else {
                        $("#contextPlayerWear" + _0x5673e8).css("background-image", '').hide();
                    }
                }
                $("#contextPlayerName").text(_0x5c09e8.name || "Agma.io Player").css("color", _0x5c09e8.name && 1 < _0x5c09e8.U ? _0xdc7889[_0x5c09e8.U] : '').removeClass("gold black");
                if (_0x5c09e8.name) {
                    if (1 == _0x5c09e8.U) {
                        $("#contextPlayerName").addClass("gold");
                    } else if (6 == _0x5c09e8.U) {
                        $("#contextPlayerName").addClass("black");
                    }
                }
                $("#contextPartyInvite").addClass("enabled");
                $("#contextFriendAdd").addClass("enabled");
                $("#contextUserProfile").addClass("enabled");
                $("#contextPrivateMessage").addClass("enabled");
                $("#contextPickpocket").addClass("enabled");
                $("#contextMute").addClass("enabled");
                if (0 < _0x35cd4a || _0x6dd07a) {
                    $("#contextModerate").addClass("enabled");
                } else {
                    $("#contextModerate").removeClass("enabled");
                }
                if (isSpectating && 0 == _0x335282.length) {
                    $("#contextSpectate").addClass("enabled");
                } else {
                    $("#contextSpectate").removeClass("enabled");
                }
            }
        } else {
            $("#contextPlayerSkin").css(_0x2ca1ee);
            $(".context-player-wear").css("background-image", '').hide();
            $("#contextPlayerName").text("(no player selected)").css("color", '').removeClass("gold black");
            $("#contextPartyInvite").removeClass("enabled");
            $("#contextFriendAdd").removeClass("enabled");
            $("#contextUserProfile").removeClass("enabled");
            $("#contextPrivateMessage").removeClass("enabled");
            $("#contextPickpocket").removeClass("enabled");
            $("#contextMute").removeClass("enabled");
            $("#contextSpectate").removeClass("enabled");
            $("#contextModerate").removeClass("enabled");
        }
        if (0 < _0x55ce89.length) {
            $("#contextPartyMessage").addClass("enabled");
            $("#contextPartyLeave").addClass("enabled");
        } else {
            $("#contextPartyMessage").removeClass("enabled");
            $("#contextPartyLeave").removeClass("enabled");
        }
        if (0 < _0x5e5c13.length) {
            $("#contextUnmute").addClass("enabled");
        } else {
            $("#contextUnmute").removeClass("enabled");
        }
        var _0x46f984 = $("#contextMenu");
        var _0x24ed85 = _0x46f984.outerHeight();
        var _0x12641b = _0x46f984.outerWidth();
        var _0x327cd3 = _0x4dc13e.pageY;
        var _0x4dc13e = _0x4dc13e.pageX;
        var _0x327cd3 = Math.max(_0x1058ed < _0x327cd3 + _0x24ed85 && 0 <= _0x327cd3 - _0x24ed85 + 1 ? _0x327cd3 - _0x24ed85 + 1 : Math.min(_0x327cd3, _0x1058ed - _0x24ed85), 0);
        var _0x4dc13e = Math.clamp(_0x4dc13e, 0, _0x53f1a5 - _0x12641b);
        var _0x46542c = {
            top: _0x327cd3,
            left: _0x4dc13e
        };
        _0x46f984.show();
        _0x46f984.css(_0x46542c);
        _0x12c259 = true;
    }
}

function _0x337253(_0x1c5f0b) {
    var _0x21ba99 = $("#contextSubMenu");
    var _0x9a3a28 = $(_0x1c5f0b);
    var _0x5a7084 = _0x9a3a28.outerHeight();
    var _0x21a675 = _0x9a3a28.outerWidth();
    var _0x9a3a28 = _0x9a3a28.offset();
    var _0x563d51 = _0x9a3a28.top;
    var _0x9a3a28 = _0x9a3a28.left;
    var _0x299143 = _0x21ba99.outerHeight();
    var _0x5b5cdd = _0x21ba99.outerWidth();
    var _0x5a7084 = Math.max(_0x1058ed < _0x563d51 - 4 + _0x299143 && 0 <= _0x563d51 + 4 + _0x5a7084 - _0x299143 ? _0x563d51 + 4 + _0x5a7084 - _0x299143 : Math.min(_0x563d51 - 4, _0x1058ed - _0x299143), 0);
    var _0x563d51 = Math.max(_0x53f1a5 < _0x9a3a28 - 4 + _0x21a675 + _0x5b5cdd ? 0 <= _0x9a3a28 + 4 - _0x5b5cdd ? _0x9a3a28 + 4 - _0x5b5cdd : _0x9a3a28 <= _0x53f1a5 - _0x9a3a28 - _0x21a675 ? _0x53f1a5 - _0x5b5cdd : 0 : Math.min(_0x9a3a28 - 4 + _0x21a675, _0x53f1a5 - _0x5b5cdd), 0);
    var _0x50776 = {
        top: _0x5a7084,
        left: _0x563d51
    };
    _0x21ba99.show();
    _0x21ba99.css(_0x50776);
    if (_0x352baf) {
        clearTimeout(_0x352baf);
        _0x352baf = 0;
    }
    if (_0x3902ef) {
        clearTimeout(_0x3902ef);
        _0x3902ef = 0;
    }
    _0xab54f2 = _0x1c5f0b;
    _0x218784 = true;
}

function _0x2b8f46() {
    if (_0x12c259) {
        if (isReady()) {
            new PacketWriter(6).setUint8(60).setUint8(0).setUint32(0).send();
        }
        _0x2b63fd();
        $("#contextMenu").hide().find("li.hover").removeClass("hover");
        if (_0xfe046f) {
            _0x4cb089 = !(_0xfe046f = null);
        }
        _0x12c259 = false;
    }
}

function _0x2b63fd() {
    if (_0x218784) {
        $("#contextSubMenu").hide().find("li.hover").removeClass("hover");
        _0xab54f2 = null;
        _0x218784 = !(_0x19fdd4 = {});
    }
}

function _0x548e1b() {
    var _0x3e8e1d = Math.floor(Date.now() / 1000);
    let _0x4c32dc = 600 - (_0x3e8e1d - _0x51e494.lastThievingTime.mass);
    let _0x39dfe9 = 1200 - (_0x3e8e1d - _0x51e494.lastThievingTime.coins);
    let _0x507d30 = 1200 - (_0x3e8e1d - _0x51e494.lastThievingTime.sp);
    let _0x373787 = 1200 - (_0x3e8e1d - _0x51e494.lastThievingTime.powerup);
    if (_0x4c32dc < 0) {
        _0x4c32dc = 0;
    }
    if (_0x39dfe9 < 0) {
        _0x39dfe9 = 0;
    }
    if (_0x507d30 < 0) {
        _0x507d30 = 0;
    }
    if (_0x373787 < 0) {
        _0x373787 = 0;
    }
    var _0x3e8e1d = Math.floor(_0x4c32dc / 60);
    var _0x3c5736 = _0x4c32dc % 60;
    var _0x1f960f = Math.floor(_0x39dfe9 / 60);
    var _0x59ed77 = _0x39dfe9 % 60;
    var _0x3ee2c1 = Math.floor(_0x507d30 / 60);
    var _0x4cd152 = _0x507d30 % 60;
    var _0x56b8c5 = Math.floor(_0x373787 / 60);
    var _0x197f26 = _0x373787 % 60;
    return {
        "mass": 0 < _0x4c32dc ? " (" + _0x3e8e1d + "m " + _0x3c5736 + "s left)" : '',
        "coins": 0 < _0x39dfe9 ? " (" + _0x1f960f + "m " + _0x59ed77 + "s left)" : '',
        "sp": 0 < _0x507d30 ? " (" + _0x3ee2c1 + "m " + _0x4cd152 + "s left)" : '',
        "powerup": 0 < _0x373787 ? " (" + _0x56b8c5 + "m " + _0x197f26 + "s left)" : ''
    };
}

function _0xe6d81(_0x3d27c7) {
    var _0x50d962;
    var _0x2fd022 = $("#contextMenu").find("li.enabled.hover");
    if (_0x2fd022 && _0x2fd022.length) {
        _0x50d962 = _0x2fd022[0];
    }
    var _0x4e527b = {
        contextThievingInfo: 0,
        contextStealMass: 2,
        contextStealCoins: 3,
        contextStealSp: 4,
        contextStealPowerups: 5
    };
    _0x19fdd4 = _0x4e527b;
    _0x2fd022 = "<div style='padding:5px;font-weight:bold;font-size: 15px;'>";
    _0x2fd022 = (_0x2fd022 = (_0x2fd022 += "<li class=\"contextmenu-item\"><p style='color: #ffc601; opacity: 1; text-shadow: 0px 0px 3px rgb(66, 133, 244);font-size: 15px;'><img src=\"img/icons/thief.png\"  style=\"width: 30px; vertical-align: middle; margin-right: 10px;\">Thieving Level: " + _0x3d27c7.thievingLevel + "/99</p></li>") + "<li class=\"contextmenu-item\"><div class='xp-bar-thieving-container' style='width: 100%; border-radius: 5px; margin: 5px 0;background: linear-gradient(to bottom, #121212 50%, #000000 50%);border:1px #4b15b8 solid;box-shadow: 0px 0px 20px -2px #315ebf;'><div class='xp-bar-thieving' style='height: 10px; background-color: #6f3eff; border-radius: 5px;width: " + _0x3d27c7.thievingXp / _0x3d27c7.thievingXpForNextLevel * 100 + "%;text-align: center; border: 1px #414d63 solid; background: linear-gradient(to bottom, #6f3eff 50%, #5e3eff 50%); font-weight: bold; color: #e2ff72; box-shadow: 0px 0px 20px -2px #315ebf; text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;'>" + (_0x3d27c7.thievingXp / _0x3d27c7.thievingXpForNextLevel * 100).toFixed(1) + "%</div></div></li><hr>") + "<li id=\"contextThievingInfo\" class=\"contextmenu-item enabled\"><img src=\"" + "img/icons/info.png" + "\" style=\"width: 30px; vertical-align: middle; margin-right: 10px;\">Information</li><hr>";
    let _0x245124 = "Steal Coins (lvl 20 required)";
    let _0xfeed87 = "Steal SP (lvl 30 required)";
    let _0x39e1ab = "Steal Powerup (lvl 50 required)";
    if (20 <= _0x3d27c7.thievingLevel && (_0x245124 = "Steal Coins", 30 <= _0x3d27c7.thievingLevel) && (_0xfeed87 = "Steal SP", 50 <= _0x3d27c7.thievingLevel)) {
        _0x39e1ab = "Steal Powerup";
    }
    _0x2fd022 = (_0x2fd022 = (_0x2fd022 = (_0x2fd022 += "<li id='contextStealMass' class=\"contextmenu-item enabled\"><p style='margin: 0; font-size: 15px;'><img src=\"img/icons/steal_mass.png\" style=\"width: 30px; vertical-align: middle; margin-right: 10px;\">" + ("Steal Mass" + _0x548e1b().mass) + "</p></li><hr>") + ("<li id='contextStealCoins' class=\"" + (20 <= _0x3d27c7.thievingLevel ? "contextmenu-item enabled" : "contextmenu-item disabled") + "\"><p style='margin: 0; font-size: 15px;'><img src=\"" + "img/icons/steal_coins.png" + "\" style=\"width: 30px; vertical-align: middle; margin-right: 10px;\">" + (_0x245124 + _0x548e1b().coins) + "</p></li><hr>")) + ("<li id='contextStealSp' class=\"" + (30 <= _0x3d27c7.thievingLevel ? "contextmenu-item enabled" : "contextmenu-item disabled") + "\"><p style='margin: 0; font-size: 15px;'><img src=\"" + "img/icons/steal_sp.png" + "\" style=\"width: 30px; vertical-align: middle; margin-right: 10px;\">" + (_0xfeed87 + _0x548e1b().sp) + "</p></li><hr>")) + ("<li id='contextStealPowerup' class=\"" + (50 <= _0x3d27c7.thievingLevel ? "contextmenu-item enabled" : "contextmenu-item disabled") + "\"><p style='margin: 0; font-size: 15px;'><img src=\"" + "img/icons/steal_pow.png" + "\" style=\"width: 30px; vertical-align: middle; margin-right: 10px;\">" + (_0x39e1ab + _0x548e1b().powerup) + "</p></li><hr>");
    $("#contextSubMenu > ul").html(_0x2fd022);
    $("#contextSubMenu").removeClass("compact");
    if (_0x50d962) {
        _0x337253(_0x50d962);
    }
}

function _0x46c13b(_0x15d440) {
    var _0x38ea75;
    var _0x1901e4;
    var _0x506925 = null;
    var _0x3a9878 = {
        top: 0
    };
    if (_0x15d440 && (_0x15d440.currentTarget && !isMobile && (_0x1901e4 = (_0x38ea75 = $(_0x15d440.currentTarget)).outerHeight(), _0x1058ed < _0x1901e4) && (_0x15d440.pageY > _0x1058ed - 10 && _0x15d440.pageY < _0x1058ed ? _0x38ea75.is(":animated") || _0x38ea75.animate({
            "top": _0x1058ed - _0x1901e4
        }, 1000) : _0x15d440.pageY < 10 && 0 < _0x15d440.pageY ? _0x38ea75.is(":animated") || _0x38ea75.animate(_0x3a9878, 1000) : _0x38ea75.stop(true, false)), _0x15d440.target) && "LI" == _0x15d440.target.tagName && !(_0x506925 = $(_0x15d440.target)).hasClass("enabled")) {
        _0x506925 = null;
    }
    if (_0x352baf) {
        clearTimeout(_0x352baf);
        _0x352baf = 0;
    }
    if (_0x15d440 && _0x15d440.currentTarget && "contextSubMenu" == _0x15d440.currentTarget.id) {
        if (_0x3902ef) {
            clearTimeout(_0x3902ef);
            _0x3902ef = 0;
        }
        $(".contextmenu").find("li.hover").removeClass("hover");
        if (_0x506925) {
            _0x506925.addClass("hover");
        }
        if (_0xab54f2) {
            $(_0xab54f2).addClass("hover");
        }
    } else {
        $("#contextMenu").find("li.hover").removeClass("hover");
        if (_0x506925 && (_0x506925.addClass("hover"), _0x506925[0] !== _0xab54f2) && _0x506925.hasClass("context-has-submenu")) {
            _0x352baf = setTimeout(function() {
                if (_0x506925[0] !== _0xab54f2 && _0x506925.hasClass("hover")) {
                    _0x2b63fd();
                    _0x460313();
                }
                _0x352baf = 0;
            }, 400);
        }
        if (!(_0x3902ef || !_0x218784 || _0x506925 && _0x506925[0] === _0xab54f2)) {
            _0x3902ef = setTimeout(function() {
                _0x2b63fd();
                _0x3902ef = 0;
            }, 400);
        }
    }
}

function _0x30d539(_0xaa7ecc) {
    if (_0xaa7ecc && _0xaa7ecc.currentTarget) {
        $(_0xaa7ecc.currentTarget).stop(true, false).find("li.hover").removeClass("hover");
    }
    if (_0x352baf) {
        clearTimeout(_0x352baf);
        _0x352baf = 0;
    }
    if (!(_0x3902ef || !_0x218784 || _0xaa7ecc && _0xaa7ecc.currentTarget && "contextSubMenu" == _0xaa7ecc.currentTarget.id)) {
        _0x3902ef = setTimeout(function() {
            _0x2b63fd();
            _0x3902ef = 0;
        }, 400);
    }
}

function _0x194510(_0x141d9a) {
    var _0x4ed63b;
    var _0x538e54;
    var _0x318516;
    if (_0x141d9a && (_0x538e54 = (_0x4ed63b = $(_0x218784 ? "#contextSubMenu" : "#contextMenu")).find("li.enabled")) && _0x538e54.length && (_0x318516 = (_0x318516 = ((_0x318516 = _0x538e54.filter(".hover")) && _0x318516.length ? _0x538e54.index(_0x318516[0]) : -1) + parseInt(_0x141d9a)) < 0 ? _0x538e54.length - 1 : _0x318516 >= _0x538e54.length ? 0 : _0x318516, _0x4ed63b.find("li.hover").removeClass("hover"), (_0x141d9a = _0x538e54.eq(_0x318516)).addClass("hover"), 0 < _0x141d9a.length)) {
        _0x538e54 = _0x141d9a.offset().top;
        _0x318516 = _0x141d9a.outerHeight();
        if (_0x1058ed - 2 < _0x538e54 + _0x318516) {
            if (isMobile) {
                _0x4ed63b.scrollTop(_0x4ed63b.scrollTop() + _0x538e54 + _0x318516 - _0x1058ed + 2);
            } else {
                _0x4ed63b.stop(true, false).css({
                    "top": "-=" + (_0x538e54 + _0x318516 - _0x1058ed + 2)
                });
            }
        } else if (_0x538e54 < 2) {
            if (isMobile) {
                _0x4ed63b.scrollTop(_0x4ed63b.scrollTop() + _0x538e54 - 2);
            } else {
                _0x4ed63b.stop(true, false).css({
                    "top": "-=" + (_0x538e54 - 2)
                });
            }
        }
    }
}

function _0x460313() {
    var _0x36455f;
    var _0x554124;
    var _0x30c2e5;
    var _0x5871e0 = $("#contextMenu").find("li.enabled.hover");
    if (_0x5871e0 && _0x5871e0.length) {
        var _0x453f45;
        var _0x628eb5;
        var _0x1f7dac = _0x5871e0[0];
        switch (_0x1f7dac.id) {
            case "contextPartyInvite":
                sendSignal(61);
                _0x2b8f46();
                break;
            case "contextFriendAdd":
                if (_0xfe046f && 2 == _0xfe046f.category) {
                    _0x16a7a3(81, _0xfe046f.name);
                } else {
                    sendSignal(84);
                }
                _0x2b8f46();
                break;
            case "contextUserProfile":
                sendSignal(88);
                _0x2b8f46();
                break;
            case "contextPrivateMessage":
                if (_0xfe046f && 2 == _0xfe046f.category) {
                    insertPMText(_0xfe046f.name);
                } else {
                    sendSignal(45);
                }
                _0x2b8f46();
                break;
            case "contextMute":
                if (_0xfe046f) {
                    _0x3addca(_0xfe046f.R, _0xfe046f.O, _0xfe046f.name);
                } else {
                    sendSignal(109);
                }
                _0x2b8f46();
                break;
            case "contextSpectate":
                sendSignal(92);
                _0x2b8f46();
                break;
            case "contextFBan":
                sendSignal(94);
                break;
            case "contextPartyMessage":
                if (!_0x5eeb3b) {
                    _0x453f45 = "/party ";
                    (_0x3577b3 = document.getElementById("chtbox")).value = _0x453f45;
                    _0x3577b3.selectionStart = _0x3577b3.selectionEnd = _0x453f45.length;
                    _0x3577b3.focus();
                }
                _0x2b8f46();
                break;
            case "contextPartyLeave":
                sendSignal(64);
                _0x2b8f46();
                break;
            case "contextUnmute":
                if (isMobile && _0x218784 && _0xab54f2 == _0x1f7dac) {
                    _0x2b63fd();
                } else {
                    _0x19fdd4 = {};
                    var _0x5e3793 = '';
                    for (var _0x3577b3 = _0x5e5c13.length - 1; 0 <= _0x3577b3; _0x3577b3--) {
                        var _0x392bfc = "contextUnmute" + _0x3577b3.toString();
                        _0x5e3793 += "<li id=\"" + _0x392bfc + "\" class=\"contextmenu-item enabled\"><p></p></li>";
                    }
                    _0x5e3793 = _0x5e3793 + "<hr>" + "<li id=\"contextUnmuteAll\" class=\"contextmenu-item enabled\"><p>Unmute All</p></li>";
                    _0x19fdd4.G = null;
                    $("#contextSubMenu > ul").html(_0x5e3793);
                    for (_0x3577b3 = 0; _0x3577b3 < _0x5e5c13.length; _0x3577b3++) {
                        var _0x38d2b8 = _0x5e5c13[_0x3577b3];
                        var _0x392bfc = "contextUnmute" + _0x3577b3.toString();
                        _0x19fdd4[_0x392bfc] = _0x38d2b8;
                        $("#" + _0x392bfc + " > p").text(_0x38d2b8.name || "Agma.io Player");
                    }
                    $("#contextSubMenu").removeClass("compact");
                    _0x337253(_0x1f7dac);
                }
                break;
            case "contextModerate":
                if (isMobile && _0x218784 && _0xab54f2 == _0x1f7dac) {
                    _0x2b63fd();
                } else {
                    _0x19fdd4 = {};
                    _0x5e3793 = '';
                    if (0 < _0x35cd4a || _0x6dd07a) {
                        _0x5e3793 += "<hr><li id=\"contextWarn\" class=\"contextmenu-item enabled\"><p>Warn user</p></li><hr><li id=\"contextWarnFreeze\" class=\"contextmenu-item enabled\"><p>Freeze teamer</p></li><hr><li id=\"contextMuteUser\" class=\"contextmenu-item enabled\"><p>Mute (unmute on disconnect)</p></li><hr>";
                        if (0 < _0x35cd4a) {
                            _0x5e3793 += "<li id=\"contextMuteUserIp\" class=\"contextmenu-item enabled\"><p>Mute by IP</p></li><hr><li id=\"contextBanUser\" class=\"contextmenu-item enabled\"><p>Ban ip 24h</p></li><hr><li id=\"contextBanUserAcc\" class=\"contextmenu-item enabled\"><p>Ban acc 1h</p></li><hr><li id=\"contextBanUserAcc2\" class=\"contextmenu-item enabled\"><p>Ban acc 24h</p></li><hr><li id=\"contextBanUserAcc3\" class=\"contextmenu-item enabled\"><p>Ban acc 72h</p></li><hr>";
                        }
                        _0x5e3793 += "<li id=\"contextRmshout\" class=\"contextmenu-item enabled\"><p>/rmshout (remove megashout)</p></li><hr><li id=\"contextBanShout\" class=\"contextmenu-item enabled\"><p>/banshout (ban prev shout 2hrs)</p></li><hr><li id=\"contextLastShout\" class=\"contextmenu-item enabled\"><p>/lastshout (see last shout)</p></li>";
                        _0x19fdd4.contextWarn = 0;
                        _0x19fdd4.contextWarnFreeze = 1;
                        _0x19fdd4.contextMuteUser = 2;
                        _0x19fdd4.contextMuteUserIp = 3;
                        _0x19fdd4.contextBanUser = 4;
                        _0x19fdd4.contextBanUserAcc = 5;
                        _0x19fdd4.contextBanUserAcc2 = 6;
                        _0x19fdd4.contextBanUserAcc3 = 7;
                        _0x19fdd4.contextRmshout = 8;
                        _0x19fdd4.contextBanShout = 9;
                        _0x19fdd4.contextLastShout = 10;
                        $("#contextSubMenu > ul").html(_0x5e3793);
                        $("#contextSubMenu").removeClass("compact");
                        _0x337253(_0x1f7dac);
                    }
                }
                break;
            case "contextPickpocket":
                if (isMobile && _0x218784 && _0xab54f2 == _0x1f7dac) {
                    _0x2b63fd();
                } else if (_0x51e494.thievingLevel) {
                    _0xe6d81(_0x51e494);
                } else if (isReady()) {
                    new PacketWriter(2).setUint8(188).setUint8(1).send();
                }
                break;
            case "contextSettings":
                if (isMobile && _0x218784 && _0xab54f2 == _0x1f7dac) {
                    _0x2b63fd();
                } else {
                    _0x19fdd4 = {};
                    _0x628eb5 = 0;
                    _0x5e3793 = '';
                    _0x2871e8($("#settingPage1 label:not(.touch-setting) input[type=\"checkbox\"]"));
                    if (isMobile) {
                        _0x2871e8($("#settingPage1 label.touch-setting input[type=\"checkbox\"]"));
                    }
                    _0x2871e8($("#userSettings .settings-green input[type=\"checkbox\"]"));
                    _0x2871e8($("#userSettings .settings-gold input[type=\"checkbox\"]"));
                    _0x2871e8($("#userSettings .settings-orange input[type=\"checkbox\"]:not(:disabled)"));
                    _0x5e3793 += "<hr><li id=\"contextSettingControls\" class=\"contextmenu-item enabled\"><p> Controls...</p></li>";
                    $("#contextSubMenu > ul").html(_0x5e3793);
                    $("#contextSubMenu").addClass("compact");
                    _0x337253(_0x1f7dac);
                }
                break;

                function _0x2871e8(_0x45dc63) {
                    if ('' != _0x5e3793 && _0x45dc63.length) {
                        _0x5e3793 += "<hr>";
                    }
                    for (var _0x59b7b2 = 0; _0x59b7b2 < _0x45dc63.length; _0x59b7b2++) {
                        var _0x295ebf = _0x45dc63.eq(_0x59b7b2);
                        var _0x3b7ddc = _0x295ebf.is(":checked");
                        var _0x4bafb5 = _0x295ebf.is(":disabled");
                        var _0x5f1bed = _0x295ebf.next("span").html() || " ";
                        var _0x2e30cb = "contextSetting" + (_0x628eb5 + _0x59b7b2).toString();
                        _0x19fdd4[_0x2e30cb] = _0x295ebf;
                        _0x5e3793 += "<li id=\"" + _0x2e30cb + "\" class=\"contextmenu-item " + (_0x4bafb5 ? '' : "enabled") + "\">" + (_0x3b7ddc ? "<div class=\"context-icon context-icon-checked\"></div>" : '') + "<p>" + _0x5f1bed + "</p></li>";
                        if ("cCustomBack" == _0x295ebf[0].id) {
                            _0x5e3793 += "<li id=\"contextSettingSetBackground\" class=\"contextmenu-item enabled\"><p> Set Background...</p></li>";
                        }
                    }
                    _0x628eb5 += _0x45dc63.length;
                }
            case "contextEmotes":
                _0x5e3793 = "<div style=\"display:flex;margin: 0 auto;\">";
                _0x5e3793 = (_0x5e3793 = (_0x5e3793 += "<li id=\"contextEmoteHearts\" style=\"margin: 0 auto;border: 1px solid #f0ad4e;padding: 3px;border-radius: 5px;\" class=\"contextmenu-item enabled\"><p style=\" background-image: url(&quot;./emotes/1f60d.png&quot;); background-size: contain; background-repeat: no-repeat; width: 20px; height: 20px; margin: 0 auto; \"></p></li>") + "<li id=\"contextEmoteWave\" style=\"margin: 0 auto;border: 1px solid #337ab7;padding: 3px;border-radius: 5px;\" class=\"contextmenu-item enabled\"><p style=\" background-image: url(&quot;./emotes/1f44b.png&quot;); background-size: contain; background-repeat: no-repeat; width: 20px; height: 20px; margin: 0 auto; \"></p></li>" + "<li id=\"contextEmoteWacky\" style=\"margin: 0 auto;border: 1px solid #337ab7;padding: 3px;border-radius: 5px;\" class=\"contextmenu-item enabled\"><p style=\" background-image: url(&quot;./emotes/1f61c.png&quot;); background-size: contain; background-repeat: no-repeat; width: 20px; height: 20px; margin: 0 auto; \"></p></li>") + "<li id=\"contextEmoteExplohead\" style=\"margin: 0 auto;border:1px solid #ae12c4;padding: 3px;border-radius: 5px;;\" class=\"contextmenu-item enabled\"><p style=\" background-image: url(&quot;./emotes/1f61cd.png&quot;); background-size: contain; background-repeat: no-repeat; width: 20px; height: 20px; margin: 0 auto; \"></p></li>" + "</div>";
                _0x392bfc = "<div style=\"display:flex;margin: 0 auto;\">";
                _0x392bfc = (_0x392bfc = (_0x392bfc += "<li id=\"contextEmoteThrowup\" style=\"margin: 0 auto;border: 1px solid #f0ad4e;padding: 3px;border-radius: 5px;\" class=\"contextmenu-item enabled\"><p style=\" background-image: url(&quot;./emotes/throwup.png&quot;); background-size: contain; background-repeat: no-repeat; width: 20px; height: 20px; margin: 0 auto; \"></p></li>") + "<li id=\"contextEmoteTearsJoy\" style=\"margin: 0 auto;border: 1px solid #f0ad4e;padding: 3px;border-radius: 5px;\" class=\"contextmenu-item enabled\"><p style=\" background-image: url(&quot;./emotes/tearsjoy.png&quot;); background-size: contain; background-repeat: no-repeat; width: 20px; height: 20px; margin: 0 auto; \"></p></li>" + "<li id=\"contextEmoteHotFace\" style=\"margin: 0 auto;border: 1px solid #f0ad4e;padding: 3px;border-radius: 5px;\" class=\"contextmenu-item enabled\"><p style=\" background-image: url(&quot;./emotes/hotface.png&quot;); background-size: contain; background-repeat: no-repeat; width: 20px; height: 20px; margin: 0 auto; \"></p></li>") + "<li id=\"contextEmoteNono\" style=\"margin: 0 auto;border: 1px solid #f0ad4e;padding: 3px;border-radius: 5px;\" class=\"contextmenu-item enabled\"><p style=\" background-image: url(&quot;./emotes/nonu.png&quot;); background-size: contain; background-repeat: no-repeat; width: 20px; height: 20px; margin: 0 auto; \"></p></li>" + "</div>";
                var _0x3127d7 = {
                    contextEmoteHearts: 32,
                    contextEmoteWave: 30,
                    contextEmoteWacky: 12,
                    contextEmoteExplohead: 31,
                    contextEmoteExplode: -1,
                    contextEmoteAngryPumpkin: 41,
                    contextEmoteScaredPumpkin: 42,
                    contextEmoteYawnPumpkin: 43,
                    contextEmoteThrowup: 44,
                    contextEmoteTearsJoy: 46,
                    contextEmoteHotFace: 45,
                    contextEmoteNono: 47
                };
                _0x19fdd4 = _0x3127d7;
                $("#contextSubMenu > ul").html(_0x5e3793 + _0x392bfc + "<div style=\"display:flex;margin: 0 auto;\"><li id=\"contextEmoteAngryPumpkin\" style=\"margin: 0 auto;border: 1px solid #f0ad4e;padding: 3px;border-radius: 5px;\" class=\"contextmenu-item enabled\"><p style=\" background-image: url(&quot;./emotes/angry_emote3.png&quot;); background-size: contain; background-repeat: no-repeat; width: 20px; height: 20px; margin: 0 auto; \"></p></li><li id=\"contextEmoteScaredPumpkin\" style=\"margin: 0 auto;border: 1px solid #f0ad4e;padding: 3px;border-radius: 5px;\" class=\"contextmenu-item enabled\"><p style=\" background-image: url(&quot;./emotes/scared_emote.png&quot;); background-size: contain; background-repeat: no-repeat; width: 20px; height: 20px; margin: 0 auto; \"></p></li><li id=\"contextEmoteYawnPumpkin\" style=\"margin: 0 auto;border: 1px solid #f0ad4e;padding: 3px;border-radius: 5px;\" class=\"contextmenu-item enabled\"><p style=\" background-image: url(&quot;./emotes/yawn_emote.png&quot;); background-size: contain; background-repeat: no-repeat; width: 20px; height: 20px; margin: 0 auto; \"></p></li></div><div style=\"display:flex;margin: 0 auto;\"><li id=\"contextEmoteExplode\" style=\"margin: 0 auto;border:1px solid #b3b3b3;padding: 3px;border-radius: 5px; opacity:0.5;\" class=\"contextmenu-item enabled\"><p style=\" background-image: url(&quot;./emotes/1f4a5.png&quot;); background-size: contain; background-repeat: no-repeat; width: 20px; height: 20px; margin: 0 auto; \"></p></li></div>");
                $("#contextSubMenu").removeClass("compact");
                _0x337253(_0x1f7dac);
                break;
            case "contextScreenshot":
                _0x453f45 = document.createElement("canvas");
                _0x36455f = _0x453f45.getContext("2d");
                _0x453f45.width = _0x1fc141.width;
                _0x453f45.height = _0x1fc141.height;
                _0x36455f.drawImage(_0x1fc141, 0, 0);
                _0x36455f = _0x453f45.toDataURL();
                _0x554124 = Math.max(~~(_0x453f45.width / 5), 100);
                _0x30c2e5 = Math.max(~~(_0x453f45.height / 5), 100);
                _0x554124 = "width=" + _0x554124 + ",height=" + _0x30c2e5 + ",menubar=0,toolbar=0,status=0,resizable=1,scrollbars=1";
                if (_0x465e4b) {
                    window.open(_0x36455f, "_blank", _0x554124);
                } else if (_0x30c2e5 = window.open('', "_blank", _0x554124)) {
                    _0x30c2e5.document.writeln("<html><head><title>Screenshot</title><style>@media(min-width:" + Math.max(_0x453f45.width - 200, 100) + "px){img{width:" + _0x453f45.width + "px;}}</style></head><body style=\"margin:0px;background:#000;\"><img width=\"100%\" src=\"" + _0x36455f + "\" style=\"max-width:" + _0x453f45.width + "px;max-height:" + _0x453f45.height + "px;\"></body></html>");
                    _0x30c2e5.document.location.href = "#";
                    _0x30c2e5.document.close();
                }
                _0x2b8f46();
        }
    }
}

function _0x432cde() {
    if (_0xab54f2) {
        var _0x50ef0f = $("#contextSubMenu").find("li.enabled.hover");
        if (_0x50ef0f && _0x50ef0f.length) {
            var _0x382cc9;
            var _0x174ccf = _0x50ef0f[0];
            switch (_0xab54f2.id) {
                case "contextUnmute":
                    var _0x53dbfd = _0x19fdd4[_0x174ccf.id];
                    if (_0x53dbfd) {
                        _0x5e5c13.remove(_0x53dbfd);
                        if (_0x2f707e[_0x53dbfd.R] && (_0x2f707e[_0x53dbfd.R]--, _0x2f707e[_0x53dbfd.R] <= 0)) {
                            delete _0x2f707e[_0x53dbfd.R];
                        }
                        if (_0x538120[_0x53dbfd.O] && (_0x538120[_0x53dbfd.O]--, _0x538120[_0x53dbfd.O] <= 0)) {
                            delete _0x538120[_0x53dbfd.O];
                        }
                        _0x12bbfc("Unmuted " + _0x53dbfd.name, false, false, 1, 10);
                    } else {
                        _0x5e5c13 = [];
                        _0x12bbfc("Unmuted all players", !(_0x538120 = {}), !(_0x2f707e = {}), 1, 10);
                    }
                    _0x4cb089 = true;
                    _0x2b8f46();
                    break;
                case "contextModerate":
                    function _0x2c8dfa(_0x61fe04) {
                        if (isReady()) {
                            new PacketWriter(2).setUint8(110).setUint8(_0x61fe04).send();
                        }
                    }
                    if (0 == _0x19fdd4[_0x174ccf.id]) {
                        _0x53dbfd = 93;
                        if (null != (_0x337d0c = prompt("Enter a warning to issue this user:", undefined)) && '' != _0x337d0c && (_0x53dbfd = _0x53dbfd, _0x337d0c = '' + _0x337d0c, isReady())) {
                            new PacketWriter(1 + 2 * _0x337d0c.length).setUint8(_0x53dbfd).setString(_0x337d0c).send();
                        }
                    } else if (1 == _0x19fdd4[_0x174ccf.id]) {
                        sendSignal(89);
                    } else if (2 == _0x19fdd4[_0x174ccf.id]) {
                        sendSignal(96);
                    } else if (3 == _0x19fdd4[_0x174ccf.id]) {
                        sendSignal(97);
                    } else if (4 == _0x19fdd4[_0x174ccf.id]) {
                        sendSignal(94);
                    } else if (5 == _0x19fdd4[_0x174ccf.id]) {
                        _0x2c8dfa(1);
                    } else if (6 == _0x19fdd4[_0x174ccf.id]) {
                        _0x2c8dfa(2);
                    } else if (7 == _0x19fdd4[_0x174ccf.id]) {
                        _0x2c8dfa(3);
                    } else if (8 == _0x19fdd4[_0x174ccf.id]) {
                        _0x483c7e("/rmshout");
                    } else if (9 == _0x19fdd4[_0x174ccf.id]) {
                        _0x483c7e("/banshout");
                    } else if (10 == _0x19fdd4[_0x174ccf.id]) {
                        _0x483c7e("/lastshout");
                    }
                    _0x2b8f46();
                    break;
                case "contextPickpocket":
                    if (0 == _0x19fdd4[_0x174ccf.id]) {
                        swal({
                            "title": "<img src='img/icons/pickpocket.png' width='80' height='80' style='border-radius:50%; display:block; margin:auto;'><br><span style='font-weight:bold; color:#f8b400;'>Pickpocketing Information</span>",
                            "html": true,
                            "text": "<div style='text-align:left;'>Pickpocketing is a shady skill that allows you to steal from other players to gain XP and various items, such as mass, coins, SP, and power-ups. Each action has a waiting time and a certain chance of success, which increases as you level up.<br><br><strong>XP Gained:</strong> Varies by action and success.<br><strong>Cooldown:</strong> Even the sneakiest thief needs a tea break. Waiting time between each action is 10 minutes for mass and a tad longer for shinier items.<br><strong>Success Rate:</strong> Starts at a humble 20% and increases up to 80% for levels above 80. Then you really are a shadow in the night. Protect yourself from pickpockets by leveling up, that decreases the opponents success rate of stealing from you.<br><br>As your thieving level increases, you unlock the ability to steal more valuable items and the chance of a successful steal improves, allowing you to master the art of pickpocketing. Wear the Face Mask wearable to higher your chance of success during stealing.</div>",
                            "type": '',
                            "customClass": "swal-custom-class",
                            "confirmButtonColor": "#f8b400",
                            "confirmButtonText": "Close"
                        });
                    } else if ((1 <= _0x19fdd4[_0x174ccf.id] || _0x19fdd4[_0x174ccf.id] < 6) && isReady()) {
                        new PacketWriter(2).setUint8(188).setUint8(_0x19fdd4[_0x174ccf.id]).send();
                    }
                    break;
                case "contextSettings":
                    if ("contextSettingControls" == _0x174ccf.id) {
                        az(0, 3);
                        $("#gameSettingsTab a").tab("show");
                        openSettingPage(2);
                        _0x2b8f46();
                    } else if ("contextSettingSetBackground" == _0x174ccf.id) {
                        $("#customBackModal").modal("show");
                        _0x2b8f46();
                    } else if ("contextSettingMore" == _0x174ccf.id) {
                        az(0, 3);
                        $("#gameSettingsTab a").tab("show");
                        openSettingPage(1);
                        _0x2b8f46();
                    } else {
                        if ((_0x337d0c = _0x19fdd4[_0x174ccf.id]) && !_0x337d0c.is(":disabled")) {
                            _0x337d0c.prop("checked", !_0x337d0c.is(":checked")).change();
                        }
                        if (_0xab54f2 && $(_0xab54f2).filter(".enabled").hasClass("hover")) {
                            _0x382cc9 = _0x174ccf.id;
                            _0x16e8e8 = $("#contextSubMenu").offset().top;
                            _0x2b63fd();
                            _0x460313();
                            $("#contextSubMenu").css({
                                "top": _0x16e8e8
                            });
                            $("#" + _0x382cc9 + ".enabled").addClass("hover");
                        } else {
                            _0x2b8f46();
                        }
                    }
                    break;
                case "contextEmotes":
                    var _0x16e8e8 = _0x19fdd4[_0x174ccf.id];
                    if (-1 == _0x16e8e8) {
                        return swal("This emote is locked. You can unlock it by completing a challenge :) More information coming in a future update");
                    }
                    if (_0x16e8e8 && Number.isInteger(_0x16e8e8) && isReady()) {
                        new PacketWriter(2).setUint8(179).setUint8(_0x16e8e8).send();
                    }
                    _0x2b8f46();
            }
        }
    }
    var _0x337d0c;
}

function _0x3addca(_0x56aa7e, _0x53ceee, _0x48d9c8) {
    var _0x4b9b10 = _0x56aa7e != _0x4e4df3 && !_0x2f707e[_0x56aa7e];
    var _0x4be0a6 = _0x53ceee != _0x4e4df3 && !_0x538120[_0x53ceee];
    var _0x5384f7 = {
        R: _0x56aa7e,
        O: _0x53ceee,
        name: _0x48d9c8
    };
    if (_0x4b9b10 || _0x4be0a6) {
        _0x5e5c13.push(_0x5384f7);
        _0x2f707e[_0x56aa7e] = (_0x2f707e[_0x56aa7e] || 0) + 1;
        _0x538120[_0x53ceee] = (_0x538120[_0x53ceee] || 0) + 1;
        _0x12bbfc("Muted " + _0x48d9c8, !(_0x4cb089 = true), false, 0, 10);
    } else {
        _0x12bbfc(_0x56aa7e != _0x4e4df3 || _0x53ceee != _0x4e4df3 ? "That player is already muted" : "You cannot mute that player", false, false, 0, 10);
    }
}

function _0x6da0af(_0x4cd623) {
    if (1 !== (_0x4cd623 = undefined === _0x4cd623 ? 0 : _0x4cd623)) {
        _0x42b2d5();
        _0x488b2a();
    }
    if (2 !== _0x4cd623) {
        _0x2b8f46();
    }
    if (3 !== _0x4cd623 && _0x34cf3b) {
        _0x4d8d48();
    }
}

function _0x12bbfc(_0x58a44b, _0x2f949c, _0x4344dc, _0x25e0ab, _0x4a1f81) {
    var _0x4b1b06 = $("#curser");
    if (_0x32f181) {
        clearTimeout(_0x32f181);
        _0x32f181 = 0;
    }
    if (_0x2f949c) {
        _0x4b1b06.html(_0x58a44b);
    } else {
        _0x4b1b06.text(_0x58a44b);
    }
    _0x4b1b06.css({
        "fontSize": _0x4344dc ? "24px" : "18px",
        "color": 2 == _0x25e0ab ? "#999999" : 1 == _0x25e0ab ? "#00C000" : "#FF0000"
    });
    if (!_0x4243db) {
        _0x4b1b06.finish().slideDown(50);
        _0x4243db = true;
    }
    if (0 < _0x4a1f81) {
        _0x32f181 = setTimeout(function() {
            _0x34efff(true);
        }, 1000 * _0x4a1f81);
    }
}

function _0x34efff(_0x44bdc4) {
    if (_0x32f181) {
        clearTimeout(_0x32f181);
        _0x32f181 = 0;
    }
    if (_0x44bdc4) {
        $("#curser").fadeOut(400);
    } else {
        $("#curser").text('').hide();
    }
    _0x4243db = false;
}

function _0x2c01ea(_0x300339, _0x4b49b7, _0x45c652) {
    var _0x142f1f;
    var _0x752fc1;
    if (_0x300339) {
        _0x142f1f = _0x300339.toLowerCase();
        if (!_0xde408[_0x142f1f]) {
            (_0x752fc1 = document.createElement("div")).setAttribute("id", "groupChat-" + _0x300339);
            _0x752fc1.setAttribute("class", "chat-tab");
            _0x752fc1.setAttribute("data-category", 4);
            _0x752fc1.setAttribute("data-groupid", _0x300339);
            _0x752fc1.setAttribute("data-initiator", _0x45c652);
            if (0 < _0x4b49b7.length) {
                _0x752fc1.setAttribute("data-participants", _0x4b49b7.join(","));
            }
            _0x752fc1.setAttribute("data-insert", "/groupchat " + _0x300339 + " ");
            _0x752fc1.setAttribute("data-tooltip", "Group Chat: " + _0x300339 + " initiated by " + _0x45c652);
            _0x752fc1.innerHTML = "GroupChat: " + _0x4b49b7.length;
            (_0x300339 = document.createElement("span")).innerHTML = "&times;";
            _0x300339.style.cssText = "position: absolute; color: red; font-size: 20px; margin-left: -4; top: -15px; cursor: pointer;";
            _0x300339.onclick = function() {
                var _0xd355d8 = {
                    title: "Are you sure?",
                    text: "Do you really want to exit this group chat?",
                    type: "warning",
                    showCancelButton: true,
                    buttons: true,
                    dangerMode: true,
                    confirmButtonColor: "#4CAF50",
                    confirmButtonText: "Yes",
                    cancelButtonText: "Cancel"
                };
                swal(_0xd355d8, function() {
                    new PacketWriter(5).setUint8(195).setUint32(_0x142f1f).send();
                    document.getElementById("chtTabs").removeChild(_0x752fc1);
                    delete _0xde408[_0x142f1f];
                });
            };
            _0x752fc1.appendChild(_0x300339);
            if (0 == _0xd835b8 || "groupchat" == _0xd835b8 && '' == _0x1723aa) {
                $(_0x752fc1).addClass("semi-selected");
            }
            document.getElementById("chtTabs").appendChild(_0x752fc1);
            _0xde408[_0x142f1f] = _0x752fc1;
        }
    }
}

function _0x23a624(_0x5c9470) {
    var _0x4a7f30;
    var _0x55abab;
    if (_0x5c9470) {
        _0x4a7f30 = _0x5c9470.toLowerCase();
        if (!(_0xde408[_0x4a7f30] || _0x4a7f30 == _0xea465f.toLowerCase())) {
            (_0x55abab = document.createElement("div")).setAttribute("class", "chat-tab");
            _0x55abab.setAttribute("data-category", "2");
            _0x55abab.setAttribute("data-username", _0x5c9470.toString());
            _0x55abab.setAttribute("data-insert", "/pm " + _0x5c9470 + " ");
            _0x55abab.setAttribute("data-tooltip", "/pm username ...");
            _0x55abab.innerHTML = _0x5c9470;
            if (0 == _0xd835b8 || 2 == _0xd835b8 && '' == _0x1723aa) {
                $(_0x55abab).addClass("semi-selected");
            }
            document.getElementById("chtTabs").appendChild(_0x55abab);
            _0xde408[_0x4a7f30] = _0x55abab;
        }
    }
}

function _0xe944ac(_0x5c0bf3) {
    var _0x2dd031;
    if (isMobile) {
        _0x6da0af();
        _0x5c0bf3.preventDefault();
        _0x5c0bf3.stopPropagation();
        if (!_0x544018 && 0 < _0x5c0bf3.changedTouches.length && null === _0x2106d0) {
            _0x544018 = true;
            _0x2dd031 = _0x5c0bf3.changedTouches[0];
            _0x2106d0 = _0x2dd031.identifier;
            _0x194e11 = _0x2dd031.pageY;
        }
    } else if (0 == _0x5c0bf3.button) {
        _0x544018 = true;
        _0x194e11 = _0x5c0bf3.pageY;
        document.body.addEventListener("mousemove", _0x51ee3c, false);
        document.body.addEventListener("mouseup", _0x3d16b2, false);
    }
}

function _0x51ee3c(_0x14afe0) {
    if (isMobile) {
        _0x14afe0.preventDefault();
        _0x14afe0.stopPropagation();
        if (_0x544018) {
            for (var _0x1be525 = 0; _0x1be525 < _0x14afe0.changedTouches.length; _0x1be525++) {
                var _0x1604f5 = _0x14afe0.changedTouches[_0x1be525];
                if (_0x2106d0 == _0x1604f5.identifier) {
                    _0x590515(_0x46411c + _0x194e11 - _0x1604f5.pageY);
                    break;
                }
            }
        }
    } else if (_0x544018) {
        _0x590515(_0x46411c + _0x194e11 - _0x14afe0.pageY);
    }
}

function _0x3d16b2(_0xd33a46) {
    if (isMobile) {
        _0xd33a46.preventDefault();
        _0xd33a46.stopPropagation();
        if (_0x544018) {
            for (var _0xcf126c = 0; _0xcf126c < _0xd33a46.changedTouches.length; _0xcf126c++) {
                var _0x4c1bc1 = _0xd33a46.changedTouches[_0xcf126c];
                if (_0x2106d0 == _0x4c1bc1.identifier) {
                    _0x544018 = false;
                    _0x2106d0 = null;
                    _0x590515(_0x46411c + _0x194e11 - _0x4c1bc1.pageY);
                    break;
                }
            }
        }
    } else if (_0x544018 && 0 == _0xd33a46.button) {
        _0x544018 = false;
        _0x590515(_0x46411c + _0x194e11 - _0xd33a46.pageY);
        document.body.removeEventListener("mousemove", _0x51ee3c, false);
        document.body.removeEventListener("mouseup", _0x3d16b2, false);
    }
}

function _0x4ae55c(_0x5d4a9d) {
    var _0x23596b;
    if (isMobile) {
        _0x6da0af();
        _0x5d4a9d.preventDefault();
        _0x5d4a9d.stopPropagation();
        if (!_0x544018 && 0 < _0x5d4a9d.changedTouches.length) {
            if ((_0x23596b = ~~(_0x5d4a9d.changedTouches[0].pageY - $("#chtScrollbar").offset().top)) < _0x365042 - _0x50ced8 - _0x46411c) {
                _0x590515(_0x46411c + _0x43e0d0);
            } else if (_0x365042 - _0x46411c < _0x23596b) {
                _0x590515(_0x46411c - _0x43e0d0);
            }
        }
    } else if (!(_0x544018 || 0 != _0x5d4a9d.button)) {
        if (_0x5d4a9d.offsetY < _0x365042 - _0x50ced8 - _0x46411c) {
            _0x590515(_0x46411c + _0x43e0d0);
        } else if (_0x5d4a9d.offsetY > _0x365042 - _0x46411c) {
            _0x590515(_0x46411c - _0x43e0d0);
        }
    }
}

function _0x590515(_0x1785ac) {
    var _0x3314fb = _0x365042 - _0x50ced8 - 2;
    _0x1785ac = Math.clamp(_0x1785ac, 0, _0x3314fb);
    _0x190280 = 0 < _0x3314fb ? 1 - _0x1785ac / _0x3314fb : 1;
    _0x243c1f.style.bottom = _0x1785ac + "px";
    _0x4cb089 = true;
}

function _0xc55078(_0x132deb) {
    function _0x5d12b6() {
        _0x423e1a *= 0.98;
        _0x1450ce();
    }
    _0x6da0af();
    _0x35fff4(_0x132deb);
    _0x38c122 = setInterval(_0x5d12b6, 16.666666666666668);
    _0x5d12b6();
    $("#zoomBtnMinus").addClass("active");
}

function _0x71452a(_0x51c52b) {
    function _0x3d19d2() {
        _0x423e1a /= 0.98;
        _0x1450ce();
    }
    _0x6da0af();
    _0x35fff4(_0x51c52b);
    _0x38c122 = setInterval(_0x3d19d2, 16.666666666666668);
    _0x3d19d2();
    $("#zoomBtnPlus").addClass("active");
}

function _0x35fff4(_0x8d2a1b) {
    _0x8d2a1b.preventDefault();
    _0x8d2a1b.stopPropagation();
    if (_0x38c122) {
        clearInterval(_0x38c122);
        _0x38c122 = 0;
    }
    $(".zoom-btn").removeClass("active");
}

function _0x2b5d79(_0xb5a2e2) {
    _0x6da0af();
    _0xb5a2e2.preventDefault();
    _0xb5a2e2.stopPropagation();
    if (0 < _0xb5a2e2.changedTouches.length && null === _0x399c6b && !_0x3e08c0) {
        _0xb5a2e2 = _0xb5a2e2.changedTouches[0];
        _0x399c6b = _0xb5a2e2.identifier;
        $("#btnToggleQ").addClass("active");
    }
}

function _0x370ab1(_0x1fbfdd) {
    _0x1fbfdd.preventDefault();
    _0x1fbfdd.stopPropagation();
    for (var _0x212ebd = 0; _0x212ebd < _0x1fbfdd.changedTouches.length; _0x212ebd++) {
        var _0x253690 = _0x1fbfdd.changedTouches[_0x212ebd];
        if (_0x399c6b == _0x253690.identifier) {
            _0x399c6b = null;
            _0x253690 = _0x377f81(_0x253690.clientX, _0x253690.clientY, "#btnToggleQ");
            if (_0x253690 && "btnToggleQ" === _0x253690.id && !_0x3e08c0) {
                sendSignal(18);
            }
            $("#btnToggleQ").removeClass("active");
            break;
        }
    }
}

function _0x397340(_0x3f495b) {
    var _0x293a68 = {
        x: 0,
        y: 0
    };
    _0x6da0af();
    if (0 < _0x3f495b.changedTouches.length && null === _0x1c0802 && !_0x3e08c0) {
        _0x3f495b = _0x3f495b.changedTouches[0];
        _0x1c0802 = _0x3f495b.identifier;
        _0x262c61.x = _0x3f495b.clientX;
        _0x262c61.y = _0x3f495b.clientY;
        _0xff0f52 = _0x293a68;
        _0x319c86.style.left = 0 - _0x4d2bd2 / 2 + "px";
        _0x319c86.style.top = 0 - _0x4d2bd2 / 2 + "px";
        _0x116b73.style.left = 0 - _0xd04953 / 2 + "px";
        _0x116b73.style.top = 0 - _0xd04953 / 2 + "px";
        $("#touchPad").show();
        $("#touchPadThumb").show();
    }
}

function _0x405de7(_0x35d9de) {
    if (0 == ~~(window.innerHeight - document.documentElement.clientHeight)) {
        _0x35d9de.preventDefault();
    }
    for (var _0x576d9f = 0; _0x576d9f < _0x35d9de.changedTouches.length; _0x576d9f++) {
        var _0x54d5e9 = _0x35d9de.changedTouches[_0x576d9f];
        if (_0x1c0802 == _0x54d5e9.identifier && !_0x3e08c0) {
            _0xff0f52.x = _0x54d5e9.clientX;
            _0xff0f52.y = _0x54d5e9.clientY;
            _0xff0f52.x -= 0;
            _0xff0f52.y -= 0;
            var _0x54d5e9 = _0xff0f52.x * _0xff0f52.x + _0xff0f52.y * _0xff0f52.y;
            if (isSpectating && (_0xce750 = Math.min(_0x53f1a5, _0x1058ed) / 2) * _0xce750 < _0x54d5e9) {
                _0xff0f52.x *= _0xce750 / Math.sqrt(_0x54d5e9);
                _0xff0f52.y *= _0xce750 / Math.sqrt(_0x54d5e9);
                _0x54d5e9 = _0xff0f52.x * _0xff0f52.x + _0xff0f52.y * _0xff0f52.y;
            }
            _0x462522();
            var _0xce750 = _0x4d2bd2 / 2;
            var _0x54d5e9 = _0xce750 * _0xce750 < _0x54d5e9 ? _0xce750 / Math.sqrt(_0x54d5e9) : 1;
            _0x116b73.style.left = 0 + _0xff0f52.x * _0x54d5e9 - _0xd04953 / 2 + "px";
            _0x116b73.style.top = 0 + _0xff0f52.y * _0x54d5e9 - _0xd04953 / 2 + "px";
            break;
        }
    }
}

function _0x39b514(_0x595756) {
    for (var _0x41143c = 0; _0x41143c < _0x595756.changedTouches.length; _0x41143c++) {
        var _0x144c51 = _0x595756.changedTouches[_0x41143c];
        if (_0x1c0802 == _0x144c51.identifier) {
            _0x1c0802 = null;
            _0xff0f52.x = 0;
            _0xff0f52.y = 0;
            $("#touchPad").hide();
            $("#touchPadThumb").hide();
            break;
        }
    }
}

function _0x462522() {
    _0x36887a = 2 * _0xff0f52.x * _0x29f519 / _0x4d2bd2 + _0x53f1a5 / 2;
    _0x19f1c7 = 2 * _0xff0f52.y * _0x29f519 / _0x4d2bd2 + _0x1058ed / 2;
    _0x368208();
}

function _0x2537e8(_0x20fafc, _0x1b9471, _0x1b99b2) {
    _0x6da0af();
    _0x20fafc.preventDefault();
    if (null === _0x47bcb0 && (_0x3c3adc = _0x1b9471, _0x541b5c = _0x20fafc.currentTarget, _0x1f4eee = _0x1b99b2 || null)) {
        _0x54aa2f(_0x1b9471);
    }
}

function _0x1cb96b(_0x103746) {
    _0x103746.preventDefault();
    _0x103746.stopPropagation();
    if (0 < _0x103746.changedTouches.length && null === _0x47bcb0 && !_0x3e08c0) {
        _0x103746 = _0x103746.changedTouches[0];
        _0x47bcb0 = _0x103746.identifier;
        _0x34f96a = _0x103746.clientX;
        _0x5079ce = _0x103746.clientY;
        _0x28c1e5();
        $(_0x541b5c).addClass("active hover");
        _0x4c710c(_0x3c3adc);
        _0x4801bb();
    }
}

function _0x595a05(_0x209c7a) {
    _0x209c7a.preventDefault();
    _0x209c7a.stopPropagation();
    for (var _0x2f1ea = 0; _0x2f1ea < _0x209c7a.changedTouches.length; _0x2f1ea++) {
        var _0xe11359 = _0x209c7a.changedTouches[_0x2f1ea];
        if (_0x47bcb0 == _0xe11359.identifier && !_0x3e08c0) {
            _0x34f96a = _0xe11359.clientX;
            _0x5079ce = _0xe11359.clientY;
            _0x28c1e5();
            $(".inventory-box.hover").removeClass("hover");
            _0xe11359 = _0x377f81(_0xe11359.clientX, _0xe11359.clientY, ".inventory-box");
            if (_0xe11359) {
                $(_0xe11359).addClass("hover");
                _0x4c710c(_0x3c3adc);
                if (_0xe11359.id !== _0x541b5c.id) {
                    _0x14f2d3 = 0;
                }
            } else {
                _0x4c710c(0);
            }
            break;
        }
    }
}

function _0x3b18da(_0x3796f1) {
    _0x3796f1.preventDefault();
    _0x3796f1.stopPropagation();
    for (var _0x5ab232 = 0; _0x5ab232 < _0x3796f1.changedTouches.length; _0x5ab232++) {
        var _0x4f9092 = _0x3796f1.changedTouches[_0x5ab232];
        if (_0x47bcb0 == _0x4f9092.identifier) {
            _0x47bcb0 = null;
            _0x34f96a = _0x4f9092.clientX;
            _0x5079ce = _0x4f9092.clientY;
            _0x28c1e5();
            $(_0x541b5c).removeClass("active");
            $(".inventory-box.hover").removeClass("hover");
            _0x4f9092 = _0x377f81(_0x4f9092.clientX, _0x4f9092.clientY, ".inventory-box");
            (_0x4f9092 ? (_0x1f4eee && !_0x3e08c0 && _0x14f2d3 == _0x3c3adc && _0x4f9092.id === _0x541b5c.id && _0x1f4eee(), _0x492dec) : _0x2f7348)();
            _0x1f4eee = null;
            break;
        }
    }
}

function _0x28c1e5() {
    _0x21548d = _0x34f96a / _0x3e50d9 + _0x59034c - _0x2263d7;
    _0x1598a0 = _0x5079ce / _0x3e50d9 + _0x4ce984 - _0x223539;
}

function _0x377f81(_0x491a10, _0x4bb605, _0x4099ec) {
    _0x491a10 = document.elementFromPoint(_0x491a10, _0x4bb605);
    return _0x491a10 && _0x4099ec ? 0 < (_0x4bb605 = $(_0x491a10).closest(_0x4099ec)).length ? _0x4bb605[0] : null : _0x491a10;
}

function _0x3d0428(_0x3f6cf5) {
    _0x580067();
    sendSignal(17);
    if (_0x3f6cf5) {
        _0xd3e364 = _0x3f6cf5;
    }
    _0xd3e364--;
    if (_0x5a74d9) {
        clearTimeout(_0x5a74d9);
        _0x5a74d9 = 0;
    }
    if (0 < _0xd3e364) {
        _0x5a74d9 = setTimeout(_0x3d0428, 60);
    }
}

function _0x3f6aca(_0x2d577c) {
    _0x6da0af();
    _0x2d577c.preventDefault();
    _0x2d577c.stopPropagation();
    _0x341b50 = true;
    _0x3d0428(1);
    _0x23c28a();
    $("#touchSplitBtn").addClass("active");
}

function _0x44dd1e(_0x25d9f2) {
    _0x25d9f2.preventDefault();
    _0x25d9f2.stopPropagation();
    _0x341b50 = false;
    sendSignal(38);
    _0x207bfb();
    $("#touchSplitBtn").removeClass("active");
}

function _0x22e6a6(_0x782fcc) {
    _0x6da0af();
    _0x782fcc.preventDefault();
    _0x782fcc.stopPropagation();
    _0x32aefa = true;
    if (_0x13535d) {
        _0x13535d = false;
        $("#touchEjectLockBtn").removeClass("active");
    }
    _0x580067();
    sendSignal(21);
    if (_0x341b50) {
        _0x23c28a();
    }
    $("#touchEjectBtn").addClass("active");
}

function _0x1bd91c(_0x5b2c7d) {
    _0x5b2c7d.preventDefault();
    _0x5b2c7d.stopPropagation();
    _0x32aefa = false;
    sendSignal(36);
    $("#touchEjectBtn").removeClass("active");
}

function _0x2594cd(_0x4f10b4) {
    _0x6da0af();
    _0x4f10b4.preventDefault();
    _0x4f10b4.stopPropagation();
    if (_0x13535d = !_0x13535d) {
        _0x580067();
        sendSignal(21);
        if (_0x341b50) {
            _0x23c28a();
        }
        $("#touchEjectLockBtn").addClass("active");
    } else {
        sendSignal(36);
        $("#touchEjectLockBtn").removeClass("active");
    }
}

function _0x4fbf9e() {
    if (_0x13535d) {
        _0x13535d = false;
        sendSignal(36);
        $("#touchEjectLockBtn").removeClass("active");
    }
}

function _0x399411(_0x232656) {
    _0x6da0af();
    _0x232656.preventDefault();
    _0x232656.stopPropagation();
    _0x37ee0c = !_0x37ee0c;
    sendSignal(35);
    if (_0x37ee0c) {
        _0x580067();
        $("#touchFreezeBtn").addClass("active");
    } else {
        $("#touchFreezeBtn").removeClass("active");
    }
    if (_0x5c9b82) {
        clearTimeout(_0x5c9b82);
        _0x5c9b82 = 0;
    }
}

function _0x3731ff() {
    var _0x187636 = _0x53176c ? _0x506037 : _0x43802f;
    if (_0x37ee0c != _0x187636) {
        if (_0x37ee0c = _0x187636) {
            $("#touchFreezeBtn").addClass("active");
        } else {
            $("#touchFreezeBtn").removeClass("active");
        }
    }
}

function _0x2b2be7() {
    if (_0x37ee0c) {
        _0x37ee0c = false;
        $("#touchFreezeBtn").removeClass("active");
    }
}

function _0x23c28a() {
    _0x207bfb();
    _0x1cbb14 = setTimeout(function() {
        _0x580067();
        sendSignal(37);
    }, _0x32aefa || _0x13535d ? 120 : 500);
}

function _0x207bfb() {
    if (_0x1cbb14) {
        clearTimeout(_0x1cbb14);
        _0x1cbb14 = 0;
    }
}

function _0x483372(_0x46c5a9) {
    var _0x221763;
    var _0x5c3445;
    _0x5f11fd();
    _0x46c5a9.stopPropagation();
    if (1 == _0x46c5a9.touches.length && 1 == _0x46c5a9.changedTouches.length) {
        _0x221763 = _0x46c5a9.currentTarget;
        _0x5c3445 = _0x46c5a9.changedTouches[0];
        _0x1e6b2c = setTimeout(function() {
            var _0x19a9c1 = {
                bubbles: true,
                cancelable: true,
                clientX: _0x5c3445.clientX,
                clientY: _0x5c3445.clientY,
                pageX: _0x5c3445.pageX,
                pageY: _0x5c3445.pageY,
                screenX: _0x5c3445.screenX,
                screenY: _0x5c3445.screenY
            };
            _0x5f11fd();
            _0x221763.dispatchEvent(new MouseEvent("contextmenu", _0x19a9c1));
        }, 750);
    }
}

function _0x5f11fd() {
    if (_0x1e6b2c) {
        clearTimeout(_0x1e6b2c);
        _0x1e6b2c = 0;
    }
}

function _0x5d968e(_0x583e58, _0x2e98dc) {
    _0x583e58.addEventListener("touchstart", _0x483372, false);
    _0x583e58.addEventListener("touchmove", _0x5f11fd, false);
    _0x583e58.addEventListener("touchend", _0x5f11fd, false);
    _0x583e58.addEventListener("touchcancel", _0x5f11fd, false);
    _0x583e58.addEventListener("contextmenu", function(_0x15b8f6) {
        _0x5f11fd();
        _0x2e98dc(_0x15b8f6);
    }, false);
}

function _0x3359de(_0x5f4291) {
    if (!_0x3e08c0) {
        _0x423e1a *= Math.exp(0.0008780042971485523 * (_0x5f4291.wheelDelta || (_0x5f4291.deltaY ? _0x5f4291.deltaY < 0 ? 120 : -120 : 0) || 0));
        _0x1450ce();
    }
}

function _0x1450ce() {
    var _0x2b58c0 = _0x286c1f ? 0.001 : 1;
    if (4 < (_0x423e1a = _0x423e1a < _0x2b58c0 ? _0x2b58c0 : _0x423e1a) * _0x3e50d9) {
        _0x423e1a = 4 / _0x3e50d9;
    }
    if (_0x1e208d && 0 < framesCounter) {
        _0x4c4c0f = 0.2 * _0x585560();
        _0xbb1a8c();
    }
}

function _0x368208() {
    _0x2df455 = _0x59034c + _0x36887a / _0x3e50d9 - _0x2263d7;
    _0x58d9ac = _0x4ce984 + _0x19f1c7 / _0x3e50d9 - _0x223539;
}

function _0x8f51f1() {
    if (isReady()) {
        $("#overlays").finish().fadeOut(200);
        $("#advert").hide();
        $("#invisibleOverlay").hide();
        _0x284f1f = !(_0x1fc846 = false);
        if (isReady() && _0x284f1f && null != _0x5665cf) {
            var _0x4de013 = new PacketWriter(4 + 2 * _0x4bb827.length + 2 * _0x5665cf.length);
            _0x4de013.setUint8(1).setUint16(_0x28aabd).setUint8(_0x4bb827.length);
            for (let _0xfae066 = 0; _0xfae066 < _0x4bb827.length; _0xfae066++) {
                _0x4de013.setUint16(_0x4bb827[_0xfae066].wearId);
            }
            _0x4de013.setString(_0x5665cf).send();
            if (0 === _0xc52211.length) {
                _0x492c36 = false;
                if (_0x384d50) {
                    clearTimeout(_0x384d50);
                    _0x384d50 = 0;
                }
                _0x384d50 = setTimeout(_0x10236d, 3000);
            }
        }
        _0x3e08c0 = false;
        if (_0x1c50f8) {
            $("#minionUi").removeClass("minimized");
        }
        _0x203625();
        if (isMobile && (undefined !== window.localStorage && window.localStorage.fullscreen ? parseInt(window.localStorage.fullscreen) : !_0x591623)) {
            _0x4e7152();
        }
    }
}

function _0x4e7152() {
    var _0x4dda73 = document.documentElement;
    if (_0x4dda73.requestFullscreen) {
        _0x4dda73.requestFullscreen();
    } else if (_0x4dda73.mozRequestFullScreen) {
        _0x4dda73.mozRequestFullScreen();
    } else if (_0x4dda73.webkitRequestFullscreen) {
        _0x4dda73.webkitRequestFullscreen();
    } else if (_0x4dda73.msRequestFullscreen) {
        _0x4dda73.msRequestFullscreen();
    }
    $("#fullscreenBtn").addClass("inFullscreen");
    if (undefined !== window.localStorage) {
        window.localStorage.fullscreen = 1;
    }
}

function _0x1b0f36() {
    if ($("#fullscreenBtn").hasClass("inFullscreen")) {
        if (document.exitFullscreen) {
            if (document.fullscreenElement) {
                document.exitFullscreen();
            }
        } else if (document.mozCancelFullScreen) {
            if (document.mozFullScreenElement) {
                document.mozCancelFullScreen();
            }
        } else if (document.webkitExitFullscreen) {
            if (document.webkitFullscreenElement) {
                document.webkitExitFullscreen();
            }
        } else if (document.msExitFullscreen && document.msFullscreenElement) {
            document.msExitFullscreen();
        }
        $("#fullscreenBtn").removeClass("inFullscreen");
        if (undefined !== window.localStorage) {
            window.localStorage.fullscreen = 0;
        }
    } else {
        _0x4e7152();
    }
}

function _0x24f2c9(_0x577228, _0x10adf7) {
    return _0x577228.size - _0x10adf7.size || _0x577228.id - _0x10adf7.id || _0x577228.L - _0x10adf7.L;
}

function _0x1ed902() {
    _0x1cc38d = Date.now();
    if (isMobile) {
        _0x4bcc93 = _0x514d47 = false;
    } else {
        if (!(803 < window.innerWidth && 650 < window.innerHeight || 692 < window.innerWidth && 681 < window.innerHeight || 945 < window.innerWidth)) {
            window.innerHeight;
        }
        _0x514d47 = !(_0x4bcc93 = false);
    }
}

function _0x2ca450() {
    if (1512 < window.innerWidth) {
        window.innerHeight;
    }
}

function _0x57b950() {
    if (!window.adplayer && adplayer_copy) {
        window.adplayer = adplayer_copy;
    }
    adplayer.startPreRoll();
}

function onPlayerDeath() {
    if ((_0x173058 = true) && !waitAdvertContinueDone) {
        if (waitPlayButtonDone) {
            a8ref = a8req = msref = msreq = 0;
            allowPlayButton();
        }
        waitAdvertContinueDone = true;
        $("#advertContinue").prop("disabled", true).html("Continue<br><i class=\"fa fa-spin\" style=\"animation-duration:1s; margin:0px 0px -2px; opacity:0.7;\"><img src=\"img/loading3.png\" style=\"width:20px;\"></i>").css("opacity", "0.7");
        hasWatchedAd = _0x17f189 = false;
        a8ref = a8req = framesCounter;
        msref = msreq = Date.now();
        spawnCooldownLow = 1200;
        spawnCooldownHigh = 2400;
        spawnCooldownLowTimeoutId = setTimeout(function() {
            _0x17f189 = true;
            if (hasWatchedAd) {
                allowAdvertContinue();
            }
        }, spawnCooldownLow);
        spawnCooldownHighTimeoutId = setTimeout(allowAdvertContinue, spawnCooldownHigh);
    }
    _0x4bcc93 = true;
    setTimeout(function() {
        if (_0x4bcc93) {
            _0x1ed902();
        }
    }, isMobile ? 0 : 1000);
    _0x6da0af();
    _0x492dec();
    if (isMobile) {
        _0x4fbf9e();
        _0x2b2be7();
    }
    if (!(3 != ++_0x5a219c && 4 != _0x5a219c && 7 != _0x5a219c && 9 != _0x5a219c && 11 != _0x5a219c && 12 != _0x5a219c && 16 != _0x5a219c || _0x109288)) {
        _0x12bbfc(3 == _0x5a219c || 11 == _0x5a219c ? "Hey you! You really should register an agma.io account! It will let you save your progress, level up, and lots of more features and benefits!" : "To register an account, press esc (main menu) and on the left side of the screen press \"register\". It takes 1 minute, and you will have loads of benefits!", false, false, 1, 20);
    }
    shuffleGameAds();
    if (0 < _0x255800.length) {
        if (-1 == _0xdf2e2d) {
            setVideo(~~(Math.random() * _0x255800.length));
        } else {
            setVideo((_0xdf2e2d + 1) % _0x255800.length);
        }
    }
    shuffleGameTips();
    if (isMobile) {
        $("#overlays").fadeIn(100);
        allowPlayButton();
        azad(true);
        _0x1fc846 = _0x173058 = _0x514d47 = !(_0x3b0762 = _0x134fc9 = _0x536824 = _0x492c36 = true);
        _0x1c6763 = 0;
    } else {
        $("#advert").fadeIn(600);
        $("#overlays").hide();
        _0x1fc846 = true;
    }
    _0x3e08c0 = true;
    _0x5665cf = null;
    sendSignal(14);
}

function allowPlayButton() {
    if (!(
        !waitPlayButtonDone || 0 < a8ref && (
            a8req = a8ref + 5,
            msreq = msref + (hasWatchedAd ? spawnCooldownLow : spawnCooldownHigh) - 50,
            framesCounter < a8req || Date.now() < msreq
        ) || (
            $("#playBtn")
                .prop("disabled", false)
                .text("Play")
                .css("opacity", ''),
            _0x514d47 = waitPlayButtonDone = false,
            waitAdvertContinueDone
        )
    )) {
        if (spawnCooldownLowTimeoutId) {
            clearTimeout(spawnCooldownLowTimeoutId);
            spawnCooldownLowTimeoutId = 0;
        }
        if (spawnCooldownHighTimeoutId) {
            clearTimeout(spawnCooldownHighTimeoutId);
            spawnCooldownHighTimeoutId = 0;
        }
    }
}

function allowAdvertContinue() {
    if (!(
        !waitAdvertContinueDone || 0 < a8ref && (
            a8req = a8ref + 5,
            msreq = msref + (hasWatchedAd ? spawnCooldownLow : spawnCooldownHigh) - 50,
            framesCounter < a8req || Date.now() < msreq
        ) || (
            $("#advertContinue")
                .prop("disabled", false)
                .text("Continue")
                .css("opacity", ''),
            _0x173058 = waitAdvertContinueDone = false,
            waitPlayButtonDone
        )
    )) {
        if (spawnCooldownLowTimeoutId) {
            clearTimeout(spawnCooldownLowTimeoutId);
            spawnCooldownLowTimeoutId = 0;
        }
        if (spawnCooldownHighTimeoutId) {
            clearTimeout(spawnCooldownHighTimeoutId);
            spawnCooldownHighTimeoutId = 0;
        }
    }
}

function _0x5f12f2() {
    if (!$("#loginPanel").is(":visible")) {
        $("#overlaysContent").fadeOut(100);
    }
    setTimeout(function() {
        $("#mainPanel,#serverPanel").hide();
        $("#overlaysContent").show();
        $("#loginPanel").fadeIn(150);
    }, 150);
}

function _0x412b() {
    if (!$("#serverPanel").is(":visible")) {
        $("#overlaysContent").fadeOut(100);
    }
    setTimeout(function() {
        $("#loginPanel,#mainPanel").hide();
        $("#overlaysContent").show();
        $("#serverPanel").fadeIn(150);
    }, 150);
}

function _0x3200d3() {
    if (!$("#mainPanel").is(":visible")) {
        $("#overlaysContent").fadeOut(100);
    }
    setTimeout(function() {
        $("#loginPanel,#serverPanel").hide();
        $("#overlaysContent").show();
        $("#mainPanel").fadeIn(150);
    }, 150);
}

function _0x411213(_0x9db3a7) {
    $.post("ag219.php", {
        "data": JSON.stringify({
            "cv": 2 * _0x556e60,
            "ch": _0x950276,
            "ccv2": _0x556e60 - 2,
            "abl": 261, // encodeURIComponent(_0x11d218).length
            "cp": 61,
            "vv": 156
        })
    }, function(_0x1579ab) {
        if (_0x1579ab) {
            rq219done = true;
            ag219 = _0x1579ab;
            if (!(sentFirstTime && !_0x9db3a7)) {
                _0x53846a();
            }
        } else {
            _0x12bbfc("Unable to connect. Please refresh your browser and try again. If this persists, please send an email to hello@agma.io to inform", false, true, 0, 0);
        }
    }, "text");
}

function _0x4a52b8() {
    var _0x5be478 = "wss://" + _0x256390;
    var _0x425173 = {
        value: true
    };
    if (window.location && window.location.host && "127.0.0.1" == window.location.host) {
        _0x5be478 = "ws://127.0.0.1:451";
    }
    if (windowIsLoaded && _0x256390 && (_0x13d7e0(), 0 != _0x2b8278)) {
        if ((() => {
                if (!_0x1f725c) {
                    if ("undefined" != typeof Storage) {
                        var _0x3e73a4 = Date.now();
                        for (var _0x22acdb = 0; _0x22acdb < 5; _0x22acdb++) {
                            var _0x37ea89 = parseInt(localStorage["wc" + (_0x22acdb + 1)]) || 0;
                            if (!_0x1f725c && 15000 < _0x3e73a4 - _0x37ea89) {
                                _0x1f725c = _0x22acdb + 1;
                                localStorage["wc" + _0x1f725c] = _0x3e73a4;
                            } else if (_0x3e73a4 < _0x37ea89) {
                                localStorage["wc" + (_0x22acdb + 1)] = _0x3e73a4;
                            }
                        }
                    } else {
                        _0x1f725c = 1;
                    }
                }
                return _0x1f725c && _0x6a593d < 3 && !window.sckt;
            })()) {
            $("#agma_loading_bar").hide();
            $("#cellExampleMenu .skin-example").css("background-image", "url('../skins/0_lo.png')");
            _0x411213();
            _0x3b0762 = false;
            _0x284f1f = !(_0x950276 = 60);
            _0x9db55f(_0x950276);
            if (!_0x10e829) {
                _0x564895();
            }
            if (_0x1d3023) {
                clearTimeout(_0x1d3023);
                _0x1d3023 = 0;
            }
            _0xf3d226 = false;
            _0x57735d();
            ws = new WebSocket(_0x5be478, ["WebSocket"]);
            if (Object.defineProperty) {
                Object.defineProperty(ws, "aSocket", _0x425173);
            } else {
                ws.aSocket = true;
            }
            ws.binaryType = "arraybuffer";
            ws.onopen = _0x14f052;
            ws.onmessage = _0x51e55a;
            ws.onclose = _0xae7145;
            window.sckt = true;
        } else {
            if (!_0x10e829) {
                _0x564895();
            }
            _0x1d3023 = setTimeout(_0x4a52b8, _0xf1d309);
            _0xf1d309 *= 1.5;
        }
    }
}

function _0x13d7e0() {
    if (ws) {
        ws.onopen = ws.onmessage = ws.onclose = null;
        try {
            ws.close();
        } catch (_0x210764) {}
        _0x34b545 = [];
        _0x335282 = [];
        _0xc52211 = [];
        _0x2a6acb = [];
        _0x534f3c = {};
        _0x4fd5c0 = [];
        _0xa92e4c = [];
        _0xfe1c27 = {};
        _0x4cc54f = {};
        _0x49dbad = {};
        _0x4df025 = {};
        _0x59222b = {};
        _0x463a1e = [];
        _0x2032b6 = [];
        _0x5bdc9e = [];
        _0x381cad = _0x634c41 = _0x4eac2b = null;
        _0x170269 = _0x5b6b18 = '';
        _0x522c0e();
        _0x4400ec = _0x11c29c = _0x52da56 = _0x506037 = _0x43802f = _0x53176c = !(_0x568853 = -1);
        _0x114b07 = true;
        _0x47ccce = _0x11de32 = _0x52d414 = _0x29f86a = _0x4512d9 = _0x2873c2 = _0x576526 = _0x38ea95 = _0x852ff = _0x273de7 = _0x30bfdb = _0x4a4cf7 = _0x24af02 = _0x3b8888 = _0x1c6763 = _0x6b0fd0 = _0x5a219c = 0;
        $(".inventory-box").removeClass("activatedInv");
        _0x37e4a8 = _0xb1583e = _0x31962a = _0x5ea511 = _0x5a5860 = _0x3c6854 = 0;
        isSpectating = _0x2c99f2 = _0x211844 = _0x1ec523 = !(_0x55ce89 = []);
        _0x2c6f91 = _0x3c3250 = true;
        _0x2ed741();
        _0x593148();
        _0x2d6730();
        _0x39b68a();
        _0x1a0f0b();
        _0x4a5541();
        _0x492dec();
        _0x203625();
        if (isMobile) {
            _0x4fbf9e();
            _0x3731ff();
        }
        _0x5ae1b6 = 0;
        mapCenterSet = false;
        ws = null;
        window.sckt = false;
        _0x30cebd();
    }
}

function _0x57735d() {
    _0x2e06e0 = true;
    if (_0x4fd0d2) {
        clearTimeout(_0x4fd0d2);
        _0x4fd0d2 = 0;
    }
    _0x4fd0d2 = setTimeout(function() {
        _0x2e06e0 = false;
        _0x4fd0d2 = 0;
    }, 3000);
}

function _0x564895(_0x98e624) {
    if (_0x10e829) {
        clearTimeout(_0x10e829);
        _0x10e829 = 0;
    }
    if (isReady()) {
        _0x34efff();
    } else {
        var _0x1c7c1b = 3 < (_0x98e624 = _0x98e624 || 0) ? 6 - _0x98e624 : _0x98e624;
        var _0x3d3bd2 = '';
        for (var _0x31bb4b = 0; _0x31bb4b < _0x1c7c1b; _0x31bb4b++) {
            _0x3d3bd2 += ".";
        }
        _0x12bbfc("<span style='opacity:0;'>." + _0x3d3bd2 + "</span>Connecting" + _0x3d3bd2 + "<span style='opacity:1;font-size:12px;margin-left:10px;'>(If any issues with connection, please email hello@agma.io)</span>", true, true, 2, 0);
        _0x10e829 = setTimeout(function() {
            _0x564895((_0x98e624 + 1) % 6);
        }, 400);
    }
}

function _0x14f052() {
    _0x5af7fe.push({
        "Y": false,
        "$": 0,
        "l": 0,
        "R": _0x4e4df3,
        "O": _0x4e4df3,
        "name": "Agma.io",
        "receiver": '',
        "color": "#0AFF0A",
        "message": "Connected to server " + _0x38891d,
        "category": 0,
        "goldMember": 0,
        "q": 0,
        "j": 0,
        "J": 0,
        "H": 0,
        "K": 0,
        "time": Date.now(),
        "cache": null
    });
    _0x4cb089 = true;
    _0xf1d309 = 2000;
    var _0x410ac6 = Date.now();
    _0x27fdb0 = _0x410ac6;
    if (_0x10e829) {
        clearTimeout(_0x10e829);
        _0x10e829 = 0;
    }
    _0x34efff();
    if (!(_0x3e08c0 && !_0x1fc846)) {
        az();
    }
    _0x57735d();
    var _0x410ac6 = new PacketWriter(14);
    _0x410ac6.setUint8(245).setUint16(61).setUint16(156).setUint32(_0x556e60).setUint32(_0xf937a3(_0x410ac6.buffer, 0, 9, 245)).send(true);
    _0x32b561();
    multiEjectServerChanged = true;
    if (isMobile) {
        _0x2b2be7();
    }
}
function _0xf937a3(buffer, a, b, offset) {
    if (a + b > buffer.byteLength)
        b = 0;
    let n = 12354678 + offset;
    for (let i = 0; i < b; i++)
        n += buffer.getUint8(a + i) * (i + 4);
    return n + 3;
}

function _0x215896() {
    var _0x4cb1e7;
    var _0x476ebb;
    var _0x12c6d8;
    var _0x5d45ba;
    var _0x51f702;
    _0x581015 = Date.now();
    _0x587d52 = 16.666666666666668 / Math.clamp(_0x581015 - _0x2d2df0, 1, 1000);
    _0x2d2df0 = _0x581015;
    _0x4c97d2();
    for (var _0xb8c069 = 0; _0xb8c069 < 3; _0xb8c069++) {
        var _0x20e99f = [_0x463a1e, _0x2032b6, _0x5bdc9e][_0xb8c069];
        var _0x3443c2 = [_0x49dbad, _0x4df025, _0x59222b][_0xb8c069];
        for (var _0x1b6725 = 0; _0x1b6725 < _0x20e99f.length; _0x1b6725++) {
            var _0x44eb04 = _0x20e99f[_0x1b6725];
            var _0x2db68f = _0x3443c2[_0x44eb04];
            if (_0x2db68f) {
                for (var _0x1581df = 0; _0x1581df < _0x2db68f.length; _0x1581df++) {
                    var _0x49c157 = _0x2db68f[_0x1581df];
                    var _0x416df3 = _0x18ce16[_0x49c157.ee];
                    if (_0x416df3.time() >= _0x49c157.te + _0x416df3.duration) {
                        _0x2db68f.splice(_0x1581df, 1);
                        _0x1581df--;
                    }
                }
                if (0 == _0x2db68f.length) {
                    _0xfb52a(_0xb8c069, _0x44eb04);
                    _0x2db68f = null;
                }
            }
            if (!_0x2db68f) {
                _0x20e99f.splice(_0x1b6725, 1);
                _0x1b6725--;
            }
        }
    }
    _0x164fe5 = _0x417591;
    _0x417591 = null;
    _0x41e1d9();
    _0x2263d7 = _0x53f1a5 / 2 / (_0x3e50d9 = ((_0x2c9685 = 9 * _0x587d52) * _0x3e50d9 + _0xd28f67) / (_0x2c9685 + 1));
    _0x223539 = _0x1058ed / 2 / _0x3e50d9;
    var _0x514393 = _0xc52211.length;
    if (0 < _0x514393) {
        var _0x539378;
        var _0x39a721 = 0;
        var _0x106ce1 = 0;
        for (var _0x2b0b8e = 0; _0x2b0b8e < _0x514393; _0x2b0b8e++) {
            if ((_0x539378 = _0xc52211[_0x2b0b8e]).ne) {
                _0x539378.ae();
            }
            _0x106ce1 += _0x539378.x;
            _0x39a721 += _0x539378.y;
        }
        _0x53b8b0 = _0x46ac7b = _0x40e81b = _0x106ce1 / _0x514393;
        _0x464afc = _0x2c7938 = _0x6c7bce = _0x39a721 / _0x514393;
    } else {
        _0x1e72ef(_0x581015);
    }
    _0x59034c = ((_0x2c9685 = 3 * _0x587d52) * _0x59034c + _0x53b8b0) / (_0x2c9685 + 1);
    _0x4ce984 = (_0x2c9685 * _0x4ce984 + _0x464afc) / (_0x2c9685 + 1);
    _0x2c9685 = Math.ceil(10 * _0x28ad4b * _0x3e50d9 * _0x28ad4b) / (10 * _0x28ad4b);
    if (Math.abs(_0x34bd4c - _0x2c9685) > 0.5 * Math.abs(_0x34bd4c - _0xd28f67)) {
        _0x34bd4c = _0x2c9685;
    }
    _0x368208();
    if (_0x3c3250) {
        if (_0x36d371) {
            var _0xf261be;
            var _0x416571;
            var _0x40d243;
            var _0x1e1569;
            var _0x19f04f = ~~(Math.max(18 * Math.min(1.6 * _0x1058ed, _0x53f1a5, 1400) / 1400, 8) + 0.5);
            var _0x2d45ca = ~~(Math.max(200 * Math.min(1.6 * _0x1058ed, _0x53f1a5, 1400) / 1400, 90) + 0.5) / 200;
            var _0x139239 = ~~(200 * _0x2d45ca + 0.5);
            var _0x3ea109 = ~~((_0x634c41 ? isMobile ? 160 : 240 : 50 + 25 * _0x2a6acb.length) * _0x2d45ca + 0.5);
            var _0x15f2d8 = !_0x634c41 && 0 < _0x2a6acb.length ? _0x2a6acb[0].cell : null;
            var _0x1fd0b5 = "Leaderboard";
            _0x321590.width = ~~(_0x139239 * _0x358119 + 0.5);
            _0x321590.height = ~~(_0x3ea109 * _0x358119 + 0.5);
            _0x321590.style.width = _0x139239 + "px";
            _0x321590.style.height = _0x3ea109 + "px";
            _0x5e49f7.scale(_0x358119, _0x358119);
            _0x5e49f7.globalAlpha = isMobile ? 0.3 : 0.5;
            _0x5e49f7.fillStyle = "#000000";
            _0x5e49f7.fillRect(0, 0, _0x139239, _0x3ea109);
            _0x5e49f7.globalAlpha = 1;
            if (_0x2332bb) {
                _0x5e49f7.font = ~~(24 * _0x2d45ca + 0.5) + "px Ubuntu, serif";
                _0x40d243 = _0x5e49f7.measureText(_0x1fd0b5).width;
                _0x5e49f7.font = ~~(24 * _0x2d45ca + 0.5) + "px Ubuntu";
                if (isMobile) {
                    _0x5e49f7.globalAlpha = 0.25;
                    _0x5e49f7.fillStyle = "#000000";
                    _0x5e49f7.fillText(_0x1fd0b5, ~~(0.5 + (_0x15f2d8 || _0x634c41 && 0 < _0x634c41.length ? 44 * _0x2d45ca : (_0x139239 - _0x40d243) / 2)) + _0x2d45ca, ~~(31 * _0x2d45ca + 0.5) + _0x2d45ca);
                    _0x5e49f7.globalAlpha = 1;
                }
                _0x5e49f7.fillStyle = "#FFFFFF";
                _0x5e49f7.fillText(_0x1fd0b5, ~~(0.5 + (_0x15f2d8 || _0x634c41 && 0 < _0x634c41.length ? 44 * _0x2d45ca : (_0x139239 - _0x40d243) / 2)), ~~(31 * _0x2d45ca + 0.5));
            }
            if (_0x634c41) {
                if (0 < _0x634c41.length) {
                    _0x5e49f7.scale(_0x2d45ca, _0x2d45ca);
                    for (_0x1e1569 = _0x1fd0b5 = _0x416571 = _0x40d243 = 0; _0x1e1569 < _0x634c41.length; ++_0x1e1569) {
                        _0xf261be = _0x1fd0b5 + _0x634c41[_0x1e1569] * Math.PI * 2;
                        _0x5e49f7.fillStyle = _0x21d872[_0x1e1569];
                        _0x5e49f7.beginPath();
                        _0x5e49f7.moveTo(_0x139239 / 2 / _0x2d45ca, isMobile ? 100 : 140);
                        _0x5e49f7.arc(_0x139239 / 2 / _0x2d45ca, isMobile ? 100 : 140, isMobile ? 40 : 80, _0x1fd0b5, _0xf261be, false);
                        _0x5e49f7.fill();
                        _0x1fd0b5 = _0xf261be;
                        if (_0x634c41[_0x1e1569] > _0x40d243) {
                            _0x40d243 = _0x634c41[_0x1e1569];
                            _0x416571 = _0x1e1569;
                        }
                    }
                    _0x5e49f7.beginPath();
                    _0x5e49f7.arc(22, 22, 11, 0, 2 * Math.PI, false);
                    _0x5e49f7.fillStyle = _0x21d872[_0x416571];
                    _0x5e49f7.fill();
                }
            } else {
                if (_0x15f2d8) {
                    _0x5e49f7.save();
                    _0x5e49f7.scale(_0x2d45ca, _0x2d45ca);
                    _0x5e49f7.beginPath();
                    _0x5e49f7.arc(22, 22, 11, 0, 2 * Math.PI, false);
                    _0x5e49f7.fillStyle = _0x15f2d8.oe;
                    _0x5e49f7.fill();
                    _0x5e49f7.beginPath();
                    _0x5e49f7.arc(22, 22, 10, 0, 2 * Math.PI, false);
                    _0x5e49f7.lineWidth = 1;
                    _0x5e49f7.strokeStyle = _0x15f2d8.ie;
                    _0x5e49f7.stroke();
                    if (_0x15f2d8.skinId && _0xfd65d9 && ((_0x2e4d3d = _0x2e11fb[_0x15f2d8.skinId + "_lo"]) || (_0x58d0e1(_0x15f2d8.skinId), _0x2e4d3d = _0x2e11fb[_0x15f2d8.skinId + "_lo"]), _0x2e4d3d) && _0x2e4d3d.complete && 0 != _0x2e4d3d.width) {
                        _0x5e49f7.beginPath();
                        _0x5e49f7.arc(22, 22, 11, 0, 2 * Math.PI, false);
                        if (isMobile) {
                            _0x5e49f7.drawImage(_0x2e4d3d, 11, 11, 22, 22);
                        } else {
                            _0x5e49f7.save();
                            _0x5e49f7.clip();
                            _0x5e49f7.drawImage(_0x2e4d3d, 11, 11, 22, 22);
                            _0x5e49f7.restore();
                        }
                    }
                    if (_0x15f2d8.B && _0x4b4ed5) {
                        for (_0x3ea109 = 0; _0x3ea109 < _0x15f2d8.B.length; _0x3ea109++) {
                            var _0x2e4d3d;
                            var _0x2a2cb4;
                            var _0x168ad3 = _0x15f2d8.B[_0x3ea109];
                            if (!(_0x2e4d3d = _0x247b5a["W" + _0x168ad3.wearId + "_lo"])) {
                                _0x22f945(_0x168ad3.wearId);
                                _0x2e4d3d = _0x247b5a["W" + _0x168ad3.wearId + "_lo"];
                            }
                            if (_0x2e4d3d && _0x2e4d3d.complete && 0 != _0x2e4d3d.width) {
                                _0x168ad3 = _0x168ad3.P;
                                _0x2a2cb4 = 5 == _0x168ad3 ? 55 : 33;
                                _0x5e49f7.drawImage(_0x2e4d3d, 22 - 11 * (3 == _0x168ad3 || 5 == _0x168ad3 ? 2.5 : 4 == _0x168ad3 ? 0.5 : 1.5), 22 - 11 * (1 == _0x168ad3 || 5 == _0x168ad3 ? 2.5 : 2 == _0x168ad3 ? 0.5 : 1.5), _0x2a2cb4, _0x2a2cb4);
                            }
                        }
                    }
                    _0x5e49f7.restore();
                }
                if (_0x2332bb) {
                    for (_0x1e1569 = 0; _0x1e1569 < _0x2a6acb.length; ++_0x1e1569) {
                        if (!(_0x15f2d8 = _0x2a6acb[_0x1e1569]).empty) {
                            _0x1fd0b5 = _0x15f2d8.name;
                            _0xf261be = _0x15f2d8.se;
                            _0x416571 = _0x15f2d8.pos;
                            if (!_0x4a720f) {
                                _0x1fd0b5 = (0 < _0x416571 ? _0x416571 : _0x1e1569 + 1) + ". " + (_0x1fd0b5 = _0x1fd0b5 || "Agma.io Player");
                            }
                            _0x5e49f7.font = _0x19f04f + "px Ubuntu, serif";
                            _0x40d243 = _0x5e49f7.measureText(_0x1fd0b5).width;
                            _0x5e49f7.font = _0x19f04f + "px Ubuntu";
                            if (isMobile) {
                                _0x5e49f7.globalAlpha = 0.25;
                                _0x5e49f7.fillStyle = "#000000";
                                _0x5e49f7.fillText(_0x1fd0b5, ~~((_0x4a720f ? Math.max((_0x139239 - _0x40d243) / 2, 5 * _0x2d45ca) : 5 * _0x2d45ca) + 0.5) + _0x2d45ca, ~~((61 + 25 * _0x1e1569) * _0x2d45ca + 0.5) + _0x2d45ca);
                                _0x5e49f7.globalAlpha = 1;
                            }
                            _0x5e49f7.fillStyle = 1 == _0xf261be ? "#FFAAAA" : 2 == _0xf261be ? "#FFCCAA" : 3 == _0xf261be ? _0x33523f ? "#777777" : "#A0A0A0" : "#FFFFFF";
                            _0x5e49f7.fillText(_0x1fd0b5, ~~((_0x4a720f ? Math.max((_0x139239 - _0x40d243) / 2, 5 * _0x2d45ca) : 5 * _0x2d45ca) + 0.5), ~~((61 + 25 * _0x1e1569) * _0x2d45ca + 0.5));
                        }
                    }
                }
            }
            if (!_0x16d0fb) {
                $("#leaderboard").show();
                _0x16d0fb = true;
            }
        } else if (_0x16d0fb) {
            $("#leaderboard").hide();
            _0x16d0fb = false;
        }
        _0x3c3250 = false;
    }
    if (0 != _0xe31aef && _0xe31aef <= _0x581015) {
        _0x243b5e = _0x36887a;
        _0x4d7270 = _0x19f1c7;
        if (!(_0x3e08c0 || _0x10e53d || _0xfe046f)) {
            if (_0x10e53d = _0x191230(_0x243b5e, _0x4d7270)) {
                _0x4cb089 = true;
            }
        }
        _0xe31aef = 0;
    }
    if (_0x4cb089 && _0x2332bb && ((() => {
            var _0x1afc1f = 15;
            if (!_0x46bbb2) {
                _0x1afc1f = 25;
            }
            var _0x4f2a5f;
            var _0x546ce1;
            var _0x8e2e84 = ~~(Math.max(_0x1afc1f * Math.min(1.6 * _0x1058ed, _0x53f1a5, 1400) / 1400, 8) + 0.5);
            var _0x5952c4 = _0x8e2e84 / _0x1afc1f;
            var _0x1ee7cb = Math.min(isMobile ? 6 : 12, Math.max(~~((_0x1058ed - 132) / ~~(20 * _0x5952c4 + 0.5)), 3));
            var _0x2f227f = [];
            var _0x47744f = _0x5af7fe.length;
            var _0x74f54b = 0;
            var _0x5b2664 = 0;
            var _0x232de1 = 0;
            var _0x290625 = 0;
            var _0x11e944 = _0x33523f ? "#F5F6CE" : "#444444";
            b72 = _0x33523f ? "#ff8100" : "#c96d0e";
            b73 = _0x33523f ? "#9fc5e8" : "#6fa8dc";
            if (!_0x5eeb3b && 0 < _0x47744f) {
                _0x44020a.font = _0x8e2e84 + "px Ubuntu, serif";
                var _0x67fcf;
                var _0x4aac3c;
                var _0xb4b953;
                for (var _0x461e7e = 0; _0x461e7e < _0x47744f; _0x461e7e++) {
                    (_0x53a19d = _0x5af7fe[_0x461e7e]).filter = !(0 != _0xd835b8 && (_0xd835b8 != _0x53a19d.category || 1 != _0xd835b8 && '' != _0x1723aa && _0x1723aa.toLowerCase() != _0x53a19d.name.toLowerCase() && _0x1723aa.toLowerCase() != _0x53a19d.receiver.toLowerCase()) || _0x53a19d.R != _0x4e4df3 && _0x2f707e[_0x53a19d.R] || _0x53a19d.O != _0x4e4df3 && _0x538120[_0x53a19d.O]);
                    if (_0x53a19d.filter) {
                        _0x5b2664++;
                    }
                    if (null == _0x53a19d.cache) {
                        _0x67fcf = [];
                        _0x587292 = [];
                        _0xb4b953 = (_0x4aac3c = ": ").length;
                        if (_0x53a19d.K) {
                            _0x4aac3c += _0x53a19d.message;
                        } else {
                            _0x4aac3c += _0x53a19d.message.replace(emoRegExp, function(_0x458e26, _0x328eaf) {
                                _0x67fcf.push({
                                    "pos": _0x328eaf + _0xb4b953,
                                    "index": emoMapIndex[_0x458e26],
                                    "x0": 0
                                });
                                _0xb4b953 += 5 - _0x458e26.length;
                                return "     ";
                            });
                        }
                        if (2 == _0x53a19d.K) {
                            _0x587292.push(13);
                        } else if (_0x53a19d.K) {
                            _0x587292.push(0);
                        }
                        if (4 == _0x53a19d.category) {
                            _0x587292.push(14);
                        }
                        if (!(1 != _0x53a19d.category && 2 != _0x53a19d.category)) {
                            _0x587292.push(1 == _0x53a19d.category ? 1 : 2);
                        }
                        if (!(1 != _0x53a19d.q && 2 != _0x53a19d.q)) {
                            _0x587292.push(1 == _0x53a19d.q ? 4 : 3);
                        }
                        if (_0x53a19d.goldMember) {
                            _0x587292.push(5);
                        }
                        if (_0x53a19d.j) {
                            _0x587292.push(1 == _0x53a19d.j ? 6 : 2 == _0x53a19d.j ? 7 : 4 == _0x53a19d.j ? 11 : 5 == _0x53a19d.j ? 12 : 6 == _0x53a19d.j ? 15 : 8);
                        }
                        if (_0x53a19d.J) {
                            _0x587292.push(9);
                        }
                        if (_0x53a19d.H) {
                            _0x587292.push(10);
                        }
                        _0x53a19d.cache = {
                            "displayName": _0x53a19d.name,
                            "re": _0x4aac3c,
                            "ce": _0x67fcf,
                            "icons": _0x587292,
                            "le": 0,
                            "de": 0,
                            "width2": 0,
                            "ue": false,
                            "color2": '',
                            "scale": _0x5952c4,
                            "dpr": _0x358119,
                            "me": false,
                            "selected": false,
                            "complete": false,
                            "canvas": null,
                            "ctx": null,
                            "drawn": 0,
                            "he": true
                        };
                    }
                }
                _0x290625 = _0x1ee7cb < _0x5b2664 ? (1 - _0x190280) * (_0x5b2664 - _0x1ee7cb) : (_0x190280 = 1, 0);
                for (_0x461e7e = _0x47744f - 1; 0 <= _0x461e7e; _0x461e7e--) {
                    var _0x53a19d = _0x5af7fe[_0x461e7e];
                    if (_0x53a19d.filter && ~~_0x290625 <= ++_0x232de1 - 1) {
                        var _0x56941e = _0x53a19d.cache;
                        _0x4f2a5f = _0x56941e.me;
                        _0x546ce1 = _0x56941e.selected;
                        _0x56941e.me = _0x53a19d === _0x10e53d;
                        _0x56941e.selected = _0x53a19d === _0xfe046f;
                        if (null == _0x56941e.canvas) {
                            _0x56941e.canvas = document.createElement("canvas");
                            _0x56941e.ctx = _0x56941e.canvas.getContext("2d");
                            _0x56941e.he = true;
                        } else {
                            _0x56941e.he = _0x56941e.drawn < 3 || !_0x56941e.complete || _0x56941e.color2 != _0x11e944 || _0x56941e.drawn % 30 == 0 || _0x56941e.me != _0x4f2a5f || _0x56941e.selected != _0x546ce1 || _0x56941e.canvas.width < ~~(Math.min(_0x56941e.le + _0x56941e.de + _0x56941e.width2, _0x53f1a5 - 10) * _0x358119 + 0.5) || 0.001 < Math.abs(_0x56941e.scale - _0x5952c4) || 0.001 < Math.abs(_0x56941e.dpr - _0x358119);
                        }
                        if (_0x56941e.he) {
                            var _0x4e5846 = 0;
                            for (var _0x5b4ab7 = _0x56941e.ce; _0x4e5846 < _0x5b4ab7.length; _0x4e5846++) {
                                (_0x366a09 = _0x5b4ab7[_0x4e5846]).x0 = _0x44020a.measureText(_0x56941e.re.substring(0, _0x366a09.pos)).width;
                            }
                            _0x56941e.canvas.height = Math.max(~~(23 * _0x5952c4 * _0x358119 + 0.5), 1);
                            _0x56941e.le = _0x56941e.icons.length * ~~(22 * _0x5952c4 + 0.5);
                            _0x56941e.de = ~~((_0x56941e.displayName ? _0x44020a.measureText(_0x56941e.displayName).width + 6 * _0x5952c4 : 2 * _0x5952c4) + 0.5);
                            if (_0x56941e.de > ~~(400 * _0x5952c4)) {
                                _0x56941e.de = ~~(400 * _0x5952c4);
                                _0x56941e.ue = true;
                            }
                            _0x56941e.width2 = ~~(_0x44020a.measureText(_0x56941e.re).width + 6 * _0x5952c4 + 0.5);
                            if (0 == _0x56941e.icons[0]) {
                                _0x56941e.color2 = b72;
                            } else if (13 == _0x56941e.icons[0]) {
                                _0x56941e.color2 = b73;
                            } else {
                                _0x56941e.color2 = _0x11e944;
                            }
                            _0x56941e.scale = _0x5952c4;
                            _0x56941e.dpr = _0x358119;
                        }
                        if (_0x74f54b < _0x56941e.le + _0x56941e.de + _0x56941e.width2) {
                            _0x74f54b = _0x56941e.le + _0x56941e.de + _0x56941e.width2;
                        }
                        _0x2f227f.push(_0x53a19d);
                        if (_0x1ee7cb + (0 < _0x290625 ? 1 : 0) <= _0x2f227f.length) {
                            break;
                        }
                    }
                }
                _0x232de1 = _0x2f227f.length;
            }
            _0x1937c1 = [];
            if (0 < _0x232de1) {
                var _0x506009;
                var _0x1b74ba;
                var _0x2d4b3a = Math.min(_0x232de1, _0x1ee7cb);
                var _0x1afc1f = _0x1ee7cb < _0x5b2664;
                _0x4f2a5f = Math.min(_0x74f54b, _0x53f1a5 - (_0x1afc1f ? 25 : 10));
                _0x546ce1 = _0x2d4b3a * ~~(20 * _0x5952c4 + 0.5) + ~~(4 * _0x5952c4 + 0.5);
                _0x4110a1.width = Math.max(~~(_0x4f2a5f * _0x358119 + 0.5), 1);
                _0x4110a1.height = Math.max(~~(_0x546ce1 * _0x358119 + 0.5), 1);
                _0x4110a1.style.width = _0x4f2a5f + "px";
                _0x4110a1.style.height = _0x546ce1 + "px";
                _0x290625 %= 1;
                if (_0x1afc1f) {
                    _0x1afc1f = _0x365042;
                    _0x506009 = _0x50ced8;
                    _0x1b74ba = _0x46411c;
                    _0x365042 = _0x546ce1;
                    _0x50ced8 = Math.clamp(_0x1ee7cb / _0x5b2664 * _0x365042 - 2, 20, Math.max(_0x365042 - 2, 0));
                    _0x46411c = Math.max((1 - _0x190280) * (_0x365042 - _0x50ced8 - 2), 0);
                    if (_0x544018) {
                        _0x194e11 += _0x1b74ba - _0x46411c - (1 - _0x190280) * (_0x50ced8 - _0x506009);
                    }
                    _0x43e0d0 = (_0x1ee7cb - 1) / _0x5b2664 * _0x365042;
                    if (_0x1afc1f != _0x365042) {
                        _0x11f3e0.style.height = _0x365042 + "px";
                    }
                    if (_0x506009 != _0x50ced8) {
                        _0x243c1f.style.height = _0x50ced8 + "px";
                    }
                    if (_0x1b74ba != _0x46411c) {
                        _0x243c1f.style.bottom = _0x46411c + "px";
                    }
                    if (!_0x666805) {
                        $("#chtContent").addClass("scrollbar");
                        _0x666805 = true;
                    }
                } else if (_0x666805) {
                    $("#chtContent").removeClass("scrollbar");
                    _0x666805 = false;
                }
                _0x44020a.globalAlpha = _0x33523f ? 0.8 : 0.95;
                for (_0x461e7e = 0; _0x461e7e < _0x232de1; _0x461e7e++) {
                    if ((_0x56941e = (_0x53a19d = _0x2f227f[_0x461e7e]).cache).he) {
                        _0x56941e.canvas.width = Math.max(~~(Math.min(_0x56941e.le + _0x56941e.de + _0x56941e.width2, _0x53f1a5 - 10) * _0x358119 + 0.5), 1);
                        _0x56941e.complete = true;
                        var _0x20347b;
                        var _0x4f84bc = _0x56941e.ctx;
                        _0x4f84bc.scale(_0x358119, _0x358119);
                        if (_0x56941e.me || _0x56941e.selected) {
                            _0x4f84bc.globalAlpha = _0x56941e.selected ? 0.9 : 0.4;
                            _0x4f84bc.fillStyle = "#999999";
                            _0x4f84bc.fillRect(0, 0, ~~(Math.max(_0x56941e.le + _0x56941e.de + _0x5952c4, 10 * _0x5952c4) + 0.5), ~~(23 * _0x5952c4 + 0.5));
                        }
                        _0x4f84bc.font = _0x8e2e84 + "px Ubuntu";
                        _0x4f84bc.globalAlpha = 1;
                        if (0 < _0x56941e.icons.length) {
                            if ((_0x20347b = _0x18151b) && _0x20347b.complete && 0 != _0x20347b.width) {
                                var _0x4e5846 = 0;
                                for (var _0x587292 = _0x56941e.icons; _0x4e5846 < _0x587292.length; _0x4e5846++) {
                                    _0x4f84bc.drawImage(_0x20347b, 20 * _0x587292[_0x4e5846], 0, 20, 20, ~~(2 * _0x5952c4 + 0.5) + _0x4e5846 * ~~(22 * _0x5952c4 + 0.5), 0, ~~(20 * _0x5952c4 + 0.5), ~~(20 * _0x5952c4 + 0.5));
                                }
                            } else {
                                _0x56941e.complete = false;
                            }
                        }
                        _0x4f84bc.lineWidth = 3 * _0x5952c4;
                        _0x4f84bc.strokeStyle = "#000000";
                        _0x4f84bc.fillStyle = _0x53a19d.color;
                        if (_0x56941e.ue) {
                            _0x4f84bc.save();
                            _0x4f84bc.beginPath();
                            _0x4f84bc.rect(_0x56941e.le, 0, _0x56941e.de, ~~(23 * _0x5952c4 + 0.5));
                            _0x4f84bc.clip();
                        }
                        _0x4f84bc.strokeText(_0x56941e.displayName, _0x56941e.le + ~~(3 * _0x5952c4 + 0.5), ~~(17 * _0x5952c4 + 0.5));
                        _0x4f84bc.fillText(_0x56941e.displayName, _0x56941e.le + ~~(3 * _0x5952c4 + 0.5), ~~(17 * _0x5952c4 + 0.5));
                        if (_0x56941e.ue) {
                            _0x4f84bc.restore();
                        }
                        _0x4f84bc.fillStyle = _0x56941e.color2;
                        _0x4f84bc.fillText(_0x56941e.re, _0x56941e.le + _0x56941e.de + ~~(3 * _0x5952c4 + 0.5), ~~(17 * _0x5952c4 + 0.5));
                        if (0 < _0x56941e.ce.length) {
                            if ((_0x20347b = _0x558ed0) && _0x20347b.complete && 0 != _0x20347b.width) {
                                _0x4e5846 = 0;
                                for (_0x5b4ab7 = _0x56941e.ce; _0x4e5846 < _0x5b4ab7.length; _0x4e5846++) {
                                    var _0x366a09 = _0x5b4ab7[_0x4e5846];
                                    _0x4f84bc.drawImage(_0x20347b, _0x366a09.index % 8 * 20, 20 * ~~(_0x366a09.index / 8), 20, 20, ~~(_0x56941e.le + _0x56941e.de + 2 * _0x5952c4 + _0x366a09.x0 + 0.5), 0, ~~(20 * _0x5952c4 + 0.5), ~~(20 * _0x5952c4 + 0.5));
                                }
                            } else {
                                _0x56941e.complete = false;
                            }
                        }
                    }
                    _0x56941e.drawn++;
                    _0x4f2a5f = ~~(20 * _0x5952c4 + 0.5) * (_0x2d4b3a - _0x461e7e - 1) + ~~(~~(20 * _0x5952c4 + 0.5) * _0x290625 + 0.5);
                    _0x44020a.drawImage(_0x56941e.canvas, 0, ~~(_0x4f2a5f * _0x358119 + 0.5));
                    if (_0x53a19d.Y) {
                        _0x1937c1.push({
                            "ch": _0x53a19d,
                            "x0": 0,
                            "y0": _0x4f2a5f + _0x5952c4,
                            "x1": Math.max(_0x56941e.le + _0x56941e.de + _0x5952c4, 10 * _0x5952c4),
                            "y1": _0x4f2a5f + 21 * _0x5952c4
                        });
                    }
                }
                if (!_0x43df7f) {
                    $("#chtContent").show();
                    _0x43df7f = true;
                }
            } else if (_0x43df7f) {
                $("#chtContent").hide();
                _0x43df7f = false;
            }
        })(), _0x4cb089 = false, _0x10e53d) && _0x10e53d !== _0x191230(_0x36887a, _0x19f1c7)) {
        _0x4cb089 = !(_0x10e53d = null);
    }
    var _0x3a579c;
    var _0x243b5e = _0xb14342.globalAlpha = 1;
    var _0x4d7270 = _0x3e50d9 * _0x28ad4b;
    var _0x236d05 = 0;
    if (_0x3b1e5e = _0x41cc0f || _0x277c68 || _0x1e5f5a || _0x12e7a7) {
        if (_0x41cc0f || _0x12e7a7 && 2 == _0x19d645) {
            _0x243b5e = 0.375 < _0x4d7270 ? 1 : 0.1875 < _0x4d7270 ? 2 : 0.09375 < _0x4d7270 ? 4 : 0.046875 < _0x4d7270 ? 8 : 0.0234375 < _0x4d7270 ? 16 : 32;
            _0x3b1e5e = (_0x236d05 = 0.046875) / 2 < _0x3e50d9 * _0x358119;
        } else if (_0x277c68 || _0x12e7a7 && 2 != _0x19d645) {
            _0x3c5dfa = _0x28f6af - _0x5c1aa9;
            _0x31da46 = _0x500945 - _0x4ba286;
            _0x4d7270 = Math.max(_0x3c5dfa, _0x31da46) * _0x4d7270;
            _0x243b5e = _0x277c68 ? 3000 < _0x4d7270 ? 1 : 1500 < _0x4d7270 ? 2 : 750 < _0x4d7270 ? 4 : 8 : (_0x12e7a7 && 2 != _0x19d645 && (null == (_0x3a579c = _0x46d4aa[_0x62fded = "customback_fit1"]) && (_0x4c0e03(), _0x3a579c = _0x46d4aa[_0x62fded]), _0x3b1e5e = _0x3a579c && _0x3a579c.complete) && (_0x330e7f = _0x3a579c.width / _0x3a579c.height, _0x4d7270 = (1 < _0x330e7f ? _0x3c5dfa / _0x31da46 < _0x330e7f ? _0x31da46 * _0x330e7f : _0x3c5dfa : _0x330e7f < _0x3c5dfa / _0x31da46 ? _0x3c5dfa / _0x330e7f : _0x31da46) * _0x3e50d9), 3072 < _0x4d7270 ? 1 : 1536 < _0x4d7270 ? 2 : 768 < _0x4d7270 ? 4 : 8);
        } else if (_0x1e5f5a) {
            _0x3b1e5e = 0.1 < _0x3e50d9 * _0x358119;
        }
    }
    var _0x4d7270 = _0x41cc0f && _0x3b1e5e;
    var _0x90bd87 = _0x277c68 && _0x3b1e5e;
    var _0x5db90e = _0x1e5f5a && _0x3b1e5e;
    var _0xccf34 = _0x12e7a7 && 2 == _0x19d645 && _0x3b1e5e;
    var _0x5bd130 = _0x12e7a7 && 2 != _0x19d645 && _0x3b1e5e;
    if (_0x3b1e5e) {
        if (_0x4d7270) {
            _0x3a579c = _0x46d4aa[(_0x965bf3 = _0x33523f ? "grid_fancy_dark" : "grid_fancy_white") + _0x243b5e];
            _0x1bc408 = _0x43c4be[_0x965bf3 + _0x243b5e];
            if (null == _0x3a579c) {
                _0x46d4aa[_0x965bf3 + "1"] = _0xe8817a("img/" + _0x965bf3 + "1.png");
                _0x46d4aa[_0x965bf3 + "2"] = _0xe8817a("img/" + _0x965bf3 + "2.png");
                _0x46d4aa[_0x965bf3 + "4"] = _0xe8817a("img/" + _0x965bf3 + "4.png");
                _0x46d4aa[_0x965bf3 + "8"] = _0xe8817a("img/" + _0x965bf3 + "8.png");
                _0x46d4aa[_0x965bf3 + "16"] = _0xe8817a("img/" + _0x965bf3 + "16.png");
                _0x46d4aa[_0x965bf3 + "32"] = _0xe8817a("img/" + _0x965bf3 + "32.png");
                _0x3a579c = _0x46d4aa[_0x965bf3 + _0x243b5e];
            }
            _0x4d7270 = _0x3b1e5e = _0x3a579c && _0x3a579c.complete;
            if (null == _0x1bc408 && _0x4d7270) {
                _0x1bc408 = _0x43c4be[_0x965bf3 + _0x243b5e] = _0xb14342.createPattern(_0x3a579c, "repeat");
            }
        } else if (_0x90bd87) {
            if (null == (_0x3a579c = _0x46d4aa[(_0x965bf3 = "grid_sections_new") + _0x243b5e])) {
                _0x46d4aa[_0x965bf3 + "1"] = _0xe8817a("img/" + _0x965bf3 + "1.png");
                _0x46d4aa[_0x965bf3 + "2"] = _0xe8817a("img/" + _0x965bf3 + "2.png");
                _0x46d4aa[_0x965bf3 + "4"] = _0xe8817a("img/" + _0x965bf3 + "4.png");
                _0x46d4aa[_0x965bf3 + "8"] = _0xe8817a("img/" + _0x965bf3 + "8.png");
                _0x3a579c = _0x46d4aa[_0x965bf3 + _0x243b5e];
            }
            _0x90bd87 = _0x3b1e5e = _0x3a579c && _0x3a579c.complete;
        } else if (_0xccf34) {
            _0x3a579c = _0x46d4aa[(_0x965bf3 = "customback_pattern") + _0x243b5e];
            _0x1bc408 = _0x43c4be[_0x965bf3 + _0x243b5e];
            if (null == _0x3a579c) {
                _0x4c0e03();
                _0x3a579c = _0x46d4aa[_0x965bf3 + _0x243b5e];
            }
            _0xccf34 = _0x3b1e5e = _0x3a579c && _0x3a579c.complete;
            if (null == _0x1bc408 && _0xccf34) {
                _0x1bc408 = _0x43c4be[_0x965bf3 + _0x243b5e] = _0xb14342.createPattern(_0x3a579c, "repeat");
            }
        } else if (_0x5bd130) {
            if (null == (_0x3a579c = _0x46d4aa[(_0x965bf3 = "customback_fit") + _0x243b5e])) {
                _0x4c0e03();
                _0x3a579c = _0x46d4aa[_0x965bf3 + _0x243b5e];
            }
            _0x5bd130 = _0x3b1e5e = _0x3a579c && _0x3a579c.complete;
        }
    }
    _0xb14342.fillStyle = _0xe0e646 ? _0x32edda : _0x41cc0f ? _0x33523f ? "#0d0c0c" : "#f0f7fa" : _0x33523f ? "#0f0f0f" : "#F2FBFF";
    _0xb14342.fillRect(0, 0, _0x53f1a5, _0x1058ed);
    if (_0x3b1e5e) {
        if (_0x4d7270 || _0xccf34) {
            var _0x330e7f = 2 * _0x243b5e;
            var _0x62fded = _0x3e50d9 * _0x358119 < _0x236d05 ? Math.max((_0x3e50d9 * _0x358119 - _0x236d05 / 2) / (_0x236d05 / 2), 0) : 1;
            var _0x3c5dfa = (-_0x59034c + _0x2263d7) % (_0x3a579c.width * _0x330e7f);
            var _0x31da46 = (-_0x4ce984 + _0x223539) % (_0x3a579c.height * _0x330e7f);
            var _0x2058b6 = 0;
            var _0x20b8b1 = 0;
            var _0x5b5b68 = _0x53f1a5 / _0x3e50d9;
            var _0x547c24 = _0x1058ed / _0x3e50d9;
            if (0 < _0x3c5dfa) {
                _0x3c5dfa -= _0x3a579c.width * _0x330e7f;
            }
            if (0 < _0x31da46) {
                _0x31da46 -= _0x3a579c.height * _0x330e7f;
            }
            if (_0x1407a2) {
                _0x2058b6 = Math.max(_0x2058b6, -_0x59034c + _0x2263d7 + _0x40843.left);
                _0x20b8b1 = Math.max(_0x20b8b1, -_0x4ce984 + _0x223539 + _0x40843.top);
                _0x5b5b68 = Math.min(_0x5b5b68, -_0x59034c + _0x2263d7 + _0x40843.right) - _0x2058b6;
                _0x547c24 = Math.min(_0x547c24, -_0x4ce984 + _0x223539 + _0x40843.bottom) - _0x20b8b1;
            }
            if (0 < _0x5b5b68 && 0 < _0x547c24) {
                if (_0xccf34) {
                    _0xb14342.globalAlpha = _0x537d17 * _0x62fded;
                } else if (_0x62fded < 1) {
                    _0xb14342.globalAlpha = _0x62fded;
                }
                _0xb14342.fillStyle = _0x1bc408;
                _0xb14342.save();
                _0xb14342.scale(_0x330e7f * _0x3e50d9, _0x330e7f * _0x3e50d9);
                _0xb14342.translate(_0x3c5dfa / _0x330e7f, _0x31da46 / _0x330e7f);
                _0xb14342.fillRect((_0x2058b6 - _0x3c5dfa) / _0x330e7f, (_0x20b8b1 - _0x31da46) / _0x330e7f, _0x5b5b68 / _0x330e7f, _0x547c24 / _0x330e7f);
                _0xb14342.restore();
            }
        } else {
            if (_0x90bd87 || _0x5bd130) {
                var _0x3c5dfa = _0x28f6af - _0x5c1aa9;
                var _0x31da46 = _0x500945 - _0x4ba286;
                if (_0x90bd87) {
                    _0x3c5dfa = _0x31da46 = Math.max(_0x3c5dfa, _0x31da46);
                } else if (_0x5bd130 && 1 == _0x19d645) {
                    if ((_0x330e7f = _0x3a579c.width / _0x3a579c.height) < _0x3c5dfa / _0x31da46) {
                        _0x31da46 = _0x3c5dfa / _0x330e7f;
                    } else {
                        _0x3c5dfa = _0x31da46 * _0x330e7f;
                    }
                }
                var _0x965bf3 = (_0x59034c - _0x2263d7 - _0x5c1aa9) * _0x3a579c.width / _0x3c5dfa;
                var _0x3b1e5e = (_0x4ce984 - _0x223539 - _0x4ba286) * _0x3a579c.height / _0x31da46;
                var _0x4d7270 = _0x53f1a5 / _0x3e50d9 * _0x3a579c.width / _0x3c5dfa;
                var _0x236d05 = _0x1058ed / _0x3e50d9 * _0x3a579c.height / _0x31da46;
                var _0x2058b6 = 0;
                var _0x20b8b1 = 0;
                var _0x5b5b68 = _0x53f1a5;
                var _0x547c24 = _0x1058ed;
                if (_0x965bf3 < 0) {
                    _0x4d7270 += _0x965bf3;
                    _0x965bf3 = 0;
                    _0x5b5b68 -= _0x2058b6 = (-_0x59034c + _0x2263d7 + _0x5c1aa9) * _0x3e50d9;
                }
                if (_0x3b1e5e < 0) {
                    _0x236d05 += _0x3b1e5e;
                    _0x3b1e5e = 0;
                    _0x547c24 -= _0x20b8b1 = (-_0x4ce984 + _0x223539 + _0x4ba286) * _0x3e50d9;
                }
                if (_0x965bf3 + _0x4d7270 > _0x3a579c.width) {
                    _0x4d7270 = _0x3a579c.width - _0x965bf3;
                    _0x5b5b68 = (-_0x59034c + _0x2263d7 + _0x3c5dfa + _0x5c1aa9) * _0x3e50d9 - _0x2058b6;
                }
                if (_0x3b1e5e + _0x236d05 > _0x3a579c.height) {
                    _0x236d05 = _0x3a579c.height - _0x3b1e5e;
                    _0x547c24 = (-_0x4ce984 + _0x223539 + _0x31da46 + _0x4ba286) * _0x3e50d9 - _0x20b8b1;
                }
                if (_0x5bd130 && 1 == _0x19d645 && _0x1407a2 && 0 < _0x5b5b68 && 0 < _0x547c24 && (_0x62fded = (_0x28f6af - Math.max(_0x5c1aa9, _0x59034c - _0x2263d7)) * _0x3e50d9, _0x4f95d4 = (_0x500945 - Math.max(_0x4ba286, _0x4ce984 - _0x223539)) * _0x3e50d9, _0x62fded < _0x5b5b68 && (_0x4d7270 *= _0x62fded / _0x5b5b68, _0x5b5b68 = _0x62fded), _0x4f95d4 < _0x547c24)) {
                    _0x236d05 *= _0x4f95d4 / _0x547c24;
                    _0x547c24 = _0x4f95d4;
                }
                if (0 < _0x4d7270 && 0 < _0x236d05 && 0 < _0x5b5b68 && 0 < _0x547c24) {
                    _0xb14342.globalAlpha = _0x5bd130 ? _0x537d17 : _0x33523f ? 0.3 : 0.2;
                    _0xb14342.drawImage(_0x3a579c, _0x965bf3, _0x3b1e5e, _0x4d7270, _0x236d05, _0x2058b6, _0x20b8b1, _0x5b5b68, _0x547c24);
                }
            } else {
                if (_0x5db90e) {
                    _0xb14342.lineWidth = 1 / _0x3e50d9;
                    var _0x4da7fc = {
                        r: 17,
                        g: 17,
                        b: 17
                    };
                    var _0x1f0f3e = {
                        r: 242,
                        g: 251,
                        b: 255
                    };
                    var _0x52da49 = {
                        r: 170,
                        g: 170,
                        b: 170
                    };
                    var _0x20488f = {
                        r: 0,
                        g: 0,
                        b: 0
                    };
                    var _0xccf34 = Math.min(0.25 * Math.max(_0x3e50d9 * _0x358119 - 0.05, 0), 0.3);
                    var _0x1bc408 = _0xe0e646 ? _0x41e18a : _0x33523f ? _0x4da7fc : _0x1f0f3e;
                    var _0x90bd87 = _0x33523f ? _0x52da49 : _0x20488f;
                    _0xb14342.strokeStyle = _0x15f517(~~(_0x1bc408.r + (_0x90bd87.r - _0x1bc408.r) * _0xccf34), ~~(_0x1bc408.g + (_0x90bd87.g - _0x1bc408.g) * _0xccf34), ~~(_0x1bc408.b + (_0x90bd87.b - _0x1bc408.b) * _0xccf34));
                    _0xb14342.save();
                    _0xb14342.scale(_0x3e50d9, _0x3e50d9);
                    var _0x31da46 = _0x53f1a5 / _0x3e50d9;
                    var _0x3c5dfa = _0x1058ed / _0x3e50d9;
                    var _0x4f95d4 = 200 * _0x243b5e;
                    _0xb14342.beginPath();
                    for (let _0x4d7c46 = (_0x2263d7 - _0x59034c) % _0x4f95d4; _0x4d7c46 < _0x31da46; _0x4d7c46 += _0x4f95d4) {
                        _0xb14342.moveTo(_0x4d7c46, 0);
                        _0xb14342.lineTo(_0x4d7c46, _0x3c5dfa);
                    }
                    for (let _0x5d93ae = (_0x223539 - _0x4ce984) % _0x4f95d4; _0x5d93ae < _0x3c5dfa; _0x5d93ae += _0x4f95d4) {
                        _0xb14342.moveTo(0, _0x5d93ae);
                        _0xb14342.lineTo(_0x31da46, _0x5d93ae);
                    }
                    _0xb14342.stroke();
                    _0xb14342.restore();
                }
            }
        }
    }
    var _0x2b9f9d = {
        r: 17,
        g: 17,
        b: 17
    };
    var _0x214596 = {
        r: 242,
        g: 251,
        b: 255
    };
    _0xb14342.lineCap = "round";
    _0xb14342.save();
    if (false && (_0x4f401c(_0x581015), _0x25fdfa = _0x40843.top > _0x4ce984 - _0x223539 || _0x40843.right < _0x59034c + _0x2263d7 || _0x40843.bottom < _0x4ce984 + _0x223539 || _0x40843.left > _0x59034c - _0x2263d7)) {
        _0xb14342.beginPath();
        _0xb14342.rect(0, 0, _0x53f1a5, _0x1058ed);
        _0xb14342.rect(Math.max(_0x40843.left - _0x59034c + _0x2263d7, 0) * _0x3e50d9, Math.max(_0x40843.top - _0x4ce984 + _0x223539, 0) * _0x3e50d9, (Math.min(_0x40843.right, _0x59034c + _0x2263d7) - Math.max(_0x40843.left, _0x59034c - _0x2263d7)) * _0x3e50d9, (Math.min(_0x40843.bottom, _0x4ce984 + _0x223539) - Math.max(_0x40843.top, _0x4ce984 - _0x223539)) * _0x3e50d9);
        _0xb14342.globalAlpha = 0.3;
        _0xb14342.fillStyle = "#CC3030";
        _0xb14342.fill("evenodd");
    }
    _0xb14342.scale(_0x3e50d9, _0x3e50d9);
    _0xb14342.translate(-_0x59034c + _0x2263d7, -_0x4ce984 + _0x223539);
    if (!_0x1f1bbd) {
        _0x2c9685 = Math.max(20, 1 / _0x3e50d9);
        _0xb14342.lineWidth = _0x2c9685;
        _0xb14342.globalAlpha = 1;
        _0x330e7f = Math.clamp(5 * _0x3e50d9 * _0x358119, false && _0x25fdfa ? 0.5 : 0.2, 1);
        _0x62fded = _0xe0e646 ? _0x41e18a : _0x33523f ? _0x2b9f9d : _0x214596;
        _0xb14342.strokeStyle = _0x15f517(~~(_0x62fded.r + (204 - _0x62fded.r) * _0x330e7f), ~~(_0x62fded.g + (48 - _0x62fded.g) * _0x330e7f), ~~(_0x62fded.b + (48 - _0x62fded.b) * _0x330e7f));
        if (_0x40843.top + _0x2c9685 / 2 > _0x4ce984 - _0x223539) {
            _0xb14342.beginPath();
            _0xb14342.moveTo(_0x40843.left, _0x40843.top);
            _0xb14342.lineTo(_0x40843.right, _0x40843.top);
            _0xb14342.stroke();
        }
        if (_0x40843.right - _0x2c9685 / 2 < _0x59034c + _0x2263d7) {
            _0xb14342.beginPath();
            _0xb14342.moveTo(_0x40843.right, _0x40843.top);
            _0xb14342.lineTo(_0x40843.right, _0x40843.bottom);
            _0xb14342.stroke();
        }
        if (_0x40843.bottom - _0x2c9685 / 2 < _0x4ce984 + _0x223539) {
            _0xb14342.beginPath();
            _0xb14342.moveTo(_0x40843.right, _0x40843.bottom);
            _0xb14342.lineTo(_0x40843.left, _0x40843.bottom);
            _0xb14342.stroke();
        }
        if (_0x59034c - _0x2263d7 < _0x40843.left + _0x2c9685 / 2) {
            _0xb14342.beginPath();
            _0xb14342.moveTo(_0x40843.left, _0x40843.bottom);
            _0xb14342.lineTo(_0x40843.left, _0x40843.top);
            _0xb14342.stroke();
        }
    }
    var _0x53754a;
    var _0x19c7c3;
    var _0x1a33c5 = _0xa92e4c.length;
    for (var _0xe75140 = 0; _0xe75140 < _0x1a33c5; _0xe75140++) {
        (_0x53754a = _0xa92e4c[_0xe75140]).pe();
        if (2 === _0x53754a.fe) {
            _0xa92e4c.splice(_0xe75140--, 1);
            _0x1a33c5--;
        }
    }
    _0x1a33c5 = _0x4fd5c0.length;
    for (_0xe75140 = 0; _0xe75140 < _0x1a33c5; _0xe75140++) {
        _0x4fd5c0[_0xe75140].pe();
    }
    _0x34b545.sort(_0x24f2c9);
    _0x1a33c5 = _0x34b545.length;
    for (_0xe75140 = 0; _0xe75140 < _0x1a33c5; _0xe75140++) {
        _0x34b545[_0xe75140].pe();
    }
    _0xb14342.restore();
    if (_0x5ae1b6 = (() => {
            var _0x1fa510 = 0;
            for (var _0x1614fd = 0; _0x1614fd < _0xc52211.length; _0x1614fd++) {
                var _0x41ff06 = _0xc52211[_0x1614fd];
                _0x1fa510 += _0x41ff06.nSize * _0x41ff06.nSize;
                if (_0x3b8888 < _0x1fa510) {
                    _0x3b8888 = _0x1fa510;
                    setTopMass(_0x3b8888);
                } else {
                    setCellsSplit();
                }
            }
            return _0x1fa510;
        })()) {
        _0x5bd130 = 0.01 * _0x5ae1b6;
        if (_0x2332bb) {
            _0x3a579c = Math.max(Math.min(1.6 * _0x1058ed, _0x53f1a5, 1400) / 1400, 0.5);
            _0x5bd130 = "Mass: " + ~~_0x5bd130;
            _0x965bf3 = _0x33523f ? "#FFFFFF" : "#626262";
            _0x3b1e5e = ~~(24 * _0x3a579c + 0.5);
            _0x236d05 = _0x28ad4b;
            if (_0x351ad0) {
                _0x12c6d8 = _0x351ad0.canvas;
                _0x5d45ba = _0x351ad0.ctx;
            } else {
                _0x12c6d8 = document.createElement("canvas");
                _0x5d45ba = _0x12c6d8.getContext("2d");
                _0x351ad0 = {
                    "canvas": _0x12c6d8,
                    "ctx": _0x5d45ba,
                    "value": '',
                    "color": '',
                    "size": 0,
                    "scale": 1
                };
            }
            if (!(_0x351ad0.value == _0x5bd130 && _0x351ad0.color == _0x965bf3 && _0x351ad0.size == _0x3b1e5e && _0x351ad0.scale == _0x236d05)) {
                _0x351ad0.value = _0x5bd130;
                _0x351ad0.color = _0x965bf3;
                _0x351ad0.size = _0x3b1e5e;
                _0x351ad0.scale = _0x236d05;
                _0x5d45ba.font = _0x3b1e5e + "px Ubuntu, serif";
                _0x12c6d8.width = Math.max((_0x5d45ba.measureText(_0x5bd130).width + 6) * _0x236d05, 1);
                _0x12c6d8.height = Math.max((_0x3b1e5e + ~~(0.4 * _0x3b1e5e)) * _0x236d05, 1);
                _0x5d45ba.font = _0x3b1e5e + "px Ubuntu";
                if (1 != _0x236d05) {
                    _0x5d45ba.scale(_0x236d05, _0x236d05);
                }
                _0x5d45ba.globalAlpha = 1;
                _0x5d45ba.fillStyle = _0x965bf3;
                _0x5d45ba.fillText(_0x5bd130, 3, _0x3b1e5e);
            }
            _0xb14342.globalAlpha = 1;
            _0xb14342.drawImage(_0x12c6d8, isMobile ? 99 : 12, (isMobile || _0x4386c1 ? 60 : 80) - ~~(16 * _0x3a579c + 0.5), _0x12c6d8.width / _0x351ad0.scale, _0x12c6d8.height / _0x351ad0.scale);
        }
    }
    if (isMobile) {
        if (0 < _0xc52211.length || null !== _0x1c0802 && !_0x3e08c0) {
            if ((_0x13a1ae = (_0x51f702 = Math.clamp(256 * _0x3e50d9, 16, 64)) * _0x28ad4b <= 32 ? _0x16a246 : _0x5bec61) && _0x13a1ae.complete && 0 != _0x13a1ae.width) {
                var _0x50afd8;
                var _0xfa44ed = 0;
                var _0x5098e0 = 0 < _0xc52211.length ? 0 : Math.max(Math.min((_0x53f1a5 - _0x51f702) / 2, (_0x1058ed - _0x51f702) / 2) - _0x51f702, 0) / _0x3e50d9;
                if (_0x248dac) {
                    _0x5c595d = _0x5098e0;
                } else {
                    for (_0x34eb69 = 0; _0x34eb69 < _0xc52211.length; _0x34eb69++) {
                        _0xcffbc5 = (_0xf9ab13 = (_0x50afd8 = _0xc52211[_0x34eb69]).x - _0x59034c) * _0xf9ab13 + (_0x3e481a = _0x50afd8.y - _0x4ce984) * _0x3e481a;
                        if (_0xfa44ed / 4 < (_0x4cb1e7 = Math.max(_0xcffbc5, _0x50afd8.size * _0x50afd8.size))) {
                            _0x5098e0 = Math.max(Math.sqrt(_0xcffbc5) + _0x50afd8.size, _0x5098e0);
                        }
                        if (_0xfa44ed < _0x4cb1e7) {
                            _0xfa44ed = _0x4cb1e7;
                        }
                    }
                    _0x5c595d = ((_0x2c9685 = +_0x587d52) * _0x5c595d + _0x5098e0) / (_0x2c9685 + 1);
                }
                _0x29f519 = Math.min(_0x5c595d * _0x3e50d9 + _0x51f702, Math.max((_0x53f1a5 - _0x51f702) / 2, (_0x1058ed - _0x51f702) / 2, 0));
                if (null !== _0x1c0802 && 0 != _0xff0f52.x && 0 != _0xff0f52.y) {
                    _0x462522();
                }
                var _0xf9ab13 = _0x2df455 - _0x59034c;
                var _0x3e481a = _0x58d9ac - _0x4ce984;
                var _0xcffbc5 = Math.sqrt(_0xf9ab13 * _0xf9ab13 + _0x3e481a * _0x3e481a);
                var _0x2058b6 = Math.min(_0x29f519, _0xcffbc5 * _0x3e50d9);
                var _0x20b8b1 = 0 != _0xcffbc5 ? _0xf9ab13 / _0xcffbc5 : 1;
                var _0x5b5b68 = 0 != _0xcffbc5 ? _0x3e481a / _0xcffbc5 : 0;
                _0xf9ab13 = _0x20b8b1 * _0x2058b6;
                _0x3e481a = _0x5b5b68 * _0x2058b6;
                if (_0x248dac) {
                    _0xccb7e = _0xf9ab13;
                    _0x42e389 = _0x3e481a;
                } else {
                    _0xccb7e = ((_0x2c9685 = 2 * _0x587d52) * _0xccb7e + _0xf9ab13) / (_0x2c9685 + 1);
                    _0x42e389 = (_0x2c9685 * _0x42e389 + _0x3e481a) / (_0x2c9685 + 1);
                    _0x20b8b1 = 0 != (_0x2058b6 = Math.sqrt(_0xccb7e * _0xccb7e + _0x42e389 * _0x42e389)) ? _0xccb7e / _0x2058b6 : 1;
                    _0x5b5b68 = 0 != _0x2058b6 ? _0x42e389 / _0x2058b6 : 0;
                }
                if (_0x1058ed < _0x53f1a5) {
                    if (0 != _0x5b5b68) {
                        _0x2058b6 = Math.min(Math.max((_0x1058ed - _0x51f702) / 2, 0) / Math.abs(_0x5b5b68), _0x2058b6);
                    }
                } else if (0 != _0x20b8b1) {
                    _0x2058b6 = Math.min(Math.max((_0x53f1a5 - _0x51f702) / 2, 0) / Math.abs(_0x20b8b1), _0x2058b6);
                }
                _0x248dac = false;
                _0xb14342.globalAlpha = 0.7;
                _0xb14342.save();
                _0xb14342.transform(_0x20b8b1, _0x5b5b68, -_0x5b5b68, _0x20b8b1, _0x53f1a5 / 2, _0x1058ed / 2);
                _0xb14342.drawImage(_0x13a1ae, _0x2058b6 - _0x51f702 / 2, -_0x51f702 / 2, _0x51f702, _0x51f702);
                _0xb14342.restore();
            }
        } else {
            _0x248dac = true;
        }
    }
    if (_0x4400ec && (_0x13a1ae = _0x4aa218) && _0x13a1ae.complete && 0 != _0x13a1ae.width) {
        _0xb14342.globalAlpha = 1;
        _0xb14342.drawImage(_0x13a1ae, (_0x312d0a - _0x59034c + _0x2263d7) * _0x3e50d9 - 20, (_0x2435c4 - _0x4ce984 + _0x223539) * _0x3e50d9 - 10, 50, 50);
    }
    if (_0x181957 && (_0x28c1e5(), _0x114a07 && (_0x114a07.x = _0x114a07.ox = _0x114a07.hx = _0x21548d, _0x114a07.y = _0x114a07.oy = _0x114a07.hy = _0x1598a0, _0x114a07.nSize != _0x4289a6 && 0 != _0x4289a6 && (_0x114a07.size = _0x114a07.ge = _0x114a07.nSize = _0x114a07.strokeSize = _0x4289a6, _0x114a07.be = null, _0x114a07.sizeScale = 0), _0x34eb69 = 4 == _0x114a07.i ? 0.83 * _0x114a07.size : _0x114a07.size, _0x51f702 = 0 == _0x489844 && (_0x496adb || isMobile) && 0 != _0x4289a6 && _0x114a07.sizeScale ? _0x34eb69 * _0x3e50d9 < 4 ? 4 / _0x34eb69 : _0x3e50d9 : isMobile ? 50 / _0x34eb69 : (16 == _0x114a07.i ? 23 : 14) * (_0x4386c1 ? 0.7 : 1) / _0x34eb69, _0x2c9685 = +_0x587d52, _0x114a07.sizeScale = _0x114a07.sizeScale ? (_0x2c9685 * _0x114a07.sizeScale + _0x51f702) / (_0x2c9685 + 1) : _0x51f702, (_0x25fdfa = _0x114a07.getTransform()).t = _0x25fdfa.s = true, _0x25fdfa.sx = _0x25fdfa.sy = _0x114a07.sizeScale / _0x3e50d9, _0xb14342.save(), _0xb14342.scale(_0x3e50d9, _0x3e50d9), _0xb14342.translate(-_0x59034c + _0x2263d7, -_0x4ce984 + _0x223539), isMobile && 0 == _0x489844 && (_0xb14342.beginPath(), _0xb14342.arc(_0x114a07.x, _0x114a07.y, 60 / _0x3e50d9, 0, 2 * Math.PI, false), _0xb14342.arc(_0x114a07.x, _0x114a07.y, 50 / _0x3e50d9, 0, 2 * Math.PI, false), _0xb14342.globalAlpha = 0.2, _0xb14342.fillStyle = _0x496adb ? "#00FF00" : "#FF0000", _0xb14342.fill("evenodd")), _0x114a07.pe(), _0xb14342.restore()), !_0x3e08c0) && 0 == _0x489844 && _0x496adb) {
        _0x4cb1e7 = null;
        for (_0x34eb69 = _0x34b545.length - 1; 0 <= _0x34eb69; _0x34eb69--) {
            if (0 == (_0x25fdfa = _0x34b545[_0x34eb69]).i) {
                var _0x5399b4 = _0x25fdfa.x - _0x21548d;
                var _0x3b8b30 = _0x25fdfa.y - _0x1598a0;
                if (_0x5399b4 * _0x5399b4 + _0x3b8b30 * _0x3b8b30 < _0x25fdfa.size * _0x25fdfa.size) {
                    _0x4cb1e7 = _0x25fdfa;
                    break;
                }
            }
        }
        if (_0x4cb1e7) {
            _0x4cb1e7.we({
                "ee": 13,
                "te": _0x18ce16[13].time(),
                "received": ++_0x57f5d0
            });
        }
    }
    if (_0x2c6f91 && !_0x18306d && _0x12af20) {
        var _0x34eb69;
        var _0x13a1ae;
        var _0x270f24 = _0x51f702 = ~~(200 * (_0x34eb69 = ~~(Math.max(200 * Math.min(1.6 * _0x1058ed, _0x53f1a5, 1400) / 1400, 90) + 0.5) / 200) + 0.5);
        if (!_0x4b4b51) {
            _0x4b4b51 = document.createElement("canvas");
            _0x1138be = _0x4b4b51.getContext("2d");
        }
        if (!(!_0xaade67 && _0x4b4b51.complete)) {
            _0x4b4b51.width = _0x4b4b51.height = ~~(_0x51f702 * _0x28ad4b + 0.5);
            _0x1138be.scale(_0x28ad4b, _0x28ad4b);
            _0x1138be.globalAlpha = isMobile ? 0.7 : 0.9;
            _0x1138be.fillStyle = "#000000";
            _0x1138be.fillRect(0, 0, _0x51f702, _0x51f702);
            if ((_0x13a1ae = null == (_0x13a1ae = _0x247b5a.minimap) ? _0x247b5a.minimap = _0x14f914("img/minimap.png") : _0x13a1ae) && _0x13a1ae.complete && 0 != _0x13a1ae.width) {
                _0x1138be.globalAlpha = 1;
                _0x1138be.drawImage(_0x13a1ae, 0, 0, _0x51f702, _0x51f702);
                _0x4b4b51.complete = true;
            }
        }
        _0x12af20.width = _0x12af20.height = ~~(_0x51f702 * _0x28ad4b + 0.5);
        _0x12af20.style.width = _0x12af20.style.height = _0x51f702 + "px";
        _0x5be4cd.globalAlpha = 1;
        _0x5be4cd.drawImage(_0x4b4b51, 0, 0);
        _0x5be4cd.scale(_0x28ad4b, _0x28ad4b);
        _0x51f702 /= Math.max(_0x28f6af - _0x5c1aa9, _0x500945 - _0x4ba286);
        _0x5be4cd.scale(_0x51f702, _0x51f702);
        _0x5be4cd.translate(-_0x5c1aa9, -_0x4ba286);
        _0x25fdfa = _0x51f702 * _0x51f702 * _0x53f1a5 * _0x1058ed / (_0x3e50d9 * _0x3e50d9 * 200 * 200 * _0x34eb69 * _0x34eb69);
        if (_0x33523f) {
            _0x5be4cd.globalAlpha = 0.4 <= _0x25fdfa ? 0.04 : 0.06 * (1 - _0x25fdfa / 0.4) + 0.04;
            _0x5be4cd.fillStyle = "#CCCCCC";
        } else {
            _0x5be4cd.globalAlpha = 0.4 <= _0x25fdfa ? 0.02 : 0.04 * (1 - _0x25fdfa / 0.4) + 0.02;
            _0x5be4cd.fillStyle = "#FFFFFF";
        }
        _0x5be4cd.fillRect(_0x59034c - _0x2263d7, _0x4ce984 - _0x223539, _0x53f1a5 / _0x3e50d9, _0x1058ed / _0x3e50d9);
        _0x39d073(_0x5be4cd, _0x51f702);
        _0x476ebb = _0x4fd5c0.length;
        for (_0xef6b87 = 0; _0xef6b87 < _0x476ebb; _0xef6b87++) {
            if (!(!(_0x2c9685 = _0x4fd5c0[_0xef6b87]).ne || _0x2c9685.x == _0x2c9685.hx && _0x2c9685.y == _0x2c9685.hy)) {
                _0x2c9685.ve(_0x51f702);
            }
        }
        _0x476ebb = _0x34b545.length;
        for (_0xef6b87 = 0; _0xef6b87 < _0x476ebb; _0xef6b87++) {
            if (3 != (_0x2c9685 = _0x34b545[_0xef6b87]).i && 1 != _0x2c9685.i || _0x2c9685.ne && (_0x2c9685.x != _0x2c9685.hx || _0x2c9685.y != _0x2c9685.hy)) {
                _0x2c9685.ve(_0x51f702);
            }
        }
        if (0 < (_0x476ebb = _0x55ce89.length) && _0x2332bb) {
            var _0x577a49;
            var _0xf8346e;
            var _0x518f8e;
            var _0x2c9685;
            var _0x25fdfa = 1.1;
            var _0x39e9c3 = ~~(15 * _0x28ad4b + 0.5);
            var _0x1dfed6 = ~~(3 * _0x28ad4b + 0.5);
            for (var _0xef6b87 = 0; _0xef6b87 < _0x476ebb; _0xef6b87++) {
                if ((_0x2c9685 = _0x55ce89[_0xef6b87]).ke) {
                    _0xf8346e = _0x2c9685.pp;
                    _0x518f8e = (_0xef6b87 + 1).toString();
                    if (_0xf8346e) {
                        _0x4cb1e7 = _0xf8346e.canvas;
                        _0x577a49 = _0xf8346e.ctx;
                    } else {
                        _0x577a49 = (_0x4cb1e7 = document.createElement("canvas")).getContext("2d");
                        _0xf8346e = _0x2c9685.pp = {
                            "canvas": _0x4cb1e7,
                            "ctx": _0x577a49,
                            "value": '',
                            "size": 0,
                            "strokeWidth": 0
                        };
                    }
                    if (!(_0xf8346e.value == _0x518f8e && _0xf8346e.size == _0x39e9c3 && _0xf8346e.strokeWidth == _0x1dfed6)) {
                        _0xf8346e.value = _0x518f8e;
                        _0xf8346e.size = _0x39e9c3;
                        _0xf8346e.strokeWidth = _0x1dfed6;
                        _0x577a49.font = _0x39e9c3 + "px Ubuntu, serif";
                        _0x4cb1e7.width = Math.max((_0x577a49.measureText(_0x518f8e).width + 2 * _0x1dfed6) * _0x25fdfa, 1);
                        _0x4cb1e7.height = Math.max((_0x39e9c3 + ~~(0.4 * _0x39e9c3)) * _0x25fdfa, 1);
                        _0x577a49.font = _0x39e9c3 + "px Ubuntu";
                        _0x577a49.scale(_0x25fdfa, _0x25fdfa);
                        _0x577a49.globalAlpha = 1;
                        _0x577a49.lineWidth = _0x1dfed6;
                        _0x577a49.strokeStyle = "#000000";
                        _0x577a49.strokeText(_0x518f8e, _0x1dfed6, _0x39e9c3);
                        _0x577a49.fillStyle = "#FFFFFF";
                        _0x577a49.fillText(_0x518f8e, _0x1dfed6, _0x39e9c3);
                    }
                    _0xf8346e = Math.max(Math.min(_0x2c9685.cx + +_0x34eb69 / _0x51f702, (_0x270f24 - (_0x4cb1e7.width / _0x28ad4b / _0x25fdfa - 4) * _0x34eb69) / _0x51f702 + _0x5c1aa9), -4 * _0x34eb69 / _0x51f702 + _0x5c1aa9);
                    _0x518f8e = Math.max(Math.min(_0x2c9685.cy - 15 * _0x34eb69 / _0x51f702, (_0x270f24 - (_0x4cb1e7.height / _0x28ad4b / _0x25fdfa - 4) * _0x34eb69) / _0x51f702 + _0x4ba286), -4 * _0x34eb69 / _0x51f702 + _0x4ba286);
                    _0x5be4cd.drawImage(_0x4cb1e7, _0xf8346e, _0x518f8e, _0x4cb1e7.width / _0x28ad4b / _0x25fdfa * _0x34eb69 / _0x51f702, _0x4cb1e7.height / _0x28ad4b / _0x25fdfa * _0x34eb69 / _0x51f702);
                }
            }
        }
    }
    _0x2c6f91 = _0xaade67 = false;
    for (_0x19c7c3 in _0x34a1ac) {
        var _0x91d784;
        var _0x26362e = _0x34a1ac[_0x19c7c3];
        var _0x56391d = 0;
        for (_0x91d784 in _0x26362e)
            if (5000 <= _0x581015 - _0x26362e[_0x91d784].timestamp) {
                delete _0x26362e[_0x91d784];
            } else {
                _0x56391d++;
            }
        if (0 === _0x56391d) {
            delete _0x34a1ac[_0x19c7c3];
        }
    }
    if (15 < (_0x547c24 = Date.now() - _0x581015)) {
        _0xb66c8e -= 0.01;
    }
    if (13.333 < _0x547c24) {
        _0x10d812 += 0.1;
    }
    if (_0x547c24 < 12.5) {
        _0xb66c8e += 0.01;
    }
    if (_0x547c24 < 11.667) {
        _0x10d812 -= 0.01;
    }
    _0xb66c8e = Math.min(Math.max(_0xb66c8e, 0.4), 1);
    _0x10d812 = Math.min(Math.max(_0x10d812, 0), 1);
}

function _0xae7145() {
    var _0x40966e;
    _0x5af7fe.push({
        "Y": false,
        "$": 0,
        "l": 0,
        "R": _0x4e4df3,
        "O": _0x4e4df3,
        "name": "Agma.io",
        "receiver": '',
        "color": "#FF0A0A",
        "message": "Disconnected from server",
        "category": 0,
        "goldMember": 0,
        "q": 0,
        "j": 0,
        "J": 0,
        "H": 0,
        "K": 0,
        "time": Date.now(),
        "cache": null
    });
    _0x4cb089 = true;
    _0x30cebd();
    _0x26af75();
    if (0 != _0x468e60.length) {
        _0x40966e = _0x468e60.shift();
        $("table.server-table tr").removeClass("active");
        $("#serverRow" + _0x40966e.id).addClass("active");
        connectserver(_0x40966e.address, _0x40966e.name);
    } else if (!_0xf3d226) {
        if ("undefined" != typeof Storage && window.localStorage.gameservers && window.localStorage.serverlistVersion != 12) {
            _0x256390 = null;
            _0x46c79d = '';
            connectDefault();
        } else {
            _0x1d3023 = setTimeout(_0x4a52b8, _0xf1d309);
            _0xf1d309 *= 1.5;
        }
    }
}
allowPartyInvite = true;
allowPartyAnimations = false;
gldNickEnabled = true;
gldCrownEnabled = true;
largeRenderDistance = false;
throwSnowball = false;
autoFeedEnabled = true;
minionSkins = false;
videoAdsEnabled = true;
modIconEnabled = true;
hasDRank = false;
can_yt_icon = false;
can_green_name = false;
can_blue_name = false;
can_orange_name = false;
can_red_name = false;
can_black_name = false;
can_custom_color_name = false;
custom_color_name = 0;
abilityFreeze = false;
abilityCloak = false;
abilityDoubleSpawnSize = false;
abilityDoubleExp = false;
iconDRankEnabled = true;
iconYTEnabled = true;
greenNameEnabled = false;
blueNameEnabled = false;
orangeNameEnabled = false;
redNameEnabled = false;
blackNameEnabled = false;
spinWheelPlayAdvert = false;
customColorNameEnabled = false;
videoAdSeconds = 1200;
videoAdSpawns = 10;
videoAdSpawnsParty = 12;
adSpawnCounter = 0;
clientStarted = Date.now();
adSuccessCB = null;
adPreRolledBy = 0;
adplayer_copy = null;
canRunAds = !!window.canRunAds && "function" == typeof window.adsBox;
fus = false;
a8ref = 0;
a8req = 0;
msref = 0;
msreq = 0;
ag219 = '';
ag219_2 = '';
rq219done = false;
sentFirstTime = false;
untrustedClick = false;
untrustedClickResetTimer = 0;
trustedEvent = false;
ignoreTrustedEvent = true;
trustedEventResetTimer = 0;
disabledModalClose = false;
preventModalCloseTimer = 0;
mapCenterSet = false;
isSpectating = false;
_0x1e9905 = '';
challengeImageId = _0x38a139 = _0x1d4fed = _0x54207c = _0x20546f = 0;
chatRulesConfirmed = false;
arrayOfKeyCodes = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
drawHalfFood = false;
_0x2792ec = false;
if (void(_0x33d2a7 = _0x352c3f = _0x170049 = 0) !== window.localStorage && window.localStorage.getItem("crcx2") && 5 < window.localStorage.getItem("crcx2").length) {
    ag219_2 = window.localStorage.getItem("crcx2");
}
window.topLeftClick = function() {
    azad(true);
};
window.azad = function(_0x1f19f5, _0x2aa3d0) {
    if (!_0x173058 && (
        _0x1f19f5 = !!_0x1f19f5,
        _0x1f19f5 = (
            !_0x2a60cc &&
            0 == _0x335282.length &&
            _0x1cc38d < Date.now() - 40000 &&
            !_0x1fc846 &&
            _0x3e08c0 != _0x1f19f5 ? _0x4bcc93 = true : _0x1f19f5
        )
    )) {
        az(_0x2aa3d0, 2);
    }
};
window.az = function(_0x16507e, _0x1da941) {
    var _0x3da465;
    if (!_0x173058) {
        _0x3da465 = false;
        if (_0x4bcc93) {
            _0x1ed902();
            _0x3da465 = true;
        }
        if (_0x514d47 && !waitPlayButtonDone && (
            waitPlayButtonDone = true,
            $("#playBtn")
                .prop("disabled", true)
                .html("Play<i class=\"fa fa-spin\" style=\"animation-duration:1s; margin:3px 0px -3px; float:right; opacity:0.7;\"><img src=\"img/loading3.png\" style=\"width:20px;\"></i>")
                .css("opacity", "0.7"),
            hasWatchedAd = _0x17f189 = false,
            a8ref = a8req = framesCounter,
            msref = msreq = Date.now(),
            spawnCooldownLow = 1200,
            spawnCooldownHigh = _0x3da465 || !windowIsLoaded ? 2000 : 1800,
            spawnCooldownLowTimeoutId = setTimeout(function() {
                _0x17f189 = true;
                if (hasWatchedAd) {
                    allowPlayButton();
                }
            }, spawnCooldownLow),
            spawnCooldownHighTimeoutId = setTimeout(allowPlayButton, spawnCooldownHigh),
            !canRunAds
        ) && _0x1fc846 && Math.random() < 0.2) {
            _0x12bbfc("Hey you! Did you know you can respawn faster if you remove adblocker!", false, false, 1, 20);
        }
        _0x6da0af(_0x16507e);
        _0x492dec();
        if (isMobile) {
            _0x4fbf9e();
        }
        if (!(_0x3e08c0 && !_0x1fc846)) {
            $("#minionUi").addClass("minimized");
        }
        isSpectating = !(_0x3e08c0 = true);
        if (_0x1da941 && _0x4386c1 && (1 === _0x1da941 && _0x5f12f2(), 2 === _0x1da941 && _0x3200d3(), 3 === _0x1da941)) {
            _0x412b();
        }
        $("#overlays").fadeIn(200);
        $("#advert").hide();
        _0x1fc846 = false;
    }
};
class Cell {
    constructor(_0x5e0597, _0x7feb0f, _0x590512, _0x225e84) {
            this.id = _0x5e0597;
            this.color = '';
            this.$e = '';
            this.l = 0;
            this.oid = 0;
            this.ox = this.x = _0x7feb0f;
            this.oy = this.y = _0x590512;
            this.ge = this.size = this.strokeSize = _0x225e84;
            this.name = null;
            this.namePart = null;
            this.clanPart = null;
            this.nameSize = 0;
            this.skinId = 0;
            this.ye = null;
            this._ = false;
            this.xe = null;
            this.Se = null;
            this.B = null;
            this.Me = null;
            this.Ce = null;
            this.Te = null;
            this.Ee = null;
            this._e = null;
            this.Te = null;
            this.clanCache = null;
            this.massCache = null;
            this.textDrawn = null;
            this.nSize = 0;
            this.hx = 0;
            this.hy = 0;
            this.ga = 1;
            this.L = 0;
            this.Fe = 0;
            this.fe = 0;
            this.ne = false;
            this.be = null;
            this.Ne = null;
            this.Be = 0;
            this.N = 0;
            this.Ae = null;
            this.transform = null;
            this.Pe = false;
            this.Ie = false;
            this.i = -1;
            this.Ue = false;
            this.shape = 0;
            this.rotation = 0;
            this.orientation = 0;
            this.U = 0;
            this.De = false;
            this.ze = false;
            this.Re = false;
            this.Oe = false;
            this.Ge = false;
            this.Le = 0;
            this.H = 0;
        }
        parseName(_0xa53980) {
            var _0x3a577d;
            var _0x280d98;
            if (_0xa53980 !== this.name) {
                _0x3a577d = '';
                if ((this.name = _0xa53980) && "[" == _0xa53980[0] && -1 != (_0x280d98 = _0xa53980.indexOf("]"))) {
                    _0x3a577d = _0xa53980.slice(1, _0x280d98);
                    _0xa53980 = _0xa53980.length > _0x280d98 + 1 ? _0xa53980.slice(_0x280d98 + 1 + (" " == _0xa53980[_0x280d98 + 1] ? 1 : 0)) : '';
                }
                this.clanPart = '' != _0x3a577d ? " " + _0x3a577d + " " : null;
                this.namePart = '' != _0xa53980 ? " " + _0xa53980 + " " : null;
            }
        }
        reloadImage() {
            var _0x5d0bce;
            var _0x5f2385;
            var _0x3991a0;
            var _0x2a03ce;
            if (0 == this.skinId || _0x3df17b) {
                if (0 != this.N) {
                    _0x5f2385 = _0x5d0bce = null;
                    if (!(!_0xfd65d9 && 0 == this.i)) {
                        if (!(_0x5d0bce = _0x247b5a[this.N + "_lo"])) {
                            _0x1cb610(this.N, this.i);
                            _0x5d0bce = _0x247b5a[this.N + "_lo"];
                        }
                        _0x5f2385 = _0x247b5a[this.N];
                    }
                    this._ = true;
                    this.xe = _0x5d0bce && _0x5d0bce.complete && 0 != _0x5d0bce.width ? _0x5d0bce : null;
                    this.Se = _0x5f2385 && _0x5f2385.complete && 0 != _0x5f2385.width ? _0x5f2385 : null;
                } else {
                    this._ = false;
                    this.xe = null;
                    this.Se = null;
                }
                this.ye = null;
            } else {
                _0x5f2385 = _0x5d0bce = null;
                if (_0xfd65d9) {
                    if (!(_0x5d0bce = _0x2e11fb[this.skinId + "_lo"])) {
                        _0x58d0e1(this.skinId);
                        _0x5d0bce = _0x2e11fb[this.skinId + "_lo"];
                    }
                    _0x5f2385 = _0x2e11fb[this.skinId];
                }
                this._ = true;
                this.xe = _0x5d0bce && _0x5d0bce.complete && 0 != _0x5d0bce.width ? _0x5d0bce : null;
                this.Se = _0x5f2385 && _0x5f2385.complete && 0 != _0x5f2385.width ? _0x5f2385 : null;
                if (_0x2645ec[this.skinId]) {
                    if (!(this.ye && this.ye.skinId == this.skinId)) {
                        this.ye = {
                            "skinId": this.skinId,
                            "Ye": null,
                            "qe": null,
                            "We": 0,
                            "Qe": 0,
                            "je": 0
                        };
                    }
                    _0x5d0bce = _0x5f2385 = null;
                    if (_0xfd65d9 && _0x32b0e5) {
                        if (!(_0x5d0bce = _0x419901[this.skinId + "_lo"])) {
                            _0x3991a0 = this.skinId;
                            _0x2a03ce = (_0x48a780[_0x3991a0] || 0).toString();
                            if (isMobile) {
                                _0x419901[_0x3991a0 + "_lo"] = loadAPNG("skins/" + _0x3991a0.toString() + "_lo.png?u=" + _0x2a03ce, _0xa8fda8);
                                _0x419901[_0x3991a0] = loadAPNG("skins/" + _0x3991a0.toString() + ".png?u=" + _0x2a03ce, _0xa8fda8);
                            } else {
                                _0x419901[_0x3991a0 + "_lo"] = loadAPNG("skins/" + _0x3991a0.toString() + "_lo.png?u=" + _0x2a03ce);
                                _0x419901[_0x3991a0] = loadAPNG("skins/" + _0x3991a0.toString() + ".png?u=" + _0x2a03ce);
                            }
                            _0x5d0bce = _0x419901[this.skinId + "_lo"];
                        }
                        _0x5f2385 = _0x419901[this.skinId];
                    }
                    this.ye.Ye = _0x5d0bce && _0x5d0bce.complete && 0 != _0x5d0bce.width ? _0x5d0bce : null;
                    this.ye.qe = _0x5f2385 && _0x5f2385.complete && 0 != _0x5f2385.width ? _0x5f2385 : null;
                } else {
                    this.ye = null;
                }
            }
        }
        Je(_0x59e23e) {
            var _0x463750 = null;
            var _0x5d0660 = null;
            if (_0x4b4ed5) {
                if (!(_0x463750 = _0x247b5a["W" + _0x59e23e.wearId + "_lo"])) {
                    _0x22f945(_0x59e23e.wearId);
                    _0x463750 = _0x247b5a["W" + _0x59e23e.wearId + "_lo"];
                }
                _0x5d0660 = _0x247b5a["W" + _0x59e23e.wearId];
            }
            _0x59e23e.xe = _0x463750 && _0x463750.complete && 0 != _0x463750.width ? _0x463750 : null;
            _0x59e23e.Se = _0x5d0660 && _0x5d0660.complete && 0 != _0x5d0660.width ? _0x5d0660 : null;
        }
        Ve() {
            var _0x4c019b = this.be;
            var _0x145478 = !_0x53ec10 && 2 == this.Be;
            var _0x1dd76f = 4 == this.i ? 0.83 * this.size : this.size;
            var _0x4433fd = 0 != this.id ? this.size * _0xb66c8e : this.size;
            if (_0x145478) {
                _0x4433fd *= 0.3;
            }
            if (_0x4c019b.p != (_0x4433fd = 30 < _0x4433fd ? _0x4433fd < 1000 ? 2 * ~~(_0x4433fd / 2) : 1000 : 30) || 0 != ~~(_0x4c019b.s - _0x1dd76f) || 0 != ~~(_0x4c019b.x - this.x) || 0 != ~~(_0x4c019b.y - this.y)) {
                if (9 == this.i && 0 != ~~(_0x4c019b.s - _0x1dd76f) && 0 != this.id && (this.rotation += Math.PI / (this.size * _0x587d52), this.rotation > Math.PI)) {
                    this.rotation -= 2 * Math.PI;
                }
                var _0x1fba2e;
                var _0x4611e3;
                var _0x53c65a = this.Ne;
                var _0x43fac2 = 2 == this.Be ? 10000 * (this.rotation / (2 * Math.PI) + 1) + 0.5 : 0.5;
                var _0xbb38f = 10000 / _0x4433fd;
                var _0x3a2787 = 12 * _0x587d52;
                var _0x141c29 = (_0x3a2787 * _0x4c019b.s + _0x1dd76f) / (1 + _0x3a2787);
                var _0x1affee = _0x141c29 + (_0x145478 ? this.size < 100 ? ~~(this.size / 5) : 20 : 5);
                var _0x232cff = _0x145478;
                _0x4c019b.x = this.x;
                _0x4c019b.y = this.y;
                _0x4c019b.s = _0x141c29;
                _0x4c019b.p = _0x4433fd;
                for (_0x53c65a.length > _0x4433fd && _0x53c65a.splice(_0x4433fd); _0x53c65a.length < _0x4433fd;) {
                    _0x53c65a.push({
                        "x": this.x,
                        "y": this.y
                    });
                }
                for (var _0x48b136 = 0; _0x48b136 < _0x4433fd; ++_0x48b136) {
                    _0x1fba2e = _0x53c65a[_0x48b136];
                    _0x3a2787 = _0x232cff ? _0x141c29 : _0x1affee;
                    if (!(_0x145478 && !_0x232cff)) {
                        _0x4611e3 = _0x41c319[~~(_0xbb38f * _0x48b136 + _0x43fac2) % 10000];
                    }
                    _0x232cff = !_0x232cff;
                    _0x1fba2e.x = this.x + _0x4611e3.cos * _0x3a2787;
                    _0x1fba2e.y = this.y + _0x4611e3.sin * _0x3a2787;
                }
                this.strokeSize = isMobile ? _0x141c29 : _0x1affee;
            }
        }
        destroy(_0x445cfe) {
            var _0x54a02f;
            if (this.Ue) {
                _0x4fd5c0.remove(this);
            } else {
                _0x34b545.remove(this);
                if (0 === this.i) {
                    if (this.Ie && _0xc52211.remove(this)) {
                        _0x29246b = true;
                    }
                    _0x335282.remove(this.id);
                    if ((_0x54a02f = (this.De ? _0xfe1c27 : _0x4cc54f)[this.oid]) && (_0x54a02f.remove(this), 0 === _0x54a02f.length)) {
                        if (this.De) {
                            delete _0xfe1c27[this.oid];
                        } else {
                            delete _0x4cc54f[this.oid];
                        }
                    }
                    this.Te = null;
                    this.clanCache = null;
                    this.massCache = null;
                }
            }
            delete _0x534f3c[this.id];
            this.fe = 1;
            this.ne = true;
            if (_0x445cfe && (_0x23a795 || !this.Ue || _0x4400ec)) {
                _0xa92e4c.push(this);
            }
        }
        ae() {
            var _0x270f49 = _0x4c1257 ? 480 : 120;
            var _0x3f5582 = (_0x581015 - this.Fe) / _0x270f49;
            var _0x4e56ee = this.x;
            var _0x2fa8fa = this.y;
            var _0x332e49 = 0;
            var _0x332e49 = _0x3f5582 < 0 ? 0 : 1;
            this.x = (_0x332e49 = 1 < _0x3f5582 ? 1 : _0x3f5582) * (this.hx - this.ox) + this.ox;
            this.y = _0x332e49 * (this.hy - this.oy) + this.oy;
            this.size = _0x332e49 * (this.nSize - this.ge) + this.ge;
            if (!(!this.be || 2 != this.i && 22 != this.i || (_0x4e56ee = this.x - _0x4e56ee, _0x2fa8fa = this.y - _0x2fa8fa, 0 == ~~_0x4e56ee && 0 == ~~_0x2fa8fa))) {
                this.rotation += 0.2 * Math.sqrt(_0x4e56ee * _0x4e56ee + _0x2fa8fa * _0x2fa8fa) * Math.PI / this.size;
                if (this.rotation > Math.PI) {
                    this.rotation -= 2 * Math.PI;
                }
            }
            if (_0x4c1257 && this.ga < 1) {
                _0x3f5582 = (_0x581015 - this.L) / _0x270f49;
                this.ga = _0x3f5582 < 0 ? 0 : 1 < _0x3f5582 ? 1 : _0x3f5582;
            }
            if (1 <= _0x332e49 && (this.ne = false, 1 === this.fe)) {
                this.fe++;
            }
            return _0x332e49;
        }
        pe() {
            var _0x282a29 = (this.B && _0x4b4ed5 ? 2.5 * this.size : this.size) + 40;
            if (!_0x23a795 && this.Ue && (!this.ne || this.x == this.hx && this.y == this.hy) && !_0x4400ec || this.x + _0x282a29 < _0x59034c - _0x2263d7 || this.y + _0x282a29 < _0x4ce984 - _0x223539 || this.x - _0x282a29 > _0x59034c + _0x2263d7 || this.y - _0x282a29 > _0x4ce984 + _0x223539) {
                if (this.ne && (this.ae(), 1 != this.i)) {
                    this.be = null;
                    this.strokeSize = 4 == this.i ? 0.83 * this.size : this.size;
                }
            } else {
                if (!_0x2792ec || !this.Ue || -1 != this.shouldDraw) {
                    var _0x222c9e = _0x161144 && 2 == this.shape;
                    var _0x683945 = _0xb4d644 && 3 <= this.shape || _0x222c9e;
                    var _0x2c5c7d = !this.Be || !_0x345ceb || _0x683945 || _0x3e50d9 < (_0x53ec10 || 2 != this.Be ? 0.2 : 0.06) && 0 != this.id;
                    var _0x58ffc6 = this.ne ? this.ae() : 1;
                    var _0x33867d = false;
                    var _0x1b2b2f = this.x;
                    var _0x52fc0c = this.y;
                    if (1 != this.i) {
                        if (_0x2c5c7d) {
                            if (this.be) {
                                this.be = null;
                            }
                        } else if (!(this.be || (_0x433539 = 4 == this.i ? 0.83 * this.size : this.size, this.be = {
                                "x": 0,
                                "y": 0,
                                "s": _0x433539,
                                "p": 0
                            }, this.Ne))) {
                            this.Ne = [];
                        }
                        if (this.Ae) {
                            for (_0x433539 = 0; _0x433539 < this.Ae.length; _0x433539++) {
                                switch ((_0x282a29 = this.Ae[_0x433539]).ee) {
                                    case 3:
                                        this.He(_0x282a29);
                                        break;
                                    case 6:
                                        this.Xe(_0x282a29);
                                        break;
                                    case 7:
                                        this.Ze(_0x282a29);
                                        break;
                                    case 8:
                                        this.o(_0x282a29);
                                        break;
                                    case 11:
                                        this.Ke(_0x282a29);
                                }
                                if (0 == _0x282a29.ee) {
                                    this.Ae.splice(_0x433539, 1);
                                    _0x433539--;
                                }
                            }
                            for (_0x433539 = 0; _0x433539 < this.Ae.length; _0x433539++) {
                                if (15 === (_0x282a29 = this.Ae[_0x433539]).ee) {
                                    this.et(_0x282a29, _0xb14342, _0x1b2b2f, _0x52fc0c);
                                }
                                if (0 == _0x282a29.ee) {
                                    this.Ae.splice(_0x433539, 1);
                                    _0x433539--;
                                }
                            }
                            if (0 == this.Ae.length) {
                                this.Ae = null;
                            }
                        }
                        if ((_0x282a29 = this.transform) && (_0x282a29.t || _0x282a29.s || _0x282a29.r) && (_0xb14342.save(), _0x33867d = true, _0x282a29.t && (_0x282a29.tx += _0x1b2b2f, _0x282a29.ty += _0x52fc0c, _0xb14342.translate(_0x282a29.tx, _0x282a29.ty), _0x1b2b2f = _0x52fc0c = 0), _0x282a29.s && _0xb14342.scale(_0x282a29.sx, _0x282a29.sy), _0x282a29.r)) {
                            _0xb14342.rotate(_0x282a29.rz);
                        }
                    }
                    _0xb14342.beginPath();
                    if (_0x2c5c7d) {
                        if (0 == this.i && _0x42a8fa) {
                            _0x433539 = _0x587d52 * (_0x3e50d9 < 0.4 ? 15 * _0x3e50d9 : 6);
                            if (this.size < this.strokeSize) {
                                _0x433539 /= 3;
                            }
                            this.strokeSize = (_0x433539 * this.strokeSize + this.size) / (_0x433539 + 1);
                        } else if (this.Be) {
                            _0x433539 = 12 * _0x587d52;
                            this.strokeSize = (_0x433539 * this.strokeSize + (4 == this.i ? 0.83 * this.size : this.size)) / (_0x433539 + 1);
                        } else {
                            this.strokeSize = this.size;
                        }
                        if (_0x683945) {
                            this.rotation -= Math.PI / (1000 * _0x587d52);
                            if (this.rotation < -Math.PI) {
                                this.rotation += 2 * Math.PI;
                            }
                            var _0x282a29 = this.shape;
                            var _0x34c05a = this.strokeSize * _0x55efcd[_0x282a29];
                            var _0x2919e4 = 10000 * (this.rotation / (2 * Math.PI) + 1) + 0.5;
                            var _0x473372 = 10000 / _0x282a29;
                            var _0x472af5 = _0x41c319[~~_0x2919e4 % 10000];
                            _0xb14342.moveTo(_0x1b2b2f + _0x34c05a * _0x472af5.cos, _0x52fc0c - _0x34c05a * _0x472af5.sin);
                            for (_0x433539 = 1; _0x433539 < _0x282a29; _0x433539++) {
                                _0x472af5 = _0x41c319[~~(_0x473372 * _0x433539 + _0x2919e4) % 10000];
                                _0xb14342.lineTo(_0x1b2b2f + _0x34c05a * _0x472af5.cos, _0x52fc0c - _0x34c05a * _0x472af5.sin);
                            }
                            _0xb14342.closePath();
                        } else {
                            if (this.Ge && _0x345ceb) {
                                var _0x463db0 = this.strokeSize;
                                var _0x2fe564 = _0x581015 % 1000;
                                var _0x2919e4 = _0x2fe564 <= 500 ? _0x2fe564 / 500 : 1 - (_0x2fe564 - 500) / 500;
                                var _0x472af5 = _0x41c319[~~(0.25 * (_0x473372 = 10000 / (_0x282a29 = 16)) + 0.5) % 10000];
                                _0xb14342.moveTo(_0x1b2b2f + _0x463db0 * _0x472af5.cos, _0x52fc0c - _0x463db0 * _0x472af5.sin);
                                for (_0x433539 = 0; _0x433539 < _0x282a29; _0x433539++) {
                                    _0x472af5 = _0x41c319[~~(_0x473372 * (_0x433539 + 0.5) + 0.5) % 10000];
                                    _0xb14342.lineTo(_0x1b2b2f + (_0x2fe564 = _0x433539 % 2 == 0 ? _0x463db0 * (1.2 + 0.15 * _0x2919e4) : _0x463db0 * (1.35 - 0.15 * _0x2919e4)) * _0x472af5.cos, _0x52fc0c - _0x2fe564 * _0x472af5.sin);
                                    _0x472af5 = _0x41c319[~~(_0x473372 * (_0x433539 + 0.75) + 0.5) % 10000];
                                    _0xb14342.lineTo(_0x1b2b2f + _0x463db0 * _0x472af5.cos, _0x52fc0c - _0x463db0 * _0x472af5.sin);
                                    if (_0x433539 < _0x282a29 - 1) {
                                        _0x472af5 = _0x41c319[~~(_0x473372 * (_0x433539 + 1.25) + 0.5) % 10000];
                                        _0xb14342.lineTo(_0x1b2b2f + _0x463db0 * _0x472af5.cos, _0x52fc0c - _0x463db0 * _0x472af5.sin);
                                    }
                                }
                                _0xb14342.closePath();
                            } else if (11 == this.i) {
                                _0xb14342.rect(_0x1b2b2f - this.strokeSize, _0x52fc0c - this.strokeSize, 2 * this.strokeSize, 2 * this.strokeSize);
                            } else if (16 == this.i) {
                                _0x2919e4 = this.strokeSize;
                                _0x473372 = this.strokeSize / 8;
                                if (1 == this.orientation) {
                                    _0x2919e4 = _0x473372;
                                    _0x473372 = this.strokeSize;
                                }
                                _0xb14342.rect(_0x1b2b2f - _0x2919e4, _0x52fc0c - _0x473372, 2 * _0x2919e4, 2 * _0x473372);
                            } else {
                                if (this.strokeSize < 0) {
                                    console.log("ERROR #1: STR_SIZE < 0");
                                    this.strokeSize = 0;
                                }
                                _0xb14342.arc(_0x1b2b2f, _0x52fc0c, this.strokeSize, 0, 2 * Math.PI, false);
                            }
                        }
                    } else {
                        this.Ve();
                        _0x282a29 = this.Ne.length;
                        var _0x2919e4 = this.Ne[0];
                        var _0x473372 = _0x1b2b2f - this.x;
                        var _0x472af5 = _0x52fc0c - this.y;
                        _0xb14342.moveTo(_0x2919e4.x + _0x473372, _0x2919e4.y + _0x472af5);
                        for (_0x433539 = 1; _0x433539 < _0x282a29; ++_0x433539) {
                            _0x2919e4 = this.Ne[_0x433539];
                            _0xb14342.lineTo(_0x2919e4.x + _0x473372, _0x2919e4.y + _0x472af5);
                        }
                        _0xb14342.closePath();
                    }
                    _0x282a29 = ((this.Be ? 0.03 : 0.05) < _0x3e50d9 || 0 == this.id) && (60 < this.size || this.Be || !this.Ue && 25 < this.size && 0.15 < _0x3e50d9 || _0x2dceca && (0.4 < _0x3e50d9 || 20 < this.size));
                    if (!_0x222c9e) {
                        _0x433539 = this.ga * (this.Oe ? 0.04 : this.Re ? 0.2 : _0x2dceca ? !_0x282a29 && this.Ue ? 1 : this.Be && false ? 0.7 : 0.4 : this.Ue ? 1 : this.Be && true || 14 == this.i ? 0.7 : 0.4 < _0x3e50d9 || 60 < this.size ? 0.95 : 1);
                        _0xb14342.globalAlpha = this.fe ? _0x433539 * (1 - _0x58ffc6) : _0x433539;
                        _0xb14342.fillStyle = this.Re ? "#AAAAAA" : _0x246ae5 ? "#FFFFFF" : this.color;
                        _0xb14342.fill();
                    }
                    if ((_0x282a29 && (!_0x11baa8 || this.Be && !isMobile) || _0x222c9e) && !this.Oe || this.Oe && (this.Ie || _0x4400ec)) {
                        _0x433539 = this.ga;
                        _0xb14342.globalAlpha = this.fe ? _0x433539 * (1 - _0x58ffc6) : _0x433539;
                        _0xb14342.lineWidth = this.Oe && (this.Ie || _0x4400ec) ? 30 : this.Ue ? 4 : _0x2dceca ? this.Be || 25 < this.size ? 6 : 4 : this.Be && this.size < 80 ? 8 : 10;
                        _0xb14342.lineJoin = this.Be && (_0x53ec10 || 2 != this.Be || this.size < 70) ? "miter" : "round";
                        _0xb14342.strokeStyle = this.Oe && (this.Ie || _0x4400ec) ? _0x33523f ? "#333333" : "#DDDDDD" : this.Re || _0x246ae5 ? "#AAAAAA" : _0x2dceca ? this.color : this.$e;
                        _0xb14342.stroke();
                    }
                    if (1 != this.i) {
                        if (this._ && (_0xfd65d9 || 0 != this.i) && !_0x222c9e && !this.Re) {
                            if ((_0x282a29 = _0x683945 ? this.strokeSize * _0x55efcd[this.shape] : this.Ge && !isMobile ? this.strokeSize * (1.275 + 0.075 * Math.abs(_0x581015 % 500 / 250 - 1)) : 11 == this.i ? 1.28 * this.strokeSize : this.strokeSize) < this.size && !isMobile) {
                                _0x282a29 = this.size;
                            }
                            if (this.ye && _0x32b0e5) {
                                var _0x433539 = this.ye;
                                var _0x5d47a4 = 2 * _0x282a29 * _0x3e50d9 * _0x28ad4b <= 128 ? _0x433539.Ye : _0x433539.qe;
                                if (!_0x5d47a4) {
                                    this.reloadImage();
                                    _0x5d47a4 = 2 * _0x282a29 * _0x3e50d9 * _0x28ad4b <= 128 ? _0x433539.Ye : _0x433539.qe;
                                }
                                if (_0x5d47a4) {
                                    if (0 == _0x433539.We) {
                                        _0x433539.We = _0x581015;
                                    }
                                    _0x433539.Qe = _0x581015 - _0x433539.We;
                                    if (_0x433539.Qe >= _0x5d47a4.playTime) {
                                        _0x433539.We += ~~(_0x433539.Qe / _0x5d47a4.playTime) * _0x5d47a4.playTime;
                                        _0x433539.Qe %= _0x5d47a4.playTime;
                                        _0x433539.je = 0;
                                    }
                                    if (_0x433539.je >= _0x5d47a4.frames.length) {
                                        _0x433539.je = 0;
                                    }
                                    for (var _0x2aee00 = _0x5d47a4.frames[_0x433539.je]; _0x433539.Qe >= _0x2aee00.end && _0x433539.je < _0x5d47a4.frames.length - 1;) {
                                        _0x2aee00 = _0x5d47a4.frames[++_0x433539.je];
                                    }
                                    _0x3d1099 = _0x2aee00.canvas;
                                }
                            }
                            if (!(_0x3d1099 = _0x3d1099 || (2 * _0x282a29 * _0x3e50d9 * _0x28ad4b <= 128 ? this.xe : this.Se))) {
                                this.reloadImage();
                                _0x3d1099 = 2 * _0x282a29 * _0x3e50d9 * _0x28ad4b <= 128 ? this.xe : this.Se;
                            }
                            if (_0x3d1099 && (_0x433539 = this.ga * (this.Oe ? 0.01 : _0x2dceca ? 0 != this.N ? 0.5 : 0.3 : 0 != this.N ? 0.85 : 1), _0xb14342.globalAlpha = this.fe ? _0x433539 * (1 - _0x58ffc6) : _0x433539, _0x473372 = _0x282a29, _0x472af5 = false, 16 == this.i ? (_0x473372 = _0x282a29 / 8, 1 == this.orientation && (_0xb14342.save(), _0x472af5 = true, _0xb14342.translate(_0x1b2b2f, _0x52fc0c), _0xb14342.rotate(Math.PI / 2), _0xb14342.translate(-_0x1b2b2f, -_0x52fc0c))) : isMobile && !_0x683945 || 11 == this.i || (_0xb14342.save(), _0x472af5 = true, _0xb14342.clip()), _0xb14342.drawImage(_0x3d1099, _0x1b2b2f - _0x282a29, _0x52fc0c - _0x473372, 2 * _0x282a29, 2 * _0x473372), _0x472af5)) {
                                _0xb14342.restore();
                            }
                        }
                        if (this.B && _0x4b4ed5 && !this.Re) {
                            _0x282a29 = this.strokeSize;
                            for (var _0x46c353 = 0; _0x46c353 < this.B.length; _0x46c353++) {
                                var _0x3d1099;
                                var _0x557f3e = this.B[_0x46c353];
                                var _0x2e5cdf = _0x557f3e.P;
                                var _0x4a5fdf = 5 == _0x2e5cdf ? 5 * _0x282a29 : 3 * _0x282a29;
                                if (!(_0x3d1099 = _0x4a5fdf * _0x3e50d9 * _0x28ad4b <= 128 ? _0x557f3e.xe : _0x557f3e.Se)) {
                                    this.Je(_0x557f3e);
                                    _0x3d1099 = _0x4a5fdf * _0x3e50d9 * _0x28ad4b <= 128 ? _0x557f3e.xe : _0x557f3e.Se;
                                }
                                if (_0x3d1099) {
                                    _0x433539 = this.ga * (this.Oe ? 0.01 : _0x2dceca ? 0.7 : 0.95);
                                    _0xb14342.globalAlpha = this.fe ? _0x433539 * (1 - _0x58ffc6) : _0x433539;
                                    _0xb14342.drawImage(_0x3d1099, _0x1b2b2f - (3 == _0x2e5cdf || 5 == _0x2e5cdf ? 2.5 : 4 == _0x2e5cdf ? 0.5 : 1.5) * _0x282a29, _0x52fc0c - (1 == _0x2e5cdf || 5 == _0x2e5cdf ? 2.5 : 2 == _0x2e5cdf ? 0.5 : 1.5) * _0x282a29, _0x4a5fdf, _0x4a5fdf);
                                }
                            }
                        }
                        if (this.Ae) {
                            for (_0x433539 = 0; _0x433539 < this.Ae.length; _0x433539++) {
                                switch ((_0x282a29 = this.Ae[_0x433539]).ee) {
                                    case 2:
                                        this.tt(_0x282a29, _0xb14342, _0x1b2b2f, _0x52fc0c);
                                        break;
                                    case 9:
                                        this.nt(_0x282a29, _0xb14342, _0x1b2b2f, _0x52fc0c);
                                        break;
                                    case 13:
                                        this.ot(_0x282a29, _0xb14342, _0x1b2b2f, _0x52fc0c);
                                        break;
                                    case 16:
                                        this.it(_0x282a29, _0xb14342, _0x1b2b2f, _0x52fc0c);
                                        break;
                                    case 4:
                                    case 5:
                                    case 10:
                                    case 12:
                                    case 14:
                                    case 20:
                                    case 21:
                                    case 22:
                                    case 23:
                                    case 24:
                                    case 25:
                                    case 26:
                                    case 30:
                                    case 31:
                                    case 32:
                                    case 40:
                                    case 41:
                                    case 42:
                                    case 43:
                                    case 44:
                                    case 45:
                                    case 46:
                                    case 47:
                                    case 48:
                                    case 49:
                                    case 50:
                                    case 51:
                                    case 52:
                                    case 53:
                                    case 54:
                                    case 55:
                                    case 56:
                                    case 17:
                                        this.st(_0x282a29, _0xb14342, _0x1b2b2f, _0x52fc0c);
                                }
                                if (0 == _0x282a29.ee) {
                                    this.Ae.splice(_0x433539, 1);
                                    _0x433539--;
                                }
                            }
                            for (_0x433539 = 0; _0x433539 < this.Ae.length; _0x433539++) {
                                switch ((_0x282a29 = this.Ae[_0x433539]).ee) {
                                    case 1:
                                        this.rt(_0x282a29, _0xb14342, _0x1b2b2f, _0x52fc0c);
                                        break;
                                    case 18:
                                        this.ct(_0x282a29, _0xb14342, _0x1b2b2f, _0x52fc0c);
                                }
                                if (0 == _0x282a29.ee) {
                                    this.Ae.splice(_0x433539, 1);
                                    _0x433539--;
                                }
                            }
                            if (0 == this.Ae.length) {
                                this.Ae = null;
                            }
                        }
                        if (0 == this.i && (this.Pe ? 10 : 20) < this.size * _0x3e50d9 && (_0x1c7c12 || !this.De || 125 < this.size) && (_0x25b838 < this.size || this.Pe && 30 <= this.size) && !this.fe && _0x2332bb && (_0x2c5c7d = _0x101b79 && (this.name || 0 < this.Le), _0x222c9e = _0x3fa749 && (this.Ie || 0 == _0xc52211.length || this.ze) && 60 < this.size * _0x3e50d9, _0x2c5c7d || _0x222c9e)) {
                            if (this.textDrawn || _0x164fe5 == this) {
                                if (!_0x33867d) {
                                    _0xb14342.save();
                                    _0x33867d = true;
                                }
                                this.lt(_0xb14342, _0x1b2b2f, _0x52fc0c, _0x2c5c7d, _0x222c9e);
                                this.textDrawn = true;
                            } else {
                                _0x417591 = this;
                            }
                        }
                    }
                    if (_0x33867d) {
                        if ((_0x282a29 = this.transform) && (_0x282a29.t && (_0x282a29.t = false, _0x282a29.tx = _0x282a29.ty = 0), _0x282a29.s && (_0x282a29.s = false, _0x282a29.sx = _0x282a29.sy = 1), _0x282a29.r)) {
                            _0x282a29.r = false;
                            _0x282a29.rz = 0;
                        }
                        _0xb14342.restore();
                    }
                }
            }
        }
        we(_0xb44e93) {
            if (1 != this.i) {
                _0xb44e93 = {
                    "ee": _0xb44e93.ee,
                    "te": _0xb44e93.te,
                    "received": _0xb44e93.received
                };
                if (this.Ae) {
                    for (var _0xb28863 = 0; _0xb28863 < this.Ae.length; _0xb28863++) {
                        if (this.Ae[_0xb28863].received > _0xb44e93.received) {
                            this.Ae.splice(_0xb28863, 0, _0xb44e93);
                            return void(this.Ae.length > 3 && this.Ae.splice(this.Ae.length - 2, 1));
                        }
                    }
                    if (this.Ae.length < 3) {
                        this.Ae.push(_0xb44e93);
                    } else {
                        this.Ae[this.Ae.length - 1] = _0xb44e93;
                    }
                } else {
                    this.Ae = [_0xb44e93];
                }
            }
        }
        dt(_0x36ff46) {
            if (this.Ae) {
                if (0 == _0x36ff46) {
                    this.Ae = null;
                } else {
                    for (var _0xa36314 = 0; _0xa36314 < this.Ae.length; _0xa36314++) {
                        if (this.Ae[_0xa36314].ee == _0x36ff46) {
                            this.Ae.splice(_0xa36314, 1);
                            _0xa36314--;
                        }
                    }
                    if (0 == this.Ae.length) {
                        this.Ae = null;
                    }
                }
            }
        }
        getTransform() {
            var _0x32cf23 = {
                t: false,
                s: false,
                r: false,
                tx: 0,
                ty: 0,
                sx: 1,
                sy: 1,
                rz: 0
            };
            if (!this.transform) {
                this.transform = _0x32cf23;
            }
            return this.transform;
        }
        He(_0x9bfc0d) {
            var _0x59765d = (_0x581015 - _0x9bfc0d.te) / _0x18ce16[_0x9bfc0d.ee].duration;
            if (1 <= (_0x59765d = _0x59765d < 0 ? 0 : 1 < _0x59765d ? 1 : _0x59765d)) {
                _0x9bfc0d.ee = 0;
            } else {
                _0x9bfc0d = 1 - _0x59765d;
                _0x59765d = this.getTransform();
                if (_0x414662) {
                    _0x59765d.t = _0x59765d.r = true;
                }
                _0x59765d.rz += ((1 + 4 * (1 - _0x9bfc0d * _0x9bfc0d)) % 2 - 1) * Math.PI;
            }
        }
        Xe(_0x407aa8) {
            var _0x343225 = (_0x581015 - _0x407aa8.te) / _0x18ce16[_0x407aa8.ee].duration;
            if (1 <= (_0x343225 = _0x343225 < 0 ? 0 : 1 < _0x343225 ? 1 : _0x343225)) {
                _0x407aa8.ee = 0;
            } else {
                _0x343225 = (_0x407aa8 = 1 - _0x343225) * _0x407aa8;
                _0x407aa8 = this.getTransform();
                if (_0x414662) {
                    _0x407aa8.t = _0x407aa8.s = _0x407aa8.r = true;
                }
                _0x407aa8.sx *= _0x41c319[~~(10000 * ((1 + 8 * (1 - _0x343225)) % 2 + 1) / 2 + 0.5) % 10000].cos;
                _0x407aa8.rz += (0.75 < _0x343225 ? _0x343225 - 1 : 0.25 < _0x343225 ? 0.5 - _0x343225 : _0x343225) * Math.PI;
            }
        }
        Ze(_0x4275c7) {
            var _0x4ef9c8;
            if (this.fe) {
                _0x4275c7.ee = 0;
            } else {
                if (1 <= (_0x4ef9c8 = (_0x581015 - _0x4275c7.te) / 2000)) {
                    _0x4275c7.te += 2000;
                    _0x4ef9c8 %= 1;
                }
                _0x4ef9c8 = _0x4ef9c8 < 0 ? 0 : 1 < _0x4ef9c8 ? 1 : _0x4ef9c8;
                _0x4275c7 = this.getTransform();
                if (_0x414662) {
                    _0x4275c7.t = _0x4275c7.s = true;
                }
                _0x4275c7.sx *= _0x41c319[~~(10000 * (0.5 < _0x4ef9c8 ? 1 - _0x4ef9c8 : _0x4ef9c8) / 2 + 0.5)].cos;
            }
        }
        o(_0x2e6f39) {
            var _0x1fec16 = (_0x581015 - _0x2e6f39.te) / _0x18ce16[_0x2e6f39.ee].duration;
            if (1 <= (_0x1fec16 = _0x1fec16 < 0 ? 0 : 1 < _0x1fec16 ? 1 : _0x1fec16)) {
                _0x2e6f39.ee = 0;
            } else {
                _0x2e6f39 = 1 - _0x1fec16;
                _0x1fec16 = this.getTransform();
                if (_0x414662) {
                    _0x1fec16.t = _0x1fec16.r = true;
                }
                _0x1fec16.tx += ~~((100 + 0.1 * this.size) * _0x2e6f39 * (Math.random() - 0.5));
                _0x1fec16.ty += ~~((100 + 0.1 * this.size) * _0x2e6f39 * (Math.random() - 0.5));
                _0x1fec16.rz += 0.5 * _0x2e6f39 * (Math.random() - 0.5) * Math.PI;
            }
        }
        Ke(_0x380f23) {
            var _0x3ee1c2 = (_0x581015 - _0x380f23.te) / (_0x18ce16[_0x380f23.ee].duration - this.id % 20 * 20);
            if (1 <= (_0x3ee1c2 = _0x3ee1c2 < 0 ? 0 : 1 < _0x3ee1c2 ? 1 : _0x3ee1c2)) {
                if (1 <= (_0x3ee1c2 = (_0x581015 - _0x380f23.te) / _0x18ce16[_0x380f23.ee].duration)) {
                    _0x380f23.ee = 0;
                }
            } else {
                var _0x312e2f;
                var _0x36fa30;
                var _0x380f23 = 0.8 * Math.max(1000 / (1000 + this.size), 0.2);
                var _0x45e5f2 = _0x380f23 * this.size / (2 * (1000 + this.size * (1 + _0x380f23)));
                var _0x5ef063 = 3 * _0x3ee1c2;
                var _0x4e7b3f = 1;
                var _0x3ee1c2 = this.getTransform();
                var _0x4a7fc6 = (_0x5ef063 + 0.70710678 * _0x45e5f2) % 1;
                for (var _0x228e98 = 0; _0x228e98 < ~~_0x5ef063; _0x228e98++) {
                    _0x4e7b3f *= 0.5;
                }
                if (_0x414662) {
                    _0x3ee1c2.t = _0x3ee1c2.s = true;
                }
                if (_0x45e5f2 < _0x4a7fc6 && _0x4a7fc6 < 1 - _0x45e5f2) {
                    _0x312e2f = (_0x4a7fc6 = 1 - 2 * (0.5 < (_0x4a7fc6 = (_0x4a7fc6 - _0x45e5f2) / (1 - 2 * _0x45e5f2)) ? 1 - _0x4a7fc6 : _0x4a7fc6)) * _0x4a7fc6;
                    _0x3ee1c2.ty += (_0x36fa30 = -0.5 * _0x380f23 * _0x4e7b3f) * this.size + (1000 + this.size) * _0x4e7b3f * (_0x312e2f - 1);
                    _0x3ee1c2.sx *= 1 + _0x36fa30 * _0x312e2f;
                    _0x3ee1c2.sy *= 1 - _0x36fa30 * _0x312e2f;
                } else {
                    _0x36fa30 = (0.5 - (_0x4a7fc6 = _0x4a7fc6 <= _0x45e5f2 ? _0x4a7fc6 / _0x45e5f2 : 1 - (_0x4a7fc6 - 1 + _0x45e5f2) / _0x45e5f2) * _0x4a7fc6) * _0x380f23 * _0x4e7b3f;
                    _0x3ee1c2.ty += _0x36fa30 * this.size;
                    _0x3ee1c2.sx *= 1 + _0x36fa30;
                    _0x3ee1c2.sy *= 1 - _0x36fa30;
                }
            }
        }
        tt(_0x1406e4, _0x5dc4ed, _0x5228a3, _0x418319) {
            var _0x52d848 = (_0x581015 - _0x1406e4.te) / _0x18ce16[_0x1406e4.ee].duration;
            if (1 <= (_0x52d848 = _0x52d848 < 0 ? 0 : 1 < _0x52d848 ? 1 : _0x52d848) || this.fe) {
                _0x1406e4.ee = 0;
            } else {
                _0x5dc4ed.globalAlpha = (_0x33523f ? 0.25 : 0.18) * (_0x52d848 < 0.05 ? _0x52d848 / 0.05 : _0x52d848 < 0.5 ? 1 : 1 - (_0x52d848 - 0.5) / 0.5);
                _0x5dc4ed.lineWidth = Math.min(30 + 30 * Math.max(1 - 2 * _0x3e50d9, 0), this.size);
                _0x5dc4ed.lineJoin = this.Be ? "miter" : "round";
                _0x5dc4ed.strokeStyle = _0x33523f ? "#FFFFFF" : "#000000";
                _0x5dc4ed.stroke();
            }
        }
        it(_0xd35b2b, _0xe5b6db, _0x4f5fbc, _0xad7024) {
            var _0x2522fb = (_0x581015 - _0xd35b2b.te) / _0x18ce16[_0xd35b2b.ee].duration;
            if (1 <= (_0x2522fb = _0x2522fb < 0 ? 0 : 1 < _0x2522fb ? 1 : _0x2522fb) || this.fe || this.Ie) {
                _0xd35b2b.ee = 0;
            } else {
                _0xe5b6db.globalAlpha = _0x2522fb < 0.5 ? 1 : 1 - (_0x2522fb - 0.5) / 0.5;
                _0xe5b6db.lineWidth = 30;
                _0xe5b6db.lineJoin = this.Be ? "miter" : "round";
                _0xe5b6db.strokeStyle = _0x33523f ? "#333333" : "#DDDDDD";
                _0xe5b6db.stroke();
            }
        }
        ot(_0x133747, _0x580a26, _0x4101ed, _0x3d84b9) {
            _0x133747.ee = 0;
            _0x580a26.globalAlpha = 0.5;
            _0x580a26.fillStyle = "#FFFFFF";
            _0x580a26.fill();
        }
        rt(_0x19b597, _0x2acef5, _0x5c3fed, _0x5720a0) {
            var _0x14aef6;
            var _0x210819;
            var _0x2f2e1c;
            var _0x3854da;
            var _0x48bf90;
            var _0x254cec = (_0x581015 - _0x19b597.te) / _0x18ce16[_0x19b597.ee].duration;
            if (1 <= (_0x254cec = _0x254cec < 0 ? 0 : 1 < _0x254cec ? 1 : _0x254cec) || this.fe) {
                _0x19b597.ee = 0;
            } else if (_0x414662 && ((_0x14aef6 = (_0x19b597 = this.transform) && (_0x19b597.s || _0x19b597.r)) && (_0x2acef5.restore(), _0x2acef5.save(), _0x19b597.t) && _0x2acef5.translate(_0x19b597.tx, _0x19b597.ty), (_0x210819 = _0x3a6894) && _0x210819.complete && 0 != _0x210819.width && (_0x48bf90 = this.size / 20, _0x3854da = _0x210819.width * _0x48bf90 * (_0x2f2e1c = _0x254cec < 0.2 ? _0x254cec / 0.2 : 1 - (_0x254cec - 0.2) / 0.8), _0x48bf90 = _0x210819.height * _0x48bf90 * _0x2f2e1c, _0x2acef5.globalAlpha = 0.7 * _0x2f2e1c * _0x2f2e1c, _0x2acef5.drawImage(_0x210819, _0x5c3fed - _0x3854da / 2, _0x5720a0 - _0x48bf90 / 2, _0x3854da, _0x48bf90)), _0x254cec < 0.9 && (_0x2f2e1c = _0x254cec / 0.9, _0x2acef5.beginPath(), this.size < 0 && (console.log("ERROR #2: THIS_SIZE < 0"), this.size = 0), _0x2acef5.arc(_0x5c3fed, _0x5720a0, 1.3 * this.size + 500 * _0x2f2e1c, 0, 2 * Math.PI, false), _0x2acef5.globalAlpha = 0.2 * (1 - _0x2f2e1c) * (1 - _0x2f2e1c), _0x2acef5.lineWidth = ~~(20 + 0.02 * this.size), _0x2acef5.strokeStyle = "#90A0FF", _0x2acef5.stroke()), _0x14aef6) && (_0x19b597.s && _0x2acef5.scale(_0x19b597.sx, _0x19b597.sy), _0x19b597.r)) {
                _0x2acef5.rotate(_0x19b597.rz);
            }
        }
        ct(_0x263a12, _0x27b177, _0x16f54b, _0x3e0001) {
            var _0x228f94;
            var _0x279b6b = (_0x581015 - _0x263a12.te) / _0x18ce16[_0x263a12.ee].duration;
            var _0x57f290 = {
                x: this.hx,
                y: this.hy
            };
            if (1 <= (_0x279b6b = _0x279b6b < 0 ? 0 : 1 < _0x279b6b ? 1 : _0x279b6b)) {
                _0x263a12.ee = 0;
            } else if (_0x414662 && (_0x263a12.pos || (_0x263a12.pos = _0x57f290), _0x16f54b = _0x263a12.pos.x, _0x3e0001 = _0x263a12.pos.y, (_0x228f94 = (_0x263a12 = this.transform) && (_0x263a12.t || _0x263a12.s || _0x263a12.r)) && (_0x27b177.restore(), _0x27b177.save()), _0x27b177.beginPath(), this.size < 0 && (console.log("ERROR #3: THIS_SIZE < 0"), this.size = 0), _0x27b177.arc(_0x16f54b, _0x3e0001, this.size + 1340 * _0x279b6b, 0, 2 * Math.PI, false), _0x27b177.globalAlpha = 0.5 * (1 - _0x279b6b) * (1 - _0x279b6b), _0x27b177.fillStyle = _0x33523f ? "#FFFFFF" : "#777777", _0x27b177.fill(), _0x228f94) && (_0x263a12.t && _0x27b177.translate(_0x263a12.tx, _0x263a12.ty), _0x263a12.s && _0x27b177.scale(_0x263a12.sx, _0x263a12.sy), _0x263a12.r)) {
                _0x27b177.rotate(_0x263a12.rz);
            }
        }
        st(_0xdf8471, _0x41acbd, _0x13b9e6, _0x3d2a0d) {
            var _0x421db6 = _0x18ce16[_0xdf8471.ee].u;
            var _0x5d0f77 = (_0x581015 - _0xdf8471.te) / _0x18ce16[_0xdf8471.ee].duration;
            if (1 <= (_0x5d0f77 < 0 ? 0 : 1 < _0x5d0f77 ? 1 : _0x5d0f77) || this.fe || !_0x421db6 || _0x421db6.m < 1 || _0x421db6.h < 1) {
                _0xdf8471.ee = 0;
            } else {
                if (_0x421db6.canvas && _0x421db6.canvas.complete) {
                    _0x5d0f77 = ~~(60 * (_0x581015 - _0xdf8471.te) / 1000 - 1);
                    let _0x24d439 = ~~((_0x5d0f77 = _0x5d0f77 < 0 ? 0 : _0x5d0f77) / _0x421db6.v);
                    let _0x355a00;
                    let _0x1b66bf;
                    let _0x38b488;
                    let _0x27e6d4;
                    let _0x15e709;
                    let _0x349a68;
                    let _0x3f97aa;
                    if (_0x421db6.k <= 0 || 1 < _0x421db6.k && _0x24d439 < _0x421db6.m * _0x421db6.k) {
                        _0x24d439 %= _0x421db6.m;
                    }
                    if (_0x24d439 > _0x421db6.m - 1) {
                        _0xdf8471.ee = 0;
                    } else if (_0x414662 || _0x18ce16[_0xdf8471.ee].ut) {
                        _0x355a00 = _0x421db6.canvas.width / _0x421db6.h;
                        _0x1b66bf = _0x421db6.canvas.height / Math.ceil(_0x421db6.m / _0x421db6.h);
                        _0x27e6d4 = _0x355a00 * (_0x38b488 = 2 * _0x421db6.scale * this.strokeSize / Math.max(_0x355a00, _0x1b66bf));
                        _0x15e709 = _0x1b66bf * _0x38b488;
                        _0x3f97aa = !(_0x349a68 = _0x421db6.fade) || _0x5d0f77 < _0x349a68.ht ? 0 : _0x5d0f77 >= _0x349a68.ft ? _0x349a68.gt : _0x349a68.bt + (_0x349a68.gt - _0x349a68.bt) * (_0x5d0f77 - _0x349a68.ht) / (_0x349a68.ft - _0x349a68.ht);
                        _0x41acbd.globalAlpha = (_0x2dceca ? _0x421db6.globalAlphaBub : _0x421db6.globalAlpha) * (1 - _0x3f97aa);
                        _0x41acbd.drawImage(_0x421db6.canvas, _0x24d439 % _0x421db6.h * _0x355a00, ~~(_0x24d439 / _0x421db6.h) * _0x1b66bf, _0x355a00, _0x1b66bf, _0x13b9e6 - _0x27e6d4 / 2 + _0x421db6.xOffset * _0x38b488, _0x3d2a0d - _0x15e709 / 2 + _0x421db6.yOffset * _0x38b488, _0x27e6d4, _0x15e709);
                    }
                }
            }
        }
        nt(_0x267d4a, _0xe60ca6, _0x9bb609, _0x5377cf) {
            var _0x26f399;
            var _0x57d5bc;
            var _0x3f06ab = (_0x581015 - _0x267d4a.te) / _0x18ce16[_0x267d4a.ee].duration;
            if (1 <= (_0x3f06ab = _0x3f06ab < 0 ? 0 : 1 < _0x3f06ab ? 1 : _0x3f06ab)) {
                _0x267d4a.ee = 0;
            } else if (_0x414662 && (_0x267d4a = _0x317128) && _0x267d4a.complete && 0 != _0x267d4a.width) {
                _0x26f399 = 1 - _0x3f06ab;
                _0x3f06ab = this.strokeSize * _0x3f06ab * 0.015;
                _0x57d5bc = _0x267d4a.width * _0x3f06ab;
                _0x3f06ab = _0x267d4a.height * _0x3f06ab;
                _0xe60ca6.globalAlpha = Math.clamp(100 / (this.strokeSize * _0x3e50d9), 0.5, 0.9) * _0x26f399 * _0x26f399 * (this.fe ? 0.5 : 1);
                _0xe60ca6.drawImage(_0x267d4a, _0x9bb609 + (Math.random() - 0.5) * this.strokeSize * 0.05 - _0x57d5bc / 2, _0x5377cf + (Math.random() - 0.5) * this.strokeSize * 0.05 - _0x3f06ab / 2, _0x57d5bc, _0x3f06ab);
            }
        }
        et(_0x42aaca, _0x559267, _0x3d73f2, _0x56a4f1) {
            var _0x330383 = (_0x581015 - _0x42aaca.te) / _0x18ce16[_0x42aaca.ee].duration;
            if (1 <= (_0x330383 < 0 ? 0 : 1 < _0x330383 ? 1 : _0x330383) || this.fe) {
                _0x42aaca.ee = 0;
            } else {
                if (!_0x42aaca.wt) {
                    _0x42aaca.wt = [];
                }
                var _0x24d1be;
                var _0x2c21f4;
                var _0x330383 = this.transform;
                var _0x20e1c6 = 0 == _0x42aaca.wt.length;
                var _0x585fc2 = this.strokeSize;
                var _0xe40db4 = _0x3d73f2 - this.x;
                var _0x4caae8 = _0x56a4f1 - this.y;
                _0x3d73f2 = this.x;
                _0x56a4f1 = this.y;
                if (_0x330383 && _0x330383.t) {
                    _0xe40db4 += _0x330383.tx;
                    _0x4caae8 += _0x330383.ty;
                }
                if (_0x20e1c6 = _0x20e1c6 || 2500 < (_0x5d5f7c = _0x3d73f2 - (_0x24d1be = _0x42aaca.wt[_0x42aaca.wt.length - 1]).x) * _0x5d5f7c + (_0x545632 = _0x56a4f1 - _0x24d1be.y) * _0x545632) {
                    _0x42aaca.wt.push({
                        "x": _0x3d73f2,
                        "y": _0x56a4f1,
                        "time": _0x581015,
                        "rd": 0
                    });
                } else if (1 < _0x42aaca.wt.length && (_0x24d1be = _0x42aaca.wt[0], _0x330383 = _0x42aaca.wt[1], _0x20e1c6 = _0x24d1be.rd + Math.min(_0x330383.time - _0x24d1be.time, 1000), _0x581015 - _0x42aaca.wt[_0x42aaca.wt.length - 1].time > _0x20e1c6)) {
                    _0x330383.rd = _0x20e1c6;
                    _0x42aaca.wt.splice(0, 1);
                }
                if (_0x42aaca.wt.length > ~~(5.5 - 2 * _0x10d812)) {
                    _0x42aaca.wt.splice(0, 1);
                }
                if (1 < _0x42aaca.wt.length && _0x414662) {
                    if (_0x585fc2 * _0x3e50d9 <= 16) {
                        if ((_0x2c21f4 = _0x10a224) && _0x2c21f4.complete && 0 != _0x2c21f4.width) {
                            for (var _0xd5008b = 0; _0xd5008b < _0x42aaca.wt.length; _0xd5008b++) {
                                _0x24d1be = _0x42aaca.wt[_0xd5008b];
                                _0x559267.globalAlpha = 0.02 * (_0xd5008b + 1);
                                _0x559267.drawImage(_0x2c21f4, _0x24d1be.x + _0xe40db4 - _0x585fc2, _0x24d1be.y + _0x4caae8 - _0x585fc2, 2 * _0x585fc2, 2 * _0x585fc2);
                            }
                        }
                    } else {
                        if ((_0x2c21f4 = _0x410c80) && _0x2c21f4.complete && 0 != _0x2c21f4.width) {
                            var _0x5d5f7c = _0x3d73f2 - (_0x24d1be = _0x42aaca.wt[0]).x;
                            var _0x545632 = _0x56a4f1 - _0x24d1be.y;
                            var _0x330383 = Math.sqrt(_0x5d5f7c * _0x5d5f7c + _0x545632 * _0x545632);
                            var _0x25c606 = 0 != _0x330383 ? _0x5d5f7c / _0x330383 : 0;
                            var _0x191d10 = 0 != _0x330383 ? _0x545632 / _0x330383 : 0;
                            for (var _0xd5008b = 0; _0xd5008b < _0x42aaca.wt.length; _0xd5008b++) {
                                _0x24d1be = _0x42aaca.wt[_0xd5008b];
                                _0x559267.globalAlpha = 0.1 * (_0xd5008b + 1);
                                _0x559267.save();
                                _0x559267.transform(_0x25c606, _0x191d10, -_0x191d10, _0x25c606, _0x24d1be.x + _0xe40db4, _0x24d1be.y + _0x4caae8);
                                _0x559267.drawImage(_0x2c21f4, -_0x585fc2 - 50, -_0x585fc2, _0x585fc2 + 50, 2 * _0x585fc2);
                                _0x559267.restore();
                            }
                        }
                    }
                }
            }
        }
        lt(_0x2d721a, _0x4631dd, _0x3ddd98, _0x265307, _0x5b915d) {
            var _0x5cbb4d;
            var _0xe4a380;
            var _0x29e8fb;
            var _0x1be03d;
            var _0x1eaef0 = _0xbdc65b ? 50 + ~~(0.3 * this.size) : Math.max(~~(0.3 * this.size), 24);
            var _0x6261ce = 1;
            _0x2d721a.globalAlpha = this.ga * (this.Oe ? 0.01 : 1);
            if (_0x265307) {
                _0x265307 = 0 < this.Le;
                if (_0x265307 || this.clanPart) {
                    if (_0x265307) {
                        var _0x450489 = " ";
                        for (var _0x55bb65 = 0; _0x55bb65 < this.Le; _0x55bb65++) {
                            _0x450489 += "★ ";
                        }
                        _0x5cbb4d = ~~(_0x1eaef0 / 1.5 + 0.5);
                        _0x1be03d = 6 < this.Le ? this.clanCache = _0x2182a7(this.clanCache, _0x450489, "#5cff00", "#000000", _0x5cbb4d) : this.clanCache = _0x2182a7(this.clanCache, _0x450489, "#FFD700", "#AA6C39", _0x5cbb4d);
                    } else {
                        _0x1be03d = this.clanCache = _0x2182a7(this.clanCache, this.clanPart, "#FFFFFF", "#000000", _0x5cbb4d = ~~(_0x1eaef0 / 2 + 0.5));
                    }
                    _0x29e8fb = _0x1be03d.canvas;
                    if ((_0xe4a380 = _0x5cbb4d / (_0x1be03d.size * _0x1be03d.appliedScale)) != _0x6261ce) {
                        _0x2d721a.scale(_0xe4a380 / _0x6261ce, _0xe4a380 / _0x6261ce);
                    }
                    _0x2d721a.drawImage(_0x29e8fb, _0x4631dd / _0xe4a380 - _0x29e8fb.width / 2, _0x3ddd98 / _0xe4a380 - _0x29e8fb.height / 2 - (_0x29e8fb.height / 0.75 + 2 / _0xe4a380));
                    _0x6261ce = _0xe4a380;
                }
                if (this.namePart) {
                    _0x29e8fb = (_0x1be03d = this.Te = _0x2182a7(this.Te, this.namePart, _0xdc7889[this.U], _0x4421da[this.U], _0x5cbb4d = _0x1eaef0)).canvas;
                    if ((_0xe4a380 = _0x5cbb4d / (_0x1be03d.size * _0x1be03d.appliedScale)) != _0x6261ce) {
                        _0x2d721a.scale(_0xe4a380 / _0x6261ce, _0xe4a380 / _0x6261ce);
                    }
                    _0x2d721a.drawImage(_0x29e8fb, _0x4631dd / _0xe4a380 - _0x29e8fb.width / 2, _0x3ddd98 / _0xe4a380 - _0x29e8fb.height / 2);
                    _0x6261ce = _0xe4a380;
                    _0x3ddd98 += _0x29e8fb.height * _0xe4a380 / 1.5 + 4;
                }
            }
            if (_0x5b915d) {
                _0x5cbb4d = ~~(_0x1eaef0 / 2 + 0.5);
                _0x29e8fb = (_0x1be03d = this.massCache = ((_0x5f0ab0, _0xc5a1bb, _0x4714e5) => {
                    var _0x4ac589;
                    if (_0x5f0ab0) {
                        if (!(_0x5f0ab0.value == _0xc5a1bb && _0x4714e5 <= 1.2 * _0x5f0ab0.size && _0x4714e5 >= 0.8 * _0x5f0ab0.size && _0x5f0ab0.scale == _0x34bd4c && _0x5f0ab0.stroke == _0x471c1e)) {
                            _0x5f0ab0.value = _0xc5a1bb;
                            _0x5f0ab0.size = _0x4714e5;
                            _0x5f0ab0.scale = _0x34bd4c;
                            _0x5f0ab0.stroke = _0x471c1e;
                            _0x1503a9(_0x5f0ab0);
                        }
                    } else {
                        _0x4ac589 = (_0x5f0ab0 = document.createElement("canvas")).getContext("2d");
                        _0x1503a9(_0x5f0ab0 = {
                            "canvas": _0x5f0ab0,
                            "ctx": _0x4ac589,
                            "value": _0xc5a1bb,
                            "color": "#FFFFFF",
                            "strokeColor": "#000000",
                            "size": _0x4714e5,
                            "scale": _0x34bd4c,
                            "stroke": _0x471c1e,
                            "appliedScale": _0x34bd4c
                        });
                    }
                    return _0x5f0ab0;
                })(this.massCache, (~~(this.size * this.size * 0.01)).toString(), _0x5cbb4d)).canvas;
                if ((_0xe4a380 = _0x5cbb4d / (_0x1be03d.size * _0x1be03d.appliedScale)) != _0x6261ce) {
                    _0x2d721a.scale(_0xe4a380 / _0x6261ce, _0xe4a380 / _0x6261ce);
                }
                _0x2d721a.drawImage(_0x29e8fb, _0x4631dd / _0xe4a380 - _0x29e8fb.width / 2, _0x3ddd98 / _0xe4a380 - _0x29e8fb.height / 2);
            }
        }
        ve(_0x449d3e) {
            var _0xffa50a = this.nSize * _0x449d3e * _0x358119;
            var _0xa5fc71 = 0.6 < _0xffa50a ? this.nSize : ~~(0.6 / (_0x449d3e * _0x358119));
            var _0x393330 = _0x161144 && 2 == this.shape && 1 < _0xffa50a;
            var _0x419d21 = false;
            var _0x57c74d = this.hx;
            var _0x556074 = this.hy;
            if (this.Ae && !isMobile) {
                for (var _0x52074e = 0; _0x52074e < this.Ae.length; _0x52074e++) {
                    switch ((_0x407dc4 = this.Ae[_0x52074e]).ee) {
                        case 3:
                            this.He(_0x407dc4);
                            break;
                        case 6:
                            this.Xe(_0x407dc4);
                            break;
                        case 7:
                            this.Ze(_0x407dc4);
                            break;
                        case 8:
                            this.o(_0x407dc4);
                            break;
                        case 11:
                            this.Ke(_0x407dc4);
                    }
                    if (0 == _0x407dc4.ee) {
                        this.Ae.splice(_0x52074e, 1);
                        _0x52074e--;
                    }
                }
                if (0 == this.Ae.length) {
                    this.Ae = null;
                }
                if ((_0x407dc4 = this.transform) && (_0x407dc4.t || _0x407dc4.s || _0x407dc4.r) && (_0x5be4cd.save(), _0x419d21 = true, _0x407dc4.t && (_0x407dc4.tx += _0x57c74d, _0x407dc4.ty += _0x556074, _0x5be4cd.translate(_0x407dc4.tx, _0x407dc4.ty), _0x57c74d = _0x556074 = 0), _0x407dc4.s && _0x5be4cd.scale(_0x407dc4.sx, _0x407dc4.sy), _0x407dc4.r)) {
                    _0x5be4cd.rotate(_0x407dc4.rz);
                }
            }
            _0x5be4cd.beginPath();
            if (_0xb4d644 && 3 <= this.shape && 2 < _0xffa50a || _0x393330) {
                var _0x3e88a0 = this.shape;
                var _0xc2f789 = _0xa5fc71 * _0x55efcd[_0x3e88a0];
                var _0x42004a = 10000 * (this.rotation / (2 * Math.PI) + 1) + 0.5;
                var _0x407dc4 = 10000 / _0x3e88a0;
                var _0x1bb53b = _0x41c319[~~_0x42004a % 10000];
                _0x5be4cd.moveTo(_0x57c74d + _0xc2f789 * _0x1bb53b.cos, _0x556074 - _0xc2f789 * _0x1bb53b.sin);
                for (_0x52074e = 1; _0x52074e < _0x3e88a0; _0x52074e++) {
                    _0x1bb53b = _0x41c319[~~(_0x407dc4 * _0x52074e + _0x42004a) % 10000];
                    _0x5be4cd.lineTo(_0x57c74d + _0xc2f789 * _0x1bb53b.cos, _0x556074 - _0xc2f789 * _0x1bb53b.sin);
                }
                _0x5be4cd.closePath();
            } else if (11 == this.i) {
                _0x5be4cd.rect(_0x57c74d - _0xa5fc71, _0x556074 - _0xa5fc71, 2 * _0xa5fc71, 2 * _0xa5fc71);
            } else if (16 == this.i) {
                _0x407dc4 = (_0x42004a = _0xa5fc71) / 8;
                if (1 == this.orientation) {
                    _0x42004a = _0x407dc4;
                    _0x407dc4 = _0xa5fc71;
                }
                _0x5be4cd.rect(_0x57c74d - _0x42004a, _0x556074 - _0x407dc4, 2 * _0x42004a, 2 * _0x407dc4);
            } else {
                if (_0xa5fc71 < 0) {
                    console.log("ERROR #4: b2 < 0");
                    _0xa5fc71 = 0;
                }
                _0x5be4cd.arc(_0x57c74d, _0x556074, _0xa5fc71, 0, 2 * Math.PI, false);
            }
            if (!_0x393330) {
                _0x5be4cd.fillStyle = this.Re ? "#AAAAAA" : _0x246ae5 ? "#FFFFFF" : this.color;
                _0x5be4cd.fill();
            }
            if (this.Be && 4 < _0xffa50a && !isMobile || _0x393330) {
                _0x5be4cd.strokeStyle = this.Re || _0x246ae5 ? "#666666" : this.$e;
                _0x5be4cd.stroke();
            }
            if (this.Ae && !isMobile) {
                for (_0x52074e = 0; _0x52074e < this.Ae.length; _0x52074e++) {
                    switch ((_0x407dc4 = this.Ae[_0x52074e]).ee) {
                        case 9:
                            this.nt(_0x407dc4, _0x5be4cd, _0x57c74d, _0x556074);
                            _0x39d073(_0x5be4cd, _0x449d3e);
                            break;
                        case 4:
                        case 5:
                        case 10:
                        case 12:
                        case 14:
                        case 20:
                        case 21:
                        case 22:
                        case 23:
                        case 17:
                            this.st(_0x407dc4, _0x5be4cd, _0x57c74d, _0x556074);
                            _0x39d073(_0x5be4cd, _0x449d3e);
                    }
                    if (0 == _0x407dc4.ee) {
                        this.Ae.splice(_0x52074e, 1);
                        _0x52074e--;
                    }
                }
                for (_0x52074e = 0; _0x52074e < this.Ae.length; _0x52074e++) {
                    switch ((_0x407dc4 = this.Ae[_0x52074e]).ee) {
                        case 1:
                            this.rt(_0x407dc4, _0x5be4cd, _0x57c74d, _0x556074);
                            _0x39d073(_0x5be4cd, _0x449d3e);
                            break;
                        case 18:
                            this.ct(_0x407dc4, _0x5be4cd, _0x57c74d, _0x556074);
                            _0x39d073(_0x5be4cd, _0x449d3e);
                    }
                    if (0 == _0x407dc4.ee) {
                        this.Ae.splice(_0x52074e, 1);
                        _0x52074e--;
                    }
                }
                if (0 == this.Ae.length) {
                    this.Ae = null;
                }
            }
            if (_0x419d21) {
                if ((_0x407dc4 = this.transform) && (_0x407dc4.t && (_0x407dc4.t = false, _0x407dc4.tx = _0x407dc4.ty = 0), _0x407dc4.s && (_0x407dc4.s = false, _0x407dc4.sx = _0x407dc4.sy = 1), _0x407dc4.r)) {
                    _0x407dc4.r = false;
                    _0x407dc4.rz = 0;
                }
                _0x5be4cd.restore();
            }
        }
}
var _0x34a1ac = {};

function _0x2182a7(_0x592c9b, _0x20c7ad, _0x2ea14e, _0xf0f1a1, _0x30d885) {
    if (_0x592c9b && _0x592c9b.value == _0x20c7ad && _0x592c9b.color == _0x2ea14e && _0x592c9b.strokeColor == _0xf0f1a1 && _0x30d885 <= 1.2 * _0x592c9b.size && _0x30d885 >= 0.8 * _0x592c9b.size && _0x592c9b.scale == _0x34bd4c && _0x592c9b.stroke == _0x471c1e) {
        _0x592c9b.timestamp = _0x581015;
        return _0x592c9b;
    }
    var _0x592c9b = _0x20c7ad + ":" + _0x2ea14e.toLowerCase() + ":" + _0xf0f1a1.toLowerCase();
    var _0x411cfe = _0x34a1ac[_0x592c9b];
    if (_0x411cfe) {
        for (var _0x3a630a in _0x411cfe)
            if (_0x30d885 <= 1.2 * _0x3a630a && 0.8 * _0x3a630a <= _0x30d885) {
                if (!((_0x53afa8 = _0x411cfe[_0x3a630a]).scale == _0x34bd4c && _0x53afa8.stroke == _0x471c1e)) {
                    _0x53afa8.scale = _0x34bd4c;
                    _0x53afa8.stroke = _0x471c1e;
                    _0x1503a9(_0x53afa8);
                }
                _0x53afa8.timestamp = _0x581015;
                return _0x53afa8;
            }
    } else {
        _0x411cfe = _0x34a1ac[_0x592c9b] = {};
    }
    var _0x53afa8;
    var _0x592c9b = document.createElement("canvas");
    var _0x5bcece = _0x592c9b.getContext("2d");
    _0x1503a9(_0x53afa8 = _0x411cfe[_0x30d885] = {
        "canvas": _0x592c9b,
        "ctx": _0x5bcece,
        "value": _0x20c7ad,
        "color": _0x2ea14e,
        "strokeColor": _0xf0f1a1,
        "size": _0x30d885,
        "scale": _0x34bd4c,
        "stroke": _0x471c1e,
        "appliedScale": _0x34bd4c,
        "timestamp": _0x581015
    });
    return _0x53afa8;
}

function _0x1503a9(_0x482f7d) {
    var _0xa37d0d;
    var _0x1c3c90 = _0x482f7d.canvas;
    var _0x16919d = _0x482f7d.ctx;
    var _0x44a8c1 = _0x482f7d.value;
    var _0x19d8de = _0x482f7d.color;
    var _0x24e042 = _0x482f7d.strokeColor;
    var _0x288eba = _0x482f7d.size;
    var _0x1d152d = _0x482f7d.scale;
    var _0x365212 = _0x482f7d.stroke;
    _0x16919d.font = _0x288eba + "px Ubuntu, serif";
    var _0x366d68 = _0x365212 ? 4 + ~~(0.05 * _0x288eba) : 3;
    var _0x13f068 = (_0x16919d.measureText(_0x44a8c1).width + 2 * _0x366d68) * _0x1d152d;
    var _0x302814 = (_0x288eba + ~~(0.4 * _0x288eba)) * _0x1d152d;
    if (3840 < _0x13f068 || 3840 < _0x302814) {
        _0x1d152d *= _0xa37d0d = 3840 / Math.max(_0x13f068, _0x302814);
        _0x13f068 *= _0xa37d0d;
        _0x302814 *= _0xa37d0d;
    }
    _0x482f7d.appliedScale = _0x1d152d;
    _0x1c3c90.width = _0x13f068 < 1 ? 1 : _0x13f068;
    _0x1c3c90.height = _0x302814 < 1 ? 1 : _0x302814;
    _0x16919d.font = _0x288eba + "px Ubuntu";
    _0x16919d.scale(_0x1d152d, _0x1d152d);
    _0x16919d.globalAlpha = 1;
    if (_0x365212) {
        _0x16919d.lineWidth = _0x366d68;
        _0x16919d.strokeStyle = _0x24e042;
        _0x16919d.strokeText(_0x44a8c1, _0x366d68, _0x288eba);
    }
    _0x16919d.fillStyle = _0x19d8de;
    _0x16919d.fillText(_0x44a8c1, _0x366d68, _0x288eba);
}
class PacketWriter {
    constructor(_0x5b7e64) {
            this.buffer = new DataView(new ArrayBuffer(_0x5b7e64));
            this.position = 0;
            this.littleEndian = true;
        }
        setString(_0x91c0ac) {
            for (let _0x59dcbf = 0; _0x59dcbf < _0x91c0ac.length; _0x59dcbf++) {
                this.setUint16(_0x91c0ac.charCodeAt(_0x59dcbf));
            }
            return this;
        }
        setInt8(_0x3ad7d1) {
            this.buffer.setInt8(this.position++, _0x3ad7d1);
            return this;
        }
        setUint8(_0x2749a2) {
            this.buffer.setUint8(this.position++, _0x2749a2);
            return this;
        }
        setInt16(_0xc7fafe) {
            this.buffer.setInt16((this.position += 2) - 2, _0xc7fafe, this.littleEndian);
            return this;
        }
        setUint16(_0x4dd22f) {
            this.buffer.setUint16((this.position += 2) - 2, _0x4dd22f, this.littleEndian);
            return this;
        }
        setInt32(_0x202ad9) {
            this.buffer.setInt32((this.position += 4) - 4, _0x202ad9, this.littleEndian);
            return this;
        }
        setUint32(_0x2d53fe) {
            if (_0x2d53fe % 1 != 0 && 88 == _0x2d53fe.toString().slice(-2)) {
                _0x2d53fe += 4;
            }
            this.buffer.setUint32((this.position += 4) - 4, _0x2d53fe, this.littleEndian);
            return this;
        }
        setFloat32(_0x2be2a9) {
            this.buffer.setFloat32((this.position += 4) - 4, _0x2be2a9, this.littleEndian);
            return this;
        }
        setFloat64(_0x4c8916) {
            this.buffer.setFloat64((this.position += 8) - 8, _0x4c8916, this.littleEndian);
            return this;
        }
        send(force) {
            if (_0x3b0762 || force)
                ws.send(this.buffer);
        }
}
class PacketReader {
    constructor(_0xc476a6, _0x51070f) {
            this.buffer = new DataView(_0xc476a6.data);
            this.position = _0x51070f || 0;
            this.littleEndian = true;
        }
        getColorTags() {
            var _0x2165ab = this.getUint8();
            var _0x64d173 = this.getUint8();
            var _0x71c1d9 = this.getUint8();
            return [_0x15f517(_0x2165ab, _0x64d173, _0x71c1d9), _0x15f517(_0x2165ab * _0x517df6, _0x64d173 * _0x517df6, _0x71c1d9 * _0x517df6)];
        }
        getWearables() {
            var _0x3c0da1 = this.getUint8();
            if (0 === _0x3c0da1) {
                return null;
            }
            var _0x4daba4 = [];
            for (let _0x3c1dd9 = 0; _0x3c1dd9 < _0x3c0da1; _0x3c1dd9++) {
                _0x4daba4.push({
                    "wearId": this.getUint16(),
                    "P": this.getUint8()
                });
            }
            return _0x4daba4;
        }
        getString() {
            let _0x37b7e9 = '';
            for (;;) {
                var _0x411103 = this.getUint16();
                if (!_0x411103) {
                    break;
                }
                _0x37b7e9 += String.fromCharCode(_0x411103);
            }
            return _0x37b7e9;
        }
        getInt8() {
            return this.buffer.getInt8(this.position++);
        }
        getUint8() {
            return this.buffer.getUint8(this.position++);
        }
        getInt16() {
            return this.buffer.getInt16((this.position += 2) - 2, this.littleEndian);
        }
        getUint16() {
            return this.buffer.getUint16((this.position += 2) - 2, this.littleEndian);
        }
        getInt32() {
            return this.buffer.getInt32((this.position += 4) - 4, this.littleEndian);
        }
        getUint32() {
            return this.buffer.getUint32((this.position += 4) - 4, this.littleEndian);
        }
        getFloat32() {
            return this.buffer.getFloat32((this.position += 4) - 4, this.littleEndian);
        }
        getFloat64() {
            return this.buffer.getFloat64((this.position += 8) - 8, this.littleEndian);
        }
}

function _0x51e55a(_0x2ba470) {
    var _0x427639;
    var _0x4c2e6b = new PacketReader(_0x2ba470, 0);
    if (240 === _0x4c2e6b.buffer.getUint8(0)) {
        _0x4c2e6b.position += 5;
    }
    switch (_0x4c2e6b.getUint8()) {
        case 10:
            _0x581015 = Date.now();
            _0x27fdb0 = _0x581015;
            _0x2c6f91 = !(_0x29246b = false);
            var _0x50a1de = _0x4c2e6b.getUint16();
            var _0x409f62 = [];
            for (let _0x35b8f9 = 0; _0x35b8f9 < _0x50a1de; _0x35b8f9++) {
                var _0x483b2e = _0x4c2e6b.getUint8();
                var _0x45e923 = 2 & _0x483b2e ? _0x4c2e6b.getUint8() : 0;
                var _0x33f876 = 32 & _0x483b2e ? _0x4c2e6b.getUint8() : 0;
                var _0x5a0928 = _0x4c2e6b.getUint32();
                var _0x3d9855 = 1 & _0x483b2e ? _0x4c2e6b.getUint32() : _0x5a0928;
                var _0x2b26c8 = _0x4c2e6b.getString();
                var _0x3db74e = _0x4c2e6b.getUint16();
                var _0x3fb60f = _0x4c2e6b.getUint8();
                let _0x257e81 = _0x4c2e6b.getWearables();
                if (0 < _0x27324d.length && _0xc52211 && 0 < _0xc52211.length && _0xc52211[0].l === _0x5a0928) {
                    _0x257e81 = _0x27324d;
                }
                _0x409f62.push({
                    "l": _0x5a0928,
                    "oid": _0x3d9855,
                    "n": _0x2b26c8,
                    "s": _0x3db74e,
                    "w": _0x257e81,
                    "U": _0x45e923,
                    "De": !!(1 & _0x483b2e),
                    "Re": !!(4 & _0x483b2e),
                    "Oe": !!(8 & _0x483b2e),
                    "Ge": !!(16 & _0x483b2e),
                    "Le": _0x33f876,
                    "H": _0x3fb60f
                });
            }
            for (;;) {
                var _0x269ac7 = _0x4c2e6b.getUint32();
                if (0 === _0x269ac7) {
                    break;
                }
                var _0x29879a = _0x4c2e6b.getInt32();
                var _0x1da5bc = _0x4c2e6b.getInt32();
                var _0x2c474f = _0x4c2e6b.getUint16();
                var _0x447e2a = _0x4c2e6b.getUint8();
                var _0x13100f = !!(1 & _0x447e2a);
                let _0x1d95fc;
                let _0x534ff6;
                let _0x1bf5f0;
                let _0x24ed2e;
                let _0x5eed3f;
                let _0x3a2844;
                if (_0x13100f && (_0x1d95fc = !!(2 & _0x447e2a), _0x534ff6 = _0x4c2e6b.getUint8(), _0x1bf5f0 = 8 & _0x447e2a ? _0x4c2e6b.getUint8() : 0, [_0x24ed2e, _0x5eed3f] = _0x4c2e6b.getColorTags(), 0 === _0x534ff6)) {
                    _0x3a2844 = _0x409f62[_0x4c2e6b.getUint16()];
                }
                let _0x23060e = !_0x13100f || Object.prototype.hasOwnProperty.call(_0x534f3c, _0x269ac7) ? _0x534f3c[_0x269ac7] : null;
                if (_0x23060e) {
                    if (_0x23060e.ne) {
                        _0x23060e.ae();
                    }
                    _0x23060e.ne = true;
                    _0x23060e.ox = _0x23060e.x;
                    _0x23060e.oy = _0x23060e.y;
                    _0x23060e.ge = _0x23060e.size;
                } else {
                    _0x23060e = new Cell(_0x269ac7, _0x29879a, _0x1da5bc, _0x2c474f);
                    _0x534f3c[_0x269ac7] = _0x23060e;
                    if (_0x13100f) {
                        if (1 === _0x534ff6) {
                            (_0x2c474f <= _0x2fc5e8 ? (_0x23060e.Ue = true, _0x4fd5c0) : _0x34b545).push(_0x23060e);
                            if (_0x2792ec && (drawHalfFood = !drawHalfFood)) {
                                _0x23060e.shouldDraw = -1;
                            }
                        } else {
                            _0x34b545.push(_0x23060e);
                            if (_0x49dbad[_0x269ac7]) {
                                for (let _0x163706 = 0; _0x163706 < _0x49dbad[_0x269ac7].length; _0x163706++) {
                                    _0x23060e.we(_0x49dbad[_0x269ac7][_0x163706]);
                                }
                            }
                            if (0 === _0x534ff6) {
                                _0x23060e.l = _0x3a2844.l;
                                _0x23060e.oid = _0x3a2844.oid;
                                var _0x3ac3de = _0x3a2844.De ? _0xfe1c27 : _0x4cc54f;
                                let _0x2f9bf8 = _0x3ac3de[_0x3a2844.oid];
                                (_0x2f9bf8 = _0x2f9bf8 || (_0x3ac3de[_0x3a2844.oid] = [])).push(_0x23060e);
                                if (_0x4df025[_0x23060e.l]) {
                                    for (let _0x86c7e5 = 0; _0x86c7e5 < _0x4df025[_0x23060e.l].length; _0x86c7e5++) {
                                        _0x23060e.we(_0x4df025[_0x23060e.l][_0x86c7e5]);
                                    }
                                }
                                if (_0x3a2844.De && _0x59222b[_0x23060e.oid]) {
                                    for (let _0x21184b = 0; _0x21184b < _0x59222b[_0x23060e.oid].length; _0x21184b++) {
                                        _0x23060e.we(_0x59222b[_0x23060e.oid][_0x21184b]);
                                    }
                                }
                            } else if (13 === _0x534ff6) {
                                _0x23060e.we({
                                    "ee": 7,
                                    "te": _0x18ce16[7].time(-~~(2000 * Math.random())),
                                    "received": ++_0x57f5d0
                                });
                            } else if (4 === _0x534ff6) {
                                _0x23060e.strokeSize = 0.83 * _0x2c474f;
                            }
                            if (!(!_0xb4d644 && !_0x161144 || 0 !== _0x534ff6 && 3 !== _0x534ff6)) {
                                _0x23060e.shape = _0x161144 ? 2 : _0x3bca98[_0x269ac7 % 100];
                                _0x23060e.rotation = (2 * Math.random() - 1) * Math.PI;
                            }
                            if (_0x4c1257) {
                                _0x23060e.ga = 0;
                                _0x23060e.ne = true;
                            }
                        }
                    }
                    _0x23060e.L = _0x581015;
                }
                _0x23060e.hx = _0x29879a;
                _0x23060e.hy = _0x1da5bc;
                _0x23060e.nSize = _0x2c474f;
                _0x23060e.Fe = _0x581015;
                if (_0x13100f && (_0x23060e.color = _0x24ed2e, _0x23060e.$e = _0x23060e.Ue ? _0x24ed2e : _0x5eed3f, _0x23060e.Be = _0x1d95fc ? 2 === _0x534ff6 || 9 === _0x534ff6 || 22 === _0x534ff6 ? 2 : 1 : 0, 1 !== (_0x23060e.i = _0x534ff6))) {
                    _0x23060e.N = _0x1bf5f0;
                    if (0 === _0x534ff6 && (_0x23060e.Ie || -1 === _0x335282.indexOf(_0x269ac7) || -1 !== _0xc52211.indexOf(_0x23060e) || (_0xc52211.push(_0x23060e), _0x23060e.Ie = true, 1 === _0xc52211.length && (_0x59034c = (0.1 * _0x59034c + _0x23060e.x) / 1.1, _0x4ce984 = (0.1 * _0x4ce984 + _0x23060e.y) / 1.1, _0x248dac = true, sendSignal(13), _0x10236d())), (_0x3a2844.n || _0x23060e.name) && _0x23060e.parseName(_0x3a2844.n), _0x23060e.skinId = _0x3a2844.s, _0x23060e.U = _0x3a2844.U, _0x23060e.De = _0x3a2844.De, _0x23060e.Re = _0x3a2844.Re, _0x23060e.Oe = _0x3a2844.Oe, _0x23060e.Ge = _0x3a2844.Ge, _0x23060e.Le = _0x3a2844.Le, _0x23060e.B = _0x3a2844.w, _0x23060e.H = _0x3a2844.H, _0x23060e.B)) {
                        for (let _0x340c8f = 0; _0x340c8f < _0x23060e.B.length; _0x340c8f++) {
                            _0x23060e.Je(_0x23060e.B[_0x340c8f]);
                        }
                    }
                    _0x23060e.reloadImage();
                    _0x23060e.orientation = 16 & _0x447e2a ? 1 : 0;
                }
                if (0 === _0x23060e.i) {
                    _0x23060e.Pe = !!(4 & _0x447e2a);
                    _0x23060e.ze = !!(64 & _0x447e2a);
                }
            }
            break;
        case 11:
            var _0x50a1de = _0x4c2e6b.getUint16();
            var _0x37d117 = {};
            for (let _0x3c5438 = 0; _0x3c5438 < _0x50a1de; _0x3c5438++) {
                var _0x37f254 = _0x4c2e6b.getUint32();
                var _0x5c6537 = _0x534f3c[_0x37f254] || _0x37d117[_0x37f254];
                var _0x2242da = _0x534f3c[_0x4c2e6b.getUint32()];
                if (_0x2242da && (_0x5c6537 ? (_0x2242da.destroy(true), _0x2242da.ox = _0x2242da.x, _0x2242da.oy = _0x2242da.y, _0x2242da.ge = _0x2242da.size, _0x5c6537 !== _0x2242da && (_0x2242da.hx = _0x5c6537.x, _0x2242da.hy = _0x5c6537.y), _0x2242da.nSize = _0x2242da.size, _0x2242da.Fe = _0x581015, _0x5c6537.Oe && !_0x5c6537.Ie && 0 === _0x2242da.i && _0x2242da.l !== _0x5c6537.l && (_0x5c6537.dt(16), _0x5c6537.we({
                        "ee": 16,
                        "te": _0x18ce16[16].time(),
                        "received": ++_0x57f5d0
                    }))) : _0x2242da.destroy(false), 1 !== _0x2242da.i)) {
                    _0x37d117[_0x37f254] = _0x2242da;
                }
            }
            break;
        case 12:
            _0x50a1de = _0x4c2e6b.getUint32();
            for (let _0x5b952f = 0; _0x5b952f < _0x50a1de; _0x5b952f++) {
                var _0x51781b = _0x534f3c[_0x4c2e6b.getUint32()];
                if (null != _0x51781b) {
                    _0x51781b.destroy(false);
                }
            }
            if (_0x29246b && 0 === _0xc52211.length) {
                onPlayerDeath();
            }
            break;
        case 17:
            var _0xb790f3 = _0x4c2e6b.getFloat32();
            var _0x571f96 = _0x4c2e6b.getFloat32();
            _0x29c97b = _0x4c2e6b.getFloat32();
            _0x1e72ef(_0x435e7a = Date.now());
            _0x46ac7b = _0x53b8b0;
            _0x2c7938 = _0x464afc;
            _0x40e81b = _0xb790f3;
            _0x6c7bce = _0x571f96;
            _0xab2d2b = _0x435e7a;
            break;
        case 20:
            _0xc52211 = [];
            _0x335282 = [];
            _0x534f3c = {};
            _0x34b545 = [];
            _0x4fd5c0 = [];
            _0xa92e4c = [];
            _0x4cc54f = {};
            _0xfe1c27 = {};
            _0x581015 = Date.now();
            _0x27fdb0 = _0x581015;
            _0x2c6f91 = true;
            break;
        case 32:
            _0x335282.push(_0x4c2e6b.getUint32());
            isSpectating = false;
            if (1 === _0x335282.length) {
                _0x203625();
            }
            break;
        case 33:
            var _0x5c8d2e;
            var _0xb790f3 = 1 & (_0x49a011 = _0x4c2e6b.getUint8()) ? 1 : 2 & _0x49a011 ? 2 : 0;
            var _0x571f96 = !!(8 & _0x49a011);
            var _0x3205e2 = 0;
            var _0x46fd3a = 0;
            var _0x6cf8bb = [];
            if (16 & _0x49a011) {
                _0x3205e2 = _0x4c2e6b.getUint16();
            }
            if (0 != _0xb790f3) {
                _0x46fd3a = _0x4c2e6b.getUint32();
            } else {
                _0x5c8d2e = [];
                _0x435e7a = 1;
                if (4 & _0x49a011) {
                    _0x435e7a = _0x4c2e6b.getUint16();
                }
                for (var _0x186e66 = 0; _0x186e66 < _0x435e7a; _0x186e66++) {
                    _0x5c8d2e.push(_0x4c2e6b.getUint32());
                }
            }
            _0x435e7a = _0x4c2e6b.getUint8();
            for (_0x186e66 = 0; _0x186e66 < _0x435e7a; _0x186e66++) {
                _0x6cf8bb.push(_0x4c2e6b.getUint8());
            }
            var _0x2a3116 = _0xb790f3;
            var _0x399168 = _0x46fd3a;
            var _0x5daecd = _0x571f96;
            var _0x346550 = _0x3205e2;
            _0x57f5d0++;
            if (0 == _0x2a3116) {
                for (var _0x1d1cb6 = 0; _0x1d1cb6 < _0x5c8d2e.length; _0x1d1cb6++) {
                    var _0x426b1b = _0x5c8d2e[_0x1d1cb6];
                    var _0x5013c6 = _0x534f3c[_0x426b1b];
                    for (var _0x5211eb = 0; _0x5211eb < _0x6cf8bb.length; _0x5211eb++) {
                        if (0 == (_0x3d8b30 = _0x6cf8bb[_0x5211eb]) || _0x5daecd) {
                            if (_0x5013c6) {
                                _0x5013c6.dt(_0x3d8b30);
                            }
                            _0x468acc(_0x2a3116, _0x426b1b, _0x3d8b30);
                        } else {
                            _0x5bd0ee = _0x18ce16[_0x3d8b30];
                            _0x57f54c = {
                                "ee": _0x3d8b30,
                                "te": _0x5bd0ee.time(-_0x346550),
                                "received": _0x57f5d0
                            };
                            if (_0x5bd0ee.time() < _0x57f54c.te + _0x5bd0ee.duration) {
                                if (_0x5013c6) {
                                    _0x5013c6.we(_0x57f54c);
                                }
                                _0x14cfd2(_0x2a3116, _0x426b1b, _0x57f54c);
                            }
                        }
                    }
                }
            } else {
                for (_0x1d1cb6 = 0; _0x1d1cb6 < _0x34b545.length; _0x1d1cb6++) {
                    if (0 == (_0x5013c6 = _0x34b545[_0x1d1cb6]).i && (1 == _0x2a3116 && _0x5013c6.l == _0x399168 || 2 == _0x2a3116 && _0x5013c6.De && _0x5013c6.oid == _0x399168)) {
                        for (_0x5211eb = 0; _0x5211eb < _0x6cf8bb.length; _0x5211eb++) {
                            if (0 == (_0x3d8b30 = _0x6cf8bb[_0x5211eb]) || _0x5daecd) {
                                _0x5013c6.dt(_0x3d8b30);
                            } else {
                                _0x5bd0ee = _0x18ce16[_0x3d8b30];
                                _0x57f54c = {
                                    "ee": _0x3d8b30,
                                    "te": _0x5bd0ee.time(-_0x346550),
                                    "received": _0x57f5d0
                                };
                                if (_0x5bd0ee.time() < _0x57f54c.te + _0x5bd0ee.duration) {
                                    _0x5013c6.we(_0x57f54c);
                                }
                            }
                        }
                    }
                }
                var _0x3d8b30;
                var _0x5bd0ee;
                var _0x57f54c;
                for (var _0x5211eb = 0; _0x5211eb < _0x6cf8bb.length; _0x5211eb++) {
                    if (0 == (_0x3d8b30 = _0x6cf8bb[_0x5211eb]) || _0x5daecd) {
                        _0x468acc(_0x2a3116, _0x399168, _0x3d8b30);
                    } else {
                        _0x5bd0ee = _0x18ce16[_0x3d8b30];
                        _0x57f54c = {
                            "ee": _0x3d8b30,
                            "te": _0x5bd0ee.time(-_0x346550),
                            "received": _0x57f5d0
                        };
                        if (_0x5bd0ee.time() < _0x57f54c.te + _0x5bd0ee.duration) {
                            _0x14cfd2(_0x2a3116, _0x399168, _0x57f54c);
                        }
                    }
                }
            }
            _0x27fdb0 = Date.now();
            break;
        case 45:
            insertPMText(_0x4c2e6b.getString());
            break;
        case 48:
            _0x4a720f = true;
        case 49:
            if (49 == _0x4c2e6b.buffer.getUint8(_0x4c2e6b.position - 1)) {
                _0x4a720f = false;
            }
            _0x634c41 = null;
            var _0x435e7a = _0x4c2e6b.getUint16();
            _0x2a6acb = [];
            for (_0x186e66 = 0; _0x186e66 < _0x435e7a; ++_0x186e66) {
                var _0x35aab7;
                var _0x135b2d;
                var _0xc93166 = 0;
                var _0x253ecd = 0;
                if (1 & (_0x49a011 = _0x4c2e6b.getUint8())) {
                    _0x253ecd = _0x4c2e6b.getUint8();
                }
                if (2 & _0x49a011) {
                    _0xc93166 = _0x4c2e6b.getUint16();
                }
                var _0x59cc1c = _0x4c2e6b.getString();
                var _0xaf794f = null;
                if (8 & _0x49a011) {
                    [_0x35aab7, _0x135b2d] = _0x4c2e6b.getColorTags();
                    _0xaf794f = {
                        "oe": _0x35aab7,
                        "ie": _0x135b2d,
                        "skinId": _0x4c2e6b.getUint16(),
                        "B": _0x4c2e6b.getWearables()
                    };
                }
                if (!isMobile || _0x2a6acb.length < 5) {
                    _0x2a6acb.push({
                        "name": _0x59cc1c,
                        "se": _0x253ecd,
                        "pos": _0xc93166,
                        "empty": !!(4 & _0x49a011),
                        "cell": _0xaf794f
                    });
                }
            }
            _0x3c3250 = true;
            break;
        case 50:
            _0x634c41 = [];
            var _0x182a40 = _0x4c2e6b.getUint16();
            for (var _0x186e66 = 0; _0x186e66 < _0x182a40; ++_0x186e66) {
                _0x634c41.push(_0x4c2e6b.getFloat32());
            }
            _0x3c3250 = true;
            break;
        case 53:
            var _0x435e7a = _0x4c2e6b.getUint16();
            var _0xb790f3 = _0x4c2e6b.getUint8();
            spinWheelPlayAdvert = 1 == _0x435e7a && _0xb790f3;
            $("#remainingSpins").text(_0x435e7a);
            break;
        case 54:
            var _0x46fd3a = _0x4c2e6b.getUint8();
            myWheel.stopAnimation(false);
            myWheel.rotationAngle = 0;
            myWheel.draw();
            drawTriangle();
            calculatePrize(_0x46fd3a);
            break;
        case 56:
            _0x4c2e6b.getUint8();
            adPreRolledBy = 2;
            try {
                if (!window.adplayer && adplayer_copy) {
                    window.adplayer = adplayer_copy;
                }
                adplayer.startRewardedAd();
                _0x52a0c8(true);
            } catch (_0x44d49f) {
                adPreRolledBy = 0;
                console.log("Really? AdBlocker bruh?");
                console.log(_0x44d49f);
                swal("Please turn off your adblock extension");
            }
            break;
        case 64:
            _0x5c1aa9 = _0x40843.left = _0x40843.vt = _0x40843.kt = _0x4c2e6b.getUint32();
            _0x4ba286 = _0x40843.top = _0x40843.$t = _0x40843.yt = _0x4c2e6b.getUint32();
            _0x28f6af = _0x40843.right = _0x40843.xt = _0x40843.nRight = _0x4c2e6b.getUint32();
            _0x500945 = _0x40843.bottom = _0x40843.St = _0x40843.Mt = _0x4c2e6b.getUint32();
            _0x40843.draw = false;
            _0x53b8b0 = _0x46ac7b = _0x40e81b = (_0x5c1aa9 + _0x28f6af) / 2;
            _0x464afc = _0x2c7938 = _0x6c7bce = (_0x4ba286 + _0x500945) / 2;
            _0x29c97b = 1;
            if (!(mapCenterSet || (mapCenterSet = true, _0x59034c = _0x53b8b0, _0x4ce984 = _0x464afc, _0x1e208d))) {
                _0x3e50d9 = _0xd28f67 = 1;
            }
            _0x77f7dd = _0x4c2e6b.getInt16();
            var _0x435e7a = _0x4c2e6b.getUint32();
            var _0x571f96 = _0x4c2e6b.getUint32();
            var _0x49a011 = _0x4c2e6b.getUint8();
            _0x42a8fa = !!(1 & _0x49a011);
            _0x114b07 = !!(2 & _0x49a011);
            _0x3df17b = !!(4 & _0x49a011);
            _0x247d2d = 2 * _0x4c2e6b.getUint32();
            _0x2cd9d1 = 2 * _0x4c2e6b.getUint32();
            _0x25b838 = _0x4c2e6b.getUint16();
            _0x2fc5e8 = _0x4c2e6b.getUint16();
            _0x27fdb0 = Date.now();
            _0x2c6f91 = true;
            if (isMobile && !_0x36d371) {
                _0x4d3094();
            }
            if (17 == _0x77f7dd) {
                for (_0x186e66 = 15; _0x186e66 <= 19; _0x186e66++) {
                    if (!_0x247b5a[_0x186e66]) {
                        _0x1cb610(_0x186e66, 16);
                    }
                }
                for (_0x186e66 = 100; _0x186e66 <= 103; _0x186e66++) {
                    if (!_0x247b5a[_0x186e66]) {
                        _0x1cb610(_0x186e66, 0);
                    }
                }
                for (_0x186e66 = 110; _0x186e66 <= 112; _0x186e66++) {
                    if (!_0x247b5a[_0x186e66]) {
                        _0x1cb610(_0x186e66, 0);
                    }
                }
            }
            if (_0x1e208d) {
                _0xb03f97();
            }
            if (_0x435e7a === _0x571f96) {
                if (_0x950276 < 70) {
                    _0x950276 += 40;
                    _0x52383b = _0x435e7a;
                    _0x52383b += 1;
                    _0x9db55f(0);
                }
            } else {
                _0x13d7e0();
                _0xae7145();
            }
            break;
        case 65:
            _0x5c1aa9 = _0x40843.left = _0x40843.vt = _0x40843.kt = _0x4c2e6b.getFloat64();
            _0x4ba286 = _0x40843.top = _0x40843.$t = _0x40843.yt = _0x4c2e6b.getFloat64();
            _0x28f6af = _0x40843.right = _0x40843.xt = _0x40843.nRight = _0x4c2e6b.getFloat64();
            _0x500945 = _0x40843.bottom = _0x40843.St = _0x40843.Mt = _0x4c2e6b.getFloat64();
            _0x40843.draw = false;
            _0x27fdb0 = Date.now();
            _0x2c6f91 = true;
            break;
        case 66:
            var _0x3205e2 = _0x4c2e6b.getFloat64();
            var _0xb790f3 = _0x4c2e6b.getFloat64();
            var _0x46fd3a = _0x4c2e6b.getFloat64();
            var _0x571f96 = _0x4c2e6b.getFloat64();
            var _0x435e7a = Date.now();
            if (true || 3600 < _0x435e7a - 0) {
                _0x40843.left = _0x40843.vt = _0x40843.kt = _0x3205e2;
                _0x40843.top = _0x40843.$t = _0x40843.yt = _0xb790f3;
                _0x40843.right = _0x40843.xt = _0x40843.nRight = _0x46fd3a;
                _0x40843.bottom = _0x40843.St = _0x40843.Mt = _0x571f96;
                _0x40843.ga = 0;
                _0x40843.L = _0x435e7a;
            } else {
                _0x4f401c(_0x435e7a);
                _0x40843.vt = _0x40843.left;
                _0x40843.$t = _0x40843.top;
                _0x40843.xt = _0x40843.right;
                _0x40843.St = _0x40843.bottom;
                _0x40843.kt = _0x3205e2;
                _0x40843.yt = _0xb790f3;
                _0x40843.nRight = _0x46fd3a;
                _0x40843.Mt = _0x571f96;
            }
            _0x40843.Fe = _0x435e7a;
            _0x40843.draw = true;
            _0x2c6f91 = true;
            break;
        case 75:
            if (15 == _0x77f7dd) {
                _0x49a011 = _0x4c2e6b.getUint8();
                _0x3205e2 = _0x4c2e6b.getUint32();
                _0x3205e2 = Number(_0x3205e2);
                _0xb790f3 = Math.floor(_0x3205e2 / 3600);
                _0x46fd3a = Math.floor(_0x3205e2 % 3600 / 60);
                _0x3205e2 = Math.floor(_0x3205e2 % 3600 % 60);
                _0x381cad = {
                    "phase": _0x4c2e6b.getUint8(),
                    "Ct": (0 < _0xb790f3 ? _0xb790f3 + "h" + (_0x46fd3a < 10 ? "0" : '') : '') + _0x46fd3a + "m" + (_0x3205e2 < 10 ? "0" : '') + _0x3205e2 + "s",
                    "Tt": _0x4c2e6b.getUint32(),
                    "Et": !!(1 & _0x49a011),
                    "_t": _0x4c2e6b.getUint16(),
                    "players": _0x4c2e6b.getUint16(),
                    "maxPlayers": _0x4c2e6b.getUint16(),
                    "Ft": _0x4c2e6b.getUint16(),
                    "Nt": [_0x4c2e6b.getUint32(), _0x4c2e6b.getUint32(), _0x4c2e6b.getUint32()],
                    "Bt": !!(2 & _0x49a011),
                    "At": !!(4 & _0x49a011),
                    "Pt": _0x4c2e6b.getUint16(),
                    "It": _0x4c2e6b.getUint16(),
                    "Re": !!(8 & _0x49a011),
                    "Ut": _0x4c2e6b.getUint16(),
                    "Dt": _0x4c2e6b.getUint16(),
                    "zt": _0x4c2e6b.getUint16(),
                    "Rt": _0x4c2e6b.getUint32(),
                    "Ot": _0x4c2e6b.getUint32()
                };
                _0x2ed741();
                _0x2d6730();
            } else if (!(17 != _0x77f7dd && 18 != _0x77f7dd && 22 != _0x77f7dd)) {
                _0x49a011 = _0x4c2e6b.getUint8();
                _0x381cad = {
                    "Gt": _0x5d13b8(_0x4c2e6b.getUint32()),
                    "Lt": _0x4c2e6b.getUint16(),
                    "Yt": _0x4c2e6b.getUint16(),
                    "Bt": !!(1 & _0x49a011),
                    "It": _0x4c2e6b.getUint16(),
                    "qt": _0x4c2e6b.getUint16()
                };
                _0x2d6730();
            }
            break;
        case 76:
            _0x568853 = _0x4c2e6b.getFloat32();
            _0x593148();
            break;
        case 80:
            _0x24af02 = _0x4c2e6b.getUint16();
            _0x4a4cf7 = _0x4c2e6b.getUint32();
            var _0x571f96 = !!(1 & (_0x3626db = _0x4c2e6b.getUint8()));
            var _0x2e4161 = !!(2 & _0x3626db);
            var _0x31ab56 = !!(4 & _0x3626db);
            var _0x5bff26 = !!(8 & _0x3626db);
            var _0x311374 = !!(16 & _0x3626db);
            var _0x2f2313 = _0x4c2e6b.getUint16();
            var _0x469523 = _0x4c2e6b.getUint16();
            var _0x49adef = _0x4c2e6b.getUint16();
            var _0x1711bf = _0x4c2e6b.getUint16();
            var _0x2581c0 = _0x4c2e6b.getUint16();
            var _0x536dbe = _0x4c2e6b.getUint16();
            var _0x3b0d92 = _0x4c2e6b.getUint16();
            var _0x184d89 = _0x4c2e6b.getUint16();
            var _0x5180de = 0;
            if (128 & _0x3626db) {
                _0x5180de = _0x4c2e6b.getUint16();
            }
            var _0x5381b4 = _0x4c2e6b.getUint16();
            var _0x3a4da8 = _0x4c2e6b.getUint16();
            var _0x3988b2 = _0x4c2e6b.getUint16();
            var _0x1124f6 = _0x4c2e6b.getUint16();
            var _0x24a818 = _0x4c2e6b.getUint16();
            var _0x3884cc = _0x4c2e6b.getUint16();
            var _0x2712a9 = _0x4c2e6b.getUint32();
            var _0x191e79 = _0x4c2e6b.getUint32();
            var _0x26baf3 = _0x273de7 != _0x469523 || _0x852ff != _0x49adef || _0x38ea95 != _0x1711bf || _0x576526 != _0x2581c0 || _0x2873c2 != _0x536dbe || _0x4512d9 != _0x3b0d92 || _0x29f86a != _0x184d89 || _0x52d414 != _0x5180de || _0x11de32 != _0x5381b4 || _0x3c6854 != _0x3a4da8 || _0x5a5860 != _0x3988b2 || _0x5ea511 != _0x1124f6 || _0x31962a != _0x24a818 || _0x3884cc != _0xb1583e || _0x53176c != _0x571f96 || _0x52da56 != _0x5bff26 || _0x11c29c != _0x311374;
            _0x53176c = _0x571f96;
            _0x43802f = _0x2e4161;
            _0x506037 = _0x31ab56;
            _0x52da56 = _0x5bff26;
            _0x11c29c = _0x311374;
            _0x30bfdb = _0x2f2313;
            if (_0x26baf3) {
                _0x273de7 = _0x469523;
                _0x852ff = _0x49adef;
                _0x38ea95 = _0x1711bf;
                _0x576526 = _0x2581c0;
                _0x2873c2 = _0x536dbe;
                _0x4512d9 = _0x3b0d92;
                _0x29f86a = _0x184d89;
                _0x52d414 = _0x5180de;
                if (0 == (_0x11de32 = _0x5381b4) && 1 == _0x47ccce) {
                    _0x47ccce = 0;
                    $("#inv360Shot").removeClass("activatedInv");
                }
                _0x3c6854 = _0x3a4da8;
                _0x5a5860 = _0x3988b2;
                _0x5ea511 = _0x1124f6;
                _0xb1583e = _0x3884cc;
                if (0 == (_0x31962a = _0x24a818) && 3 == _0x47ccce) {
                    _0x47ccce = 0;
                    $("#invFrozenVirus").removeClass("activatedInv");
                }
                _0x4a5541();
            }
            if (0 < _0x24af02) {
                $("#startBots").hide();
                $("#stopBots").show();
                _0x37e4a8 = 1;
            } else if ($("#stopBots").is(":visible")) {
                strMon();
            }
            $(".sora-points-inv").text(_0x191e79);
            _0x483791(_0x2712a9);
            _0x39b68a();
            _0x203625();
            if (isMobile) {
                _0x3731ff();
            }
            break;
        case 82:
            var _0x3626db = _0x4c2e6b.getUint8();
            _0x4289a6 = _0x4c2e6b.getUint16();
            if (_0x181957 && _0x496adb != !!(1 & _0x3626db)) {
                _0x496adb = !!(1 & _0x3626db);
                document.body.style.cursor = _0x496adb ? "default" : "not-allowed";
            }
            break;
        case 85:
            _0x49a011 = _0x4c2e6b.getUint8();
            _0x435e7a = _0x4c2e6b.getUint16();
            _0x1ec523 = !!(1 & _0x49a011);
            _0x55ce89 = [];
            for (_0x186e66 = 0; _0x186e66 < _0x435e7a; ++_0x186e66) {
                _0x49a011 = _0x4c2e6b.getUint8();
                var _0x1740e2 = _0x4c2e6b.getString();
                _0x427639 = _0x1740e2;
                _0x55ce89.push({
                    "name": _0x1740e2,
                    "Wt": $("<div/>").text(_0x427639).html(),
                    "accepted": !!(1 & _0x49a011),
                    "ke": false,
                    "cx": 0,
                    "cy": 0,
                    "pp": null
                });
            }
            _0x1a0f0b();
            break;
        case 86:
            _0x435e7a = _0x4c2e6b.getUint16();
            for (_0x186e66 = 0; _0x186e66 < _0x435e7a && _0x186e66 < _0x55ce89.length; ++_0x186e66) {
                var _0x13c64b = _0x55ce89[_0x186e66];
                var _0x49a011 = _0x4c2e6b.getUint8();
                _0x13c64b.ke = !!(1 & _0x49a011);
                _0x13c64b.cx = _0x4c2e6b.getInt32();
                _0x13c64b.cy = _0x4c2e6b.getInt32();
            }
            break;
        case 87:
            _0x211844 = _0x4c2e6b.getUint8();
            break;
        case 88:
            var _0x571f96 = _0x4c2e6b.getString();
            var _0x2e4161 = !!(2 & (_0x49a011 = _0x4c2e6b.getUint16()));
            var _0x31ab56 = 4 & _0x49a011 ? 1 : 8 & _0x49a011 ? 2 : 0;
            var _0x5bff26 = !!(1 & _0x49a011);
            var _0x311374 = 16 & _0x49a011 ? 1 : 32 & _0x49a011 ? 2 : 64 & _0x49a011 ? 3 : 128 & _0x49a011 ? 4 : 256 & _0x49a011 ? 5 : 512 & _0x49a011 ? 6 : 0;
            var _0x2f2313 = !!(1024 & _0x49a011);
            var _0x26baf3 = _0x4c2e6b.getUint16();
            var _0x469523 = _0x4c2e6b.getUint16();
            var _0x49adef = _0x4c2e6b.getUint32();
            var _0x1711bf = _0x4c2e6b.getUint16();
            swal({
                "title": "<img src=\"" + (_0x1711bf ? "skins/" + _0x1711bf.toString() + "_lo.png?u=" + (_0x48a780[_0x1711bf] || 0).toString() : "img/userprofile.png") + "\" width=\"64\" height=\"64\" style=\"border-radius:50%;\"><br><br><span style=\"" + (_0x5bff26 ? "color:#f22;" : _0x469523 ? "color:" + _0xdc7889[_0x469523] : '') + "\">" + _0x571f96 + "</span><span style=\"display:block; margin:-10px 0px 15px; font-size:12px; line-height:normal;\">" + (_0x2f2313 ? "<br><span style=\"padding:2px 5px; font-size:10px; background:#999; color:#000; border-radius:10px;\">Hidden</span><br>" : '') + (_0x31ab56 ? "<br><span style=\"color:#f9f;\">&#9734;&#9734; Staff &#9734;&#9734;</span>" : '') + (_0x5bff26 ? "<br><span style=\"color:#f22;\">&#9734;&#9734; YouTuber &#9734;&#9734;</span>" : '') + (_0x2e4161 ? "<br><span style=\"color:#ffa;\">&#9734;&#9734; Gold Member &#9734;&#9734;</span>" : '') + (_0x311374 ? "<br><span style=\"color:#4f4;\">&#9734;&#9734; <img src=\"img/navpage/" + (1 == _0x311374 ? "super" : 6 == _0x311374 ? "valentines" : 5 == _0x311374 ? "black2" : 4 == _0x311374 ? "black" : 2 == _0x311374 ? "legendary" : "hot") + "_donator_ico.png\" width=\"16\" height=\"16\"> Donator &#9734;&#9734;</span>" : '') + "</span>",
                "text": "<span style=\"color:#ffa;\"><br>Level: " + _0x26baf3 + "<br>Rank: " + (50000 < _0x49adef ? ">50000" : _0x49adef) + "<br><br></span>",
                "type": '',
                "customClass": _0x2e4161 ? "swal-title-gold" : "swal-title-white",
                "html": true
            });
            break;
        case 89:
            var _0x5e72c3 = _0x4c2e6b.getString();
            var _0x280d4d = !!(1 & (_0x49a011 = _0x4c2e6b.getUint8()));
            var _0x1a0051 = _0x4c2e6b.getUint8();
            var _0xf64257 = _0x4c2e6b.getUint16();
            if ('' == _0x5e72c3) {
                _0x34efff();
            } else {
                _0x12bbfc(_0x5e72c3, false, _0x280d4d, _0x1a0051, _0xf64257);
            }
            break;
        case 91:
            var _0x5e72c3 = _0x4c2e6b.getString();
            var _0x280d4d = !!(1 & (_0x49a011 = _0x4c2e6b.getUint8()));
            var _0x2581c0 = _0x4c2e6b.getUint8();
            var _0xf64257 = _0x4c2e6b.getUint16();
            var _0x3933ea = {
                "zoom": 0.8
            };
            var _0x58fa0d = {
                zoom: 1
            };
            if ("sFX_nuke" == _0x5e72c3) {
                playSounds("sounds/infection_nuke.mp3?v=2", 0.07);
                $("#canvas").css("animation", "shake 0.5s");
                $("#canvas").css("animation-iteration-count", "infinite");
                setTimeout(function() {
                    $("#canvas").css("animation-iteration-count", "unset");
                }, 7000);
            } else if ("sFX_nuke2" == _0x5e72c3) {
                playSounds("sounds/infection_nuke.mp3?v=2", 0.04, 4);
                $("#canvas").css("animation", "shake 0.5s");
                $("#canvas").css("animation-iteration-count", "infinite");
                setTimeout(function() {
                    $("#canvas").css("animation-iteration-count", "unset");
                }, 3000);
            } else if ("sFX_iceFrozen" == _0x5e72c3) {
                playSounds("sounds/Ice_barrage_sound.mp3", 0.06, 1);
            } else if ("sFX_fx_powerup_block.mp3" == _0x5e72c3) {
                playSounds("sounds/fx_powerup_block.mp3", 0.2, 1.05);
            } else if ("sFX_fx_teleport" == _0x5e72c3) {
                playSounds("sounds/fx_teleport.mp3", 0.3, 1.05);
            } else if ("sFX_fx_mothercell_blast" == _0x5e72c3) {
                playSounds("sounds/fx_mothercell_blast.mp3", 0.15, 1.05);
            } else if ("sFX_heartbeat.mp3" == _0x5e72c3) {
                playSounds("sounds/sFX_heartbeat.mp3", 0.3, 0);
            } else if ("sFX_revive.mp3" == _0x5e72c3) {
                playSounds("sounds/sFX_revive.mp3", 0.3, 0);
            } else if (_0x5e72c3.startsWith("sFX")) {
                playSounds("sounds/" + _0x5e72c3.substring(3), 0.3, 0);
            } else if ("tutorial_infoholderInventory" == _0x5e72c3) {
                $("#infoHolderInventory").show();
                setTimeout(function() {
                    $("#infoHolderInventory").fadeOut("slow");
                }, 120000);
            } else if ("tutorial_infoholderBots_showIn5Sec" == _0x5e72c3) {
                setTimeout(function() {
                    $("#infoHolderBots").show();
                    setMinionUi(true);
                }, 120000);
                setTimeout(function() {
                    $("#infoHolderBots").fadeOut("slow");
                    $("#infoHolderFriends").fadeIn("slow");
                }, 185000);
                setTimeout(function() {
                    $("#infoHolderFriends").fadeOut("slow");
                }, 240000);
            } else if ("gg_lastman" == _0x5e72c3) {
                $("#gamemode_messages").fadeIn(1000);
                $("#gamemode_messages").html("<img src=\"./img/animations/last_man.png\" style=\"position: absolute; top: 60px; left: 50%; transform: translate(-50%, 0%) rotate(-14deg); width: 425px; z-index: 200; -webkit-filter: drop-shadow(1px 1px 2px rgba(0,0,0,1)); filter: drop-shadow(1px 1px 2px rgba(0,0,0,1));\">");
                $("#gamemode_messages").animate(_0x3933ea, 400).delay(100).animate(_0x58fa0d, 400);
                $("#gamemode_messages").o(100, 20, 10);
                $("#gamemode_messages").fadeOut(1000);
                $("#gamemode_messages").hide(5000);
            } else {
                $("#infection-text").html(_0x5e72c3);
                $("#zombieRemain1").attr("onclick", "zombieRemain(1," + _0x2581c0 + "); return false;");
                $("#zombieRemain2").attr("onclick", "zombieRemain(2," + _0x2581c0 + "); return false;");
                $("#infection_remain_zombie").stop(true, false).show(0).addClass("visible");
                (_0x536dbe = new Audio("sounds/popup.ogg")).volume = 0.5;
                _0x536dbe.play();
                timerInfectionModal = setTimeout(function() {
                    $("#infection_remain_zombie").stop(true, false).removeClass("visible").delay(400).hide(0);
                }, 1000 * _0xf64257);
            }
            break;
        case 92:
            _0x1e9905 = _0x4c2e6b.getString();
            challengeImageId = _0x4c2e6b.getUint8();
            _0x170049 = _0x4c2e6b.getUint8();
            _0x4c2e6b.getUint8();
            _0x4c2e6b.getUint8();
            _0x352c3f = _0x4c2e6b.getUint32();
            var _0x4c6837 = (_0x2cc170 = 23 - new Date().getUTCHours()) + "h " + (60 - new Date().getUTCMinutes()) + "m ";
            var _0x238c81 = Math.min(Math.round(_0x33d2a7 / _0x352c3f * 100), 100);
            $(".progress-bar-challenge").css("width", _0x238c81.toString() + "%");
            $(".challenge-bar").text(~~_0x238c81 + "%");
            $(".chall-reward-stars").text("+" + _0x170049);
            $(".chall-reward-spoints").text("+" + 10 * _0x170049);
            if (_0x2cc170 <= 3) {
                $("#challengeTimeLeft").css("color", "red");
            } else if (_0x2cc170 <= 6) {
                $("#challengeTimeLeft").css("color", "orange");
            }
            _0x4c5e78(_0x58c913 ? 1 : 2, _0x1e9905, challengeImageId, _0x170049, _0x352c3f, _0x4c6837, 0);
            break;
        case 93:
            _0x3b0d92 = _0x4c2e6b.getUint8();
            if (12 == _0x3b0d92) {
                animateExpReward();
                playSounds("sounds/challenge_complete.mp3", 1);
            } else if (9 == _0x3b0d92) {
                _0x184d89 = _0x4c2e6b.getUint16();
                _0x5180de = _0x4c2e6b.getUint16();
                _0x5381b4 = _0x4c2e6b.getUint16();
                _0x3a4da8 = _0x4c2e6b.getUint16();
                _0x3988b2 = _0x4c2e6b.getUint16();
                _0x1124f6 = _0x4c2e6b.getUint16();
                _0x3884cc = _0x4c2e6b.getUint16();
                _0x24a818 = _0x4c2e6b.getUint16();
                _0x38a139 = _0x4c2e6b.getUint16();
                _0x2712a9 = _0x4c2e6b.getUint16();
                $(".challenge-level").text(_0x184d89);
                $(".challenge-stars").text(_0x5180de);
                $(".challenge-stars-total").text(_0x5381b4);
                $(".mystery-keys").text(_0x3a4da8);
                $(".challenges-completed").text(_0x3988b2);
                $(".chall-reward-xp").text("+" + _0x38a139 + "%");
                $(".challenges-easy").text(_0x1124f6);
                $(".challenges-medium").text(_0x3884cc);
                $(".challenges-hard").text(_0x24a818);
                $(".sora-points-inv").text(_0x2712a9);
            } else if (10 == _0x3b0d92 && (_0x33d2a7 = _0x4c2e6b.getUint32(), _0x238c81 = Math.min(Math.round(_0x33d2a7 / _0x352c3f * 100), 100), $(".progress-bar-challenge").css("width", _0x238c81.toString() + "%"), $(".challenge-bar").text(~~_0x238c81 + "%"), _0x4c6837 = (_0x2cc170 = 24 - new Date().getUTCHours()) + "h " + (60 - new Date().getUTCMinutes()) + "m ", _0x58c913 || _0x4c5e78(1, _0x1e9905, challengeImageId, _0x170049, _0x352c3f, _0x4c6837, _0x33d2a7), _0x352c3f <= _0x33d2a7) && !_0x9533e2 && !_0x536680) {
                setTimeout(function() {
                    _0x9533e2 = true;
                    _0x39f84f(1);
                }, 5000);
            }
            break;
        case 94:
            var _0x49a011 = _0x4c2e6b.getUint8();
            var _0x5e72c3 = _0x4c2e6b.getString();
            var _0x3626db = _0x4c2e6b.getUint8();
            var _0x1a0051 = _0x4c2e6b.getUint8();
            var _0x1711bf = 1 & _0x49a011 ? _0x4c2e6b.getString() : _0x1a0051 <= 2 ? ["Oops...", "Success!", "Info"][_0x1a0051] : '';
            var _0x469523 = 2 & _0x49a011 ? _0x4c2e6b.getUint8() : 0;
            var _0x571f96 = 4 & _0x49a011 ? 1 : 0;
            var _0x29fe8d = null;
            var _0x43052c = null;
            var _0xb91967 = '';
            var _0x5b844d = 0;
            if (0 != _0x3626db) {
                switch (_0x3626db) {
                    case 1:
                        _0x5b3bf2();
                        break;
                    case 2:
                        _0x464ade();
                        break;
                    case 3:
                        az(0, 0);
                        break;
                    case 4:
                        _0x29fe8d = "img/victory_goldencup2.gif";
                        _0x43052c = "200x150";
                        _0x5b844d = 1000;
                        break;
                    case 5:
                        abilityFreeze = true;
                        $("#abilityFreeze").addClass("has-ability");
                        break;
                    case 6:
                        abilityCloak = true;
                        $("#abilityCloak").addClass("has-ability");
                        _0x4a5541();
                        break;
                    case 7:
                        abilityDoubleSpawnSize = true;
                        $("#abilityDoubleSpawnSize").addClass("has-ability");
                        break;
                    case 8:
                        abilityDoubleExp = true;
                        $("#abilityDoubleExp").addClass("has-ability");
                        break;
                    case 9:
                        _0x514d47 = true;
                        az(0, 2);
                        break;
                    case 10:
                        _0x29fe8d = "img/chest.png";
                        _0x5b844d = 1000;
                }
            }
            if (0 != _0x469523) {
                switch (_0x469523) {
                    case 1:
                        _0xb91967 = "swal-title-red";
                        break;
                    case 2:
                        _0xb91967 = "swal-title-green";
                        break;
                    case 3:
                        _0xb91967 = "swal-title-orange";
                        break;
                    case 4:
                        _0xb91967 = "swal-title-yellow";
                        break;
                    case 5:
                        _0xb91967 = "swal-title-yellow textleft";
                }
            }
            if ("Dodgeball Highscores" == _0x1711bf || "Level Rewards" == _0x1711bf) {
                _0xb91967 += " width-auto ";
            }
            var _0x507ea6 = {
                "title": _0x1711bf,
                "text": _0x5e72c3,
                "html": !!_0x571f96,
                "type": 0 == _0x1a0051 ? "error" : 1 == _0x1a0051 ? "success" : '',
                "Qt": _0x29fe8d,
                "jt": _0x43052c,
                "customClass": _0xb91967
            };
            if (_0x5b844d) {
                setTimeout(function() {
                    swal(_0x507ea6);
                }, _0x5b844d);
            } else {
                swal(_0x507ea6);
            }
            break;
        case 95:
            _0x2f2313 = _0x4c2e6b.getUint8();
            $("#registerSuccess").finish().hide();
            if (1 == _0x2f2313) {
                $("#login").fadeOut("slow", function() {});
                _0x109288 = true;
                _0x186b83 = 0;
                if ((_0xea465f = _0x5b6b18).toLowerCase() != _0x4506fc.toLowerCase()) {
                    _0x5b3bf2();
                }
                if (_0xea465f.toLowerCase() != _0x5cff0f.toLowerCase()) {
                    _0x464ade();
                }
                if ("undefined" != typeof Storage) {
                    localStorage.setItem("username", _0x5b6b18);
                    localStorage.setItem("password", _0x1fe290(md5(_0x5b6b18)));
                    if (null != window.localStorage.settings && undefined !== (_0x31ab56 = JSON.parse(window.localStorage.settings)).user && _0x31ab56.user.toLowerCase() == _0xea465f.toLowerCase() && (undefined !== _0x31ab56.skinId && 0 != _0x31ab56.skinId && _0x5df715(_0x31ab56.skinId), undefined !== _0x31ab56.wearablesSelected) && 0 != _0x31ab56.wearablesSelected.length) {
                        _0x5cfc91(_0x31ab56.wearablesSelected);
                    }
                    if (null === (_0x5bff26 = localStorage.getItem("drum"))) {
                        _0x5bff26 = (~~(2000000000 * Math.random())).toString();
                        localStorage.setItem("drum", _0x5bff26);
                    }
                    localStorage.setItem(md5(_0x5bff26), _0x170269);
                }
                if (_0xea465f.toLowerCase() != _0x3ebb17.toLowerCase()) {
                    $("#friendDialogMessage").text("Loading...");
                }
                if (_0x363e25) {
                    if (_0x3f3ed9) {
                        clearInterval(_0x3f3ed9);
                        _0x3f3ed9 = 0;
                    }
                    _0x3f3ed9 = setInterval(_0xbcbc52, 28000);
                    if (_0xea465f.toLowerCase() != _0x3ebb17.toLowerCase()) {
                        _0xbcbc52();
                    } else {
                        if (_0x53e3b2) {
                            clearInterval(_0x53e3b2);
                            _0x53e3b2 = 0;
                        }
                        _0x53e3b2 = setTimeout(function() {
                            if (_0x363e25 && _0x109288 && 5000 < Date.now() - _0x21e585) {
                                _0xbcbc52();
                            }
                        }, 5000);
                    }
                }
                if (_0x1a6d5d) {
                    sendSignal(57);
                }
                _0x9db55f(_0x950276);
                $("#loginError").finish().hide();
            } else if (0 == _0x2f2313) {
                $("#loginError p").replaceWith("<p>Incorrect login <br> Wrong username or password.</p>");
                $("#loginError").fadeIn();
            } else if (2 == _0x2f2313) {
                if (!_0x109288 && Date.now() < _0x186b83) {
                    _0x582d99 = setTimeout(function() {
                        _0x17ba19(_0x5b6b18, _0x170269);
                    }, 500);
                } else {
                    $("#loginError p").replaceWith("<p>Your account is already logged in... <br>Please wait a couple seconds. Make sure you're not logged in on another tab.</p>");
                    $("#loginError").finish().fadeIn();
                    $("#sent").removeAttr("disabled");
                }
            } else if (13 == _0x2f2313) {
                $("#loginError p").replaceWith("<p>Failed login <br> Login Server is down. Please try again later.</p>");
                $("#loginError").fadeIn();
            } else if (14 == _0x2f2313) {
                $("#loginError p").replaceWith("<p>Failed login</p>");
                $("#loginError").fadeIn();
            }
            if (3 == _0x2f2313) {
                $("#loginError p").replaceWith("<p>Username too long... <br> Maximum is 20 characters</p>");
                $("#loginError").fadeIn();
            }
            if (4 == _0x2f2313) {
                $("#loginError p").replaceWith("<p>Something went wrong with the encryption of your password. Please try again</p>");
                $("#loginError").fadeIn();
            }
            if (5 == _0x2f2313) {
                $("#loginError p").replaceWith("<p>Email too long... <br> Maximum is 40 characters</p>");
                $("#loginError").fadeIn();
            }
            if (6 == _0x2f2313) {
                $("#loginError p").replaceWith("<p>Wow that's a short username!<br> Please type a longer username</p>");
                $("#loginError").fadeIn();
            }
            if (7 == _0x2f2313) {
                $("#loginError p").replaceWith("<p>Please enter a password<p>");
                $("#loginError").fadeIn();
            }
            if (8 == _0x2f2313) {
                $("#loginError p").replaceWith("<p>Wow, that's a short email!<br> Did you forget to type an email?</p>");
                $("#loginError").fadeIn();
            }
            if (11 == _0x2f2313) {
                $("#loginError p").replaceWith("<p>Username or Email contains invalid characters! Please try a different username or email.</p>");
                $("#loginError").fadeIn();
            }
            if (9 == _0x2f2313) {
                $("#loginError").finish().hide();
                $("a[href=\"#home\"]").trigger("click");
                $("#registerSuccess").fadeIn("slow").delay(10000).fadeOut("slow");
                $("#password").val('');
                $("#email").val('');
                _0x311374 = $("#regUsername").val();
                $("#username").val(_0x311374);
                $("#regUsername").val('');
                $("#regEmail").val('');
                $("regPassword").val('');
            }
            if (10 == _0x2f2313) {
                $("#loginError p").replaceWith("<p>Username or email already exists.<br> Please try a different username or email</p>");
                $("#loginError").fadeIn();
            }
            if (12 == _0x2f2313) {
                $("#loginError p").replaceWith("<p>Are you a robot?<br> You did not verify the captcha challenge. Please verify 'Im not a robot'</p>");
                $("#loginError").fadeIn();
            }
            break;
        case 96:
            var _0x26baf3 = 128 & (_0x49a011 = _0x4c2e6b.getUint8()) ? _0x4c2e6b.getUint8() : 0;
            _0x357e04 = !(1 & _0x49a011);
            hasDRank = !!(32 & _0x49a011);
            can_yt_icon = !!(64 & _0x49a011);
            can_green_name = !!(1 & _0x26baf3);
            can_blue_name = !!(2 & _0x26baf3);
            can_orange_name = !!(4 & _0x26baf3);
            can_red_name = !!(8 & _0x26baf3);
            can_black_name = !!(16 & _0x26baf3);
            can_custom_color_name = !!(32 & _0x26baf3);
            abilityFreeze = !!(2 & _0x49a011);
            abilityCloak = !!(4 & _0x49a011);
            abilityDoubleSpawnSize = !!(8 & _0x49a011);
            abilityDoubleExp = !!(16 & _0x49a011);
            if (can_custom_color_name) {
                custom_color_name = _0x4c2e6b.getUint32();
            }
            var _0x26039d = _0x4c2e6b.getUint32();
            var _0x437b88 = _0x4c2e6b.getUint32();
            var _0x191e79 = _0x4c2e6b.getUint32();
            var _0x49adef = _0x4c2e6b.getUint32();
            _0x3f104e = _0x4c2e6b.getUint8();
            _0x35cd4a = _0x4c2e6b.getUint8();
            $(".sora-points-inv").text(_0x191e79);
            if (0 < _0x35cd4a) {
                $("#contextModerate").show();
                if (!$("#contextFBan").length) {
                    $("#contextSpectate").after("<li id=\"contextFBan\" style=\"display:none\" class=\"contextmenu-item enabled\"><div class=\"context-icon\"></div><p>Fast Ban</p></li>");
                    $("#cMapBorder").parent().after("<br><label><input id=\"cFastBan\" type=\"checkbox\" onchange=\"cFastBan();\"><span>Fast Ban</span></label>");
                }
                $("#mod_commands").html("<table> <tbody class=\"commands-body\"> <tr class=\"commands-font\"> <td> <kbd>Contextmenu</kbd> </td> <td>Options for moderation</td> </tr> <tr class=\"commands-font\"> <td> <kbd>/warn username msg</kbd> </td> <td>Warns specific user with custom msg</td> </tr> <tr class=\"commands-font\"> <td> <kbd>/rmshout</kbd> </td> <td>Removes current shout msg immediately</td> </tr> <tr class=\"commands-font\"> <td> <kbd>/mute username</kbd> </td> <td></td> </tr> </tbody> </table>");
            } else {
                $("#contextModerate").hide();
            }
            if (_0x437b88 < 999999) {
                $(".progress-bar-coins").css("color", "#fff");
            } else if (10000000 < _0x437b88) {
                $(".progress-bar-coins").css("color", "#83ebfb");
            } else {
                $(".progress-bar-coins").css("color", "#98ff98");
            }
            var _0x2b96e1 = _0x4c2e6b.getUint16();
            var _0x2e4161 = _0x4c2e6b.getUint32();
            _0x107e7f = _0x4c2e6b.getUint32();
            var _0x280d4d = _0x4c2e6b.getUint32();
            var _0x5e72c3 = _0x4c2e6b.getString();
            ignoreTrustedEvent = true;
            _0xea465f = _0x5e72c3;
            _0x11c620();
            _0x134fc9 = true;
            _0x273ce2();
            if (2 == _0x3f104e) {
                if (!$(".username").hasClass("goldBar")) {
                    $(".username").addClass("goldBar");
                    setTimeout(function() {
                        if ($(".username").hasClass("goldBar") && !$(".username").hasClass("shine")) {
                            $(".username").addClass("shine");
                            setTimeout(function() {
                                $(".username").removeClass("shine");
                            }, 2000);
                        }
                    }, 600);
                }
                $(".memberType").html("<p style=\"margin: 0 auto;text-align: center;color: #fffe12; text-shadow: 0px 0px 10px #c7920d; /*background: transparent url(img/particles.gif);*/\">GOLD MEMBER</p>");
            } else {
                $(".username").removeClass("goldBar");
                $(".memberType").html("<a href=\"member.php?camp=3\" target=\"_blank\"><p style=\"margin: 0 auto;text-align: center;color: white; font-size: 12px; font-weight: bold; text-shadow: 0px 0px 10px #2196F3;\">NOT A GOLD MEMBER</p></a>");
            }
            $("#visibilityStatus").show();
            $("#cVisibilityStatus").prop("disabled", false);
            $("#cVisibilityStatus2").prop("disabled", false);
            setFriendlistOnline(_0x357e04, true);
            $("#cGoldName").prop("disabled", 2 != _0x3f104e);
            $("#cGoldName2").prop("disabled", 2 != _0x3f104e);
            $("#cGoldCrownChat").prop("disabled", 2 != _0x3f104e);
            $("#cGoldCrownChat2").prop("disabled", 2 != _0x3f104e);
            $("#cRenderDistance").prop("disabled", 2 != _0x3f104e);
            $("#cMinionSkinsStatus").prop("disabled", 2 != _0x3f104e);
            $("#cVideoAds").prop("disabled", 2 != _0x3f104e);
            $("cRenderDistance").prop("disabled", 2 != _0x3f104e);
            if (2 == _0x3f104e) {
                setGoldNickname(gldNickEnabled);
                setGoldCrownChat(gldCrownEnabled);
                setRenderDistance(largeRenderDistance);
                setMinionSkins(minionSkins);
                setVideoAds(videoAdsEnabled);
            }
            $("#roleSettings input[type=\"checkbox\"]").prop("disabled", true);
            $("#roleSettings .role-setting").hide();
            if (0 < _0x35cd4a || hasDRank || can_yt_icon || can_green_name || can_blue_name || can_orange_name || can_red_name || can_black_name || can_custom_color_name) {
                $("#roleSettings").show();
                if (0 < _0x35cd4a) {
                    $("#cModeratorIconChat").prop("disabled", false).parents("div.role-setting").show();
                    setModeratorIconChat(modIconEnabled);
                }
                if (hasDRank) {
                    $("#cIconDRank").prop("disabled", false).parents("div.role-setting").show();
                    setIconDRank(iconDRankEnabled);
                }
                if (can_yt_icon) {
                    $("#cIconYT").prop("disabled", false).parents("div.role-setting").show();
                    setIconYT(iconYTEnabled);
                }
                if (can_green_name) {
                    $("#cGreenName").prop("disabled", false).parents("div.role-setting").show();
                    setGreenName(greenNameEnabled);
                }
                if (can_blue_name) {
                    $("#cBlueName").prop("disabled", false).parents("div.role-setting").show();
                    setBlueName(blueNameEnabled);
                }
                if (can_orange_name) {
                    $("#cOrangeName").prop("disabled", false).parents("div.role-setting").show();
                    setOrangeName(orangeNameEnabled);
                }
                if (can_red_name) {
                    $("#cRedName").prop("disabled", false).parents("div.role-setting").show();
                    setRedName(redNameEnabled);
                }
                if (can_black_name) {
                    $("#cBlackName").prop("disabled", false).parents("div.role-setting").show();
                    setBlackName(blackNameEnabled);
                }
                if (can_custom_color_name) {
                    $("#cCustomColorName").prop("disabled", false).parents("div.role-setting").show();
                    setCustomColorName(customColorNameEnabled);
                }
            } else {
                $("#roleSettings").hide();
            }
            $(".username p").replaceWith("<p>" + _0xea465f + "</p>");
            $("#coinsUserId2").val(_0x107e7f);
            $("#userCoins2").text(_0xea465f);
            $("#referral").val(window.location.protocol + "//agma.io/?ref=" + _0x280d4d);
            if (!_0x57f39f) {
                if (Math.random() < 0.05) {
                    setTimeout(function() {
                        if (_0x3e08c0) {
                            $(".bs-example-modal-lg5").modal("show");
                        }
                    }, 2500);
                }
                _0x57f39f = true;
            }
            _0x9db55f(_0x950276);
            if (50000 < _0x2e4161) {
                _0x2e4161 = ">50000";
            }
            _0x2581c0 = _0x49adef;
            _0x2581c0 = Number(_0x2581c0);
            _0x536dbe = Math.floor(_0x2581c0 / 3600);
            _0xf64257 = Math.floor(_0x2581c0 % 3600 / 60);
            Math.floor(_0x2581c0 % 3600 % 60);
            $(".timePlayed span").text("Time played: " + (0 < _0x536dbe ? _0x536dbe + " Hours & " + (_0xf64257 < 10 ? "0" : '') : '') + _0xf64257 + " Minutes");
            $(".ranking span").text("Your rank: " + _0x2e4161);
            _0x483791(_0x437b88);
            _0x2bb62d(_0x2b96e1, _0x26039d);
            _0x4a5541();
            $("#dashPanel").fadeIn("slow");
            $("#dashTab").show();
            $("#loginRegisterTab").hide();
            $("#login").hide();
            if (abilityFreeze) {
                $("#abilityFreeze").addClass("has-ability");
            } else {
                $("#abilityFreeze").removeClass("has-ability");
            }
            if (abilityCloak) {
                $("#abilityCloak").addClass("has-ability");
            } else {
                $("#abilityCloak").removeClass("has-ability");
            }
            if (abilityDoubleSpawnSize) {
                $("#abilityDoubleSpawnSize").addClass("has-ability");
            } else {
                $("#abilityDoubleSpawnSize").removeClass("has-ability");
            }
            if (abilityDoubleExp) {
                $("#abilityDoubleExp").addClass("has-ability");
            } else {
                $("#abilityDoubleExp").removeClass("has-ability");
            }
            ignoreTrustedEvent = false;
            break;
        case 97:
            var _0x184d89 = _0x4c2e6b.getUint8();
            var _0x5e72c3 = _0x4c2e6b.getString();
            var _0x5180de = _0x4c2e6b.getString();
            var _0x5381b4 = _0x4c2e6b.getUint8();
            var _0x3a4da8 = _0x4c2e6b.getUint16();
            var _0x47722c = _0x4c2e6b.getUint8();
            var _0x486edc = [];
            for (var _0x435e7a = 0; _0x435e7a < _0x47722c; _0x435e7a++) {
                _0x486edc.push({
                    "wearId": _0x4c2e6b.getUint16(),
                    "P": _0x4c2e6b.getUint8()
                });
            }
            $("#megaphone_name").text(_0x5180de).css("color", 1 < _0x5381b4 ? _0xdc7889[_0x5381b4] : '').removeClass("gold black");
            if (1 == _0x5381b4) {
                $("#megaphone_name").addClass("gold");
            } else if (6 == _0x5381b4) {
                $("#megaphone_name").addClass("black");
            }
            $("#megaphone_text").text(_0x5e72c3);
            switch (_0x184d89) {
                case 1:
                    $("#skinMegaWidget").css("background-color", "#25a599");
                    break;
                case 2:
                    $("#skinMegaWidget").css("background-color", "#ff7043");
                    break;
                case 3:
                    $("#skinMegaWidget").css("background-color", "#ab47bc");
                    break;
                case 4:
                    $("#skinMegaWidget").css("background-color", "#ec407a");
                    break;
                case 5:
                    $("#skinMegaWidget").css("background-color", "#8ac249");
                    break;
                case 6:
                    $("#skinMegaWidget").css("background-color", "rgb(6, 187, 211)");
                    break;
                case 7:
                    $("#skinMegaWidget").css("background-color", "rgb(239, 84, 85)");
            }
            if (0 != _0x3a4da8) {
                if (4647 == _0x3a4da8) {
                    _0x3a4da8 = 13371337;
                }
                $("#skinMegaWidget").css("background-image", "url('skins/" + _0x3a4da8.toString() + "_lo.png?u=" + (_0x48a780[_0x3a4da8] || 0) + "')");
            } else {
                $("#skinMegaWidget").css("background-image", "none");
            }
            for (_0x435e7a = 1; _0x435e7a <= 5; _0x435e7a++) {
                if (_0x435e7a <= _0x486edc.length) {
                    var _0x44a850 = _0x486edc[_0x435e7a - 1];
                    var _0x3b16a0 = _0x464b91[_0x44a850.P] || '';
                    try {
                        $("#wearMegaWidget" + _0x435e7a).css("background-image", "url('wearables/" + _0x44a850.wearId.toString() + "_lo.png?v=" + wearablesApiVersion + "')").removeClass("center top bottom left right max".replace(_0x3b16a0, '')).addClass(_0x3b16a0).show();
                    } catch (_0x689691) {
                        console.log("ERROR IN wear.wearId.toString()");
                        console.log(_0x689691);
                    }
                } else {
                    $("#wearMegaWidget" + _0x435e7a).css("background-image", "none").hide();
                }
            }

            function _0x425b4b() {
                var _0x4a1fd2 = {
                    "margin-right": "10px"
                };
                $("#megaholder").stop(true, false).show(0);
                $("#megaphone").animate(_0x4a1fd2, function() {
                    _0x32316b = setTimeout(function() {
                        var _0x21ffca = {
                            "margin-right": "-350px"
                        };
                        $("#megaphone").animate(_0x21ffca);
                        $("#megaholder").delay(900).hide(0);
                    }, 30000);
                });
            }
            window.__votedMega = false;
            $("#thumbUp, #thumbDown").off("click").on("click", function(_0x3f6516) {
                _0x3f6516.stopPropagation();
                if (!window.__votedMega) {
                    window.__votedMega = true;
                    $(".thumbBtn").addClass("disabled");
                    _0x3f6516 = "thumbUp" === this.id;
                    window.univPcc(207, 1, _0x3f6516 ? 1 : 0);
                }
            });
            $("#thumbUpCount").text("0");
            $("#thumbDownCount").text("0");
            $(".thumbBtn").removeClass("disabled");
            if (_0x32316b) {
                clearTimeout(_0x32316b);
                _0x32316b = 0;
            }
            if (_0x486edc[0] && 777 == _0x486edc[0].wearId) {
                _0x32316b = 0;
                $("#megaholder").stop(true, false);
                $("#megaholder").hide(0);
            } else {
                _0x425b4b();
            }
            if (0 < _0x35cd4a || _0x6dd07a) {
                if (0 < _0x35cd4a) {
                    $("#megaholder").append("<button style=\"position: absolute;top: 122px;left: -44px;color: black;\" onclick=\"rmShout();\">Rm1</button>");
                }
                $("#megaholder").append("<button style=\"position: absolute;top: 155px;left: -44px;color: black;\" onclick=\"rmShout(2);\">Rm2</button>");
            }
            break;
        case 98:
            _0x2b96e1 = _0x4c2e6b.getUint16();
            _0x26039d = _0x4c2e6b.getUint32();
            if (_0x109288) {
                _0x2bb62d(_0x2b96e1, _0x26039d);
            }
            break;
        case 99:
            var _0x3988b2 = _0x4c2e6b.getUint8();
            var _0x1124f6 = _0x4c2e6b.getUint16();
            var _0x3884cc = !!(4 & _0x3988b2);
            var _0x24a818 = 0;
            var _0x2712a9 = _0x4e4df3;
            var _0x3b0d92 = _0x4e4df3;
            var _0x238c81 = 1;
            if (8 & _0x3988b2 && 1 & (colorChatPickp = _0x4c2e6b.getUint8())) {
                _0x238c81 = 2;
            }
            if (_0x3884cc && (_0x24a818 = _0x4c2e6b.getUint32(), 128 & _0x3988b2 && (_0x2712a9 = md5(((4294967296 + (_0x4c2e6b.getUint32() ^ _0x3e7187)) % 4294967296).toString(36))), !(2 & _0x3988b2))) {
                var _0x3da123 = 256 & _0x1124f6 ? _0x4c2e6b.getUint8() : 1;
                var _0x36786a = [];
                for (var _0x1dc8b4 = 0; _0x1dc8b4 < _0x3da123; _0x1dc8b4++) {
                    _0x36786a.push(((4294967296 + (_0x4c2e6b.getUint32() ^ _0x3e7187)) % 4294967296).toString(36));
                }
                _0x3b0d92 = md5(1 < _0x36786a.length ? JSON.stringify(_0x36786a) : _0x36786a[0]);
            }
            var [_0x2cc170] = _0x4c2e6b.getColorTags();
            var _0x4c6837 = _0x4c2e6b.getString();
            var _0x3626db = 2 & _0x3988b2 ? _0x4c2e6b.getString() : '';
            var _0x469523 = null;
            var _0x1711bf = !!(8 & _0x3988b2);
            _0x5af7fe.push({
                "Y": _0x3884cc,
                "$": _0x826efd,
                "l": _0x24a818,
                "R": _0x2712a9,
                "O": _0x3b0d92,
                "name": _0x4c6837,
                "receiver": _0x3626db,
                "color": _0x2cc170,
                "message": _0x4c2e6b.getString(),
                "category": 1 & _0x3988b2 ? 1 : 2 & _0x3988b2 ? 2 : 0,
                "goldMember": !!(16 & _0x3988b2),
                "q": 32 & _0x3988b2 ? 1 : 64 & _0x3988b2 ? 2 : 0,
                "j": 1 & _0x1124f6 ? 1 : 2 & _0x1124f6 ? 2 : 4 & _0x1124f6 ? 3 : 8 & _0x1124f6 ? 4 : 16 & _0x1124f6 ? 5 : 32 & _0x1124f6 ? 6 : 0,
                "J": !!(64 & _0x1124f6),
                "H": !!(128 & _0x1124f6),
                "K": _0x1711bf && _0x238c81,
                "time": Date.now(),
                "cache": null
            });
            if (1 & _0x3988b2) {
                _0x469523 = document.getElementById("chtTabParty");
            } else if (2 & _0x3988b2) {
                _0x23a624(_0x4c6837);
                _0x23a624(_0x3626db);
                if (_0x4c6837.toLowerCase() != _0xea465f.toLowerCase()) {
                    playSounds("sounds/bleep.mp3", 0.1);
                }
                _0x469523 = _0x4c6837.toLowerCase() != _0xea465f.toLowerCase() ? _0xde408[_0x4c6837.toLowerCase()] : _0xde408[_0x3626db.toLowerCase()];
            }
            if (_0x469523 && (_0x469523 = $(_0x469523)) && !_0x469523.hasClass("selected") && !_0x469523.hasClass("semi-selected")) {
                _0x469523.addClass("blink");
                if (_0x2402ca) {
                    clearTimeout(_0x2402ca);
                    _0x2402ca = 0;
                }
                _0x2402ca = setTimeout(function() {
                    $("#chtTabs").find("div.blink").removeClass("blink");
                    _0x2402ca = 0;
                }, 60000);
            }
            _0x4cb089 = true;
            break;
        case 100:
            var _0x5e7de3 = [];
            var _0x4ccd03 = 0;
            var _0x3f3103 = 0;
            var _0x87b38a = 0;
            var _0x435e7a = _0x4c2e6b.getUint16();
            for (var _0x186e66 = 0; _0x186e66 < _0x435e7a; ++_0x186e66) {
                _0x49a011 = _0x4c2e6b.getUint8();
                _0x5e7de3.push({
                    "name": _0x4c2e6b.getString(),
                    "accepted": !!(1 & _0x49a011),
                    "isRequester": !!(2 & _0x49a011),
                    "loginStatus": !!(4 & _0x49a011),
                    "goldMember": !!(16 & _0x49a011),
                    "serverName": 4 & _0x49a011 ? _0x4c2e6b.getString() : ''
                });
                if ((_0x1740e2 = _0x5e7de3[_0x186e66]).accepted || !_0x1740e2.isRequester) {
                    if (_0x1740e2.loginStatus) {
                        _0x4ccd03++;
                    }
                    _0x3f3103++;
                } else {
                    _0x87b38a++;
                }
            }
            _0x21e585 = Date.now();
            if (!(_0x56a93d = _0x5e7de3.length != _0x468d84.length || _0x5b3d82 != _0x109288 || _0xea465f.toLowerCase() != _0x3ebb17.toLowerCase())) {
                for (_0x186e66 = 0; _0x186e66 < _0x468d84.length; ++_0x186e66) {
                    var _0x868215 = _0x468d84[_0x186e66];
                    var _0x383d32 = _0x5e7de3[_0x186e66];
                    if (_0x868215.name != _0x383d32.name || _0x868215.accepted != _0x383d32.accepted || _0x868215.isRequester != _0x383d32.isRequester || _0x868215.loginStatus != _0x383d32.loginStatus || _0x868215.goldMember != _0x383d32.goldMember || _0x868215.serverName != _0x383d32.serverName) {
                        _0x56a93d = true;
                        break;
                    }
                }
            }
            if (_0x56a93d) {
                _0x468d84 = _0x5e7de3;
                _0x5b3d82 = _0x109288;
                _0x3ebb17 = _0xea465f;
                _0x3e53e0 = _0x4ccd03;
                _0x6c92d3 = _0x3f3103;
                _0xd85888 = _0x87b38a;
                _0x1afbd7();
            }
            break;
        case 101:
            if (window.AG && window.AG.showCaptcha) {
                window.AG.showCaptcha();
                az();
            }
            break;
        case 102:
            if (2 == _0x4c2e6b.getUint8()) {
                _0x20546f = _0x4c2e6b.getUint16();
                var _0x3c2960 = _0x4c2e6b.getString();
                var _0x15ca97 = _0x4c2e6b.getString();
                var _0x55cf4d = _0x4c2e6b.getString();
                var _0x2d1f83 = _0x4c2e6b.getString();
                var _0x17a702 = _0x4c2e6b.getString();
                switch (_0x4c2e6b.getString()) {
                    case "A":
                        $("#quiz-btn-a").addClass("quiz-correct");
                        $("#quiz-btn-b").addClass("quiz-wrong");
                        $("#quiz-btn-c").addClass("quiz-wrong");
                        $("#quiz-btn-d").addClass("quiz-wrong");
                        break;
                    case "B":
                        $("#quiz-btn-a").addClass("quiz-wrong");
                        $("#quiz-btn-b").addClass("quiz-correct");
                        $("#quiz-btn-c").addClass("quiz-wrong");
                        $("#quiz-btn-d").addClass("quiz-wrong");
                        break;
                    case "C":
                        $("#quiz-btn-a").addClass("quiz-wrong");
                        $("#quiz-btn-b").addClass("quiz-wrong");
                        $("#quiz-btn-c").addClass("quiz-correct");
                        $("#quiz-btn-d").addClass("quiz-wrong");
                        break;
                    case "D":
                        $("#quiz-btn-a").addClass("quiz-wrong");
                        $("#quiz-btn-b").addClass("quiz-wrong");
                        $("#quiz-btn-c").addClass("quiz-wrong");
                        $("#quiz-btn-d").addClass("quiz-correct");
                }
                _0x571f96 = minutesUntilMidnight();
                _0x571f96 /= 60;
                _0x1a0051 = Math.floor(_0x571f96);
                _0x571f96 = Math.round(60 * (_0x571f96 - _0x1a0051));
                $("#quiz-next-time").text("Next quiz in : " + (_0x1a0051 < 0 ? "refresh page to see new quiz" : _0x1a0051 + " Hours & " + _0x571f96 + " Minutes."));
            } else {
                _0x20546f = _0x4c2e6b.getUint16();
                _0x3c2960 = _0x4c2e6b.getString();
                _0x15ca97 = _0x4c2e6b.getString();
                _0x55cf4d = _0x4c2e6b.getString();
                _0x2d1f83 = _0x4c2e6b.getString();
                _0x17a702 = _0x4c2e6b.getString();
                $("#quiz-loaded").hide();
                $("#quiz-content").show();
                $("#quiz-question").text(_0x3c2960);
                $("#quiz-btn-a").text("A. " + _0x15ca97);
                $("#quiz-btn-b").text("B. " + _0x55cf4d);
                $("#quiz-btn-c").text("C. " + _0x2d1f83);
                $("#quiz-btn-d").text("D. " + _0x17a702);
                if (_0x2d1f83.length < 2) {
                    $("#quiz-btn-c").hide();
                }
                if (_0x17a702.length < 2) {
                    $("#quiz-btn-d").hide();
                }
            }
            break;
        case 103:
            _0x31ab56 = _0x4c2e6b.getUint16();
            $("#refCount").text(_0x31ab56);
            break;
        case 104:
            _0x411213(1);
            break;
        case 105:
            _0x522c0e();
            _0x315275(true);
            break;
        case 106:
            _0xf3d226 = true;
            if (_0x1d3023) {
                clearTimeout(_0x1d3023);
                _0x1d3023 = 0;
            }
            var _0xc93166 = +new Date();
            var _0x311374 = true;
            if (_0x311374 = undefined === window.localStorage || null != window.localStorage.reloadTime && _0xc93166 < (_0x253ecd = JSON.parse(window.localStorage.reloadTime) + 3600000) ? false : _0x311374) {
                window.localStorage.reloadTime = JSON.stringify(_0xc93166);
                try {
                    window.location.reload(true);
                } catch (_0x8aca61) {}
            }
            break;
        case 107:
            _0xf3d226 = true;
            if (_0x1d3023) {
                clearTimeout(_0x1d3023);
                _0x1d3023 = 0;
            }
            break;
        case 108:
            _0x435e7a = 1 & (_0x49a011 = _0x4c2e6b.getUint8()) ? _0x4c2e6b.getUint8() : 1;
            _0x1740e2 = [];
            for (_0x186e66 = 0; _0x186e66 < _0x435e7a; ++_0x186e66) {
                var _0x4a735f = _0x4c2e6b.getUint32();
                if (_0x4a735f !== _0x4c2e6b.getUint32()) {
                    _0x1740e2 = null;
                    break;
                }
                _0x1740e2.push(_0x4a735f);
            }
            if ("undefined" != typeof localStorage && _0x1740e2 && 0 < _0x1740e2.length) {
                localStorage.cdbi4 = 1 < _0x435e7a || _0x1740e2[0] ? _0x1fe290(1 == _0x435e7a ? _0x1740e2[0].toString() : JSON.stringify(_0x1740e2)) : 0;
                localStorage.cdbi3 = 0;
                localStorage.cdbi2 = 0;
                localStorage.cdbi = 0;
            }
            break;
        case 109:
            var _0x49a011 = _0x4c2e6b.getUint8();
            var _0x2f2313 = _0x4e4df3;
            var _0x435e7a = 1 & _0x49a011 ? _0x4c2e6b.getUint8() : 1;
            var _0xba74db = [];
            for (var _0x186e66 = 0; _0x186e66 < _0x435e7a; ++_0x186e66) {
                var _0x49a011;
                var _0x2f2313;
                var _0x435e7a;
                var _0xba74db;
                var _0x186e66;
                _0xba74db.push(((4294967296 + (_0x4c2e6b.getUint32() ^ _0x3e7187)) % 4294967296).toString(36));
            }
            _0x3addca(_0x2f2313, _0xba74db = md5(1 < _0xba74db.length ? JSON.stringify(_0xba74db) : _0xba74db[0]), _0x4c2e6b.getString());
            break;
        case 110:
            var _0x77d7cb = 0;
            if (0 < (_0x435e7a = _0x4c2e6b.getUint16())) {
                var _0x56a93d;
                var _0x49bddc = [];
                for (var _0x186e66 = 0; _0x186e66 < _0x435e7a; ++_0x186e66) {
                    var _0x49a011 = _0x4c2e6b.getUint8();
                    var _0x395b2d = _0x4c2e6b.getUint16();
                    _0x49bddc.push({
                        "id": _0x395b2d,
                        "name": _0x4c2e6b.getString(),
                        "description": _0x4c2e6b.getString(),
                        "address": _0x4c2e6b.getString(),
                        "location": _0x4c2e6b.getUint8(),
                        "gamemode": _0x13936d(_0x4c2e6b.getUint8()),
                        "players": _0x4c2e6b.getUint16(),
                        "maxPlayers": _0x4c2e6b.getUint16(),
                        "isCurrent": !!(1 & _0x49a011)
                    });
                    if (_0x49bddc[_0x186e66].isCurrent) {
                        _0x77d7cb = _0x49bddc[_0x186e66].location;
                        _0x40eece(_0x49bddc[_0x186e66].gamemode);
                        _0x826efd = _0x395b2d;
                    }
                }
                if (!_0x8e4a8e) {
                    if (!(_0x56a93d = _0x49bddc.length != _0x2c8f2a.length)) {
                        for (_0x186e66 = 0; _0x186e66 < _0x2c8f2a.length; ++_0x186e66) {
                            var _0x1909f7 = _0x2c8f2a[_0x186e66];
                            var _0x4619e3 = _0x49bddc[_0x186e66];
                            if (_0x1909f7.id != _0x4619e3.id || _0x1909f7.name != _0x4619e3.name || _0x1909f7.description != _0x4619e3.description || _0x1909f7.address != _0x4619e3.address || _0x1909f7.location != _0x4619e3.location || _0x1909f7.gamemode != _0x4619e3.gamemode || _0x1909f7.maxPlayers != _0x4619e3.maxPlayers) {
                                _0x56a93d = true;
                                break;
                            }
                        }
                    }
                    _0x8e4a8e = _0x56a93d;
                }
                _0x2c8f2a = _0x49bddc;
                if (null != window.localStorage.gameservers) {
                    _0x77d7cb = undefined;
                }
                window.localStorage.gameservers = JSON.stringify(_0x2c8f2a);
                window.localStorage.serverlistVersion = 12;
                if (_0x8e4a8e) {
                    _0x28b056(_0x77d7cb);
                    _0x8e4a8e = false;
                    _0x9db55f(_0x950276);
                }
                _0x468e60 = [];
            }
            break;
        case 111:
            _0x435e7a = _0x4c2e6b.getUint16();
            for (_0x186e66 = 0; _0x186e66 < _0x435e7a; ++_0x186e66) {
                var _0x395b2d = _0x4c2e6b.getUint16();
                var _0x4847d6 = _0x4c2e6b.getUint16();
                var _0x3ac0d3 = _0x4c2e6b.getUint16();
                $("#serverPlayers" + _0x395b2d).text(_0x4847d6 + "/" + _0x3ac0d3);
            }
            break;
        case 112:
            _0x26baf3 = _0x4c2e6b.getUint8();
            ag219_2 = 2 == _0x26baf3 ? (_0x191e79 = _0x4c2e6b.getString(), "undefined" != typeof Storage && localStorage.setItem("crcx2", _0x191e79), _0x191e79) : _0x4c2e6b.getString();
            break;
        case 114:
            if (0 < (_0x435e7a = _0x4c2e6b.getUint16())) {
                _0x51aa44 = [];
                for (_0x186e66 = 0; _0x186e66 < _0x435e7a; ++_0x186e66) {
                    var _0x49a011 = _0x4c2e6b.getUint8();
                    var _0x1819b7 = _0x4c2e6b.getUint16();
                    var _0x3af9db = _0x4c2e6b.getUint8();
                    _0x51aa44.push({
                        "id": _0x1819b7,
                        "type": _0x3af9db,
                        "name": _0x4c2e6b.getString(),
                        "area": _0x4c2e6b.getUint8(),
                        "zIndex": _0x4c2e6b.getUint16(),
                        "group": _0x4c2e6b.getUint16(),
                        "levelRequired": 0,
                        "vipLevelRequired": 0,
                        "price": 0,
                        "approved": !!(2 & _0x49a011),
                        "pendingApproval": !!(4 & _0x49a011),
                        "enabled": !!(1 & _0x49a011)
                    });
                    if (1 == _0x3af9db) {
                        _0x51aa44[_0x51aa44.length - 1].levelRequired = _0x4c2e6b.getUint16();
                    } else if (3 == _0x3af9db) {
                        _0x51aa44[_0x51aa44.length - 1].vipLevelRequired = _0x4c2e6b.getUint8();
                    } else if (2 == _0x3af9db) {
                        _0x51aa44[_0x51aa44.length - 1].price = _0x4c2e6b.getUint32();
                    }
                }
                _0x568cd2();
                _0x1518ea = false;
                _0x5cff0f = _0xea465f;
            }
            break;
        case 115:
            if (0 < (_0x435e7a = _0x4c2e6b.getUint16())) {
                _0x2e4195 = [];
                for (_0x186e66 = 0; _0x186e66 < _0x435e7a; ++_0x186e66) {
                    var _0x49a011 = _0x4c2e6b.getUint8();
                    var _0x1819b7 = _0x4c2e6b.getUint16();
                    var _0x3af9db = _0x4c2e6b.getUint8();
                    var _0x3a3464 = _0x4c2e6b.getUint32();
                    _0x2e4195.push({
                        "id": _0x1819b7,
                        "type": _0x3af9db,
                        "name": _0x4c2e6b.getString(),
                        "levelRequired": 0,
                        "vipLevelRequired": 0,
                        "price": 0,
                        "approved": !!(2 & _0x49a011),
                        "pendingApproval": 0,
                        "userAssigned": !!(8 & _0x49a011),
                        "sharedPublic": !!(16 & _0x49a011),
                        "changedUnix": _0x3a3464,
                        "changedDaysAgo": 0,
                        "changeAllowed": !!(32 & _0x49a011),
                        "popularity": 0,
                        "enabled": !!(1 & _0x49a011)
                    });
                    if (1 == _0x3af9db) {
                        _0x2e4195[_0x2e4195.length - 1].levelRequired = _0x4c2e6b.getUint16();
                    } else if (3 == _0x3af9db) {
                        _0x2e4195[_0x2e4195.length - 1].vipLevelRequired = _0x4c2e6b.getUint8();
                    } else if (2 == _0x3af9db) {
                        _0x2e4195[_0x2e4195.length - 1].price = _0x4c2e6b.getUint32();
                    } else if (4 == _0x3af9db) {
                        if (8 & _0x49a011) {
                            _0x2e4195[_0x2e4195.length - 1].pendingApproval = _0x4c2e6b.getUint8();
                            _0x2e4195[_0x2e4195.length - 1].changedDaysAgo = _0x4c2e6b.getUint16();
                        } else if (16 & _0x49a011 && 1 & _0x49a011) {
                            _0x2e4195[_0x2e4195.length - 1].popularity = _0x4c2e6b.getUint16();
                        }
                    }
                    _0x48a780[_0x1819b7] = _0x3a3464;
                }
                if (0 < (_0xc93166 = _0x4c2e6b.getUint32())) {
                    _0x520472 = _0xc93166;
                }
                _0x2aa794();
                _0x64a0d5 = false;
                _0x4506fc = _0xea465f;
            }
            break;
        case 116:
            if (0 < (_0x435e7a = _0x4c2e6b.getUint16())) {
                _0x48a780 = {};
                for (_0x186e66 = 0; _0x186e66 < _0x435e7a; ++_0x186e66) {
                    _0x1819b7 = _0x4c2e6b.getUint16();
                    _0x48a780[_0x1819b7] = _0x4c2e6b.getUint32();
                }
                _0x435e7a = _0x4c2e6b.getUint16();
                _0x2645ec = {};
                for (_0x186e66 = 0; _0x186e66 < _0x435e7a; ++_0x186e66) {
                    _0x2645ec[_0x4c2e6b.getUint16()] = true;
                }
            }
            break;
        case 117:
            var _0x393c4a = _0x4c2e6b.getUint8();
            var _0xfb04c = [];
            for (let _0x2c414a = 0; _0x2c414a < _0x393c4a; _0x2c414a++) {
                var _0x3db38d = _0x4c2e6b.getString();
                let _0x23e93d = _0x4c2e6b.getUint32();
                var _0x119ca7 = _0x4c2e6b.getString();
                var _0x2e2fa7 = _0x4c2e6b.getString();
                var _0x42a858 = [];
                try {
                    var _0xe7e300;
                    var _0x58ad9b = JSON.parse(_0x119ca7);
                    for (_0xe7e300 in _0x58ad9b) _0x42a858.push({
                        "qty": _0x58ad9b[_0xe7e300],
                        "id": _0xe7e300
                    });
                } catch (_0xb4dac5) {}
                var _0x4facd7 = {
                    from: _0x3db38d,
                    date: _0x2e2fa7,
                    coins: _0x23e93d,
                    powerups: _0x42a858
                };
                _0xfb04c.push(_0x4facd7);
            }
            window.loadGiftUI(_0xfb04c);
            break;
        case 118:
            _0x6dd07a = true;
            $("#contextModerate").addClass("enabled");
            break;
        case 122:
            var _0x280d4d = _0x4c2e6b.getUint8();
            var _0x49adef = _0x4c2e6b.getUint32();
            var _0x2e4161 = _0x4c2e6b.getUint32();
            var _0x437b88 = _0x4c2e6b.getUint32();
            var _0x5180de = _0x4c2e6b.getUint32();
            var _0x5381b4 = _0x4c2e6b.getUint32();
            var _0x5e72c3 = _0x4c2e6b.getUint32();
            var _0x25fc81 = {
                mass: _0x437b88,
                coins: _0x5180de,
                sp: _0x5381b4,
                powerup: _0x5e72c3
            };
            var _0x1bf8a5 = {
                thievingLevel: _0x280d4d,
                thievingXp: _0x49adef,
                thievingXpForNextLevel: _0x2e4161,
                lastThievingTime: _0x25fc81
            };
            _0xe6d81(_0x51e494 = _0x1bf8a5);
            break;
        case 125:
            _0x3a4da8 = (_0x184d89 = _0x4c2e6b).getString();
            console.log("groupdi " + _0x3a4da8);
            _0x2b96e1 = _0x184d89.getString();
            console.log("int: " + _0x2b96e1);
            _0x184d89 = _0x184d89.getString();
            console.log("participantsStr " + _0x184d89);
            _0x184d89 = _0x184d89.split(",");
            console.log("participants: " + _0x184d89);
            _0x2c01ea(_0x3a4da8, _0x184d89, _0x2b96e1);
            break;
        case 126:
            _0x3c2960 = (_0x26039d = _0x4c2e6b).getUint8();
            _0x15ca97 = _0x26039d.getUint16();
            _0x55cf4d = _0x26039d.getString();
            _0x2d1f83 = _0x26039d.getUint32();
            _0x26039d.getUint32();
            _0x26039d.getColorTags();
            _0x17a702 = _0x26039d.getString();
            _0x26039d = _0x26039d.getString();
            _0x5af7fe.push({
                "Y": true,
                "$": _0x826efd,
                "l": _0x2d1f83,
                "R": _0x4e4df3,
                "O": _0x4e4df3,
                "name": _0x17a702,
                "receiver": '',
                "color": "#3b87cc",
                "message": _0x26039d,
                "category": 4,
                "goldMember": !!(16 & _0x3c2960),
                "q": 32 & _0x3c2960 ? 1 : 64 & _0x3c2960 ? 2 : 0,
                "j": 1 & _0x15ca97 ? 1 : 2 & _0x15ca97 ? 2 : 4 & _0x15ca97 ? 3 : 8 & _0x15ca97 ? 4 : 16 & _0x15ca97 ? 5 : 32 & _0x15ca97 ? 6 : 0,
                "J": !!(64 & _0x15ca97),
                "H": !!(128 & _0x15ca97),
                "K": false,
                "time": Date.now(),
                "cache": null,
                "sender": _0x17a702,
                "groupId": _0x55cf4d
            });
            if (!(b4 = document.getElementById("groupChat-" + _0x55cf4d))) {
                _0x2c01ea(_0x55cf4d, '', '');
            }
            if (b4 && (b4 = $(b4)) && !b4.hasClass("selected") && !b4.hasClass("semi-selected")) {
                b4.addClass("blink");
                if (_0x2402ca) {
                    clearTimeout(_0x2402ca);
                    _0x2402ca = 0;
                }
                _0x2402ca = setTimeout(function() {
                    $("#chtTabs").find("div.blink").removeClass("blink");
                    _0x2402ca = 0;
                }, 60000);
            }
            _0x4cb089 = true;
            break;
        case 130:
            pingTime = _0x4c2e6b.getUint16();
            _0x1a6afb = false;
            if (_0x1566f5) {
                $("#ping").html("<span style=\"color:" + (150 < pingTime ? "#f44" : 100 < pingTime ? "#fa4" : "#2d2") + ";\">" + pingTime + "<span style=\"font-size:12px;\">ms</span></span>");
            }
            break;
        case 132:
            _0x31ab56 = _0x4c2e6b.getUint8();

            function _0x3e89ae(_0xe6bee) {
                if (isReady()) {
                    new PacketWriter(3 + 2 * _0xe6bee.length).setUint8(192).setUint16(_0xe6bee.length).setString(_0xe6bee).send();
                }
            }
            if (_0x31ab56) {
                window.AG.gcc(function(_0x180c33) {
                    _0x3e89ae(_0x180c33);
                }, _0x31ab56);
            } else {
                window.AG.gcc(function(_0x10ca18) {
                    _0x3e89ae(_0x10ca18);
                });
            }
            break;
        case 209:
            _0x311374 = _0x4c2e6b.getUint16();
            _0x2f2313 = _0x4c2e6b.getUint16();
            $("#thumbUpCount").text(_0x311374);
            $("#thumbDownCount").text(_0x2f2313);
            break;
        case 244:
            if (1 === _0x4c2e6b.buffer.byteLength) {
                _0x3b0762 = true;
                if (0 < ag219_2.length) {
                    if (isReady(true) && 0 < ag219_2.length) {
                        new PacketWriter(3 + 2 * ag219_2.length).setUint8(102).setUint16(ag219_2.length).setString(ag219_2).send();
                    }
                } else {
                    _0x53846a();
                }
                if (isReady() && "undefined" != typeof localStorage && (localStorage.cdbi || localStorage.cdbi2 || localStorage.cdbi3 || localStorage.cdbi4)) {
                    var _0x26baf3 = parseInt(localStorage.cdbi) || 0;
                    var _0x191e79 = parseInt(localStorage.cdbi2) || 0;
                    var _0x280d4d = JSON.parse(localStorage.cdbi3 || 0);
                    var _0x280d4d = localStorage.cdbi4 && "0" != localStorage.cdbi4 ? JSON.parse(_0x2b377f(localStorage.cdbi4) || 0) : _0x280d4d;
                    var _0x280d4d = Array.isArray(_0x280d4d) ? _0x280d4d : _0x280d4d ? [_0x280d4d] : 0;
                    var _0x42bfe5 = _0x26baf3 ? [_0x26baf3] : _0x191e79 ? [_0x191e79] : _0x280d4d;
                    if (_0x42bfe5 && 0 < _0x42bfe5.length) {
                        var _0x18077a = new PacketWriter(3 + 8 * _0x42bfe5.length);
                        _0x18077a.setUint8(108).setUint8(_0x26baf3 ? 0 : _0x191e79 ? 1 : 2).setUint8(_0x42bfe5.length);
                        for (let _0x12f9df = 0; _0x12f9df < _0x42bfe5.length; _0x12f9df++) {
                            _0x18077a.setUint32(_0x42bfe5[_0x12f9df]).setUint32(_0x42bfe5[_0x12f9df]);
                        }
                        _0x18077a.send();
                    }
                }
                showPartyInvite(allowPartyInvite);
                setPartyAnimations(allowPartyAnimations);
                setAutoFeedEnabled(autoFeedEnabled);
                _0x49adef = Date.now();
                _0x186b83 = (_0x27fdb0 = _0x49adef) + 6000;
                _0x17ba19();
                if (_0xd3f6e4) {
                    clearTimeout(_0xd3f6e4);
                    _0xd3f6e4 = 0;
                }
                if (_0x441f0a) {
                    clearInterval(_0x441f0a);
                    _0x441f0a = 0;
                }
                _0x441f0a = setInterval(_0x273ce2, 10000);
                if (_0x64a0d5) {
                    _0x5b3bf2();
                }
                if (_0x1518ea) {
                    _0x464ade();
                }
                _0x44ff99();
                _0x2e4161 = new Date().toDateString();
                _0x437b88 = localStorage.getItem("username");
                if (null == localStorage.getItem("newv") && null == _0x437b88) {
                    localStorage.setItem("newv", _0x2e4161);
                    new PacketWriter(2).setUint8(160).setUint8(_0x37e4a8).send();
                } else if (null != localStorage.getItem("newv") && localStorage.getItem("newv") == _0x2e4161) {
                    new PacketWriter(2).setUint8(160).setUint8(_0x37e4a8).send();
                }
                if (isMobile) {
                    sendSignal(182);
                }
            }
    }
}

function _0x13936d(_0x500864) {
    _0x500864 = _0x199a53[_0x500864];
    return _0x500864 || '';
}

function _0x23f78f(_0x283043) {
    for (var _0x412e71 = 0; _0x412e71 < _0x2c8f2a.length; ++_0x412e71) {
        var _0x3e9050 = _0x2c8f2a[_0x412e71];
        if (_0x3e9050.address == _0x283043) {
            return _0x3e9050;
        }
    }
    return null;
}

function _0x40eece(_0x16a881) {
    if (_0x16a881 != _0x13936d(17) && $(".agma-logo").hasClass("agma_corona-simulator")) {
        $(".agma-logo").removeClass("agma_corona-simulator");
    }
    if (_0x16a881 == _0x13936d(15)) {
        $(".agma-logo").attr("src", "img/agma_royale_lo.png");
    } else if (_0x16a881 == _0x13936d(17)) {
        $(".agma-logo").attr("src", "img/coronavirus_simulator_game.png");
        $(".agma-logo").addClass("agma_corona-simulator");
    } else {
        $(".agma-logo").attr("src", "img/agmalogo_a.png");
    }
}

function _0x1afbd7() {
    var _0x45538d = $("#requestList").hasClass("active") ? 1 : 0;
    var _0x45538d = {
        "friendlist": _0x468d84,
        "activeTab": _0x45538d,
        "Jt": _0x5b3d82
    };
    var _0x2903e8 = $($("#friendDialog li.active a").attr("href"));
    var _0x90c63c = 0 < _0x2903e8.length ? _0x2903e8[0].id : '';
    var _0x244e69 = ++_0x2530ff;
    var _0x4f8496 = false;
    for (var _0x3773a5 = 0; _0x3773a5 < _0x468d84.length; ++_0x3773a5) {
        var _0x45538d;
        var _0x45538d;
        var _0x2903e8;
        var _0x90c63c;
        var _0x244e69;
        var _0x4f8496;
        var _0x3773a5;
        if (!(_0x2903e8 = _0x468d84[_0x3773a5]).accepted && _0x2903e8.isRequester) {
            _0x4f8496 = true;
            break;
        }
    }
    if (_0x4f8496) {
        $("#friendRequestsBell").addClass("red");
    } else {
        $("#friendRequestsBell").removeClass("red");
    }
}

function _0x2e104c() {
    var _0x2187e9 = {
        width: '',
        height: ''
    };
    if (_0x363e25) {
        document.getElementById("friendAddInput").blur();
        $("#friendDialog").stop(true, false).removeClass("shown").css(_0x2187e9).delay(200).hide(0);
        _0x363e25 = false;
        if (_0x3f3ed9) {
            clearInterval(_0x3f3ed9);
            _0x3f3ed9 = 0;
        }
    } else {
        $("#friendDialog").stop(true, false).show(0).addClass("shown").css({
            "width": 0 < _0x2de48c ? _0x2de48c + "px" : '',
            "height": 0 < _0x517404 ? _0x517404 + "px" : ''
        }).delay(300).show(0, _0x4d3094);
        _0x363e25 = true;
        if (!_0x3f3ed9) {
            if (5000 < Date.now() - _0x21e585 || _0x5b3d82 != _0x109288 || _0xea465f.toLowerCase() != _0x3ebb17.toLowerCase()) {
                _0xbcbc52();
            }
            _0x3f3ed9 = setInterval(_0xbcbc52, 28000);
        }
    }
}

function _0xbcbc52() {
    if (isReady() && _0x109288) {
        sendSignal(80);
    } else {
        _0x2f6a16();
    }
}

function _0x2f6a16() {
    if (0 != _0x468d84.length || _0x5b3d82 || '' != _0x3ebb17) {
        _0x5b3d82 = !(_0x468d84 = []);
        _0x3ebb17 = '';
        _0xd85888 = _0x6c92d3 = _0x3e53e0 = 0;
        _0x1afbd7();
    } else {
        $("#friendDialogMessage").text("Login to see your friendlist");
    }
}

function _0x4d3094() {
    var _0x39f84e;
    var _0x22af33;
    var _0x5990ff;
    var _0x4ebe0d;
    var _0x5dd920 = ~~(Math.max(200 * Math.min(1.6 * _0x1058ed, _0x53f1a5, 1400) / 1400, 90) + 0.5) / 200;
    var _0x5dd920 = _0x36d371 || isMobile && (15 == _0x77f7dd || 17 == _0x77f7dd) ? 20 + ~~(200 * _0x5dd920 + 0.5) : 10;
    $("#btnFriends").css("right", _0x5dd920 + "px");
    var _0x4abb41 = $("#friendDialog");
    _0x4ebe0d = _0x363e25 ? (_0x22af33 = _0x4abb41.outerHeight() * (isMobile || _0x4386c1 ? 0.7 : 1), _0x39f84e = _0x4abb41.outerWidth() * (isMobile || _0x4386c1 ? 0.7 : 1), _0x5990ff = (_0x4ebe0d = _0x4abb41.offset()).top, _0x4ebe0d = _0x4ebe0d.left, _0x5990ff = Math.clamp(_0x5990ff, 0, _0x1058ed - _0x22af33), Math.clamp(_0x53f1a5 - _0x4ebe0d - _0x39f84e, 0, _0x53f1a5 - _0x39f84e)) : (_0x5990ff = 12 + (_0x22af33 = isMobile || _0x4386c1 ? 28 : 40), isMobile || _0x4386c1 ? 0 : _0x5dd920 + _0x22af33);
    _0x4abb41.css({
        "right": _0x4ebe0d + "px",
        "top": _0x5990ff + "px"
    });
}

function _0x569497(_0x429c2c) {
    var _0x4bcacc;
    var _0x46fcff;
    var _0x38035e;
    var _0x5b76e2 = $("#friendDialog");

    function _0xaea786(_0x4fa54d) {
        if (_0x363e25) {
            _0x5b76e2.css({
                "right": _0x53f1a5 - (_0x4fa54d.pageX - _0x46fcff) + "px",
                "top": _0x4fa54d.pageY - _0x38035e + "px"
            });
        } else {
            _0x5c83f9();
        }
    }

    function _0x3756b9(_0x8882e1) {
        if (0 == _0x8882e1.button) {
            _0x5c83f9();
        }
    }

    function _0x5c83f9() {
        _0x5b76e2.removeClass("actives");
        document.body.removeEventListener("mousemove", _0xaea786, false);
        document.body.removeEventListener("mouseup", _0x3756b9, false);
        document.body.removeEventListener("mouseleave", _0x5c83f9, false);
    }
    if (!(0 != _0x429c2c.button || _0x5b76e2.hasClass("actives"))) {
        _0x4bcacc = _0x5b76e2.offset();
        _0x46fcff = _0x429c2c.pageX - _0x4bcacc.left - _0x5b76e2.width() * (isMobile || _0x4386c1 ? 0.7 : 1);
        _0x38035e = _0x429c2c.pageY - _0x4bcacc.top;
        _0x5b76e2.addClass("actives");
        document.body.addEventListener("mousemove", _0xaea786, false);
        document.body.addEventListener("mouseup", _0x3756b9, false);
        document.body.addEventListener("mouseleave", _0x5c83f9, false);
    }
}

function _0x20ddff(_0x22b948) {
    var _0x1bf92b;
    var _0x330bf8;
    var _0x25ffd4;
    var _0x3caddb;
    var _0x36ed80;
    var _0x1c3998;
    var _0x48b630 = $("#friendDialog");

    function _0x135ea0(_0x1e003d) {
        if (_0x363e25) {
            _0x2de48c = Math.clamp(_0x3caddb + (_0x1e003d.clientX - _0x330bf8) / (isMobile || _0x4386c1 ? 0.7 : 1), 200, _0x53f1a5);
            _0x517404 = Math.clamp(_0x36ed80 + (_0x1e003d.clientY - _0x25ffd4) / (isMobile || _0x4386c1 ? 0.7 : 1), 240, _0x1058ed);
            _0x48b630.css({
                "width": _0x2de48c + "px",
                "height": _0x517404 + "px",
                "right": _0x1c3998 - (_0x2de48c - _0x3caddb) * (isMobile || _0x4386c1 ? 0.7 : 1) + "px"
            });
        } else {
            _0x5e3774();
        }
    }

    function _0x426fef(_0x1a7f28) {
        if (0 == _0x1a7f28.button) {
            _0x5e3774();
        }
    }

    function _0x5e3774() {
        _0x48b630.removeClass("actives");
        document.body.removeEventListener("mousemove", _0x135ea0, false);
        document.body.removeEventListener("mouseup", _0x426fef, false);
        document.body.removeEventListener("mouseleave", _0x5e3774, false);
    }
    if (!(0 != _0x22b948.button || _0x48b630.hasClass("actives"))) {
        _0x1bf92b = window.getComputedStyle(document.getElementById("friendDialog"));
        _0x330bf8 = _0x22b948.clientX;
        _0x25ffd4 = _0x22b948.clientY;
        _0x3caddb = parseInt(_0x1bf92b.width);
        _0x36ed80 = parseInt(_0x1bf92b.height);
        _0x1c3998 = parseInt(_0x1bf92b.right);
        _0x48b630.addClass("actives");
        document.body.addEventListener("mousemove", _0x135ea0, false);
        document.body.addEventListener("mouseup", _0x426fef, false);
        document.body.addEventListener("mouseleave", _0x5e3774, false);
    }
}

function _0x4d8d48() {
    var _0x2f7355 = {
        overflow: ''
    };
    _0x34cf3b = _0x34cf3b ? ($("#settingsDialog").stop(true, false).css(_0x2f7355).removeClass("shown").delay(200).hide(0), false) : ($("#settingsDialog").stop(true, false).show(0).addClass("shown").delay(300).queue(function(_0x261f27) {
        var _0x193b63 = {
            overflow: isMobile ? "auto" : ''
        };
        $(this).css(_0x193b63);
        _0x261f27();
    }), true);
}

function _0x28b056(_0x29258d) {
    var _0x430831 = undefined !== _0x29258d;
    var _0x29258d = _0x430831 ? _0x29258d : $("#tabAS").is(":checked") ? 2 : $("#tabNA").is(":checked") ? 1 : 0;
    var _0x29258d = {
        "gameservers": _0x2c8f2a,
        "activeTab": _0x29258d
    };
    var _0x3c2833 = ++_0x2dc336;
    $.post("gameservers.php", {
        "data": JSON.stringify(_0x29258d)
    }, function(_0x5f3c9a) {
        var _0xf011c4;
        if (_0x3d6c5f < _0x3c2833 && (_0xf011c4 = 0 < (_0xf011c4 = $("#serv input:radio:checked")).length ? _0xf011c4[0].id : '', document.getElementById("serv").innerHTML = _0x5f3c9a, _0x3d6c5f = _0x3c2833, (_0x5f3c9a = _0x23f78f(_0x256390)) && ($("table.server-table tr").removeClass("active"), $("#serverRow" + _0x5f3c9a.id).addClass("active")), !_0x430831) && _0xf011c4) {
            $("#" + _0xf011c4).prop("checked", true).change();
        }
    }, "html");
}

function _0x38aef7() {
    if (!_0x34761e) {
        _0x34761e = true;
        $.post("hscore2.php", {}, function(_0x417f01) {
            document.getElementById("phpHiscores").innerHTML = _0x417f01;
        }, "html");
    }
}

function _0x2aa794() {
    var _0x4f2e5c = $("#skinsCustomTab").hasClass("active") ? 4 : $("#skinsVIPTab").hasClass("active") ? 3 : $("#skinsBuyTab").hasClass("active") ? 2 : $("#skinsLevelTab").hasClass("active") ? 1 : 0;
    var _0x4f2e5c = {
        "skins": _0x2e4195,
        "activeTab": _0x4f2e5c,
        "currentSkin": _0x28aabd,
        "customSkinPrice": _0x520472,
        "supportFileDragAndDrop": _0x5ebb13
    };
    var _0x513e33 = ++_0x36e61c;
    $.post("skins.php", {
        "data": JSON.stringify(_0x4f2e5c)
    }, function(_0xe09ea3) {
        if (_0xcda4aa < _0x513e33) {
            document.getElementById("phpSkins").innerHTML = _0xe09ea3;
            if ("undefined" != typeof Storage) {
                if (!localStorage.fbSkin) {
                    $("#skinUseBtn73").text("Facebook Like").attr("onclick", "fbLikeSkin();");
                }
                if (!localStorage.ytSkin) {
                    $("#skinUseBtn71").text("YouTube Subscribe").attr("onclick", "YouTubeSubSkin(71);");
                }
                for (var _0x43e1a0 = 0; _0x43e1a0 < _0x26690d.length; _0x43e1a0++) {
                    var _0x49df12 = _0x26690d[_0x43e1a0];
                    if (!localStorage["ytSkin" + _0x49df12.s]) {
                        $("#skinUseBtn" + _0x49df12.s).text("YouTube Subscribe").attr("onclick", "YouTubeSubSkin(" + _0x49df12.s + ", '" + _0x49df12.c + "');");
                    }
                    $("#skinContainer" + _0x49df12.s).append("<a href=\"https://www.youtube.com/channel/" + _0x49df12.c + "\" target=\"_blank\" title=\"YouTuber Skin\"><div class=\"skin-tag skin-tag-yt\"></div>" + (_0x49df12.cc ? "<div title=\"Agma.io Content Creator\" class=\"skin-tag skin-tag-star\"></div>" : '') + "</a>");
                }
            }
            _0xe09ea3 = $($("#menugold li.active a").attr("href"));
            if (_0xe09ea3 && !_0xe09ea3.hasClass("in active")) {
                $("#skinBrowser div.tab-pane").removeClass("in active");
                _0xe09ea3.addClass("in active");
            }
            _0x29ae07 = true;
            _0xcda4aa = _0x513e33;
            if (_0x16de9b) {
                _0x16de9b();
                _0x16de9b = null;
            }
        }
    }, "html");
}

function _0x5b3bf2() {
    _0x29ae07 = !(_0x64a0d5 = true);
    if (_0x173277 && $("#skinsTab").hasClass("active")) {
        _0x4b2336();
    }
}

function _0x4b2336() {
    if (isReady()) {
        sendSignal(115);
    } else if (0 < _0x2e4195.length) {
        _0x2e4195 = [];
        _0x2aa794();
    }
}

function _0x5df715(_0x51b78e) {
    if (_0x28aabd != _0x51b78e) {
        if (0 != _0x28aabd) {
            $("#skinContainer" + _0x28aabd).removeClass("selected");
            $("#skinUseBtn" + _0x28aabd).removeClass("btn-default").addClass("btn-primary").text("Use");
        }
        if (0 != (_0x28aabd = _0x51b78e)) {
            $("#skinContainer" + _0x28aabd).addClass("selected");
            $("#skinUseBtn" + _0x28aabd).removeClass("btn-primary").addClass("btn-default").text("Cancel");
        }
        _0x113238();
    }
}

function _0x568cd2() {
    var _0x71f2bc = [];
    for (var _0x43878d = 0; _0x43878d < _0x4bb827.length; _0x43878d++) {
        _0x71f2bc.push(_0x4bb827[_0x43878d].wearId);
    }
    var _0x382bd7 = {
        wearables: _0x51aa44,
        currentWearables: _0x71f2bc,
        version: 9
    };
    var _0x1ac90e = ++_0x35e5f6;
    $.post("wearables.php", {
        "data": JSON.stringify(_0x382bd7)
    }, function(_0x42c4b7) {
        if (_0x2ad6ee < _0x1ac90e && (document.getElementById("phpWearables").innerHTML = _0x42c4b7, resetMasterTooltips("#phpWearables"), _0x529909 = true, _0x2ad6ee = _0x1ac90e, _0x3730e0)) {
            _0x3730e0();
            _0x3730e0 = null;
        }
    }, "html");
}

function _0x464ade() {
    _0x529909 = !(_0x1518ea = true);
    if (_0x173277 && $("#wearablesTab").hasClass("active")) {
        _0x5a2fbe();
    }
}

function _0x5a2fbe() {
    if (isReady()) {
        sendSignal(114);
    } else if (0 < _0x51aa44.length) {
        _0x51aa44 = [];
        _0x568cd2();
    }
}

function _0x5f4edb(_0x42f503, _0x21ad86, _0x1c70b7, _0x55241a, _0x5e7c26) {
    _0x5e7c26 = !!_0x5e7c26;
    for (var _0x44c49 = 0; _0x44c49 < _0x4bb827.length; _0x44c49++) {
        if (_0x4bb827[_0x44c49].wearId == _0x42f503) {
            _0x4bb827.splice(_0x44c49, 1);
            break;
        }
    }
    $("#wearableContainer" + _0x42f503).addClass("selected");
    $("#wearableUseBtn" + _0x42f503).removeClass("btn-primary").addClass("btn-default").text("Cancel");
    $("#wearableTryBtn" + _0x42f503).removeClass("btn-primary").addClass("btn-default").text("Cancel");
    var _0x457b8 = 0;
    for (var _0x44c49 = _0x4bb827.length - 1; 0 <= _0x44c49; _0x44c49--) {
        if (_0x4bb827[_0x44c49].zIndex <= _0x1c70b7) {
            _0x457b8 = _0x44c49 + 1;
            break;
        }
    }
    var _0x1f6a9f = {
        wearId: _0x42f503,
        P: _0x21ad86,
        zIndex: _0x1c70b7,
        wearGroup: _0x55241a,
        wearTry: _0x5e7c26
    };
    _0x4bb827.splice(_0x457b8, 0, _0x1f6a9f);
    _0x113238();
}

function _0x5eb440(_0x51e372) {
    for (var _0x49c412 = 0; _0x49c412 < _0x4bb827.length; _0x49c412++) {
        if (_0x4bb827[_0x49c412].wearId == _0x51e372) {
            $("#wearableContainer" + _0x51e372).removeClass("selected");
            $("#wearableUseBtn" + _0x51e372).removeClass("btn-default").addClass("btn-primary").text("Use");
            $("#wearableTryBtn" + _0x51e372).removeClass("btn-default").addClass("btn-primary").text("Try");
            _0x4bb827.splice(_0x49c412, 1);
            _0x113238();
            break;
        }
    }
}

function _0x94dbbc() {
    for (; 0 < _0x4bb827.length;) {
        _0x5eb440(_0x4bb827[0].wearId);
    }
}

function _0x5cfc91(_0x30baa2) {
    _0x94dbbc();
    for (var _0x27f368 = 0; _0x27f368 < _0x30baa2.length; _0x27f368++) {
        _0x5f4edb(_0x30baa2[_0x27f368].wearId, _0x30baa2[_0x27f368].P, _0x30baa2[_0x27f368].zIndex, _0x30baa2[_0x27f368].wearGroup, _0x30baa2[_0x27f368].wearTry);
    }
}

function _0x4e199b() {
    var _0x59fc96 = _0x4bb827.length;
    for (var _0x12962c = 0; _0x12962c < _0x59fc96; _0x12962c++) {
        if (_0x4bb827[_0x12962c].wearTry && (_0x5eb440(_0x4bb827[_0x12962c].wearId), _0x4bb827.length < _0x59fc96)) {
            _0x59fc96--;
            _0x12962c--;
        }
    }
}

function _0x113238() {
    if (0 != _0x28aabd) {
        $(".cell-example .skin-example").css("background-image", "url('skins/" + _0x28aabd.toString() + "_lo.png?u=" + (_0x48a780[_0x28aabd] || 0) + "')");
    } else {
        $(".cell-example .skin-example").css("background-image", "none");
        $("#skinExampleMenu").css("background-image", "url('skins/0_lo.png?u=0')");
    }
    for (var _0x3545ca = 1; _0x3545ca <= 5; _0x3545ca++) {
        if (_0x3545ca <= _0x4bb827.length) {
            var _0x3bf6ee = _0x4bb827[_0x3545ca - 1];
            var _0x4304c3 = _0x464b91[_0x3bf6ee.P] || '';
            try {
                $(".cell-example .wear-example-" + _0x3545ca).css("background-image", "url('wearables/" + _0x3bf6ee.wearId.toString() + "_lo.png?v=" + wearablesApiVersion + "')").removeClass("center top bottom left right max".replace(_0x4304c3, '')).addClass(_0x4304c3).show();
            } catch (_0x4709fb) {
                console.log("ERROR IN wear.wearId.toString()");
                console.log(_0x4709fb);
            }
        } else {
            $(".cell-example .wear-example-" + _0x3545ca).css("background-image", "none").hide();
        }
    }
}

function _0x5eca46(_0x5968b9) {
    var _0x9738b8 = _0x54ad2a(_0x5968b9);
    if (0 <= _0x9738b8.skinId) {
        $("#cellExampleShop div").addClass("faded");
        $("#skinExampleShop").removeClass("faded");
        document.body.style.cursor = "pointer";
    } else {
        if (0 < _0x9738b8.wearId) {
            for (var _0x45da10 = 0; _0x45da10 < _0x4bb827.length; _0x45da10++) {
                if (_0x4bb827[_0x45da10].wearId == _0x9738b8.wearId) {
                    $("#cellExampleShop div").addClass("faded");
                    $("#wearExampleShop" + (_0x45da10 + 1)).removeClass("faded");
                    document.body.style.cursor = "pointer";
                    break;
                }
            }
        } else {
            _0x29cf6b();
        }
    }
}

function _0x29cf6b() {
    $("#cellExampleShop div").removeClass("faded");
    document.body.style.cursor = "default";
}

function _0x35e23c(_0x4a9343) {
    var _0x53b2ef = _0x54ad2a(_0x4a9343);
    if (0 <= _0x53b2ef.skinId) {
        showSkin(_0x53b2ef.skinId, false);
    } else if (0 < _0x53b2ef.wearId) {
        showWearable(_0x53b2ef.wearId, false);
    }
    _0x4a9343.stopPropagation();
}

function _0x22a3b0(_0x1cfe4b) {
    var _0x2ad0f9;
    if (2 == _0x1cfe4b.button && (0 < (_0x2ad0f9 = _0x54ad2a(_0x1cfe4b)).skinId || 0 < _0x2ad0f9.wearId)) {
        if (0 < _0x2ad0f9.skinId) {
            _0x5df715(0);
        } else {
            _0x5eb440(_0x2ad0f9.wearId);
        }
        _0xbb1a8c();
        _0x5eca46(_0x1cfe4b);
    }
    _0x1cfe4b.stopPropagation();
}

function _0x54ad2a(_0x36ae78) {
    var _0x1e0c7d = $("#cellExampleShop").offset();
    var _0x3f4eb6 = ~~(_0x36ae78.pageX - _0x1e0c7d.left);
    var _0xb388cb = ~~(_0x36ae78.pageY - _0x1e0c7d.top);
    if (0 < _0x4bb827.length) {
        if (!_0x3b426e) {
            _0x3b426e = document.createElement("canvas");
            _0x2ed271 = _0x3b426e.getContext("2d");
        }
        _0x3b426e.width = _0x3b426e.height = 204;
    }
    for (var _0x1c6cb6 = _0x4bb827.length; 0 <= _0x1c6cb6; _0x1c6cb6--) {
        if (0 != _0x1c6cb6) {
            var _0x2cb37c = _0x4bb827[_0x1c6cb6 - 1];
            var _0x44b7f4 = _0x247b5a["W" + _0x2cb37c.wearId + "_lo"];
            if (!_0x44b7f4) {
                _0x22f945(_0x2cb37c.wearId);
                _0x44b7f4 = _0x247b5a["W" + _0x2cb37c.wearId + "_lo"];
            }
            if (_0x44b7f4 && _0x44b7f4.complete && 0 != _0x44b7f4.width) {
                var _0x5c8542 = _0x2cb37c.P;
                var _0x116ce6 = 5 == _0x5c8542 ? 204 : 122;
                var _0x37eca3 = _0x2ed271.getImageData(_0x3f4eb6 - 2, _0xb388cb - 2, 5, 5).data;
                for (var _0x362355 = 0; _0x362355 < 25; _0x362355++) {
                    var _0x5c8542;
                    var _0x116ce6;
                    var _0x37eca3;
                    var _0x362355;
                    if (24 < _0x37eca3[4 * _0x362355 + 3]) {
                        return {
                            "skinId": -1,
                            "wearId": _0x2cb37c.wearId
                        };
                    }
                }
            }
        } else {
            _0x44b7f4 = 102 - _0x3f4eb6;
            _0x5c8542 = 102 - _0xb388cb;
            var _0x24dadd = {
                skinId: _0x28aabd,
                wearId: -1
            };
            if (_0x44b7f4 * _0x44b7f4 + _0x5c8542 * _0x5c8542 <= 1764) {
                return _0x24dadd;
            }
        }
    }
    var _0x4b17bd = {
        skinId: -1,
        wearId: -1
    };
    return _0x4b17bd;
}

function _0x483791(_0x3ea76f) {
    var _0x5c20fb;
    if (0 != _0x3ea76f) {
        _0x5c20fb = _0x3ea76f.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        $("#coinsDash").text(_0x5c20fb);
        $(".progress-bar-coins").text(_0x5c20fb);
        _0x25b723.coins = _0x3ea76f;
    }
}

function _0x2bb62d(_0x1417e4, _0x51b030) {
    var _0x1d75bb;
    var _0x199ef8 = {
        "box-shadow": "0px 0px 30px 0px #69e32c",
        margin: "0px -5px 0px"
    };
    var _0x4d6dc2 = {
        "box-shadow": '',
        margin: ''
    };
    if (!(0 == _0x1417e4 && 0 == _0x51b030)) {
        _0x1d75bb = _0x1417e4 <= 0 ? 0 : Math.min(100 * _0x51b030 / (1000 * _0x1417e4), 100);
        $(".progress-bar").css("width", _0x1d75bb.toString() + "%");
        $(".exp-bar").text(~~_0x1d75bb + "%");
        if (0 != _0x1417e4) {
            (_0x1d75bb = $("#level,#level2")).text(_0x1417e4);
            if (50 <= _0x1417e4) {
                _0x1d75bb.css("background", "linear-gradient(to bottom, #e37655 50%, #d66249 50%)");
            } else {
                _0x1d75bb.css("background", '');
            }
            if (80 <= _0x1417e4) {
                $("#level").css(_0x199ef8);
            } else {
                $("#level").css(_0x4d6dc2);
            }
            _0x5b3bf2();
            _0x464ade();
        }
        _0x25b723.level = _0x1417e4;
        _0x25b723.exp = _0x51b030;
    }
}

function _0x44d9fa() {
    var _0x216027 = isMobile ? 100 : 400;
    for (var _0x5bb528 = Date.now(); 0 < _0x5af7fe.length && (_0x5bb528 >= 1800000 + _0x5af7fe[0].time || _0x5af7fe.length > _0x216027);) {
        _0x5af7fe.splice(0, 1);
    }
    _0x4cb089 = true;
}

function _0x14cfd2(_0x135d90, _0x1096c2, _0x46db45) {
    var _0x28448d = [_0x49dbad, _0x4df025, _0x59222b][_0x135d90][_0x1096c2];
    if (!_0x28448d) {
        _0x28448d = [_0x49dbad, _0x4df025, _0x59222b][_0x135d90][_0x1096c2] = [];
        [_0x463a1e, _0x2032b6, _0x5bdc9e][_0x135d90].push(_0x1096c2);
    }
    if (_0x28448d.length < 3) {
        _0x28448d.push(_0x46db45);
    } else {
        _0x28448d[_0x28448d.length - 1] = _0x46db45;
    }
}

function _0x468acc(_0x1edd5f, _0x1f5b67, _0x2ee8ab) {
    var _0x32de60 = [_0x49dbad, _0x4df025, _0x59222b][_0x1edd5f][_0x1f5b67];
    if (_0x32de60) {
        if (0 == _0x2ee8ab) {
            _0xfb52a(_0x1edd5f, _0x1f5b67);
        } else {
            for (var _0x14ce5d = 0; _0x14ce5d < _0x32de60.length; _0x14ce5d++) {
                if (_0x32de60[_0x14ce5d].ee == _0x2ee8ab) {
                    _0x32de60.splice(_0x14ce5d, 1);
                    _0x14ce5d--;
                }
            }
            if (0 == _0x32de60.length) {
                _0xfb52a(_0x1edd5f, _0x1f5b67);
            }
        }
    }
}

function _0xfb52a(_0x20a150, _0x259096) {
    if (0 == _0x20a150) {
        delete _0x49dbad[_0x259096];
    } else if (1 == _0x20a150) {
        delete _0x4df025[_0x259096];
    } else {
        delete _0x59222b[_0x259096];
    }
}

function _0x580067(_0x4f43ee) {
    var _0x1033ca = _0x36887a - _0x2263d7 * _0x3e50d9;
    var _0xca52f8 = _0x19f1c7 - _0x223539 * _0x3e50d9;
    if (isReady() && !_0x4400ec && (Math.max(_0x2df455 < _0x28fccb ? _0x28fccb - _0x2df455 : _0x2df455 - _0x28fccb, _0x58d9ac < _0x4bd57d ? _0x4bd57d - _0x58d9ac : _0x58d9ac - _0x4bd57d) > 0.01 && 0 <= _0x1033ca * _0x1033ca + _0xca52f8 * _0xca52f8 - 64 || _0x4f43ee)) {
        (_0x1033ca = new PacketWriter(9 + debugDataSize)).setUint8(0).setInt32(_0x2df455).setInt32(_0x58d9ac);
        if (0 < debugDataSize) { // NOTE: is it possible that this is what bans you ?
            if (window.useDebugPrints) {
                console.log("! Including debug data in packet");
            }
            _0x1033ca.setUint8(Number(_0x4400ec)).setUint8(Number(_0x4f43ee));
        }
        _0x1033ca.send();
        _0x28fccb = _0x2df455;
        _0x4bd57d = _0x58d9ac;
    }
    if (_0x181957) {
        _0x4574cb(_0x4f43ee);
    }
}
if (!_0x2a0343) {
    _0x2a0343 = true;
    $.post("gmshtout.php", {}, function(_0x4e0944) {
        var _0x346608 = document.getElementById("gmShoutoutUser");
        if (_0x346608 && _0x4e0944) {
            _0x346608.textContent = _0x4e0944;
        }
    }, "html");
}
window.resetMasterTooltips = function(_0x4132db) {
    $((_0x4132db || '') + " .masterTooltip").hover(function(_0x53477a) {
        var _0x358f02 = '';
        var _0xad7dd8 = '';
        var _0x55aa11 = $(this).find("h4");
        if (0 < _0x55aa11.length) {
            _0x358f02 += _0x55aa11[0].innerText + " ";
        }
        if (0 < (_0x55aa11 = $(this).find("h3")).length) {
            _0x358f02 += _0x55aa11[0].innerText + " ";
        }
        if (0 < (_0x55aa11 = $(this).find("img")).length) {
            _0xad7dd8 = "<img src=\"" + _0x55aa11[0].src + "\" class=\"" + _0x55aa11.prop("class") + "\" style=\"width:30px\">";
        }
        var _0x55aa11 = $(this).attr("title");
        $(this).data("tipText", _0x55aa11).removeAttr("title");
        $("<p class=\"tooltip1\"></p>").text(_0x55aa11).prepend(_0xad7dd8 || _0x358f02 ? "<div class=\"tooltip1-header\">" + _0xad7dd8 + "  " + _0x358f02 + "</div>" : '').appendTo("body").fadeIn("slow").css({
            "top": _0x53477a.pageY + 10,
            "left": _0x53477a.pageX + 20,
            "maxWidth": Math.min(window.innerWidth - _0x53477a.pageX - 40, 300) + "px"
        });
    }, function() {
        $(this).attr("title", $(this).data("tipText"));
        $(".tooltip1").remove();
    }).mousemove(function(_0xda58c8) {
        $(".tooltip1").css({
            "top": _0xda58c8.pageY + 10,
            "left": _0xda58c8.pageX + 20,
            "maxWidth": Math.min(window.innerWidth - _0xda58c8.pageX - 40, 300) + "px"
        });
    });
};
window.showSkin = function(_0x56bb91, _0x263a38) {
    var _0xc4a55e;
    var _0x3a8f23 = _0x173277;
    var _0x4ab28e = $("#skinsTab").hasClass("active");

    function _0x456666() {
        var _0x16e8da;
        var _0x39e0a6;
        if (_0x29ae07 && !_0xc4a55e && (0 < (_0x16e8da = $("#skinContainer" + _0x56bb91).closest("#skinBrowser div.tab-pane")).length ? _0x39e0a6 = $("#menugold li a[href=\"#" + _0x16e8da[0].id + "\"]") : 0 < (_0x16e8da = $("#skinBrowser div.publicskins-page-content:contains(skinContainer" + _0x56bb91 + ")")).length && (showPublicSkinsPage(_0x16e8da[0].id.substring(22)), _0x39e0a6 = $("#skinsCustomTab a")), _0x39e0a6)) {
            if (!(_0xc4a55e = _0x39e0a6.parent("li").hasClass("active"))) {
                _0x39e0a6.one("shown.bs.tab", function() {
                    _0xc4a55e = true;
                    _0x457f56();
                }).tab("show");
            }
            _0x457f56();
        }
    }

    function _0x457f56() {
        var _0x62965e;
        var _0x4bc858;
        var _0x5edeaf;
        if (_0x3a8f23 && _0x4ab28e && _0x29ae07 && _0xc4a55e && (_0x62965e = document.getElementById("skinContainer" + _0x56bb91)) && (_0x62965e.scrollIntoView(), 0 < (_0x4bc858 = $($("#menugold li.active a").attr("href") + " .skin-data").first()).length && _0x4bc858.scrollTop(_0x4bc858.scrollTop() - 8), _0x263a38) && 0 < (_0x5edeaf = $(_0x62965e)).length) {
            _0x5edeaf.off("webkitAnimationEnd animationEnd").removeClass("shopitem-highlight");
            setTimeout(function() {
                _0x5edeaf.one("webkitAnimationEnd animationEnd", function() {
                    _0x5edeaf.removeClass("shopitem-highlight");
                }).addClass("shopitem-highlight");
            }, 0);
        }
    }
    if (0 == _0x56bb91) {
        if (!_0x3a8f23) {
            $(".bs-example-modal-lg").modal("show");
        }
        if (!_0x4ab28e) {
            $("#skinsTab a").tab("show");
        }
    } else {
        _0xc4a55e = false;
        if (!_0x3a8f23) {
            $(".bs-example-modal-lg").one("shown.bs.modal", function() {
                _0x3a8f23 = true;
                _0x457f56();
            }).modal("show");
        }
        if (!_0x4ab28e) {
            $("#skinsTab a").one("shown.bs.tab", function() {
                _0x4ab28e = true;
                _0x457f56();
            }).tab("show");
        }
        if (!_0x29ae07) {
            _0x16de9b = _0x456666;
        }
        _0x456666();
    }
};
window.showWearable = function(_0xf6251, _0x579537) {
    var _0x48c41d = _0x173277;
    var _0x51e042 = $("#wearablesTab").hasClass("active");

    function _0x133036() {
        var _0x456608;
        var _0x416bee;
        var _0x57c909;
        if (_0x48c41d && _0x51e042 && _0x529909 && (_0x456608 = document.getElementById("wearableDiv" + _0xf6251)) && (_0x456608.scrollIntoView(), 0 < (_0x416bee = $("#menuhoner .tab-container-section").first()).length && _0x416bee.scrollTop(_0x416bee.scrollTop() - 8), _0x579537) && 0 < (_0x57c909 = $(_0x456608)).length) {
            _0x57c909.off("webkitAnimationEnd animationEnd").removeClass("shopitem-highlight");
            setTimeout(function() {
                _0x57c909.one("webkitAnimationEnd animationEnd", function() {
                    _0x57c909.removeClass("shopitem-highlight");
                }).addClass("shopitem-highlight");
            }, 0);
        }
    }
    if (0 == _0xf6251) {
        if (!_0x48c41d) {
            $(".bs-example-modal-lg").modal("show");
        }
        if (!_0x51e042) {
            $("#wearablesTab a").tab("show");
        }
    } else {
        if (!_0x48c41d) {
            $(".bs-example-modal-lg").one("shown.bs.modal", function() {
                _0x48c41d = true;
                _0x133036();
            }).modal("show");
        }
        if (!_0x51e042) {
            $("#wearablesTab a").one("shown.bs.tab", function() {
                _0x51e042 = true;
                _0x133036();
            }).tab("show");
        }
        if (!_0x529909) {
            _0x3730e0 = _0x133036;
        }
        _0x133036();
    }
};
var _0x14e1ef = [];
var _0x54b7d3 = 0;
var _0x4d35f1 = !(window.showShopItem = function(_0x3e0889, _0x259c72, _0x3f108f) {
    var _0x3eb999 = _0x173277;
    var _0x54659a = $("#" + _0x3e0889);
    var _0x1b4d11 = _0x54659a.hasClass("active");

    function _0xbad1a4() {
        var _0x445826;
        var _0x1129fd;
        if (_0x3eb999 && _0x1b4d11 && (_0x1129fd = document.getElementById(_0x259c72)) && (_0x1129fd.scrollIntoView(), 0 < (_0x445826 = $(_0x1129fd)).length) && (0 < (_0x1129fd = $($("#" + _0x3e0889 + " a").attr("href") + " .tab-container-section").first()).length && _0x1129fd.scrollTop(_0x445826.position().top), _0x3f108f) && 0 < (_0x445826 = _0x445826.parent("li")).length) {
            _0x445826.off("webkitAnimationEnd animationEnd").removeClass("shopitem-highlight");
            setTimeout(function() {
                _0x445826.one("webkitAnimationEnd animationEnd", function() {
                    _0x445826.removeClass("shopitem-highlight");
                }).addClass("shopitem-highlight");
            }, 0);
        }
    }
    if (_0x259c72 && 0 != _0x54659a.length) {
        if (!_0x3eb999) {
            $(".bs-example-modal-lg").one("shown.bs.modal", function() {
                _0x3eb999 = true;
                _0xbad1a4();
            }).modal("show");
        }
        if (!_0x1b4d11) {
            $("#" + _0x3e0889 + " a").one("shown.bs.tab", function() {
                _0x1b4d11 = true;
                _0xbad1a4();
            }).tab("show");
        }
        _0xbad1a4();
    } else {
        if (!_0x3eb999) {
            $(".bs-example-modal-lg").modal("show");
        }
        if (!_0x1b4d11) {
            $("#" + _0x3e0889 + " a").tab("show");
        }
    }
});
let _0x523f93 = (_0x9f381 = []) => {
    if (0 === _0x9f381.length) {
        _0x54b7d3 = 0;
        return false;
    }
    var _0x5c953c;
    var _0x3577ba = _0x9f381[0][0];
    var _0x290217 = _0x9f381[0][1];
    let _0x5c5e96 = null;
    for (let _0x86764a = 1; _0x86764a < _0x9f381.length; _0x86764a++) {
        var _0x52cc90 = _0x9f381[_0x86764a][0];
        var _0x22ac0f = _0x9f381[_0x86764a][1];
        if (_0x52cc90 - _0x3577ba != 0) {
            if (null === _0x5c5e96) {
                _0x5c5e96 = +(_0x5c5e96 = (_0x22ac0f - _0x290217) / (_0x52cc90 - _0x3577ba)).toFixed(1);
            } else {
                let _0x223a07 = (_0x22ac0f - _0x290217) / (_0x52cc90 - _0x3577ba);
                if ((_0x223a07 = +_0x223a07.toFixed(1)) != _0x5c5e96) {
                    _0x54b7d3 = 0;
                    return false;
                }
            }
        }
    }
    if (!(4 != ++_0x54b7d3 || _0x4d35f1)) {
        _0x5c953c = Math.floor(10 * Math.random() + 10);
        _0x4d35f1 = true;
        setTimeout(function() {
            sendSignal(163);
            setTimeout(function() {
                _0x4d35f1 = false;
            }, 35000);
        }, 1000 * _0x5c953c);
    }
    return true;
};

function _0x4574cb(_0x10911a) {
    if (isReady() && _0x181957 && (Math.max(_0x21548d < _0x31d2d6 ? _0x31d2d6 - _0x21548d : _0x21548d - _0x31d2d6, _0x1598a0 < _0x34aaf6 ? _0x34aaf6 - _0x1598a0 : _0x1598a0 - _0x34aaf6) > 0.01 || _0x10911a)) {
        if (!_0x19bc6d) {
            if (_0x14e1ef.length < 30) {
                _0x14e1ef.push([Math.round(_0x34f96a), Math.round(_0x5079ce)]);
            }
        }
        new PacketWriter(10).setUint8(73).setUint8(_0x114a07 && 1 == _0x114a07.orientation ? 2 : 0).setInt32(_0x21548d).setInt32(_0x1598a0).send();
        _0x31d2d6 = _0x21548d;
        _0x34aaf6 = _0x1598a0;
    }
}

function _0x16a7a3(_0x5a4513, _0x2ba369) {
    if (isReady()) {
        new PacketWriter(1 + 2 * _0x2ba369.length).setUint8(_0x5a4513).setString(_0x2ba369).send();
    }
}

function _0x10236d() {
    if (_0x384d50) {
        clearTimeout(_0x384d50);
        _0x384d50 = 0;
    }
    _0x492c36 = true;
}

function _0x483c7e(_0x4bd171) {
    var _0x3d2512 = {
        wearId: 61,
        P: 1
    };
    var _0x49f824 = {
        wearId: 62,
        P: 1
    };
    var _0x2b1c0c = {
        wearId: 46,
        P: 1
    };
    var _0x24b1c0 = {
        wearId: 37,
        P: 1
    };
    var _0x2297bc = {
        wearId: 25,
        P: 1
    };
    var _0xe28e5 = {
        wearId: 28,
        P: 1
    };
    var _0x5526fb = {
        wearId: 60,
        P: 0
    };
    var _0x3d6a07 = {
        wearId: 58,
        P: 0
    };
    var _0x5735f3 = {
        wearId: 57,
        P: 0
    };
    var _0x18e0f0 = {
        wearId: 15,
        P: 0
    };
    var _0x59ab1b = {
        wearId: 38,
        P: 0
    };
    var _0x48b4f1 = _0x4bd171.trim().toLowerCase();
    var _0x4e2ef9 = [5797, 5810];
    var _0x1b76cc = _0x4e2ef9[1];
    var _0x4e2ef9 = _0x4e2ef9[0];
    var _0x1b76cc = Math.floor(Math.random() * (_0x1b76cc - _0x4e2ef9 + 1)) + _0x4e2ef9;
    var _0x4e2ef9 = [_0x3d2512, _0x49f824, _0x2b1c0c, _0x24b1c0, _0x2297bc, _0xe28e5];
    var _0x2df53d = [_0x5526fb, _0x3d6a07, _0x5735f3, _0x18e0f0, _0x59ab1b];
    var _0x4e2ef9 = _0x4e2ef9[Math.floor(Math.random() * _0x4e2ef9.length)];
    var _0x2df53d = _0x2df53d[Math.floor(Math.random() * _0x2df53d.length)];
    var _0x239f05 = {
        tagName: "KBD",
        innerHTML: "/ping"
    };
    if (/^(?:gachaCommand|\/gacha|\/gacha1|\/gacha2|\/gacha3|\/ping|\/fps)/.test(_0x48b4f1)) {
        if (/^(?:\/gacha3)/.test(_0x48b4f1)) {
            _0x12bbfc("Secret command... enjoy the skins and wearables!", false, true, 1, 5);
            tskngc(_0x1b76cc);
            var _0xdc8e74 = 0;
            for (var _0x47f09d = 0; _0x47f09d < _0x27324d.length; _0x47f09d++) {
                if (1 == _0x27324d[_0x47f09d].P) {
                    _0xdc8e74 = 1;
                }
            }
            if (_0xc52211) {
                for (_0x47f09d = 0; _0x47f09d < _0xc52211.length; _0x47f09d++) {
                    if (_0xc52211[_0x47f09d].B && 1 == _0xc52211[_0x47f09d].B.P) {
                        _0xdc8e74 = 1;
                    }
                }
            }
            if (_0xdc8e74) {
                _0x27324d = [_0x4e2ef9];
            } else {
                _0x27324d.push(_0x4e2ef9);
            }
            if (_0x3e08c0 || _0xc52211.length < 1) {
                _0x12bbfc("You must spawned in game to issue this command", false, true, 0, 5);
            } else {
                setNick(_0x5665cf);
            }
        } else {
            if (/^(?:\/gacha2)/.test(_0x48b4f1)) {
                _0x12bbfc("Secret command... enjoy the skins!", false, true, 1, 5);
                var _0xe1693f = 0;
                for (var _0x47f09d = 0; _0x47f09d < _0x27324d.length; _0x47f09d++) {
                    if (0 == _0x27324d[_0x47f09d].P) {
                        _0xe1693f = 1;
                    }
                }
                for (_0x47f09d = 0; _0x47f09d < _0xc52211.length; _0x47f09d++) {
                    if (_0xc52211[_0x47f09d].B && 0 == _0xc52211[_0x47f09d].B.P) {
                        _0xe1693f = 1;
                    }
                }
                if (_0xe1693f) {
                    _0x27324d = [_0x2df53d];
                } else {
                    _0x27324d.push(_0x2df53d);
                }
                tskngc(_0x1b76cc);
                if (_0x3e08c0 || _0xc52211.length < 1) {
                    _0x12bbfc("You must spawned in game to issue this command", false, true, 0, 5);
                } else {
                    setNick(_0x5665cf);
                }
            } else if (/^(?:\/gacha1)/.test(_0x48b4f1)) {
                _0x12bbfc("Secret command... enjoy the skins!", false, true, 1, 5);
                tskngc(_0x1b76cc);
                if (_0x3e08c0 || _0xc52211.length < 1) {
                    _0x12bbfc("You must spawned in game to issue this command", false, true, 0, 5);
                } else {
                    setNick(_0x5665cf);
                }
            } else if (/^(?:\/gacha)/.test(_0x48b4f1)) {
                toggleWearable(58, 0, 0, 3, false);
                tskngc(_0x1b76cc);
                if (_0x3e08c0 || _0xc52211.length < 1) {
                    _0x12bbfc("You must spawned in game to issue this command", false, true, 0, 5);
                } else {
                    setNick(_0x5665cf);
                }
                _0x12bbfc("Secret command... enjoy the skins!", false, true, 1, 5);
            } else if (/^(?:\/fps)/.test(_0x48b4f1)) {
                _0x495b59({
                    "tagName": "KBD",
                    "innerHTML": "/fps"
                });
            } else if (/^(?:\/ping)/.test(_0x48b4f1)) {
                _0x495b59(_0x239f05);
            }
        }
    } else if (isReady() && _0x4bd171.length < 200 && 0 < _0x4bd171.length && _0x4bd171.toLowerCase() != _0x40774a.toLowerCase()) {
        new PacketWriter(2 + 2 * _0x4bd171.length).setUint8(98).setUint8(1).setString(_0x4bd171).send();
    }
}

function sendSignal(_0x431f73) {
    if (isReady()) {
        new PacketWriter(1).setUint8(_0x431f73).send();
    }
}
var _0x18fde3;
var _0x3a188d = function(_0x3d9c37) {
    window.requestAnimationFrame(_0x3a188d);
    var _0x4fa646 = performance.now();
    var _0x3d9c37 = _0x3d9c37 || _0x4fa646;
    var _0x53278f = _0x3d9c37 - _0x18fde3;
    if (_0x1566f5 && (_0x2b6e3f++, 1000 < (_0x4fa646 = _0x4fa646) - _0x22a146)) {
        _0xe31776 = _0x451215 = ~~(1000 * _0x2b6e3f / (_0x4fa646 - _0x22a146) + 0.5);
        $("#fps").html("<span style=\"color:" + (_0x451215 < 30 ? "#f44" : _0x451215 < 50 ? "#fa4" : "#2d2") + ";\">" + _0x451215 + "</span>");
        _0x22a146 = _0x4fa646;
        _0x2b6e3f = 0;
    }
    if (isMobile && !_0xe01c9e && 1 < _0xc52211.length) {
        if (_0xe31776 <= 20) {
            _0x12bbfc("Your FPS seems to be low, graphics settings is set to low to reduce lag. You can change this in the Game Settings.", !(_0xe01c9e = true), true, 0, 10);
        }
    } else if (!_0xe01c9e && 1 < _0xc52211.length && _0xe31776 <= 20) {
        _0x12bbfc("Your FPS seems to be low, you can lower your graphics quality to reduce lag. You can change this in the Game Settings.", !(_0xe01c9e = true), true, 0, 10);
    }
    _0x18fde3 = _0x3d9c37 - _0x53278f % 16.666666666666668;
    var _0x451215 = Date.now();
    var _0x4fa646 = (waitPlayButtonDone || waitAdvertContinueDone) && (a8req > a8ref || msreq > msref);
    if (
        _0x451215 - _0x27fdb0 < 300 ||
        !(isReady()) ||
        _0x4cb089 ||
        _0x3c3250 ||
        _0xaade67 ||
        _0x2c6f91 ||
        _0x4fa646 && (framesCounter < a8req || _0x451215 >= msreq)
    ) {
        ++framesCounter;
        if (_0x4fa646 && framesCounter >= a8req && _0x451215 >= msreq) {
            allowAdvertContinue();
            allowPlayButton();
        }
        _0x215896();
    } else {
        console.warn("Frame skipped");
    }
};

function _0x41e1d9() {
    var _0xeb2666;
    _0xd28f67 = _0x1e208d ? _0x4c4c0f : (_0x29c97b = -1 != (_0xeb2666 = (() => {
        if (0 == _0xc52211.length) {
            return -1;
        }
        var _0x3cc956 = 0;
        for (var _0x3832fb = 0; _0x3832fb < _0xc52211.length; _0x3832fb++) {
            _0x3cc956 += _0xc52211[_0x3832fb].size;
        }
        return _0x3cc956;
    })()) ? 64 < _0xeb2666 ? Math.exp(Math.log(64 / _0xeb2666) / 2.5) : 1 : _0x29c97b) * _0x585560();
}

function _0xb03f97() {
    var _0x4351d6;
    if (_0x1e208d) {
        _0x423e1a *= (_0x4c4c0f = _0xd28f67) / (0.2 * _0x585560());
    } else {
        _0x4c4c0f = 1;
        _0x4351d6 = _0xd28f67;
        _0x41e1d9();
        _0x423e1a *= _0x4351d6 / _0xd28f67;
        _0xd28f67 = _0x4351d6;
    }
}

function _0x51c554() {
    window.scrollTo(0, 0);
    _0x53f1a5 = document.documentElement.clientWidth;
    _0x1058ed = document.documentElement.clientHeight;
    if (_0x53f1a5 < 1) {
        _0x53f1a5 = 1;
    }
    if (_0x1058ed < 1) {
        _0x1058ed = 1;
    }
    _0x358119 = window.devicePixelRatio || 1;
    _0x28ad4b = Math.min(_0x358119, 4 == _0x294d0a ? 0.5 : 3 == _0x294d0a ? 0.75 : 2 == _0x294d0a ? 1 : 1 == _0x294d0a ? (_0x358119 + 1) / 2 : _0x358119);
    _0x1fc141.width = Math.max(~~(_0x53f1a5 * _0x28ad4b + 0.5), 1);
    _0x1fc141.height = Math.max(~~(_0x1058ed * _0x28ad4b + 0.5), 1);
    _0x1fc141.style.width = _0x53f1a5 + "px";
    _0x1fc141.style.height = _0x1058ed + "px";
    _0xb14342.scale(_0x28ad4b, _0x28ad4b);
    var _0x5c60a6 = $("#advertDialogs");
    var _0x19a05e = Math.min(_0x53f1a5 / 970, _0x1058ed / 800);
    if (_0x19a05e < 1) {
        _0x5c60a6.css("transform", "translate(-50%, -50%) scale(" + _0x19a05e + ")");
    } else {
        _0x5c60a6.css("transform", "translate(-50%, -50%)");
    }
    _0x5c60a6 = $("#adWrapper728x90_2");
    if ((_0x19a05e = _0x53f1a5 / 728) < 1) {
        _0x5c60a6.css("transform", "translate(-50%, 0%) scale(" + _0x19a05e + ")");
    } else {
        _0x5c60a6.css("transform", "translate(-50%, 0%)");
    }
    _0x5c60a6 = $("#overlaysContent");
    if ((_0x19a05e = Math.max(_0x1058ed / 920, 0.7)) < 1) {
        _0x5c60a6.css("transform", "scale(" + _0x19a05e + ")");
    } else {
        _0x5c60a6.css("transform", "none");
    }
    if (!(_0x5c60a6 = $("#adWrapper728x90")).hasClass("pixfuture")) {
        if ((_0x19a05e = _0x53f1a5 / (728 * Math.min(_0x19a05e, 1))) < 1) {
            _0x5c60a6.css("transform", "translate(-50%, 0%) scale(" + _0x19a05e + ")");
        } else {
            _0x5c60a6.css("transform", "translate(-50%, 0%)");
        }
    }
    _0x5c60a6 = $("#adWrapper160x600");
    if (_0x213646 = 830 <= _0x53f1a5 && canRunAds) {
        if ((_0x19a05e = Math.max((992 <= _0x53f1a5 ? _0x53f1a5 - 930 : _0x53f1a5 - 770) / 160, 0.5)) < 1) {
            _0x5c60a6.css("transform", "scale(" + _0x19a05e + ")");
        } else {
            _0x5c60a6.css("transform", "none");
        }
        if (_0x173277 && !_0x5c60a6.is(":visible") && 0 < Date.now() - 40000) {
            _0x2ca450();
        }
        _0x5c60a6.show();
    } else {
        _0x5c60a6.hide();
    }
    _0x5c60a6 = $("#shopModalDialog");
    if (_0x213646 && _0x53f1a5 < 1260) {
        _0x5c60a6.css("transform", "translate(-" + (80 * Math.min(_0x19a05e, 1) + 5) + "px, 0px)");
    } else {
        _0x5c60a6.css("transform", "none");
    }
    _0x5c60a6 = $("#coinsModalDialog");
    if ((_0x19a05e = Math.max(_0x53f1a5 / 1000, 0.4)) < 1) {
        _0x5c60a6.css("transform", "scale(" + _0x19a05e + ")");
    } else {
        _0x5c60a6.css("transform", "none");
    }
    if (!(_0x4386c1 = _0x53f1a5 <= 909)) {
        $("#loginPanel").css("display", '');
        $("#serverPanel").css("display", '');
        $("#mainPanel").css("display", '');
    }
    if (isMobile) {
        _0x19a05e = Math.clamp(~~(Math.max(_0x53f1a5, _0x1058ed) / 7), 64, 128);
        $(".touch-btn").css({
            "width": _0x19a05e + "px",
            "height": _0x19a05e + "px"
        });
    }
    var _0x5c60a6 = ~~(Math.max(200 * Math.min(1.6 * _0x1058ed, _0x53f1a5, 1400) / 1400, 90) + 0.5) / 200;
    $("#brGameContainer").css("transform", "scale(" + _0x5c60a6 + ")");
    $("#infGameContainer").css("transform", "scale(" + _0x5c60a6 + ")");
    var _0x5c60a6 = Math.max(Math.min(1.6 * _0x1058ed, _0x53f1a5, 1400) / 1400, 0.5);
    $(".slide-box").css("transform", "scale(" + _0x5c60a6 + ")");
    _0x38c054(true, true);
    _0x2b8f46();
    if ((0 < _0x2de48c || 0 < _0x517404) && (_0x2de48c = Math.clamp(_0x2de48c, 200, _0x53f1a5), _0x517404 = Math.clamp(_0x517404, 200, _0x1058ed), _0x363e25)) {
        $("#friendDialog").css({
            "width": _0x2de48c + "px",
            "height": _0x517404 + "px"
        });
    }
    _0x4d3094();
    _0x4cb089 = _0x3c3250 = _0xaade67 = _0x2c6f91 = true;
    if (windowIsLoaded) {
        if (_0x1e208d) {
            _0xb03f97();
        }
        _0x215896();
    }
}

function _0x4c97d2() {
    var _0x4e4046 = (_0x2e944b = Date.now()) - (_0x53cfb7 = 0 == _0x53cfb7 ? _0x2e944b : _0x53cfb7);
    if (300000 < _0x4e4046 && 0 == _0xc52211.length || 600000 < _0x4e4046) {
        if (!(_0x2a60cc || 0 == _0x2b8278)) {
            _0xf3d226 = _0x2a60cc = true;
            _0x13d7e0();
            _0xae7145();
            if (_0x10e829) {
                clearTimeout(_0x10e829);
                _0x10e829 = 0;
            }
            if (_0x1d3023) {
                clearTimeout(_0x1d3023);
                _0x1d3023 = 0;
            }
            _0x4c5e78(0);
            _0x12bbfc("You have been disconnected for inactivity. Click anywhere to reconnect...", false, true, 0, 0);
        }
    } else if (_0x2a60cc) {
        _0x2a60cc = false;
        _0xf1d309 = 500;
        _0x4a52b8();
    }
}

function _0x442a2f() {
    var _0x3d8547;
    if ("undefined" != typeof Storage && _0x1f725c) {
        _0x3d8547 = Date.now();
        localStorage["wc" + _0x1f725c] = _0x3d8547;
    }
}

function _0x39d073(_0x5e09fd, _0x484e29) {
    _0x5e09fd.globalAlpha = 1;
    _0x5e09fd.lineCap = "round";
    _0x5e09fd.lineJoin = "round";
    _0x5e09fd.lineWidth = 1 / _0x484e29;
}

function _0x585560() {
    var _0x40e852 = Math.max(_0x1058ed / _0x2cd9d1, _0x53f1a5 / _0x247d2d);
    return isMobile ? _0x53f1a5 <= _0x1058ed ? _0x40e852 * _0x423e1a * 0.85 : _0x40e852 * _0x423e1a * 0.9 : _0x40e852 * _0x423e1a;
}

function _0x2ed741() {
    if (_0x381cad && 15 == _0x77f7dd) {
        $("#brPlayersValue").text(_0x381cad.players);
        var _0x58e2f4 = '';
        var _0x2a476e = '';
        var _0x5b94ec = false;
        switch (_0x381cad.phase) {
            case 0:
                _0x58e2f4 = "timer";
                _0x2a476e = '';
                break;
            case 1:
                _0x58e2f4 = "timer";
                _0x2a476e = _0x5d13b8(_0x381cad.Tt);
                break;
            case 2:
                _0x58e2f4 = "join";
                _0x2a476e = _0x5d13b8(_0x381cad.Tt);
                break;
            case 3:
                _0x58e2f4 = _0x381cad.Et ? "nuclear_red" : "nuclear_yellow";
                _0x2a476e = _0x5d13b8(_0x381cad._t);
                _0x5b94ec = _0x381cad.Et;
                break;
            case 4:
                _0x58e2f4 = "finished";
                _0x2a476e = _0x5d13b8(_0x381cad.Tt);
        }
        if ('' != _0x58e2f4) {
            $("#brTimerImg").css("background-image", "url('img/game_" + _0x58e2f4 + ".png')");
        }
        if (_0x5b94ec) {
            $("#brTimerValue").text(_0x2a476e).addClass("red");
        } else {
            $("#brTimerValue").text(_0x2a476e).removeClass("red");
        }
        $("#brKillsValue").text(_0x381cad.It);
        var _0x3ebced = false;
        if (_0x381cad.Bt) {
            if (_0x381cad.At) {
                $("#brExtraImg").css("background-image", "url('img/game_star_" + (1 == _0x381cad.Pt ? "gold" : "grey") + ".png')");
                $("#brExtraValue").text("You finished #" + _0x381cad.Pt);
                _0x3ebced = true;
            } else if (_0x381cad.Re) {
                $("#brExtraImg").css("background-image", "url('img/game_ghost.png')");
                $("#brExtraValue").html("Ghost time left    <span class=\"" + (_0x381cad.Ut <= 10 ? "red" : "orange") + "\">" + _0x5d13b8(_0x381cad.Ut) + "</span>");
                _0x3ebced = true;
            }
        }
        if (_0x3ebced) {
            $("#brExtra").show();
        } else {
            $("#brExtra").hide();
        }
        if (!_0x2d7602) {
            $("#brGameContainer").show();
            _0x2d7602 = true;
        }
    } else if (_0x2d7602) {
        $("#brGameContainer").hide();
        _0x2d7602 = false;
    }
}

function _0x593148() {
    if (0 <= _0x568853 && (17 == _0x77f7dd || 18 == _0x77f7dd || 22 == _0x77f7dd)) {
        $("#infBarProgress").width(100 * _0x568853 + "%");
        if (!_0x5141de) {
            $("#infGameContainer").show();
            _0x5141de = true;
        }
    } else if (_0x5141de) {
        $("#infGameContainer").hide();
        _0x5141de = false;
    }
}

function _0x2d6730() {
    var _0x14056b = _0x521316;
    var _0x3fe65e = 0;
    var _0x306fb1 = '';
    if (_0x381cad) {
        if (!_0x2412c8) {
            if (15 == _0x77f7dd) {
                _0x306fb1 += "<p style=\"padding-bottom:10px;\"><span class=\"col-left\" style=\"color:#fa4;\">BATTLE ROYALE</span>&nbsp;</p>";
                _0x3fe65e++;
                switch (_0x381cad.phase) {
                    case 0:
                        _0x306fb1 += "<p><span class=\"col-left\">Not running</span>&nbsp;</p>";
                        _0x3fe65e++;
                        break;
                    case 1:
                        _0x306fb1 += "<p><span class=\"col-left\">Registration</span>&nbsp;</p>";
                        _0x3fe65e++;
                        break;
                    case 2:
                    case 3:
                        _0x306fb1 += "<p><span class=\"col-left\">Running:</span>&nbsp;" + _0x381cad.Ct + "</p>";
                        _0x3fe65e++;
                        break;
                    case 4:
                        _0x306fb1 += "<p><span class=\"col-left\">Finished:</span>&nbsp;" + _0x381cad.Ct + "</p>";
                        _0x3fe65e++;
                }
                _0x3fe65e++;
                _0x306fb1 = (_0x306fb1 += "<p><span class=\"col-left\">Players:</span>&nbsp;" + _0x381cad.players + "/" + _0x381cad.maxPlayers + "</p>") + ("<p><span class=\"col-left\">Spectators:</span>&nbsp;" + _0x381cad.Ft.toString() + "</p>");
                _0x3fe65e++;
                if (1 <= _0x381cad.phase && 0 < _0x381cad.Nt[0] && (_0x306fb1 = (_0x306fb1 += "<p style=\"padding-top:10px;\"><span class=\"col-left\" style=\"color:#fa4;\">REWARDS</span>&nbsp;</p>") + "<p><span class=\"col-left\">1st place:</span>&nbsp;" + _0x381cad.Nt[0].toString() + " coins</p>", _0x3fe65e++, 0 < _0x381cad.Nt[1] && (_0x306fb1 += "<p><span class=\"col-left\">2nd place:</span>&nbsp;" + _0x381cad.Nt[1].toString() + " coins</p>", _0x3fe65e++), 0 < _0x381cad.Nt[2])) {
                    _0x306fb1 += "<p><span class=\"col-left\">3rd place:</span>&nbsp;" + _0x381cad.Nt[2].toString() + " coins</p>";
                    _0x3fe65e++;
                }
                if (0 < _0x381cad.Dt) {
                    _0x3fe65e++;
                    _0x3fe65e++;
                    _0x3fe65e++;
                    _0x3fe65e++;
                    _0x306fb1 = (_0x306fb1 = (_0x306fb1 = (_0x306fb1 = (_0x306fb1 += "<p style=\"padding-top:10px;\"><span class=\"col-left\" style=\"color:#fa4;\">YOUR STATS</span>&nbsp;</p>") + "<p><span class=\"col-left\">Matches:</span>&nbsp;" + _0x381cad.Dt.toString() + "</p>") + "<p><span class=\"col-left\">Wins:</span>&nbsp;" + _0x381cad.zt.toString() + "</p>") + "<p><span class=\"col-left\">Points:</span>&nbsp;" + _0x381cad.Rt.toString() + "</p>") + "<p><span class=\"col-left\">Kills:</span>&nbsp;" + _0x381cad.Ot.toString() + "</p>";
                    _0x3fe65e++;
                }
            } else if (17 == _0x77f7dd) {
                _0x3fe65e++;
                _0x3fe65e++;
                _0x3fe65e++;
                _0x3fe65e++;
                _0x3fe65e++;
                _0x3fe65e++;
                _0x306fb1 = (_0x306fb1 = (_0x306fb1 = (_0x306fb1 = (_0x306fb1 = _0x306fb1 + "<p style=\"padding-bottom:10px;\"><span class=\"col-left\" style=\"color:#fa4;\">INFECTION</span>&nbsp;</p><p><span class=\"col-left\">Time remaining:</span>&nbsp;" + _0x381cad.Gt + "</p>") + "<p><span class=\"col-left\">Green players:</span>&nbsp;" + _0x381cad.Yt + "</p>") + "<p><span class=\"col-left\">Red players:</span>&nbsp;" + _0x381cad.Lt + "</p><p style=\"padding-top:10px;\"><span class=\"col-left\" style=\"color:#fa4;\">YOUR SESSION</span>&nbsp;</p>") + "<p><span class=\"col-left\">You killed:</span>&nbsp;" + _0x381cad.It.toString() + "</p>") + "<p><span class=\"col-left\">You infected:</span>&nbsp;" + _0x381cad.qt.toString() + "</p>";
                _0x3fe65e++;
            } else if (18 == _0x77f7dd) {
                _0x3fe65e++;
                _0x3fe65e++;
                _0x3fe65e++;
                _0x3fe65e++;
                _0x3fe65e++;
                _0x306fb1 = (_0x306fb1 = (_0x306fb1 = (_0x306fb1 = _0x306fb1 + "<p style=\"padding-bottom:10px;\"><span class=\"col-left\" style=\"color:#fa4;\">DOMINATION</span>&nbsp;</p><p><span class=\"col-left\">Time remaining:</span>&nbsp;" + _0x381cad.Gt + "</p>") + "<p><span class=\"col-left\">Green players:</span>&nbsp;" + _0x381cad.Yt + "</p>") + "<p><span class=\"col-left\">Red players:</span>&nbsp;" + _0x381cad.Lt + "</p><p style=\"padding-top:10px;\"><span class=\"col-left\" style=\"color:#fa4;\">YOUR SESSION</span>&nbsp;</p>") + "<p><span class=\"col-left\">You killed:</span>&nbsp;" + _0x381cad.It.toString() + "</p>";
                _0x3fe65e++;
            } else if (22 == _0x77f7dd) {
                _0x3fe65e++;
                _0x3fe65e++;
                _0x3fe65e++;
                _0x3fe65e++;
                _0x3fe65e++;
                _0x3fe65e++;
                _0x306fb1 = (_0x306fb1 = (_0x306fb1 = (_0x306fb1 = (_0x306fb1 = _0x306fb1 + "<p style=\"padding-bottom:10px;\"><span class=\"col-left\" style=\"color:#fa4;\">DOMINATION</span>&nbsp;</p><p><span class=\"col-left\">Time remaining:</span>&nbsp;" + _0x381cad.Gt + "</p>") + "<p><span class=\"col-left\">Green players:</span>&nbsp;" + _0x381cad.Yt + "</p>") + "<p><span class=\"col-left\">Red players:</span>&nbsp;" + _0x381cad.Lt + "</p><p style=\"padding-top:10px;\"><span class=\"col-left\" style=\"color:#fa4;\">YOUR SESSION</span>&nbsp;</p>") + "<p><span class=\"col-left\">You Hit:</span>&nbsp;" + _0x381cad.It.toString() + "</p>") + "<p><span class=\"col-left\">You Failed to Dodge:</span>&nbsp;" + _0x381cad.qt.toString() + "</p>";
                _0x3fe65e++;
            }
        }
        $("#gamemodeContent").html(_0x306fb1);
        _0x521316 = _0x3fe65e;
        if (_0x56ca1f) {
            if (_0x3fe65e != _0x14056b) {
                _0x38c054();
            }
        } else {
            $("#gamemodeBox").stop(true, false).show(0).addClass("visible");
            _0x56ca1f = true;
            _0x38c054();
        }
    } else if (_0x56ca1f) {
        $("#gamemodeBox").stop(true, false).removeClass("visible").delay(400).hide(0);
        _0x521316 = 0;
        if (_0x1f573a) {
            clearTimeout(_0x1f573a);
            _0x1f573a = 0;
        }
        _0x1f573a = setTimeout(_0x38c054, 400);
        _0x56ca1f = false;
    }
}

function _0x4c5e78(_0x310df0, _0x11afca, _0x2ae329, _0x1c6466, _0x3d20ab, _0x45aa8d, _0x3ad2de) {
    if (_0x310df0) {
        if (2 == _0x310df0) {
            $("#challengeInfoBox").stop(true, false).show(0).addClass("visible");
            $("#challengeInfoContent").show();
            _0x5ada9e = true;
            _0x38c054();
        }
        if (1 == _0x1c6466) {
            $("#challengeDifficulty").html("<img src=\"./img/cstar.png\">");
        } else if (2 == _0x1c6466) {
            $("#challengeDifficulty").html("<img src=\"./img/cstar.png\"><img src=\"./img/cstar.png\">");
        } else if (3 == _0x1c6466) {
            $("#challengeDifficulty").html("<img src=\"./img/cstar.png\"><img src=\"./img/cstar.png\"><img src=\"./img/cstar.png\">");
        }
        $("#challengeDescription").html(_0x11afca);
        $("#challengeProgress").text(_0x3ad2de);
        $("#challengeGoal").text(_0x3d20ab);
        if (_0x45aa8d) {
            $("#challengeTimeLeft").text(_0x45aa8d);
        }
    } else {
        $("#challengeInfoContent").hide();
        _0x38c054();
    }
}

function _0x39b68a() {
    var _0x48c140;
    var _0x2dfda5;
    var _0x40f2a8;
    var _0x3c4cd5 = _0x7017e4;
    var _0x544400 = 0;
    for (var _0xa8b1e9 = ''; _0x296920.length < 8;) {
        _0x296920.push(false);
    }
    if (!_0x2fe589 && ((0 < _0x24af02 || _0x296920[0]) && (_0x296920[0] = _0x296920[1] = _0x296920[2] = true, _0x544400++, _0x544400++, _0xa8b1e9 = (_0xa8b1e9 = (_0xa8b1e9 += "<p>Minions: <span style=\"color:" + (0 < _0x24af02 ? "#4f4" : "#f44") + ";\">" + _0x24af02.toString() + "</span></p>") + "<p>Minion Time: <span style=\"color:" + (0 < _0x4a4cf7 ? "#4f4" : "#f44") + ";\">" + (_0x48c140 = _0x4a4cf7, _0x48c140 = Number(_0x48c140), _0x2dfda5 = Math.floor(_0x48c140 / 3600), _0x40f2a8 = Math.floor(_0x48c140 % 3600 / 60), _0x48c140 = Math.floor(_0x48c140 % 3600 % 60), _0x2dfda5 < 10 ? "0" : '') + _0x2dfda5 + ":" + (_0x40f2a8 < 10 ? "0" : '') + _0x40f2a8 + ":" + (_0x48c140 < 10 ? "0" : '') + _0x48c140 + "</span></p>") + "<p>You control: <span style=\"color:" + (_0x53176c ? "#f44" : "#4f4") + ";\">" + (_0x53176c ? "Minions" : "Yourself") + "</span></p>", _0x544400++), (_0x43802f || _0x296920[3]) && (_0x296920[3] = true, _0xa8b1e9 += "<p>Frozen: <span style=\"color:" + (_0x43802f ? "#4f4" : "#f44") + ";\">" + (_0x43802f ? "On" : "Off") + "</span></p>", _0x544400++), (_0x506037 || _0x296920[4]) && _0x296920[0] && (_0x296920[4] = true, _0xa8b1e9 += "<p>Frozen minions: <span style=\"color:" + (_0x506037 ? "#4f4" : "#f44") + ";\">" + (_0x506037 ? "On" : "Off") + "</span></p>", _0x544400++), (_0x52da56 || _0x296920[5]) && (_0x296920[5] = true, _0xa8b1e9 += "<p>Cloaked: <span style=\"color:" + (_0x52da56 ? "#4f4" : "#f44") + ";\">" + (_0x52da56 ? "On" : "Off") + "</span></p>", _0x544400++), (_0x11c29c || _0x296920[6]) && _0x296920[0] && (_0x296920[6] = true, _0xa8b1e9 += "<p>Cloaked minions: <span style=\"color:" + (_0x11c29c ? "#4f4" : "#f44") + ";\">" + (_0x11c29c ? "On" : "Off") + "</span></p>", _0x544400++), _0x296920[5] || _0x296920[6])) {
        _0x296920[7] = true;
        _0xa8b1e9 += "<p>Cloak Time: <span style=\"color:" + (0 < _0x30bfdb ? "#4f4" : "#f44") + ";\">" + _0x5d13b8(_0x30bfdb) + "</span></p>";
        _0x544400++;
    }
    $("#infoContent").html(_0xa8b1e9);
    _0x7017e4 = _0x544400;
    if (0 < _0x24af02 || _0x43802f || _0x52da56) {
        if (_0x3d0314) {
            if (_0x544400 != _0x3c4cd5) {
                _0x38c054();
            }
        } else {
            if (_0x7895bb) {
                clearTimeout(_0x7895bb);
                _0x7895bb = 0;
            }
            $("#infoBox").stop(true, false).show(0).addClass("visible");
            _0x38c054(_0x3d0314 = true, false);
        }
    } else if (_0x3d0314) {
        _0x7895bb = setTimeout(function() {
            $("#infoBox").stop(true, false).removeClass("visible").delay(400).hide(0);
            for (var _0x301167 = 0; _0x301167 < _0x296920.length; _0x301167++) {
                _0x296920[_0x301167] = false;
            }
            _0x7017e4 = 0;
            if (_0x1f573a) {
                clearTimeout(_0x1f573a);
                _0x1f573a = 0;
            }
            _0x1f573a = setTimeout(_0x38c054, 400);
            _0x7895bb = 0;
        }, 2000);
        _0x3d0314 = false;
    }
}

function _0x1a0f0b() {
    var _0x5bcc45 = Math.min(_0x55ce89.length, isMobile ? 6 : 12);
    var _0x588307 = '';
    if (!_0x22bf19) {
        if (0 < _0x55ce89.length) {
            _0x588307 += _0x1ec523 ? "<p style=\"padding-bottom:9px;\">Party invitation:</p>" : "<p style=\"padding-bottom:9px;\">You are in a party:</p>";
        } else {
            _0x588307 += "<p style=\"margin-bottom:-4px;\">Party ended</p>";
            _0x211844 = false;
        }
        for (var _0xa17f22 = 0; _0xa17f22 < _0x5bcc45; _0xa17f22++) {
            var _0x172831 = _0x55ce89[_0xa17f22];
            _0x588307 += _0x211844 ? "<p style=\"height:20px; color:" + (_0x172831.accepted ? "#fff" : isMobile ? "rgba(85,85,85,0.5)" : "#555") + ";\">" + (_0xa17f22 + 1).toString() + ". " + (_0x172831.Wt || "Agma.io Player") + "<button class=\"partyKickBtn\" value=\"" + _0xa17f22 + "\" onclick=\"kickPartyMember($(this))\">x</button></p>" : "<p style=\"height:20px; color:" + (_0x172831.accepted ? "#fff" : isMobile ? "rgba(85,85,85,0.5)" : "#555") + ";\">" + (_0xa17f22 + 1).toString() + ". " + (_0x172831.Wt || "Agma.io Player") + "</p>";
        }
        if (_0x55ce89.length > _0x5bcc45) {
            _0x588307 += "<p style=\"margin-bottom:-6px;\">+ " + (_0x55ce89.length - _0x5bcc45).toString() + " more players...</p>";
        }
    }
    $("#partyContent").html(_0x588307);
    if (0 < _0x55ce89.length && _0x1ec523 && !_0x22bf19) {
        if (!_0x561770) {
            $("#partyButtons").show();
            _0x561770 = true;
        }
    } else if (_0x561770) {
        $("#partyButtons").hide();
        _0x561770 = false;
    }
    if (0 < _0x55ce89.length) {
        if (!_0x5c9745) {
            if (_0x24d21a) {
                clearTimeout(_0x24d21a);
                _0x24d21a = 0;
            }
            $("#partyBox").stop(true, false).show(0).addClass("visible");
            _0x38c054(!(_0x5c9745 = true), true);
            if (_0x22bf19) {
                _0x1deadf(0);
            }
        }
    } else if (_0x5c9745) {
        _0x24d21a = setTimeout(function() {
            $("#partyBox").stop(true, false).removeClass("visible").delay(400).hide(0);
            setTimeout(function() {
                _0x1deadf(0);
            }, 400);
            _0x24d21a = 0;
        }, 2000);
        _0x5c9745 = false;
    }
}

function _0x38c054(_0x52aa22, _0x126949) {
    if (_0x1f573a) {
        clearTimeout(_0x1f573a);
        _0x1f573a = 0;
    }
    var _0xa9f7bb;
    var _0x17003b = Math.max(Math.min(1.6 * _0x1058ed, _0x53f1a5, 1400) / 1400, 0.5);
    var _0x1caff2 = isMobile || _0x4386c1 ? 80 : 105;
    if (_0x56ca1f) {
        _0x1caff2 += (_0xa9f7bb = $("#gamemodeBox"))[0].getBoundingClientRect().height + 10 * _0x17003b;
    }
    if (_0x5ada9e) {
        _0xa9f7bb = $("#challengeInfoBox");
        if (_0x52aa22) {
            _0xa9f7bb.css({
                "top": ~~(_0x1caff2 * _0x358119 + 0.5) / _0x358119 + "px"
            });
        } else {
            _0xa9f7bb.animate({
                "top": ~~(_0x1caff2 * _0x358119 + 0.5) / _0x358119 + "px"
            }, 200);
        }
        _0x1caff2 += _0xa9f7bb[0].getBoundingClientRect().height + 10 * _0x17003b;
    }
    if (_0x3d0314 || _0x7895bb) {
        _0xa9f7bb = $("#infoBox");
        if (_0x52aa22) {
            _0xa9f7bb.css({
                "top": ~~(_0x1caff2 * _0x358119 + 0.5) / _0x358119 + "px"
            });
        } else {
            _0xa9f7bb.animate({
                "top": ~~(_0x1caff2 * _0x358119 + 0.5) / _0x358119 + "px"
            }, 200);
        }
        _0x1caff2 += _0xa9f7bb[0].getBoundingClientRect().height + 10 * _0x17003b;
    }
    if (_0x5c9745 || _0x24d21a) {
        _0xa9f7bb = $("#partyBox");
        if (_0x126949) {
            _0xa9f7bb.css({
                "top": ~~(_0x1caff2 * _0x358119 + 0.5) / _0x358119 + "px"
            });
        } else {
            _0xa9f7bb.animate({
                "top": ~~(_0x1caff2 * _0x358119 + 0.5) / _0x358119 + "px"
            }, 200);
        }
        _0xa9f7bb[0].getBoundingClientRect().height;
    }
}

function _0x4a5541() {
    if (0 != _0x273de7) {
        $("#invRecombine > p").text(1 < _0x273de7 ? _0x273de7.toString() : '');
        if (!_0x493cb3) {
            $("#invRecombine").show();
            _0x493cb3 = true;
        }
    } else if (_0x493cb3) {
        $("#invRecombine").hide();
        _0x493cb3 = false;
    }
    if (0 != _0x852ff) {
        $("#invSpeed > p").text(1 < _0x852ff ? _0x852ff.toString() : '');
        if (!_0x1a6cfa) {
            $("#invSpeed").show();
            _0x1a6cfa = true;
        }
    } else if (_0x1a6cfa) {
        $("#invSpeed").hide();
        _0x1a6cfa = false;
    }
    if (0 != _0x38ea95) {
        $("#invGrowth > p").text(1 < _0x38ea95 ? _0x38ea95.toString() : '');
        if (!_0x58b79e) {
            $("#invGrowth").show();
            _0x58b79e = true;
        }
    } else if (_0x58b79e) {
        $("#invGrowth").hide();
        _0x58b79e = false;
    }
    if (0 != _0x576526) {
        $("#invSpawnVirus > p").text(1 < _0x576526 ? _0x576526.toString() : '');
        if (!_0x39907b) {
            $("#invSpawnVirus").show();
            _0x39907b = true;
        }
    } else if (_0x39907b) {
        $("#invSpawnVirus").hide();
        _0x39907b = false;
    }
    if (0 != _0x2873c2) {
        $("#invSpawnMothercell > p").text(1 < _0x2873c2 ? _0x2873c2.toString() : '');
        if (!_0x306dfd) {
            $("#invSpawnMothercell").show();
            _0x306dfd = true;
        }
    } else if (_0x306dfd) {
        $("#invSpawnMothercell").hide();
        _0x306dfd = false;
    }
    if (0 != _0x4512d9) {
        $("#invSpawnPortal > p").text(1 < _0x4512d9 ? _0x4512d9.toString() : '');
        if (!_0x2c6ee0) {
            $("#invSpawnPortal").show();
            _0x2c6ee0 = true;
        }
    } else if (_0x2c6ee0) {
        $("#invSpawnPortal").hide();
        _0x2c6ee0 = false;
    }
    if (0 != _0x29f86a) {
        $("#invSpawnGoldOre > p").text(1 < _0x29f86a ? _0x29f86a.toString() : '');
        if (!_0xf00edf) {
            $("#invSpawnGoldOre").show();
            _0xf00edf = true;
        }
    } else if (_0xf00edf) {
        $("#invSpawnGoldOre").hide();
        _0xf00edf = false;
    }
    if (0 != _0x52d414) {
        $("#invWall > p").text(1 < _0x52d414 ? _0x52d414.toString() : '');
        if (!_0x5a41c7) {
            $("#invWall").show();
            _0x5a41c7 = true;
        }
    } else if (_0x5a41c7) {
        $("#invWall").hide();
        _0x5a41c7 = false;
    }
    if (0 != _0x11de32) {
        $("#inv360Shot > p").text(1 < _0x11de32 ? _0x11de32.toString() : '');
        if (!_0x4d5731) {
            $("#inv360Shot").show();
            _0x4d5731 = true;
        }
    } else if (_0x4d5731) {
        $("#inv360Shot").hide();
        _0x4d5731 = false;
    }
    if (0 != _0x3c6854) {
        $("#invFreeze > p").text(1 < _0x3c6854 ? _0x3c6854.toString() : '');
        if (!_0x1f403a) {
            $("#invFreeze").show();
            _0x1f403a = true;
        }
    } else if (_0x1f403a) {
        $("#invFreeze").hide();
        _0x1f403a = false;
    }
    if (0 != _0x5a5860) {
        $("#invAntiFreeze > p").text(1 < _0x5a5860 ? _0x5a5860.toString() : '');
        if (!_0x21322d) {
            $("#invAntiFreeze").show();
            _0x21322d = true;
        }
    } else if (_0x21322d) {
        $("#invAntiFreeze").hide();
        _0x21322d = false;
    }
    if (0 != _0x5ea511) {
        $("#invAntiRecombine > p").text(1 < _0x5ea511 ? _0x5ea511.toString() : '');
        if (!_0x13f6c5) {
            $("#invAntiRecombine").show();
            _0x13f6c5 = true;
        }
    } else if (_0x13f6c5) {
        $("#invAntiRecombine").hide();
        _0x13f6c5 = false;
    }
    if (0 != _0xb1583e) {
        $("#invShield > p").text(1 < _0xb1583e ? _0xb1583e.toString() : '');
        if (!_0xd1c597) {
            $("#invShield").show();
            _0xd1c597 = true;
        }
    } else if (_0xd1c597) {
        $("#invShield").hide();
        _0xd1c597 = false;
    }
    if (0 != _0x31962a) {
        $("#invFrozenVirus > p").text(1 < _0x31962a ? _0x31962a.toString() : '');
        if (!_0x596e1d) {
            $("#invFrozenVirus").show();
            _0x596e1d = true;
        }
    } else if (_0x596e1d) {
        $("#invFrozenVirus").hide();
        _0x596e1d = false;
    }
    if (abilityCloak && isMobile) {
        if (_0x53176c ? _0x11c29c : _0x52da56) {
            $("#invCloak").addClass("highlight");
        } else {
            $("#invCloak").removeClass("highlight");
        }
        if (!_0x242c36) {
            $("#invCloak").show();
            _0x242c36 = true;
        }
    } else if (_0x242c36) {
        $("#invCloak").hide();
        _0x242c36 = false;
    }
}

function _0x4c710c(_0x181790, _0x2c83d2) {
    if (!(_0x2c83d2 && untrustedClick)) {
        if ((_0x489844 = _0x181790) != _0x14f2d3) {
            _0x14f2d3 = 0;
        }
        if (_0x181957) {
            $("#inventory").find(".inventory-box").tooltip("hide");
        } else if (0 != _0x489844) {
            if (_0x2029fe) {
                clearTimeout(_0x2029fe);
                _0x2029fe = 0;
            }
            _0x2029fe = setTimeout(function() {
                $("#inventory").find(".inventory-box").tooltip("hide");
            }, 4000);
        }
    }
}

function _0x54aa2f(_0x2f5349) {
    _0x14f2d3 = _0x2f5349;
    if (_0x94a128) {
        clearTimeout(_0x94a128);
        _0x94a128 = 0;
    }
    _0x94a128 = setTimeout(function() {
        if (_0x181957) {
            _0x14f2d3 = 0;
        }
    }, 400);
}

function _0x465950(_0x2c4b45, _0x5e4a11) {
    switch (_0x2c4b45) {
        case 0:
            _0x47ccce = 0;
            break;
        case 1:
            if (1 != _0x47ccce) {
                if (!_0x114b07 || _0x11de32 <= 0) {
                    return;
                }
                _0x47ccce = 1;
                $(".inventory-box").removeClass("activatedInv");
                $("#inv360Shot").addClass("activatedInv");
                if (!_0x5e4a11) {
                    _0x12bbfc("You have activated the force. Press W to eject the force, and push other cells away. If you are split into many cells, choose/select what cell to shoot the 360 shot by clicking on it.", false, false, 1, 3);
                }
            } else {
                _0x47ccce = 0;
                $("#inv360Shot").removeClass("activatedInv");
                if (!_0x5e4a11) {
                    _0x12bbfc("You have deactivated the force. W will eject normal food cells", false, false, 0, 3);
                }
            }
            break;
        case 2:
            break;
        case 3:
            if (3 != _0x47ccce) {
                if (_0x31962a <= 0) {
                    return;
                }
                _0x47ccce = 3;
                $(".inventory-box").removeClass("activatedInv");
                $("#invFrozenVirus").addClass("activatedInv");
                if (!_0x5e4a11) {
                    _0x12bbfc("You have activated the frozen virus. Press W to eject it and split & freeze other players", false, false, 1, 3);
                }
            } else {
                _0x47ccce = 0;
                $("#invFrozenVirus").removeClass("activatedInv");
                if (!_0x5e4a11) {
                    _0x12bbfc("You have deactivated the frozen virus. W will eject normal food cells", false, false, 0, 3);
                }
            }
    }
    if (isReady()) {
        new PacketWriter(2).setUint8(22).setUint8(_0x47ccce).send();
    }
}

function _0x4801bb() {
    var _0x421ab1 = _0x19bc6d;
    _0x492dec();
    if (!(_0x181957 || _0x3e08c0 || 1 != _0x489844 && 2 != _0x489844 && 3 != _0x489844 && 4 != _0x489844 && 5 != _0x489844 && 6 != _0x489844 && 8 != _0x489844 && 9 != _0x489844 && 10 != _0x489844 && 11 != _0x489844 && 12 != _0x489844 && 14 != _0x489844)) {
        _0x496adb = _0x181957 = true;
        _0x4289a6 = 0;
        switch (_0x2f4fb3 = _0x489844) {
            case 1:
                var _0x4672f3 = {
                    r: 255,
                    g: 0,
                    b: 0
                };
                _0x277ade(5, 32, _0x4672f3, 1, 2);
                break;
            case 2:
                var _0xc360d7 = {
                    r: 255,
                    g: 224,
                    b: 0
                };
                _0x277ade(7, 32, _0xc360d7, 1, 4);
                break;
            case 3:
                var _0x704bbc = {
                    r: 128,
                    g: 224,
                    b: 32
                };
                _0x277ade(6, 42, _0x704bbc, 0, 3);
                break;
            case 4:
                var _0x4b9c23 = {
                    r: 25,
                    g: 160,
                    b: 204
                };
                var _0x561f50 = {
                    r: 0,
                    g: 255,
                    b: 0
                };
                _0x277ade(2, 100, 17 == _0x77f7dd ? _0x4b9c23 : _0x561f50, 2, 0);
                break;
            case 5:
                var _0x28e585 = {
                    r: 240,
                    g: 48,
                    b: 48
                };
                var _0x27f7f5 = {
                    r: 205,
                    g: 85,
                    b: 100
                };
                _0x277ade(9, 224, 17 == _0x77f7dd ? _0x28e585 : _0x27f7f5, 2, 0);
                break;
            case 6:
                var _0x1aeb72 = {
                    r: 98,
                    g: 35,
                    b: 115
                };
                _0x277ade(4, 224, _0x1aeb72, 1, 1);
                break;
            case 8:
                var _0x1e488f = {
                    r: 0,
                    g: 192,
                    b: 255
                };
                _0x277ade(12, 32, _0x1e488f, 1, 12);
                break;
            case 9:
                var _0x2905b6 = {
                    r: 255,
                    g: 215,
                    b: 0
                };
                _0x277ade(11, 224, _0x2905b6, 0, 10);
                break;
            case 10:
                var _0x4375c3 = {
                    r: 158,
                    g: 104,
                    b: 63
                };
                _0x277ade(16, 708, _0x4375c3, 0, 15);
                break;
            case 11:
                var _0x589487 = {
                    r: 100,
                    g: 0,
                    b: 0
                };
                _0x277ade(20, 32, _0x589487, 0, 20);
                break;
            case 12:
                var _0x3c7aad = {
                    r: 100,
                    g: 0,
                    b: 0
                };
                _0x277ade(21, 32, _0x3c7aad, 0, 21);
                break;
            case 14:
                var _0x112a0a = {
                    r: 10,
                    g: 50,
                    b: 150
                };
                _0x277ade(23, 100, _0x112a0a, 0, 23);
        }

        function _0x277ade(_0x48bba7, _0x57d355, _0x4f9aca, _0x2cb7b3, _0x4ce9ff) {
            (_0x114a07 = new Cell(0, 0, 0, 0)).i = _0x48bba7;
            _0x114a07.size = _0x114a07.ge = _0x114a07.nSize = _0x114a07.strokeSize = _0x57d355;
            if (4 == _0x48bba7) {
                _0x114a07.strokeSize = 0.83 * _0x57d355;
            }
            _0x114a07.color = _0x15f517(_0x4f9aca.r, _0x4f9aca.g, _0x4f9aca.b);
            _0x114a07.$e = _0x15f517(_0x4f9aca.r * _0x517df6, _0x4f9aca.g * _0x517df6, _0x4f9aca.b * _0x517df6);
            _0x114a07.Be = _0x2cb7b3;
            _0x114a07.N = _0x4ce9ff;
            _0x114a07.reloadImage();
            _0x114a07.ga = 0.5;
        }
        _0x19bc6d = _0x421ab1;
        if (isReady()) {
            new PacketWriter(2).setUint8(70).setUint8(_0x2f4fb3).send();
        }
        _0x421ab1 = _0x4587e2[_0x2f4fb3] || 0;
        if (0 != _0x421ab1) {
            _0x56a8e8();
        }
        _0x4574cb(true);
        $("#inventory").find(".inventory-box").tooltip("hide");
    }
}

function _0x492dec() {
    if (_0x181957) {
        _0x2f4fb3 = 0;
        _0x114a07 = null;
        _0x19bc6d = _0x181957 = false;
        $(".inventory-box.active").removeClass("active");
        sendSignal(71);
        document.body.style.cursor = "default";
    }
}

function _0x2f7348() {
    if (_0x181957) {
        if (isReady() && !_0x3e08c0) {
            _0x4574cb(true);
            if (!_0x19bc6d && _0x496adb && 1 != _0x2f4fb3 && 2 != _0x2f4fb3 && 3 != _0x2f4fb3 && 9 != _0x2f4fb3 && 10 != _0x2f4fb3) {
                _0x523f93(_0x14e1ef);
            }
            _0x14e1ef = [];
            new PacketWriter(10).setUint8(72).setInt32(_0x21548d).setInt32(_0x1598a0).setUint8(_0x2f4fb3).send();
        }
        if (!_0x19bc6d) {
            _0x492dec();
        }
    }
}

function _0x56a8e8() {
    if (_0x181957 && _0x114a07 && !_0x3e08c0 && isReady() && 10 == _0x2f4fb3) {
        _0x114a07.orientation = "undefined" != typeof orientation ? orientation : (_0x114a07.orientation + 1) % 2;
        _0x4574cb(true);
    }
}

function _0x17c18f(_0x567d41, _0x1b12ca) {
    if (10 == _0x1b12ca) {
        if (1 == (_0x4587e2[_0x1b12ca] = ((_0x4587e2[_0x1b12ca] || 0) + 1) % 2)) {
            $(_0x567d41).addClass("vertical");
        } else {
            $(_0x567d41).removeClass("vertical");
        }
    }
}

function _0x3c6fac(_0x4bd4a8) {
    if (_0x4bd4a8.synthetic) {
        return false;
    }
    if (!_0x2a60cc) {
        _0x53cfb7 = _0x2e944b;
    }
    if (!_0x3e08c0) {
        _0x36887a = _0x4bd4a8.clientX;
        _0x19f1c7 = _0x4bd4a8.clientY;
        _0x368208();
        if (_0x181957) {
            _0x34f96a = _0x36887a;
            _0x5079ce = _0x19f1c7;
            _0x28c1e5();
        }
    }
}

function _0x4bfb7f(_0x4c8c78) {
    _0x4c8c78.setUint32(_0x9b1a41(2) + (() => {
        var _0x1251b9 = 0;
        for (var _0x463729 = 2; _0x463729 < _0xaee6f6.length; _0x463729++) {
            _0x1251b9 += ~~(_0x52383b / _0xaee6f6[_0x463729] - _0xaee6f6[_0x463729] % _0xa19eb5);
        }
        return _0x1251b9;
    })() + _0xa19eb5 + 1);
}

function _0x4c0714(_0xb3bdd4) {
    _0xb3bdd4.setUint8(2 * (_0x950276 + 30) - (_0x52383b - 5) % 10 - 5);
}

function _0x489880() {
    var _0x39fc65;
    var _0x4216d7 = _0x34b545.length;
    for (var _0x3f8020 = 0; _0x3f8020 < _0x4216d7; _0x3f8020++) {
        if (!(0 != (_0x39fc65 = _0x34b545[_0x3f8020]).i && 3 != _0x39fc65.i)) {
            if (_0x39fc65.shape < 2) {
                _0x39fc65.rotation = (2 * Math.random() - 1) * Math.PI;
            }
            if (_0x161144) {
                _0x39fc65.shape = 2;
            } else if (_0x39fc65.shape < 3) {
                _0x39fc65.shape = _0x3bca98[_0x39fc65.id % 100];
            }
        }
    }
}

function _0x4f401c(_0x4aa53c) {
    var _0x2e6191 = (_0x4aa53c - 0) / 1100;
    _0x40843.left = (_0x2e6191 = _0x2e6191 < 0 ? 0 : 1 < _0x2e6191 ? 1 : _0x2e6191) * (_0x40843.kt - _0x40843.vt) + _0x40843.vt;
    _0x40843.top = _0x2e6191 * (_0x40843.yt - _0x40843.$t) + _0x40843.$t;
    _0x40843.right = _0x2e6191 * (_0x40843.nRight - _0x40843.xt) + _0x40843.xt;
    _0x40843.bottom = _0x2e6191 * (_0x40843.Mt - _0x40843.St) + _0x40843.St;
}

function _0x1e72ef(_0x4dd855) {
    _0x4dd855 = (_0x4dd855 - _0xab2d2b) / 120;
    _0x53b8b0 = (_0x4dd855 = _0x4dd855 < 0 ? 0 : 1 < _0x4dd855 ? 1 : _0x4dd855) * (_0x40e81b - _0x46ac7b) + _0x46ac7b;
    _0x464afc = _0x4dd855 * (_0x6c7bce - _0x2c7938) + _0x2c7938;
}

function _0x44ff99() {
    _0x32b561();
    if (_0x1566f5 && (_0x1a6afb && _0x30cebd(), isReady())) {
        sendSignal(130);
        _0x1a6afb = true;
    }
}

function _0x30cebd() {
    if (_0x1566f5) {
        $("#ping").text("---");
        _0x1a6afb = false;
    }
}

function _0x1c81ac(_0xd383d) {
    if (!(undefined === _0xd383d.isTrusted || _0xd383d.isTrusted)) {
        untrustedClick = true;
        if (untrustedClickResetTimer) {
            clearTimeout(untrustedClickResetTimer);
            untrustedClickResetTimer = 0;
        }
        untrustedClickResetTimer = setTimeout(function() {
            untrustedClick = false;
        }, 0);
    }
}

function _0x11d4f6(_0x1dfca0) {
    if (!(trustedEvent || untrustedClick || undefined !== _0x1dfca0.isTrusted && !_0x1dfca0.isTrusted)) {
        trustedEvent = true;
        if (trustedEventResetTimer) {
            clearTimeout(trustedEventResetTimer);
            trustedEventResetTimer = 0;
        }
        trustedEventResetTimer = setTimeout(function() {
            trustedEvent = false;
        }, 0);
    }
}

function _0x9db55f(_0x10501e) {
    if (isReady(true) && -1 != _0x52383b && !_0x10501e) {
        let _0x449056 = '';
        var _0x49a33d = localStorage.getItem("ag218");
        if (_0x49a33d) {
            _0x449056 = _0x49a33d;
        }
        if (!_0x49a33d) {
            if (window.AG && "Co+kQI2/U7Fto3imGgDcp9qAhFyQqE047lMrIoJkj4yKGzNjC+R4ZX" !== window.AG.gccvb && '' !== window.AG.gccvb && undefined !== window.AG.gccvb) {
                _0x449056 = window.AG.gccvb;
            }
        }
        _0x449056;
        if (!window.iesg) {
            window.iesg = '';
        }
        var _0x49a33d = new PacketWriter(1 + 2 * _0x449056.length + 2 * window.iesg.length + 2);
        _0x49a33d.setUint8(244);
        _0x49a33d.setString(_0x449056);
        _0x49a33d.setUint16(0);
        _0x49a33d.setString(window.iesg);
        _0x49a33d.send(true);
        var _0x49a33d = 0;
        if (0 < ag219_2.length) {
            _0x49a33d = 2 * ag219_2.length;
        }
        var _0x49a33d = new PacketWriter(14 + _0x49a33d);
        _0x4c0714(_0x49a33d);
        _0x25377f(_0x49a33d, _0x10501e, _0x2b8278);
        _0x4bfb7f(_0x49a33d);
        _0x11d218(_0x49a33d);
        if (0 < ag219_2.length) {
            _0x49a33d.setString(ag219_2);
        }
        _0x49a33d.send(true);
    }
}

function _0x11d218(_0x126681) {
    _0x126681.setUint32(_0xf937a3(_0x126681.buffer, 0, 9, 255));
}

function _0x25377f(_0x28aeec, _0x2e645d, _0x58c89c) {
    _0x9b1a41(2);
    _0x28aeec.setUint32(1 + ~~(_0x52383b / 1.41 + _0x950276 / 2 - 2 * (_0x2e645d ? 0.5 : 1)) + ~~(~~(22.29 * (~~(_0x52383b + 4.81 * _0x556e60 + 559) % --_0x58c89c - 36630)) / 4.2 + 0.4));
}

function _0x9b1a41(_0x1561cb, _0xc2f81e) {
    return 2 == _0x1561cb && _0x9b1a41(typeof Event) ? (_0x25377f = function() {}, 2 * _0x1561cb + _0x52383b / _0x52383b * 1.88) : 2 == _0x1561cb && 162 == _0x52383b ? 2 * _0x1561cb + _0x52383b / _0x52383b * 0.48 : 2 == _0xc2f81e ? 2 * _0x1561cb + _0xc2f81e / 2 + _0x52383b / _0x52383b * 0.68 : 2 * _0x1561cb + _0x52383b / _0x52383b * 0.88;
}

function _0x32b561() {
    var _0x11d969 = 0.25;
    switch (_0x38891d) {
        case "X-Insta NA":
            _0x11d969 = 0.6;
            break;
        case "Crazy EU":
            _0x11d969 = 0.27;
            break;
        case "Crazy NA":
            _0x11d969 = 0.25;
            break;
        case "Gigantic":
            _0x11d969 = 0.4;
            break;
        case "Battle Royale EU":
            _0x11d969 = 0.6;
            break;
        case "Battle Royale NA":
            _0x11d969 = 0.66;
            break;
        case "Solo SELFFEED Royale EU":
            _0x11d969 = 0.65;
            break;
        case "SOLO Selffeed Royale NA":
            _0x11d969 = 0.56;
            break;
        case "Instant EU":
            _0x11d969 = 0.33;
            break;
        case "Splitrun Paradise":
            _0x11d969 = 0.17;
            break;
        case "Crazy Asia":
            _0x11d969 = 0.36;
            break;
        case "Battle Royale AS":
            _0x11d969 = 0.56;
            break;
        default:
            _0x11d969 = 0.25;
    }
    var _0x3ee03d = _0x857cd1[0];
    loBall = $(_0x3ee03d).text().indexOf("WA");
    if (Math.random() <= _0x11d969) {
        if (!(!$(_0x3ee03d).length || 1 < loBall)) {
            $(_0x3ee03d).click(function() {
                var _0x5bdc8a;
                "play region 1/3 :)".substr(1, 3);
                if (!_0x4fa2eb) {
                    _0x5bdc8a = Math.floor(206 * Math.random() + 14);
                    setTimeout(function() {
                        sendSignal(33);
                    }, _0x5bdc8a);
                }
                _0x4fa2eb = 1;
            });
        }
    }
}

function _0xeb6d2b() {}
var _0x25b723 = {
    level: 0,
    exp: 0,
    coins: 0
};
var _0x41e18a = {
    r: 0,
    g: 0,
    b: 0
};
var _0x1fc141;
var _0xb14342;
var _0x4eac2b;
var _0x321590;
var _0x5e49f7;
var _0x4110a1;
var _0x44020a;
var _0x12af20;
var _0x5be4cd;
var _0x4b4b51;
var _0x1138be;
var _0x3b426e;
var _0x2ed271;
var _0x319c86;
var _0x116b73;
var _0x53f1a5;
var _0x1058ed;
var _0x2263d7;
var _0x223539;
var _0x11f3e0;
var _0x243c1f;
var _0x123859;
var _0x109288 = false;
var _0xea465f = '';
var _0x107e7f = _0x18fde3 = 0;
var _0x5b6b18 = '';
var _0x170269 = '';
var _0x4d2bd2 = 0;
var _0xd04953 = 0;
var _0x3c3250 = false;
var _0x4cb089 = false;
var _0x2c6f91 = false;
var _0xaade67 = false;
var _0x358119 = window.devicePixelRatio || 1;
var _0x28ad4b = _0x358119;
var _0x3b0762 = false;
var _0x5bbe63 = Math.floor(294967295 + 4000000000 * Math.random()) + 1;
var _0x3e7187 = Math.floor(4294967296 * Math.random());
var _0x4e4df3 = md5(-~~(2000000000 * Math.random()) - 1);
var _0x1f725c = 0;
var _0x6a593d = 0;
var _0x396332 = null;
var _0x134fc9 = true;
var _0x511d58 = true;
var _0x59034c = 0;
var _0x4ce984 = 0;
var _0xc52211 = [];
var _0x335282 = [];
var _0x34b545 = [];
var _0x4fd5c0 = [];
var _0x2a6acb = [];
var _0xa92e4c = [];
var _0x534f3c = {};
var _0x4cc54f = {};
var _0xfe1c27 = {};
var _0x49dbad = {};
var _0x4df025 = {};
var _0x59222b = {};
var _0x463a1e = [];
var _0x2032b6 = [];
var _0x5bdc9e = [];
var _0x57f5d0 = 0;
var _0x5af7fe = [];
var _0x36887a = 0;
var _0x19f1c7 = 0;
var _0x2df455 = -1;
var _0x58d9ac = -1;
var _0x4400ec = false;
var _0x312d0a = 0;
var _0x2435c4 = 0;
var _0x34f96a = 0;
var _0x5079ce = 0;
var _0x21548d = 0;
var _0x1598a0 = 0;
var _0x31d2d6 = 0;
var _0x34aaf6 = 0;
var _0x47bcb0 = null;
var _0x3c3adc = 0;
var _0x541b5c = null;
var _0x19bc6d = false;
var _0x1f4eee = null;
var _0x14f2d3 = 0;
var _0x94a128 = 0;
var _0x4587e2 = {};
var _0x399c6b = null;
var framesCounter = 0;
var _0x581015 = 0;
var _0x2d2df0 = 0;
var _0x587d52 = 1;
var _0x5c1aa9 = 0;
var _0x4ba286 = 0;
var _0x28f6af = 10000;
var _0x500945 = 10000;
var _0x40843 = {
    "left": _0x5c1aa9,
    "top": _0x4ba286,
    "right": _0x28f6af,
    "bottom": _0x500945,
    "vt": _0x5c1aa9,
    "$t": _0x4ba286,
    "xt": _0x28f6af,
    "St": _0x500945,
    "kt": _0x5c1aa9,
    "yt": _0x4ba286,
    "nRight": _0x28f6af,
    "Mt": _0x500945,
    "ga": 1,
    "L": 0,
    "Fe": 0,
    "draw": false
};
var _0x77f7dd = -1;
var _0x3df17b = false;
var _0x42a8fa = true;
var _0x247d2d = 1920;
var _0x2cd9d1 = 1080;
var _0x25b838 = 60;
var _0x2fc5e8 = 25;
var _0x2e06e0 = true;
var _0x52383b = -1;
var _0x556e60 = 1 + ~~(53550 + 600000 * Math.random());
var _0xaee6f6 = [128, 129, 130, 131, 132];
var _0xa19eb5 = 41;
var _0x4d2b96 = false;
var _0x305b0f = false;
var _0x3e50d9 = 1;
var _0xd28f67 = 1;
var _0x34bd4c = 1;
var _0x164fe5 = null;
var _0x417591 = null;
var _0x3b8888 = 0;
var _0x29246b = false;
var _0x5ae1b6 = 0;
var _0x53b8b0 = _0x59034c = ~~((_0x28f6af + _0x5c1aa9) / 2);
var _0x464afc = _0x4ce984 = ~~((_0x500945 + _0x4ba286) / 2);
var _0x46ac7b = _0x53b8b0;
var _0x2c7938 = _0x464afc;
var _0x40e81b = _0x53b8b0;
var _0x6c7bce = _0x464afc;
var _0xab2d2b = 0;
var _0x29c97b = 1;
var _0x634c41 = null;
var _0x37a723 = false;
var windowIsLoaded = false;
var _0x2332bb = false;
var _0x3e08c0 = true;
var _0x21d872 = ["#F03030", "#30F030", "#606060", "#F0F030", "#20E8F8", "#F020E8", "#1060F0"];
var _0x26d6ba = (_0x51ec27 => {
    var _0x489e1c = '';
    for (var _0x104caf = _0x51ec27.length - 1; 0 <= _0x104caf; _0x104caf--) {
        _0x489e1c += String.fromCharCode(_0x51ec27.charCodeAt(_0x104caf) - 1);
    }
    return _0x489e1c;
})("bbhnf");
var _0x405489 = '';
var _0xa42bce = false;
var _0x381cad = null;
var _0x568853 = -1;
var _0x521316 = 0;
var _0x2412c8 = 0;
var _0x41140e = 0;
var _0x2fe589 = 0;
var _0x22bf19 = 0;
var _0x24af02 = 0;
var _0x4a4cf7 = 0;
var _0x53176c = false;
var _0x43802f = false;
var _0x506037 = false;
var _0x296920 = [];
var _0x7017e4 = 0;
var _0x52da56 = false;
var _0x11c29c = false;
var _0x30bfdb = 0;
var _0x273de7 = 0;
var _0x852ff = 0;
var _0x38ea95 = 0;
var _0x576526 = 0;
var _0x2873c2 = 0;
var _0x4512d9 = 0;
var _0x29f86a = 0;
var _0x52d414 = 0;
var _0x11de32 = 0;
var _0x114b07 = true;
var _0x47ccce = 0;
var _0x3c6854 = 0;
var _0x5a5860 = 0;
var _0x5ea511 = 0;
var _0xb1583e = 0;
var _0x31962a = 0;
var _0x37e4a8 = 0;
var _0x181957 = false;
var _0x2f4fb3 = 0;
var _0x489844 = 0;
var _0x496adb = true;
var _0x4289a6 = 0;
var _0x114a07 = null;
var _0x1ec523 = false;
var _0x55ce89 = [];
var _0x211844 = false;
var _0xde408 = {};
var _0xd835b8 = 0;
var _0x1723aa = '';
var _0x40774a = '';
var _0x59182a = 0;
var _0x544018 = false;
var _0x365042 = 0;
var _0x50ced8 = 0;
var _0x46411c = 0;
var _0x190280 = 1;
var _0x194e11 = 0;
var _0x43e0d0 = 0;
var _0x2106d0 = null;
var _0xe31aef = 0;
var _0x10e53d = null;
var _0xfe046f = null;
var _0x1937c1 = [];
var _0x5e5c13 = [];
var _0x2f707e = {};
var _0x538120 = {};
var _0xab54f2 = null;
var _0x19fdd4 = {};
var _0x468d84 = [];
var _0x5b3d82 = false;
var _0x2de48c = 0;
var _0x517404 = 0;
var _0x3ebb17 = '';
var _0x3e53e0 = 0;
var _0x6c92d3 = 0;
var _0xd85888 = 0;
var _0x2c8f2a = [];
var _0x826efd = 0;
var _0x38891d = '';
var _0x46c79d = '';
var _0x518a09 = '';
var _0x4fa2eb = false;
var _0x468e60 = [];
var _0x8e4a8e = true;
var _0x34761e = false;
var _0x2a0343 = false;
var _0x12c3b0 = 0;
var _0x7f089d = false;
var _0x48a780 = {};
var _0x2645ec = {};
var _0x520472 = 0;
var _0x2e4195 = [];
var _0x64a0d5 = true;
var _0x29ae07 = false;
var _0x16de9b = null;
var _0x4506fc = '';
var _0x51aa44 = [];
var _0x1518ea = true;
var _0x529909 = false;
var _0x3730e0 = null;
var _0x5cff0f = '';
var _0x2530ff = 0;
var _0x2dc336 = 0;
var _0x3d6c5f = 0;
var _0x36e61c = 0;
var _0xcda4aa = 0;
var _0x35e5f6 = 0;
var _0x2ad6ee = 0;
var _0x4243db = false;
var _0x29894d = false;
var _0x2bc2d5 = false;
var _0x43df7f = false;
var _0x666805 = false;
var _0x16d0fb = false;
var _0x2d7602 = false;
var _0x5141de = false;
var _0x56ca1f = false;
var _0x5ada9e = false;
var _0x3d0314 = false;
var _0x493cb3 = false;
var _0x1a6cfa = false;
var _0x58b79e = false;
var _0x39907b = false;
var _0x306dfd = false;
var _0x2c6ee0 = false;
var _0xf00edf = false;
var _0x5a41c7 = false;
var _0x4d5731 = false;
var _0x1f403a = false;
var _0x21322d = false;
var _0x13f6c5 = false;
var _0x596e1d = false;
var _0xd1c597 = false;
var _0x242c36 = false;
var _0x12c259 = false;
var _0x218784 = false;
var _0x5c9745 = false;
var _0x561770 = false;
var _0x363e25 = false;
var _0x34cf3b = false;
var _0x173277 = false;
var _0x1a6d5d = false;
var _0x14d497 = false;
var _0x37e4bf = false;
var _0x1cf392 = false;
var _0x1b3496 = null;
var _0x2d537c = '';
var _0x213646 = canRunAds;
var _0x1c50f8 = true;
var _0x423e1a = 1;
var _0x284f1f = false;
var _0x27fdb0 = 0;
var _0x53cfb7 = 0;
var _0x2e944b = 0;
var _0x2a60cc = false;
var _0x950276 = 50;
var _0x2b8278 = 0;
var _0x4d3d52 = false;
var _0x67e7da = 0;
var _0x22a146 = performance.now();
var _0x2b6e3f = 0;
var _0xe31776 = 0;
var _0xe01c9e = false;
var _0x16a246 = isMobile ? _0x14f914("img/move_arrow32.png") : null;
var _0x5bec61 = isMobile ? _0x14f914("img/move_arrow128.png") : null;
var _0x5c595d = 0;
var _0x29f519 = 0;
var _0xccb7e = 0;
var _0x42e389 = 0;
var _0x248dac = true;
var _0x341b50 = false;
var _0x32aefa = false;
var _0x13535d = false;
var _0x37ee0c = false;
var _0x1cbb14 = 0;
var _0xd3e364 = 0;
var _0x5a74d9 = 0;
var _0x20546f = 0;
var _0x54207c = 0;
var _0x1d4fed = 0;
var _0x352c3f = 0;
var _0x170049 = 0;
var _0x1e9905 = '';
var _0x38a139 = 0;
var _0x58c913 = 0;
var _0x9533e2 = false;
var _0x536680 = false;
var _0x33d2a7 = 0;
var _0x2c99f2 = false;
var _0x4a720f = false;
_0x2a0343 = Object.getOwnPropertyDescriptor;
var _0x5d197a = _0x2a0343 ? _0x2a0343(window, _0x26d6ba) : null;
if (!_0x2a0343 || _0x5d197a && _0x5d197a.writable && _0x5d197a.configurable && !_0x5d197a.get && !_0x5d197a.set) {
    _0x405489 = window[_0x26d6ba];
    _0xa42bce = true;
}
var _0xe1899f = {
    "nickName": '',
    "user": '',
    "skinId": 0,
    "wearablesSelected": [],
    "sSkins": !(isSpectating = false),
    "sWearables": true,
    "sColors": true,
    "sSounds": true,
    "sNames": true,
    "sMinionNames": true,
    "sMass": true,
    "sFood": true,
    "sFoodHalf": false,
    "sCellAnimations": true,
    "sSkinAnimations": true,
    "sMapBorder": true,
    "sFancyGrid": true,
    "sSectionGrid": false,
    "sGrid": false,
    "sCustomBack": false,
    "sCustomBackType": 0,
    "sCustomBackOpacity": 0.5,
    "sCustomBackClip": false,
    "sCustomBackEnableColor": false,
    "sCustomBackColor": "#000000",
    "sDark": false,
    "sAcid": false,
    "sSlowMotion": false,
    "sFPS": true,
    "sZoom": true,
    "sFixedZoom": false,
    "fixedZoomScale": 1,
    "sMinionUi": false,
    "sLeaderboard": true,
    "sChat": true,
    "sChatSize": false,
    "sMinimap": true,
    "sCellBorders": false,
    "sLargeNames": false,
    "sNameOutlines": true,
    "sCellSpikes": true,
    "sTransparentViruses": true,
    "sClassicViruses": false,
    "sPolygonShapes": false,
    "sLineShapes": false,
    "sBubbleCells": false,
    "sGraphics": 0,
    "sMobileLeft": false,
    "sMobileFeedLock": true
};
var _0x1b60af = {
    "nickName": '',
    "user": '',
    "skinId": 0,
    "wearablesSelected": _0xe1899f.wearablesSelected.slice(0),
    "sSkins": _0xe1899f.sSkins,
    "sWearables": true,
    "sColors": true,
    "sNames": true,
    "sMinionNames": true,
    "sMass": true,
    "sFood": true,
    "sFoodHalf": false,
    "sCellAnimations": true,
    "sSkinAnimations": true,
    "sMapBorder": true,
    "sFancyGrid": true,
    "sSectionGrid": false,
    "sGrid": false,
    "sCustomBack": false,
    "sCustomBackType": 0,
    "sCustomBackOpacity": 0.5,
    "sCustomBackClip": false,
    "sCustomBackEnableColor": false,
    "sCustomBackColor": "#000000",
    "sDark": false,
    "sSlowMotion": false,
    "sFPS": true,
    "sZoom": true,
    "sSounds": true,
    "sFixedZoom": false,
    "fixedZoomScale": 1,
    "sMinionUi": false,
    "sLeaderboard": true,
    "sChat": true,
    "sChatSize": false,
    "sMinimap": true,
    "sCellBorders": false,
    "sLargeNames": false,
    "sNameOutlines": true,
    "sCellSpikes": true,
    "sTransparentViruses": true,
    "sClassicViruses": false,
    "sPolygonShapes": false,
    "sLineShapes": false,
    "sBubbleCells": false,
    "sGraphics": 0,
    "sMobileLeft": false,
    "sMobileFeedLock": true
};
var _0x536824 = false;
var _0x597133 = false;
var _0x5665cf = null;
var _0x28aabd = 0;
var _0x4bb827 = _0xe1899f.wearablesSelected.slice(0);
var _0xfd65d9 = _0xe1899f.sSkins;
var _0x4b4ed5 = true;
var _0x246ae5 = false;
var _0x101b79 = true;
var _0x1c7c12 = true;
var _0x3fa749 = true;
var _0x23a795 = true;
var _0x2792ec = false;
var _0x414662 = true;
var _0x32b0e5 = true;
var _0xec393c = false;
var _0x1f1bbd = false;
var _0x41cc0f = true;
var _0x277c68 = false;
var _0x1e5f5a = false;
var _0x12e7a7 = false;
var _0x19d645 = 0;
var _0x537d17 = 0.5;
var _0x1407a2 = false;
var _0xe0e646 = false;
var _0x32edda = "#000000";
var _0x33523f = false;
var _0x517df6 = _0x33523f ? 0.8 : 0.9;
var _0x4c1257 = false;
var _0x1566f5 = true;
var _0x286c1f = true;
var _0x1f14e9 = true;
var _0x1e208d = false;
var _0x4c4c0f = 1;
var _0x255a3e = false;
var _0x36d371 = true;
var _0x5eeb3b = false;
var _0x46bbb2 = true;
var _0x18306d = false;
var _0x11baa8 = true;
var _0xbdc65b = false;
var _0x471c1e = true;
var _0x345ceb = true;
var _0x53ec10 = false;
var _0xb4d644 = false;
var _0x161144 = false;
var _0x2dceca = false;
var _0x294d0a = 0;
var _0x18d745 = false;
var _0x2eebe7 = true;

function _0xbb1a8c() {
    if (_0x536824) {
        _0x1b60af.version = 2;
        _0x1b60af.user = _0xea465f;
        _0x1b60af.skinId = _0x28aabd;
        _0x1b60af.wearablesSelected = _0x4bb827.slice(0);
        _0x1b60af.sSkins = _0xfd65d9;
        _0x1b60af.sWearables = _0x4b4ed5;
        _0x1b60af.sColors = !_0x246ae5;
        _0x1b60af.sSounds = _0x1f14e9;
        _0x1b60af.sNames = _0x101b79;
        _0x1b60af.sMinionNames = _0x1c7c12;
        _0x1b60af.sMass = _0x3fa749;
        _0x1b60af.sFood = _0x23a795;
        _0x1b60af.sFoodHalf = _0x2792ec;
        _0x1b60af.sCellAnimations = _0x414662;
        _0x1b60af.sSkinAnimations = _0x32b0e5;
        _0x1b60af.sMapBorder = !_0x1f1bbd;
        _0x1b60af.sFancyGrid = _0x41cc0f;
        _0x1b60af.sSectionGrid = _0x277c68;
        _0x1b60af.sGrid = _0x1e5f5a;
        _0x1b60af.sCustomBack = _0x12e7a7;
        _0x1b60af.sCustomBackType = _0x19d645;
        _0x1b60af.sCustomBackOpacity = _0x537d17;
        _0x1b60af.sCustomBackClip = _0x1407a2;
        _0x1b60af.sCustomBackEnableColor = _0xe0e646;
        _0x1b60af.sCustomBackColor = _0x32edda;
        _0x1b60af.sDark = _0x33523f;
        _0x1b60af.sSlowMotion = _0x4c1257;
        _0x1b60af.sFPS = _0x1566f5;
        _0x1b60af.sZoom = _0x286c1f;
        _0x1b60af.sFixedZoom = _0x1e208d;
        _0x1b60af.fixedZoomScale = _0x4c4c0f;
        _0x1b60af.sMinionUi = _0x255a3e;
        _0x1b60af.sLeaderboard = _0x36d371;
        _0x1b60af.sChat = !_0x5eeb3b;
        _0x1b60af.sChatSize = !_0x46bbb2;
        _0x1b60af.sMinimap = !_0x18306d;
        _0x1b60af.sCellBorders = !_0x11baa8;
        _0x1b60af.sLargeNames = _0xbdc65b;
        _0x1b60af.sNameOutlines = _0x471c1e;
        _0x1b60af.sCellSpikes = _0x345ceb;
        _0x1b60af.sTransparentViruses = true;
        _0x1b60af.sClassicViruses = _0x53ec10;
        _0x1b60af.sPolygonShapes = _0xb4d644;
        _0x1b60af.sLineShapes = _0x161144;
        _0x1b60af.sBubbleCells = _0x2dceca;
        _0x1b60af.sGraphics = _0x294d0a;
        _0x1b60af.sMobileLeft = _0x18d745;
        _0x1b60af.sMobileFeedLock = _0x2eebe7;
        window.localStorage.settings = JSON.stringify(_0x1b60af);
    }
}

function _0x5d13b8(_0x51ba4e) {
    _0x51ba4e = Number(_0x51ba4e);
    var _0xd9f620 = Math.floor(_0x51ba4e / 3600);
    var _0xd0f524 = Math.floor(_0x51ba4e % 3600 / 60);
    var _0x51ba4e = Math.floor(_0x51ba4e % 3600 % 60);
    return (0 < _0xd9f620 ? _0xd9f620 + ":" + (_0xd0f524 < 10 ? "0" : '') : '') + _0xd0f524 + ":" + (_0x51ba4e < 10 ? "0" : '') + _0x51ba4e;
}

function _0x11c620() {
    var _0x461b23;
    if (null != window.localStorage["userSettings" + _0x107e7f.toString()] && (undefined !== (_0x461b23 = JSON.parse(window.localStorage["userSettings" + _0x107e7f.toString()])).sAPInv && (allowPartyInvite = _0x461b23.sAPInv), undefined !== _0x461b23.sAPAni && (allowPartyAnimations = _0x461b23.sAPAni), undefined !== _0x461b23.sAuFdEn && (autoFeedEnabled = _0x461b23.sAuFdEn), undefined !== _0x461b23.sGldNickEnabled && (gldNickEnabled = _0x461b23.sGldNickEnabled), undefined !== _0x461b23.sGldCrownEnabled && (gldCrownEnabled = _0x461b23.sGldCrownEnabled), undefined !== _0x461b23.sLargeRenderDistance && (largeRenderDistance = _0x461b23.sLargeRenderDistance), undefined !== _0x461b23.sMinionSkins && (minionSkins = _0x461b23.sMinionSkins), undefined !== _0x461b23.sVideoAdsEnabled && (videoAdsEnabled = _0x461b23.sVideoAdsEnabled), undefined !== _0x461b23.sModIconEnabled && (modIconEnabled = _0x461b23.sModIconEnabled), undefined !== _0x461b23.sIconDRankEnabled && (iconDRankEnabled = _0x461b23.sIconDRankEnabled), undefined !== _0x461b23.sIconYTEnabled && (iconYTEnabled = _0x461b23.sIconYTEnabled), undefined !== _0x461b23.sGreenNameEnabled && (greenNameEnabled = _0x461b23.sGreenNameEnabled), undefined !== _0x461b23.sBlueNameEnabled && (blueNameEnabled = _0x461b23.sBlueNameEnabled), undefined !== _0x461b23.sOrangeNameEnabled && (orangeNameEnabled = _0x461b23.sOrangeNameEnabled), undefined !== _0x461b23.sRedNameEnabled && (redNameEnabled = _0x461b23.sRedNameEnabled), undefined !== _0x461b23.sBlackNameEnabled && (blackNameEnabled = _0x461b23.sBlackNameEnabled), undefined !== _0x461b23.sCustomColorNameEnabled)) {
        customColorNameEnabled = _0x461b23.sCustomColorNameEnabled;
    }
    _0x597133 = false;
    showPartyInvite(allowPartyInvite);
    setPartyAnimations(allowPartyAnimations);
    setAutoFeedEnabled(autoFeedEnabled);
    setGoldNickname(gldNickEnabled);
    setGoldCrownChat(gldCrownEnabled);
    setRenderDistance(largeRenderDistance);
    setMinionSkins(minionSkins);
    setVideoAds(videoAdsEnabled);
    setModeratorIconChat(modIconEnabled);
    setIconDRank(iconDRankEnabled);
    setIconYT(iconYTEnabled);
    setGreenName(greenNameEnabled);
    setBlueName(blueNameEnabled);
    setOrangeName(orangeNameEnabled);
    setRedName(redNameEnabled);
    setBlackName(blackNameEnabled);
    setCustomColorName(customColorNameEnabled);
    _0x597133 = true;
    if (null == window.localStorage["userSettings" + _0x107e7f.toString()]) {
        _0x161cd2();
    }
}

function _0x161cd2() {
    var _0x44a2c1;
    var _0x40a549 = {
        sAPInv: allowPartyInvite,
        sAPAni: allowPartyAnimations,
        sAuFdEn: autoFeedEnabled
    };
    if (_0x597133) {
        _0x44a2c1 = _0x40a549;
        if (2 == _0x3f104e) {
            _0x44a2c1.sLargeRenderDistance = largeRenderDistance;
            _0x44a2c1.sGldNickEnabled = gldNickEnabled;
            _0x44a2c1.sGldCrownEnabled = gldCrownEnabled;
            _0x44a2c1.sMinionSkins = minionSkins;
            _0x44a2c1.sVideoAdsEnabled = videoAdsEnabled;
        }
        if (0 < _0x35cd4a) {
            _0x44a2c1.sModIconEnabled = modIconEnabled;
        }
        if (hasDRank) {
            _0x44a2c1.sIconDRankEnabled = iconDRankEnabled;
        }
        if (can_yt_icon) {
            _0x44a2c1.sIconYTEnabled = iconYTEnabled;
        }
        if (can_green_name) {
            _0x44a2c1.sGreenNameEnabled = greenNameEnabled;
        }
        if (can_blue_name) {
            _0x44a2c1.sBlueNameEnabled = blueNameEnabled;
        }
        if (can_orange_name) {
            _0x44a2c1.sOrangeNameEnabled = orangeNameEnabled;
        }
        if (can_red_name) {
            _0x44a2c1.sRedNameEnabled = redNameEnabled;
        }
        if (can_black_name) {
            _0x44a2c1.sBlackNameEnabled = blackNameEnabled;
        }
        if (can_custom_color_name) {
            _0x44a2c1.sCustomColorNameEnabled = customColorNameEnabled;
        }
        window.localStorage["userSettings" + _0x107e7f.toString()] = JSON.stringify(_0x44a2c1);
    }
}

function _0x25616a(_0x4c87a1, _0x100e5c) {
    if (isReady()) {
        new PacketWriter(3).setUint8(4).setUint8(_0x4c87a1).setUint8(_0x100e5c).send();
    }
}

function _0x273ce2() {
    if (_0x441f0a) {
        clearInterval(_0x441f0a);
        _0x441f0a = 0;
    }
    if ((_0x4d2b96 || _0x4d3d52 || _0x305b0f || fus) && !_0x483209) {
        _0x483209 = true;
    }
}

function _0xeb755c(_0x4519ed, _0x5068c3, _0x592927) {
    $("#password").val('');
    _0x592927 = 1 == _0x592927 ? _0x5068c3 : md5(_0x5068c3);
    _0x5068c3 = _0x5b6b18 = _0x4519ed;
    _0x4519ed = _0x170269 = _0x592927;
    if (isReady()) {
        new PacketWriter(5 + 2 * _0x5068c3.length + 2 * _0x4519ed.length).setUint8(2).setString(_0x5068c3).setUint16(0).setString(_0x4519ed).setUint16(0).send();
    }
    $("#sent").attr("disabled", "disabled");
    if (_0x4ade31) {
        clearTimeout(_0x4ade31);
        _0x4ade31 = 0;
    }
    _0x4ade31 = setTimeout(function() {
        $("#sent").removeAttr("disabled");
    }, 1500);
    $("#loginError").fadeOut();
}
window.setCellsSplit = function() {
    $("#cellsAmount").text(_0xc52211.length);
};
window.setTopMass = function(_0x29926a) {
    $("#cellsAmount").text(_0xc52211.length);
    if (_0xc52211.length) {
        $("#cellsAmount").css("color", "#2d2");
    } else {
        $("#cellsAmount").css("color", "#f44");
    }
    $("#topMass").css("color", "#2d2").text(Intl.NumberFormat("en-US").format(Math.round(~~(_0x29926a / 100))));
};
window.playSounds = function(_0x3672c0, _0x1081e4, _0x27820b) {
    if (_0x1f14e9) {
        (_0x3672c0 = new Audio(_0x3672c0)).volume = _0x1081e4;
        if (_0x27820b) {
            _0x3672c0.currentTime = _0x27820b;
        }
        _0x3672c0.play();
    }
};
window.setNick = function(_0x14bf19, _0xe31451) {
    var _0x2dc090 = Date.now();
    var _0x11997b = _0x2dc090 - _0x1c6763;
    if (
        _0x492c36 &&
        _0x536824 &&
        _0x134fc9 &&
        _0x3b0762 &&
        !_0x514d47 &&
        !_0x173058 &&
        !_0x1fc846 &&
        !(_0x11997b < 100 * _0x6b0fd0)
    ) {
        if (-1 != ["hitler", "nazi", "porno", "fuck", "lul", "eikel", "isis", "penis", "sora", "admin", "administrator", "hate", "terrorist"].indexOf(_0x14bf19.replace(/ /g, '').toLowerCase())) {
            _0x12bbfc("Please choose another name - Bad Nick", false, false, 0, 5);
        } else {
            if (isReady() && 0 == _0xc52211.length && 15 != _0x77f7dd && (_0x3f104e <= 0 || videoAdsEnabled)) {
                var _0x1986a3 = _0x2dc090;
                if ((_0x1986a3 = "undefined" != typeof Storage && _0x2dc090 < (_0x1986a3 = (_0x1986a3 = localStorage.getItem("ad_l_time")) || (localStorage.ad_l_time = _0x2dc090)) ? 0 : _0x1986a3) < _0x2dc090 - 1000 * videoAdSeconds && clientStarted < _0x2dc090 - 1000 * videoAdSeconds && adSpawnCounter >= (0 < _0x55ce89.length ? videoAdSpawnsParty : videoAdSpawns)) {
                    adSpawnCounter = 0;
                    adPreRolledBy = 3;
                    adSuccessCB = function() {
                        window.setNick(_0x14bf19, _0xe31451);
                    };
                    try {
                        return void _0x57b950();
                    } catch (_0x12663c) {
                        adPreRolledBy = 0;
                        adSuccessCB = null;
                    }
                }
            }
            _0x34efff(true);
            _0x5665cf = _0x14bf19;
            _0x4e199b();
            if (_0xe31451) {
                sendSignal(59);
            }
            sendSignal(34);
            _0x5ae1b6 = 0;
            _0x1b60af.nickName = _0x5665cf;
            _0xbb1a8c();
            _0x8f51f1();
            if (isReady()) {
                if (0 == _0xc52211.length) {
                    adSpawnCounter++;
                }
                _0x6b0fd0 = 10000 < _0x11997b ? Math.max(_0x6b0fd0 - ~~(_0x11997b / 1000), 0) : _0x6b0fd0 + 1;
                _0x1c6763 = _0x2dc090;
            }
        }
    }
};
window.sendCaptchaInput = function(_0x3efe3f) {
    if (isReady() && 0 < _0x3efe3f.length) {
        new PacketWriter(3 + 2 * _0x3efe3f.length).setUint8(100).setUint16(_0x3efe3f.length).setString(_0x3efe3f).send();
    }
};
window.univPcc = function(_0x434e22, ..._0x29ed12) {
    if (isReady()) {
        let _0x30c7a0 = 0;
        var _0x25c213;
        var _0x573b03 = [];
        for (_0x25c213 of _0x29ed12)
            if ("number" == typeof _0x25c213) {
                if (_0x25c213 <= 255) {
                    _0x30c7a0 += 1;
                    _0x573b03.push({
                        "type": "uint8",
                        "value": _0x25c213
                    });
                } else if (_0x25c213 <= 65535) {
                    _0x30c7a0 += 2;
                    _0x573b03.push({
                        "type": "uint16",
                        "value": _0x25c213
                    });
                } else {
                    _0x30c7a0 += 4;
                    _0x573b03.push({
                        "type": "uint32",
                        "value": _0x25c213
                    });
                }
            } else if ("string" == typeof _0x25c213) {
            _0x30c7a0 += 2 + 2 * _0x25c213.length;
            _0x573b03.push({
                "type": "string",
                "value": _0x25c213
            });
        } else if (Array.isArray(_0x25c213)) {
            _0x30c7a0 += 1 + 2 * _0x25c213.length;
            _0x573b03.push({
                "type": "array",
                "value": _0x25c213
            });
        }
        var _0x4c308b;
        var _0x29ed12 = 1 + _0x30c7a0;
        var _0x1f631b = new PacketWriter(_0x29ed12);
        _0x1f631b.setUint8(_0x434e22);
        for (_0x4c308b of _0x573b03) switch (_0x4c308b.type) {
            case "uint8":
                _0x1f631b.setUint8(_0x4c308b.value);
                break;
            case "uint16":
                _0x1f631b.setUint16(_0x4c308b.value);
                break;
            case "uint32":
                _0x1f631b.setUint32(_0x4c308b.value);
                break;
            case "string":
                _0x1f631b.setString(_0x4c308b.value);
                break;
            case "array":
                _0x1f631b.setUint8(_0x4c308b.value.length);
                for (var [_0x3f85e0, _0x58a6af] of _0x4c308b.value) {
                    _0x1f631b.setUint8(parseInt(_0x3f85e0));
                    _0x1f631b.setUint8(parseInt(_0x58a6af));
                }
        }
        _0x1f631b.send();
    }
};
window.requestGiftLogs = function(_0x18f89e) {
    var _0x57d9ee;
    if (isReady()) {
        (_0x57d9ee = new PacketWriter(2)).setUint8(141);
        _0x57d9ee.setUint8(_0x18f89e);
        _0x57d9ee.send();
    }
};
window.loadGiftUI = function(_0x219024) {
    var _0x1fbe68 = {
        "1": "img/inv_recombine2.png",
        "2": "img/inv_speed2.png",
        "3": "img/inv_growth2.png",
        "4": "img/inv_virus2.png",
        "5": "img/inv_mothercell2.png",
        "6": "img/inv_portal2.png",
        "7": "img/inv_freeze2.png",
        "8": "img/inv_anti_recombine2.png",
        "9": "img/inv_shield2.png",
        "10": "img/inv_frozenvirus2.png"
    };
    let _0x2032fd = document.getElementById("giftLogsContainer");
    _0x2032fd.innerHTML = '';
    _0x219024.forEach(_0x1f4704 => {
        var _0x5c9996 = document.createElement("div");
        _0x5c9996.className = "gift-log-entry";
        var _0x1ab07d = "\n\t            <div class=\"from-date\">\n\t                <span>From: " + _0x1f4704.from + "</span>\n\t                <span>" + _0x1f4704.date + "</span>\n\t            </div>";
        var _0x53f476 = _0x1f4704.coins ? "<span class=\"coin\">" + _0x1f4704.coins.toLocaleString() + " Coins</span>" : '';
        var _0x1f4704 = _0x1f4704.powerups.map(_0x2a24f3 => {
            var _0x3fe08a = _0x1fbe68[_0x2a24f3.id] || '';
            return "<span class=\"powerup-icon\">" + _0x2a24f3.qty + "× <img src=\"" + _0x3fe08a + "\" alt=\"\"></span>";
        }).join('');
        _0x5c9996.innerHTML = _0x1ab07d + ("<div class=\"rewards\">" + _0x53f476 + _0x1f4704 + "</div>");
        _0x2032fd.appendChild(_0x5c9996);
    });
    if (_0x219024 && 0 !== _0x219024.length) {
        document.getElementById("logsPagination").innerHTML = "\n\t\t    <button onclick=\"requestGiftLogs(1)\">1</button>\n\t\t    <button onclick=\"requestGiftLogs(2)\">2</button>\n\t\t    <button onclick=\"requestGiftLogs(3)\">3</button>\n\t\t";
    } else {
        _0x2032fd.innerHTML = "\n\t\t\t\t<div class=\"gift-log-entry\">\n\t\t\t\t  <div class=\"from-date\">\n\t\t\t\t    <p>No gifts received yet 🕵️‍♂️. This panel shows powerups and coins sent to you by other players when you're chosen as the 🏆 Gold Member of the Day.<br>\n\t\t\t\t    <small style=\"color:grey\">You must be a gold member for this feature!</small></p>\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t";
    }
};
window.sendGiftToGoldMember = function(_0x1f01ed, _0x7b71d0) {
    if (_0x1f01ed < 5000 && Object.keys(_0x7b71d0).length < 1) {
        swal("Please enter a value to gift");
    } else {
        if (isReady()) {
            var _0xf61365;
            var _0x11aa54;
            var _0x7b71d0 = Object.entries(_0x7b71d0);
            var _0x532e9c = 6 + 2 * _0x7b71d0.length;
            var _0x4e2af3 = new PacketWriter(_0x532e9c);
            _0x4e2af3.setUint8(49);
            _0x4e2af3.setUint32(_0x1f01ed);
            _0x4e2af3.setUint8(_0x7b71d0.length);
            for ([_0xf61365, _0x11aa54] of _0x7b71d0) {
                _0x4e2af3.setUint8(parseInt(_0xf61365));
                _0x4e2af3.setUint8(parseInt(_0x11aa54));
            }
            _0x4e2af3.send();
        }
    }
};
window.purchaseItem = function(_0x4237f6, _0x1d2d9e) {
    if (isReady()) {
        _0x1d2d9e = _0x1d2d9e || 1;
        new PacketWriter(3).setUint8(41).setUint8(_0x4237f6).setUint8(_0x1d2d9e).send();
    }
};
window.setMegaphoneText = function() {
    var _0x5b7db2 = document.getElementById("nick").value;
    if (-1 != ["hitler", "nazi", "porno", "fuck", "lul", "eikel", "isis", "penis", "sora", "admin", "administrator", "hate", "terrorist"].indexOf(_0x5b7db2.replace(/ /g, '').toLowerCase())) {
        _0x5b7db2 = '';
    }
    var _0x35d709 = can_black_name && blackNameEnabled ? 6 : can_custom_color_name && customColorNameEnabled ? custom_color_name : can_red_name && redNameEnabled ? 5 : can_orange_name && orangeNameEnabled ? 4 : can_blue_name && blueNameEnabled ? 3 : can_green_name && greenNameEnabled ? 2 : 2 == _0x3f104e && gldNickEnabled ? 1 : 0;
    $("#megaphone_cell_name").text(_0x5b7db2).css("color", 1 < _0x35d709 ? _0xdc7889[_0x35d709] : '').removeClass("gold black");
    if (1 == _0x35d709) {
        $("#megaphone_cell_name").addClass("gold");
    } else if (6 == _0x35d709) {
        $("#megaphone_cell_name").addClass("black");
    }
    if (0 != _0x28aabd) {
        $("#skinMegaDialog").css("background-image", "url('skins/" + _0x28aabd.toString() + "_lo.png?u=" + (_0x48a780[_0x28aabd] || 0) + "')");
    } else {
        $("#skinMegaDialog").css("background-image", "none");
    }
    _0x4e199b();
    for (var _0x1f2a13 = 1; _0x1f2a13 <= 5; _0x1f2a13++) {
        if (_0x1f2a13 <= _0x4bb827.length) {
            var _0x5908dd = _0x4bb827[_0x1f2a13 - 1];
            var _0x57dd3b = _0x464b91[_0x5908dd.P] || '';
            try {
                $("#wearMegaDialog" + _0x1f2a13).css("background-image", "url('wearables/" + _0x5908dd.wearId.toString() + "_lo.png?v=" + wearablesApiVersion + "')").removeClass("center top bottom left right max".replace(_0x57dd3b, '')).addClass(_0x57dd3b).show();
            } catch (_0x1d7f79) {
                console.log("ERROR IN wear.wearId.toString()");
                console.log(_0x1d7f79);
            }
        } else {
            $("#wearMegaDialog" + _0x1f2a13).css("background-image", "none").hide();
        }
    }
};
window.purchaseMega = function(_0x20bb03, _0xb2e665) {
    if (isReady()) {
        var _0x1e5419 = document.getElementById("nick").value;
        if (-1 != ["hitler", "nazi", "porno", "fuck", "lul", "eikel", "isis", "penis", "sora", "admin", "administrator", "hate", "terrorist"].indexOf(_0x1e5419.replace(/ /g, '').toLowerCase())) {
            _0x1e5419 = '';
        }
        var _0x5d2a03 = new PacketWriter(11 + 2 * _0x20bb03.length + 2 * _0x1e5419.length + 2 * _0x4bb827.length);
        _0x5d2a03.setUint8(42).setUint8(_0xb2e665).setUint8(0).setString(_0x20bb03).setUint16(0).setString(_0x1e5419).setUint16(0).setUint8(can_black_name && blackNameEnabled ? 6 : can_custom_color_name && customColorNameEnabled ? custom_color_name : can_red_name && redNameEnabled ? 5 : can_orange_name && orangeNameEnabled ? 4 : can_blue_name && blueNameEnabled ? 3 : can_green_name && greenNameEnabled ? 2 : 2 == _0x3f104e && gldNickEnabled ? 1 : 0).setUint16(_0x28aabd).setUint8(_0x4bb827.length);
        for (let _0x4828e6 = 0; _0x4828e6 < _0x4bb827.length; _0x4828e6++) {
            _0x5d2a03.setUint16(_0x4bb827[_0x4828e6].wearId);
        }
        _0x5d2a03.send();
    }
};
window.purchaseMinion = function(_0x513d3d) {
    if (isReady()) {
        new PacketWriter(2).setUint8(6).setUint8(_0x513d3d).send();
    }
};
window.toggleHideMinionUi = function() {
    $("#minionUi").toggleClass("minimized");
    _0x1c50f8 = !$("#minionUi").hasClass("minimized");
};
window.strMin = function() {
    if (_0x511d58) {
        if (!autoFeedEnabled) {
            setAutoFeedEnabled(true);
        }
        sendSignal(7);
    }
};
window.strMon = function() {
    sendSignal(8);
    $("#stopBots").hide();
    $("#startBots").attr("disabled", true);
    $("#startBots").show();
    _0x511d58 = false;
    if (_0x44a9fb) {
        clearInterval(_0x44a9fb);
    }
    _0x44a9fb = setInterval(function() {
        if (1 == _0x2d211a) {
            clearInterval(_0x44a9fb);
            $("#startBots").attr("disabled", false);
            $("#startBots").text("Start Bots");
            _0x511d58 = true;
        } else {
            _0x2d211a--;
            $("#startBots").text(_0x2d211a + " Secs Left");
        }
    }, 1000);
    var _0x2d211a = 10;
};
window.rfrc = function() {
    if (isReady()) {
        if (_0x109288) {
            sendSignal(9);
            $("#loadBarRf").fadeIn().fadeOut();
            $("#rfrcBtn").prop("disabled", true).css("opacity", "0.7");
            setTimeout(function() {
                $("#rfrcBtn").prop("disabled", false).css("opacity", '');
            }, 1200);
        } else {
            swal('', "You must login to view your referral count!", "error");
            $("#refCount").text(0);
        }
    }
};
window.clmFr = function(_0xe5e1ee) {
    swal({
        "title": $("#freeReward" + _0xe5e1ee).text(),
        "text": "Are you sure you want to claim this reward?",
        "type": "warning",
        "showCancelButton": true,
        "confirmButtonColor": "#4CAF50",
        "confirmButtonText": "Yes, claim now",
        "cancelButtonText": "Cancel"
    }, function() {
        if (isReady()) {
            new PacketWriter(2).setUint8(10).setUint8(_0xe5e1ee).send();
        }
    });
};
window.setFriendlistOnline = function(_0x5e538c, _0x2d7b2b) {
    _0x357e04 = _0x5e538c;
    $("#cVisibilityStatus").prop("checked", _0x357e04);
    $("#cVisibilityStatus2").prop("checked", _0x357e04);
    if (_0x357e04) {
        $("#visibilityStatus").css("color", "#8cff07").text("Your status: Online");
        $("#cVisibilityStatus3").css("color", "8cff07");
    } else {
        $("#cVisibilityStatus3").css("color", "red");
        $("#visibilityStatus").css("color", "red").text("Your status: Invisible");
    }
    if (!_0x2d7b2b) {
        _0x25616a(4, _0x357e04 ? 0 : 1);
    }
};
window.toggleFriendlistVisibility = function() {
    setFriendlistOnline(!_0x357e04);
};
window.showPartyInvite = function(_0x4f2d7a) {
    allowPartyInvite = _0x4f2d7a;
    $("#cAllowPartyInvite").prop("checked", allowPartyInvite);
    $("#cAllowPartyInvite2").prop("checked", allowPartyInvite);
    _0x25616a(7, allowPartyInvite ? 1 : 0);
    if (!allowPartyInvite) {
        if (_0x1ec523) {
            partyDecline();
        }
    }
    _0x161cd2();
};
window.setPartyAnimations = function(_0x33fc0d) {
    allowPartyAnimations = _0x33fc0d;
    $("#cAllowPartyAnimations").prop("checked", allowPartyAnimations);
    _0x25616a(8, allowPartyAnimations ? 1 : 0);
    _0x161cd2();
};
window.setAutoFeedEnabled = function(_0x13a774) {
    autoFeedEnabled = _0x13a774;
    $("#cAutoFeed").prop("checked", autoFeedEnabled);
    $("#cAutoFeed2").prop("checked", autoFeedEnabled);
    _0x25616a(3, autoFeedEnabled ? 1 : 0);
    _0x161cd2();
};
window.setGoldNickname = function(_0x20907a) {
    if (!(_0x597133 && !trustedEvent && !ignoreTrustedEvent)) {
        gldNickEnabled = _0x20907a;
        $("#cGoldName").prop("checked", gldNickEnabled);
        $("#cGoldName2").prop("checked", gldNickEnabled);
        if (_0x597133) {
            _0x25616a(1, gldNickEnabled ? 1 : 0);
        }
        if (gldNickEnabled && _0x597133) {
            _0x597133 = false;
            if (can_green_name) {
                _0x4e459c("cGreenName", false);
            }
            if (can_blue_name) {
                _0x4e459c("cBlueName", false);
            }
            if (can_orange_name) {
                _0x4e459c("cOrangeName", false);
            }
            if (can_red_name) {
                _0x4e459c("cRedName", false);
            }
            if (can_black_name) {
                _0x4e459c("cBlackName", false);
            }
            if (can_custom_color_name) {
                _0x4e459c("cCustomColorName", false);
            }
            _0x597133 = true;
        }
        _0x161cd2();
    }
};
window.setRenderDistance = function(_0x2deea8) {
    if (!(_0x597133 && !trustedEvent && !ignoreTrustedEvent)) {
        largeRenderDistance = _0x2deea8;
        $("#cRenderDistance").prop("checked", largeRenderDistance);
        if (_0x597133) {
            _0x25616a(37, largeRenderDistance ? 1 : 0);
        }
        _0x161cd2();
    }
};
window.setThrowSnowball = function(_0x16cbae) {
    throwSnowball = _0x16cbae;
    $("#cThrowSnowball").prop("checked", throwSnowball);
    _0x25616a(36, throwSnowball ? 1 : 0);
};
window.setGoldCrownChat = function(_0x319467) {
    gldCrownEnabled = _0x319467;
    $("#cGoldCrownChat").prop("checked", gldCrownEnabled);
    $("#cGoldCrownChat2").prop("checked", gldCrownEnabled);
    if (_0x597133) {
        _0x25616a(2, gldCrownEnabled ? 1 : 0);
    }
    _0x161cd2();
};
window.setMinionSkins = function(_0x12514f, _0x856542) {
    if (!(_0x597133 && !trustedEvent && !ignoreTrustedEvent)) {
        minionSkins = _0x12514f;
        $("#cMinionSkinsStatus").prop("checked", minionSkins);
        if (_0x597133 && (_0x25616a(5, minionSkins ? 1 : 0), _0x856542) && 0 < _0x24af02) {
            $(_0x856542).prop("disabled", true).css("cursor", "progress").parent().css("cursor", "progress");
            $("#loadingMinionSkins").html("<i class=\"fa fa-spin\" style=\"animation-duration:1s; margin:3px 0px -3px 10px; float:right; opacity:0.7;\"><img src=\"./img/loading3.png\" style=\"width:16px;\"></i>");
            setTimeout(function() {
                $(_0x856542).prop("disabled", false).css("cursor", '').parent().css("cursor", '');
                $("#loadingMinionSkins").text('');
            }, 2000);
        }
        _0x161cd2();
    }
};
window.setVideoAds = function(_0x5562ee) {
    videoAdsEnabled = _0x5562ee;
    $("#cVideoAds").prop("checked", videoAdsEnabled);
    _0x161cd2();
};
window.setModeratorIconChat = function(_0x22a475) {
    modIconEnabled = _0x22a475;
    $("#cModeratorIconChat").prop("checked", modIconEnabled);
    if (_0x597133) {
        _0x25616a(6, modIconEnabled ? 1 : 0);
    }
    _0x161cd2();
};
window.setIconDRank = function(_0x3fc5ef) {
    iconDRankEnabled = _0x3fc5ef;
    $("#cIconDRank").prop("checked", iconDRankEnabled);
    if (_0x597133) {
        _0x25616a(9, iconDRankEnabled ? 1 : 0);
    }
    _0x161cd2();
};
window.setIconYT = function(_0x120e62) {
    iconYTEnabled = _0x120e62;
    $("#cIconYT").prop("checked", iconYTEnabled);
    if (_0x597133) {
        _0x25616a(10, iconYTEnabled ? 1 : 0);
    }
    _0x161cd2();
};
window.setGreenName = function(_0x5054e2) {
    if (!(_0x597133 && !trustedEvent && !ignoreTrustedEvent)) {
        greenNameEnabled = _0x5054e2;
        $("#cGreenName").prop("checked", greenNameEnabled);
        if (_0x597133) {
            _0x25616a(11, greenNameEnabled ? 1 : 0);
        }
        if (greenNameEnabled && _0x597133) {
            _0x597133 = false;
            if (2 == _0x3f104e) {
                _0x4e459c("cGoldName", false);
            }
            if (can_blue_name) {
                _0x4e459c("cBlueName", false);
            }
            if (can_orange_name) {
                _0x4e459c("cOrangeName", false);
            }
            if (can_red_name) {
                _0x4e459c("cRedName", false);
            }
            if (can_black_name) {
                _0x4e459c("cBlackName", false);
            }
            if (can_custom_color_name) {
                _0x4e459c("cCustomColorName", false);
            }
            _0x597133 = true;
        }
        _0x161cd2();
    }
};
window.setBlueName = function(_0x3e8618) {
    if (!(_0x597133 && !trustedEvent && !ignoreTrustedEvent)) {
        blueNameEnabled = _0x3e8618;
        $("#cBlueName").prop("checked", blueNameEnabled);
        if (_0x597133) {
            _0x25616a(12, blueNameEnabled ? 1 : 0);
        }
        if (blueNameEnabled && _0x597133) {
            _0x597133 = false;
            if (2 == _0x3f104e) {
                _0x4e459c("cGoldName", false);
            }
            if (can_green_name) {
                _0x4e459c("cGreenName", false);
            }
            if (can_orange_name) {
                _0x4e459c("cOrangeName", false);
            }
            if (can_red_name) {
                _0x4e459c("cRedName", false);
            }
            if (can_black_name) {
                _0x4e459c("cBlackName", false);
            }
            if (can_custom_color_name) {
                _0x4e459c("cCustomColorName", false);
            }
            _0x597133 = true;
        }
        _0x161cd2();
    }
};
window.setOrangeName = function(_0x4a3695) {
    if (!(_0x597133 && !trustedEvent && !ignoreTrustedEvent)) {
        orangeNameEnabled = _0x4a3695;
        $("#cOrangeName").prop("checked", orangeNameEnabled);
        if (_0x597133) {
            _0x25616a(13, orangeNameEnabled ? 1 : 0);
        }
        if (orangeNameEnabled && _0x597133) {
            _0x597133 = false;
            if (2 == _0x3f104e) {
                _0x4e459c("cGoldName", false);
            }
            if (can_green_name) {
                _0x4e459c("cGreenName", false);
            }
            if (can_blue_name) {
                _0x4e459c("cBlueName", false);
            }
            if (can_red_name) {
                _0x4e459c("cRedName", false);
            }
            if (can_black_name) {
                _0x4e459c("cBlackName", false);
            }
            if (can_custom_color_name) {
                _0x4e459c("cCustomColorName", false);
            }
            _0x597133 = true;
        }
        _0x161cd2();
    }
};
window.setRedName = function(_0x488cf0) {
    if (!(_0x597133 && !trustedEvent && !ignoreTrustedEvent)) {
        redNameEnabled = _0x488cf0;
        $("#cRedName").prop("checked", redNameEnabled);
        if (_0x597133) {
            _0x25616a(14, redNameEnabled ? 1 : 0);
        }
        if (redNameEnabled && _0x597133) {
            _0x597133 = false;
            if (2 == _0x3f104e) {
                _0x4e459c("cGoldName", false);
            }
            if (can_green_name) {
                _0x4e459c("cGreenName", false);
            }
            if (can_blue_name) {
                _0x4e459c("cBlueName", false);
            }
            if (can_orange_name) {
                _0x4e459c("cOrangeName", false);
            }
            if (can_black_name) {
                _0x4e459c("cBlackName", false);
            }
            if (can_custom_color_name) {
                _0x4e459c("cCustomColorName", false);
            }
            _0x597133 = true;
        }
        _0x161cd2();
    }
};
window.setBlackName = function(_0x23a5b3) {
    if (!(_0x597133 && !trustedEvent && !ignoreTrustedEvent)) {
        blackNameEnabled = _0x23a5b3;
        $("#cBlackName").prop("checked", blackNameEnabled);
        if (_0x597133) {
            _0x25616a(15, blackNameEnabled ? 1 : 0);
        }
        if (blackNameEnabled && _0x597133) {
            _0x597133 = false;
            if (2 == _0x3f104e) {
                _0x4e459c("cGoldName", false);
            }
            if (can_green_name) {
                _0x4e459c("cGreenName", false);
            }
            if (can_blue_name) {
                _0x4e459c("cBlueName", false);
            }
            if (can_orange_name) {
                _0x4e459c("cOrangeName", false);
            }
            if (can_red_name) {
                _0x4e459c("cRedName", false);
            }
            if (can_custom_color_name) {
                _0x4e459c("cCustomColorName", false);
            }
            _0x597133 = true;
        }
        _0x161cd2();
    }
};
window.setCustomColorName = function(_0x31b40d) {
    if (!(_0x597133 && !trustedEvent && !ignoreTrustedEvent)) {
        customColorNameEnabled = _0x31b40d;
        $("#cCustomColorName").prop("checked", customColorNameEnabled);
        if (_0x597133) {
            _0x25616a(16, customColorNameEnabled ? 1 : 0);
        }
        if (customColorNameEnabled && _0x597133) {
            _0x597133 = false;
            if (2 == _0x3f104e) {
                _0x4e459c("cGoldName", false);
            }
            if (can_green_name) {
                _0x4e459c("cGreenName", false);
            }
            if (can_blue_name) {
                _0x4e459c("cBlueName", false);
            }
            if (can_orange_name) {
                _0x4e459c("cOrangeName", false);
            }
            if (can_red_name) {
                _0x4e459c("cRedName", false);
            }
            if (can_black_name) {
                _0x4e459c("cBlackName", false);
            }
            _0x597133 = true;
        }
        _0x161cd2();
    }
};
var _0x1aa57f = 0;

function _0x52a0c8(_0x52bee0) {
    disabledModalClose = _0x52bee0;
    $("div.modal").each(function(_0x2ea285, _0x42ab80) {
        if ((_0x42ab80 = $(_0x42ab80)) && _0x42ab80.data && (_0x42ab80 = _0x42ab80.data("bs.modal")) && _0x42ab80.options) {
            _0x42ab80.options.backdrop = !_0x52bee0 || "static";
        }
    });
    if (preventModalCloseTimer) {
        clearTimeout(preventModalCloseTimer);
        preventModalCloseTimer = 0;
    }
    if (_0x52bee0) {
        preventModalCloseTimer = setTimeout(function() {
            _0x52a0c8(false);
        }, 35000);
    }
}

function _0x17ba19(_0x3bd3de, _0x5ccbf5) {
    var _0x5a69a7;
    if (_0x582d99) {
        clearTimeout(_0x582d99);
        _0x582d99 = 0;
    }
    if (!_0x109288) {
        if ("undefined" != typeof Storage && (_0x3bd3de = _0x3bd3de || localStorage.getItem("username"), _0x5ccbf5 || (_0x5a69a7 = localStorage.getItem("drum"), _0x5ccbf5 = (_0x3bd3de && null !== _0x5a69a7 ? localStorage.getItem(md5(_0x5a69a7)) : null) || localStorage.getItem("password")), null !== _0x3bd3de) && null !== _0x5ccbf5 && (_0xeb755c(_0x3bd3de, _0x5ccbf5, 1), isReady()) && !$("#dashPanel").is(":visible") && $("#login").is(":visible")) {
            $("#loginError p").replaceWith("<p>Attempting autologin...<br>(Press Esc to cancel)</p>");
            $("#loginError").fadeIn();
            $("#username").val(_0x3bd3de);
        }
    }
}

function _0x522c0e() {
    _0xea465f = '';
    hasDRank = !(_0x357e04 = !(_0x35cd4a = _0x6dd07a = _0x3f104e = _0x107e7f = 0));
    can_yt_icon = _0x109288 = false;
    can_green_name = false;
    can_blue_name = false;
    can_orange_name = false;
    can_red_name = false;
    can_black_name = false;
    can_custom_color_name = false;
    custom_color_name = 0;
    abilityFreeze = false;
    abilityCloak = false;
    abilityDoubleSpawnSize = false;
    abilityDoubleExp = false;
    _0x51e494 = {};
}

function _0x315275(_0x3fff92) {
    var _0x38925c;
    _0x483791(0);
    _0x2bb62d(0, 0);
    _0x4a5541();
    if (_0x352c3f < 1) {
        _0x352c3f = 0;
    }
    $(".challenge-level").text(0);
    $(".challenge-stars").text(0);
    $(".challenge-stars-total").text(0);
    $(".mystery-keys").text(0);
    $(".challenges-completed").text(0);
    $("#challengeProgress").text(0);
    $(".chall-reward-xp").text("+75%");
    $(".challenges-easy").text(0);
    $(".challenges-medium").text(0);
    $(".challenges-hard").text(0);
    $(".sora-points-inv").text(0);
    _0x38925c = Math.min(Math.round(0 / _0x352c3f * 100), 100);
    $(".progress-bar-challenge").css("width", _0x38925c.toString() + "%");
    $(".challenge-bar").text(~~_0x38925c + "%");
    _0x5df715(0);
    _0x5b3bf2();
    _0x94dbbc();
    _0x464ade();
    _0x2f6a16();
    _0x161cd2();
    $("#dashPanel").fadeOut("slow", function() {
        if (!_0x109288) {
            $("#dashTab").hide();
            $("#login").fadeIn("slow", function() {});
            $("#loginRegisterTab").show();
            if (_0x3fff92) {
                _0x17ba19();
            }
        }
    });
    if ($(".username").hasClass("goldBar")) {
        $(".username").removeClass("goldBar");
        $(".memberType").html('');
    }
    $("#coinsUserId2").val(0);
    $("#userCoins2").text("Please Login First");
    $("#referral").val('');
    $("#refCount").text(0);
    $("#visibilityStatus").hide();
    $("#cVisibilityStatus").prop("disabled", true);
    $("#cVisibilityStatus2").prop("disabled", true);
    $("#cGoldName").prop("disabled", true);
    $("#cGoldName2").prop("disabled", true);
    $("#cRenderDistance").prop("disabled", true);
    $("#cGoldCrownChat").prop("disabled", true);
    $("#cGoldCrownChat2").prop("disabled", true);
    $("#cMinionSkinsStatus").prop("disabled", true);
    $("#cVideoAds").prop("disabled", true);
    $("#roleSettings").hide();
    $("#roleSettings input[type=\"checkbox\"]").prop("disabled", true);
    $("#roleSettings .role-setting").hide();
    $("#abilityFreeze").removeClass("has-ability");
    $("#abilityCloak").removeClass("has-ability");
    $("#abilityDoubleSpawnSize").removeClass("has-ability");
    $("#abilityDoubleExp").removeClass("has-ability");
    $("#contextModerate").hide();
}

function _0x26af75() {
    if (_0x109288 || $("#dashPanel").is(":visible")) {
        _0x522c0e();
        if (_0x53e3b2) {
            clearInterval(_0x53e3b2);
            _0x53e3b2 = 0;
        }
        _0x134fc9 = false;
        if (_0xd3f6e4) {
            clearTimeout(_0xd3f6e4);
            _0xd3f6e4 = 0;
        }
        if (_0x4b6359) {
            clearTimeout(_0x4b6359);
            _0x4b6359 = 0;
        }
        _0x4b6359 = setTimeout(function() {
            if (!_0x109288) {
                _0x315275(true);
                _0x134fc9 = true;
            }
        }, 3000);
    }
}
function _0x53846a() {
    if (isReady(true)) {
        if (0 < ag219.length) {
            new PacketWriter(3 + 2 * ag219.length).setUint8(101).setUint16(ag219.length).setString(ag219).send();
            rq219done = false;
            sentFirstTime = true;
        } else if (!rq219done) {
            setTimeout(function() {
                _0x53846a();
            }, 3000);
        }
    }
}

function _0x571cb3(_0x98f7b1, _0x225e18, _0x5abe84, _0x14af91) {
    var _0x6eb05c;
    $("#loginError").fadeOut("slow", function() {});
    if (_0x225e18 != _0x5abe84) {
        $("#loginError p").replaceWith("<p>Password retype incorrect <br> Passwords must be the same.</p>");
        $("#loginError").fadeIn();
    } else if (0 == _0x98f7b1.length) {
        $("#loginError p").replaceWith("<p>Please enter a username</p>");
        $("#loginError").fadeIn();
    } else if (0 == _0x14af91.length) {
        $("#loginError p").replaceWith("<p>Please enter an email</p>");
        $("#loginError").fadeIn();
    } else if (_0x225e18.length < 6) {
        $("#loginError p").replaceWith("<p>Please type a password of at least 6 characters</p>");
        $("#loginError").fadeIn();
    } else if (25 < _0x225e18.length) {
        $("#loginError p").replaceWith("<p>Password too long... <br> Maximum is 25 characters</p>");
        $("#loginError").fadeIn();
    } else if (_0x225e18.trim().toLowerCase() == _0x98f7b1.trim().toLowerCase()) {
        $("#loginError p").replaceWith("<p>Password cannot be the same as username.<br> Please choose a different password</p>");
        $("#loginError").fadeIn();
    } else {
        _0x5abe84 = md5(_0x225e18);
        _0x225e18 = decodeURIComponent((new RegExp("[?|&]in=([^&;]+?)(&|#|;|$)").exec(location.search) || [null, ''])[1].replace(/\+/g, "%20")) || null || '';
        _0x6eb05c = decodeURIComponent((new RegExp("[?|&]ref=([^&;]+?)(&|#|;|$)").exec(location.search) || [null, ''])[1].replace(/\+/g, "%20")) || null || '';
        _0x98f7b1 = _0x98f7b1;
        _0x5abe84 = _0x5abe84;
        _0x14af91 = _0x14af91;
        _0x225e18 = _0x225e18;
        _0x6eb05c = _0x6eb05c;
        if (isReady()) {
            if ((_0x225e18 = parseInt(_0x225e18) || 0) < 0) {
                _0x225e18 = 0;
            }
            if ((_0x6eb05c = parseInt(_0x6eb05c) || 0) < 0) {
                _0x6eb05c = 0;
            }
            new PacketWriter(15 + 2 * _0x98f7b1.length + 2 * _0x5abe84.length + 2 * _0x14af91.length).setUint8(3).setString(_0x98f7b1).setUint16(0).setString(_0x5abe84).setUint16(0).setString(_0x14af91).setUint16(0).setUint32(_0x225e18).setUint32(_0x6eb05c).send();
        }
    }
}

function _0x203625() {
    var _0x1919ba = $("#btnToggleQ");
    if (isMobile) {
        if (isSpectating && 0 == _0x335282.length) {
            $("#txtToggleQ").html("Spectate Mode");
            _0x1919ba.show();
        } else if (0 < _0x24af02) {
            $("#txtToggleQ").html(_0x53176c ? "Control (Minions)" : "Control (Yourself)");
            _0x1919ba.show();
        } else {
            _0x1919ba.hide();
        }
    } else {
        _0x1919ba.hide();
    }
}

function _0x1f73d2() {
    sendSignal(28);
}

function _0xf4910b() {
    sendSignal(30);
}

function _0x2b1b31() {
    sendSignal(31);
}
window.spinTheWheel = function() {
    if (!_0x109288) {
        return swal("Login", "Please login to spin the wheel, or register an account if you do not have an account yet");
    }
    if (spinWheelPlayAdvert) {
        if (!canRunAds) {
            return swal('', "Please Disable/Turn off your adblocker to Spin the Wheel");
        }
        adPreRolledBy = 1;
        adSuccessCB = function() {
            window.spinTheWheel();
        };
        try {
            _0x57b950();
            return void _0x52a0c8(true);
        } catch (_0x1231ab) {
            adPreRolledBy = 0;
            adSuccessCB = null;
        }
    }
    sendSignal(58);
};
window.watchAdvert = function() {
    if (!$("#watchAdvertBtn").hasClass("disabled")) {
        if (!canRunAds) {
            return swal('', "Please Disable/Turn off your adblocker to receive free coins");
        }
        if (_0x109288) {
            if ("undefined" != typeof Storage) {
                var _0x42ce5f = parseInt(localStorage.getItem("ad_r_l_time")) || 0;
                if (Date.now() - _0x42ce5f < 120000) {
                    return swal('', "Please wait at least 2 minutes before watching a new advert video and receiving coins");
                }
            }
            if (isReady()) {
                new PacketWriter(2).setUint8(120).setUint8(1).send();
            }
            $("#watchAdvertBtn").addClass("disabled");
            setTimeout(function() {
                $("#watchAdvertBtn").removeClass("disabled");
            }, 3000);
        } else {
            swal("Login", "Please login first, or register an account if you do not have an account yet");
        }
    }
};
window.succAdv = function() {
    _0x52a0c8(false);
    window.focus();
    if ("undefined" != typeof Storage) {
        localStorage.ad_l_time = Date.now();
    }
    switch (adPreRolledBy) {
        case 1:
            spinWheelPlayAdvert = false;
            if (adSuccessCB) {
                adSuccessCB();
            }
            break;
        case 3:
            if (adSuccessCB) {
                adSuccessCB();
            }
    }
    adPreRolledBy = 0;
    adSuccessCB = null;
};
window.succRewardedAdv = function() {
    var _0xc974bf;
    _0x52a0c8(false);
    window.focus();
    if ("undefined" != typeof Storage) {
        localStorage.ad_l_time = Date.now();
        localStorage.ad_r_l_time = Date.now();
    }
    if (2 === adPreRolledBy && isReady()) {
        _0xc974bf = 120;
        $("#ad-timeleft").css("color", "#FF5722").text(_0xc974bf + "s");
        if (_0xcc8490) {
            clearInterval(_0xcc8490);
            _0xcc8490 = 0;
        }
        _0xcc8490 = setInterval(function() {
            if (--_0xc974bf <= 0) {
                clearInterval(_0xcc8490);
                _0xcc8490 = 0;
                $("#ad-timeleft").css("color", "#24ff22").html("&#10004");
            } else {
                $("#ad-timeleft").text(_0xc974bf + "s");
            }
        }, 1000);
        new PacketWriter(2).setUint8(120).setUint8(2).send();
    }
    adPreRolledBy = 0;
    adSuccessCB = null;
};
window.rspwn = function(_0x5ce94e) {
    setNick(_0x5ce94e, true);
};
window.closeAdvert = function() {
    if (!_0x173058) {
        azad(true);
        $("#invisibleOverlay").finish().show(0).delay(400).hide(0);
        clearVideo();
    }
};
window.spectate = function(_0x592d39) {
    if (_0x134fc9 && _0x3b0762 && !_0x514d47 && !_0x173058 && !_0x1fc846) {
        if (0 == _0x335282.length) {
            if (isReady() && (_0x3f104e <= 0 || videoAdsEnabled)) {
                var _0x155018 = Date.now();
                var _0x40a47d = _0x155018;
                if ((_0x40a47d = "undefined" != typeof Storage && _0x155018 < (_0x40a47d = (_0x40a47d = localStorage.getItem("ad_l_time")) || (localStorage.ad_l_time = _0x155018)) ? 0 : _0x40a47d) < _0x155018 - 1000 * videoAdSeconds && clientStarted < _0x155018 - 1000 * videoAdSeconds) {
                    adPreRolledBy = 3;
                    adSuccessCB = function() {
                        window.spectate(_0x592d39);
                    };
                    try {
                        return void _0x57b950();
                    } catch (_0x493495) {
                        adPreRolledBy = 0;
                        adSuccessCB = null;
                    }
                }
            }
            _0x5665cf = null;
            if (isReady()) {
                isSpectating = true;
                sendSignal(12);
            }
            _0x8f51f1();
        } else {
            setNick(_0x592d39);
        }
    }
};
window.toggleSkin = function(_0x2fe59f) {
    if (_0x3e08c0 && _0x29ae07 && isReady()) {
        if (_0x28aabd == _0x2fe59f) {
            _0x5df715(0);
        } else {
            _0x5df715(_0x2fe59f);
            if (!_0xfd65d9) {
                _0x4e459c("cSkins", true);
            }
        }
        _0xbb1a8c();
    }
};
window.tskngc = function(_0x427c26) {
    if (isReady()) {
        _0x5df715(_0x427c26);
    }
};
window.shareInfectionFb = function() {};
window.fbLikeSkin = function() {
    window.open("https://www.facebook.com/Agmaio-334028330371935");
    $("#skinUseBtn73").text("Like on Facebook!");
    setTimeout(function() {
        $("#skinUseBtn73").attr("onclick", "toggleSkin(73);").text("Use");
        localStorage.setItem("fbSkin", 1);
    }, 22000);
};
window.YouTubeSubSkin = function(_0x33913c, _0x5bd538) {
    if (!(71 != (_0x33913c = _0x33913c || 71) && _0x5bd538 && '' != _0x5bd538)) {
        _0x5bd538 = "UCHHX_9Phr1Sio21b745Rfuw";
    }
    window.open("https://www.youtube.com/channel/" + _0x5bd538 + "?sub_confirmation=1");
    $("#skinUseBtn" + _0x33913c).text("Click Subscribe!");
    setTimeout(function() {
        $("#skinUseBtn" + _0x33913c).attr("onclick", "toggleSkin(" + _0x33913c + ");").text("Use");
        localStorage.setItem("ytSkin" + (71 != _0x33913c ? _0x33913c.toString() : ''), 1);
    }, 18000);
};
window.shuffleGameTips = function() {
    var _0x2d31d9 = ["You can type command /spin in the bottom left chat to spin your playercell in game", "You receive free coin rewards for every time you level up", "You can right-click any player in game or in chat for extra options", "You can feed a portal and it will spit out more mass than you fed it. Eat to grow!", "The gold blocks in agma spit out coins to farm when you feed them", "The SuperSonic servers in agma add you 5-20 minions for free when you consume the minion pellet", "In selffeed servers you can grow quickly by holding W to autofeed and Z to autosplit", "You can open your friendlist with the button on the top right corner", "You can drop items from your inventory (bottom of screen) and dragging the item onto the map", "You can purchase items/powerups from the shop. The item will appear in your inventory on the bottom of the screen", "In agma, you can invite friends to party/team by right clicking the player in game and selecting <Invite Player to Party>", "Collect coins in game to purchase powerups, portals, and more in the game shop", "You can submit your own CUSTOM skin in the shop -> skins -> custom skin section", "If you are experiencing lag, try turning off options with * in the game settings (settings are located in the right side of menu)", "Psst, most servers have secret rooms located somewhere in the bottom left corner, past the border. Shh.. keep it a secret", "You can still private message a friend who's online but shown as offline, type /pm <username> message", "You can press M to respawn, or change the keybind in the Settings->Controls (settings are in the right side of menu)", "Don't know how to use some powerups? Watch some Tutorials on the Agma Youtube-Channel!", "You can get tips on how to play agma on the agma discord. Link in the bottom of the main menu", "Gold Membership in agma has a lot of special benefits and rewards, exclusive skins and gold name. Check www.agma.io/member.php", "Did you find the secret room in agma, yet? But did you find the second one? Search for it, or ask players in chat for help!", "Agma is Agma'zing! If you disagree, go eat an agmapple upside down with a carrot on top!", "The max level on agma is 200, but levels are still counted when you surpass 200", "If you experience lag, try turning off skins and wearables in the settings. This will boost your FPS!", "You can enable FPS and PING in the settings, these will help you determine if you have lag", "INVISIBILITY: press i key in game if you are a gold member, and you can turn your cells invisible for 30 seconds", "You can right-click on your cell in the shop to remove skins or wearables from the cell", "You can level up quicker by eating players, mass pellets, viruses and mothercells", "You can use the 360 push powerup, or the freeze ability to prevent players from eating you"];
    var _0x38c178 = '';
    var _0x38c178 = _0x2d31d9[Math.floor(Math.random() * _0x2d31d9.length)];
    $("#game-tip").text(_0x38c178);
};
window.shuffleGameAds = function() {
    var _0x4b8269 = Math.floor(4 * Math.random()) + 1;
    var _0x8fc911 = Math.floor(11 * Math.random()) + 1;
    var _0x612774 = Math.floor(11 * Math.random()) + 1;
    var _0x51a8ba = Math.floor(15 * Math.random()) + 1;
    var _0x22954e = Math.floor(15 * Math.random()) + 1;
    var _0x30f458 = Math.floor(11 * Math.random()) + 1;
    var _0x430ea7 = Math.floor(11 * Math.random()) + 1;
    var _0x253e6b = Math.floor(6 * Math.random()) + 1;
    var _0x55446d = Math.floor(6 * Math.random()) + 1;
    if (1 == _0x4b8269) {
        if (_0x3f104e < 2) {
            $("#agmaAdHref").attr("href", "member.php?c=" + _0x8fc911);
            $("#zoomItem").attr("src", "img/agmaAd/gold/" + _0x8fc911 + ".png?v=1");
            if (!canRunAds) {
                $("#AGM_agma-io_300x250").html("<a href=\"member.php?d=" + _0x612774 + "\" target=\"_blank\"><img style=\"" + "margin: 0 auto;margin-top: 15px;border: 2px solid #002c40;min-width: 150px;max-width: 85%;height: 100%;max-height: 200px;transition: all .5s ease 0s;" + "\" src=\"img/agmaAd/gold/" + _0x612774 + ".png\"></a>");
            }
        } else {
            shuffleGameAds();
        }
    } else if (2 == _0x4b8269) {
        $("#agmaAdHref").attr("href", "coins.php?c=" + _0x51a8ba);
        $("#zoomItem").attr("src", "img/agmaAd/coins/" + _0x51a8ba + ".png?v=1");
        $("#AGM_agma-io_300x250").html("<a href=\"coins.php?d=" + _0x22954e + "\" target=\"_blank\"><img style=\"" + "margin: 0 auto;margin-top: 15px;border: 2px solid #002c40;min-width: 150px;max-width: 85%;height: 100%;max-height: 200px;transition: all .5s ease 0s;" + "\" src=\"img/agmaAd/coins/" + _0x22954e + ".png\"></a>");
    } else if (3 == _0x4b8269) {
        $("#agmaAdHref").attr("href", "bots.php?clickId=" + _0x30f458);
        $("#zoomItem").attr("src", "img/agmaAd/bots/" + _0x30f458 + ".png?v=1");
        if (!canRunAds) {
            $("#AGM_agma-io_300x250").html("<a href=\"bots.php?d=" + _0x430ea7 + "\" target=\"_blank\"><img style=\"" + "margin: 0 auto;margin-top: 15px;border: 2px solid #002c40;min-width: 150px;max-width: 85%;height: 100%;max-height: 200px;transition: all .5s ease 0s;" + "\" src=\"img/agmaAd/bots/" + _0x430ea7 + ".png\"></a>");
        }
    } else {
        $("#agmaAdHref").attr("href", "items.php?clickId=" + _0x253e6b);
        $("#zoomItem").attr("src", "img/agmaAd/items/" + _0x253e6b + ".png?v=1");
        if (!canRunAds) {
            $("#AGM_agma-io_300x250").html("<a href=\"items.php?d=" + _0x55446d + "\" target=\"_blank\"><img style=\"" + "margin: 0 auto;margin-top: 15px;border: 2px solid #002c40;min-width: 150px;max-width: 85%;height: 100%;max-height: 200px;transition: all .5s ease 0s;" + "\" src=\"img/agmaAd/items/" + _0x55446d + ".png\"></a>");
        }
    }
};
var _0x255800 = window.featureList || [];
var _0x1643ef = -1;
var _0xdf2e2d = -1;

function _0x416ef7(_0x46e069, _0x3a2784) {
    return {
        "url": "uploadskin.php",
        "type": "post",
        "cache": false,
        "contentType": false,
        "processData": false,
        "data": _0x3a2784,
        "success": function(_0x439b93) {
            try {
                var _0x50746b = !!(_0x439b93 = JSON.parse(_0x439b93)).errorCode;
                var _0x57712b = _0x439b93.errorMessage;
                var _0x1a6b64 = parseInt(_0x439b93.newPendingApproval);
                var _0x2b3b30 = !!_0x439b93.imageChanged;
            } catch (_0x979aa1) {
                _0x50746b = true;
                _0x57712b = "Error: an unexpected error occurred. Please make sure your file is less than 1MB.";
                _0x1a6b64 = -1;
                _0x2b3b30 = false;
            }
            if (_0x50746b) {
                if (_0x2b3b30) {
                    $("#skinCustomImg" + _0x46e069).attr("src", '').hide(0).show(0);
                    $("#skinContainer" + _0x46e069).addClass("noskin");
                }
                _0x12bbfc(_0x57712b, false, false, 0, 10);
            } else {
                $("#skinContainer" + _0x46e069).removeClass("noskin");
                $("#skinCustomImg" + _0x46e069).attr("src", '').attr("src", "skins/" + _0x46e069 + "_lo.png?d=" + Date.now()).hide(0).show(0);
            }
            if (-1 != _0x1a6b64) {
                $("#skinContainer" + _0x46e069).attr("data-pendingapproval", _0x1a6b64);
            }
        },
        "error": function() {
            _0x12bbfc("Error: unable to upload file to server. Please contact staff at the forums.", false, false, 0, 10);
        },
        "complete": function() {
            $("#skinContainer" + _0x46e069).removeClass("is-uploading");
            document.body.style.cursor = "default";
            _0x7f089d = false;
        }
    };
}

function _0xc081b2(_0x444466) {
    _0x444466.preventDefault();
    _0x444466.stopPropagation();
    if (_0x5ebb13) {
        if (_0x444466.dataTransfer) {
            _0x444466.dataTransfer.dropEffect = "copy";
        }
        $("#customBackContainer").addClass("drag-over");
    }
}

function _0xa3fe4(_0x1794bf) {
    _0x1794bf.preventDefault();
    _0x1794bf.stopPropagation();
    if (_0x5ebb13) {
        if (_0x1794bf.dataTransfer) {
            _0x1794bf.dataTransfer.dropEffect = "none";
        }
        $("#customBackContainer").removeClass("drag-over");
    }
}

function _0x2808de(_0x2a55e3) {
    _0x2a55e3.preventDefault();
    _0x2a55e3.stopPropagation();
    if (_0x5ebb13 && (_0x2a55e3.dataTransfer && (_0x2a55e3.dataTransfer.dropEffect = "copy"), $("#customBackContainer").removeClass("drag-over"), _0x2a55e3.dataTransfer)) {
        if (_0x2a55e3.dataTransfer.files && 0 < _0x2a55e3.dataTransfer.files.length) {
            _0x24c563(_0x2a55e3.dataTransfer.files[0]);
        } else if (_0x2a55e3.dataTransfer.getData("url")) {
            _0x12bbfc("Error: please save an image from another site to your computer before uploading it on agma", false, false, 0, 10);
        }
    }
}

function _0x24c563(_0x468277) {
    if (_0x468277) {
        _0x34efff(_0x7f089d = true);
        $("#customBackContainer").addClass("is-uploading");
        document.body.style.cursor = "progress";
        var _0x176d4a = new FileReader();
        _0x176d4a.onload = function() {
            _0x350e59(_0x176d4a.result);
            _0x236671();
        };
        _0x176d4a.onabort = _0x176d4a.onerror = function() {
            _0x12bbfc("Error: something went wrong while loading the file. Please try again.", false, false, 0, 10);
            _0x236671();
        };
        try {
            _0x176d4a.readAsDataURL(_0x468277);
        } catch (_0x5dbbe7) {
            _0x12bbfc("Error: an unexpected error occurred with the selected file", false, false, 0, 10);
            _0x236671();
        }

        function _0x236671() {
            $("#customBackContainer").removeClass("is-uploading");
            document.body.style.cursor = "default";
            _0x7f089d = false;
        }
    }
}

function _0x350e59(_0xf3cb18, _0x4062b1) {
    _0x4062b1 = undefined === _0x4062b1 || !!_0x4062b1;
    if ('' != (_0xf3cb18 = _0xf3cb18 || '')) {
        _0x37e4bf = true;
        $("#customBackContainer").removeClass("nocustomback");
        try {
            var _0x35c5f = new Image();
            _0x35c5f.onload = function() {
                var _0x3ea61d;
                var _0x1b7543;
                var _0x250044;
                var _0x425fa;
                var _0x350f73;
                var _0x57d760;
                if (_0x35c5f && _0x35c5f.complete && 0 != _0x35c5f.width) {
                    _0x250044 = _0x35c5f.width;
                    _0x425fa = _0x35c5f.height;
                    if (4096 < _0x250044 || 4096 < _0x425fa) {
                        _0x1b7543 = 4096 / Math.max(_0x250044, _0x425fa);
                        _0x250044 = (_0x3ea61d = Math.max(~~(_0x250044 * _0x1b7543 + 0.5), 1)) / _0x250044;
                        _0x425fa = (_0x1b7543 = Math.max(~~(_0x425fa * _0x1b7543 + 0.5), 1)) / _0x425fa;
                        _0x57d760 = (_0x350f73 = document.createElement("canvas")).getContext("2d");
                        _0x350f73.width = _0x3ea61d;
                        _0x350f73.height = _0x1b7543;
                        _0x57d760.scale(_0x250044, _0x425fa);
                        _0x57d760.drawImage(_0x35c5f, 0, 0);
                        _0x350f73.complete = true;
                        _0xf3cb18 = _0x350f73.toDataURL();
                        _0x1b3496 = _0x350f73;
                        _0x350f73 = _0x57d760 = null;
                    } else {
                        _0x1b3496 = _0x35c5f;
                    }
                    _0x2d537c = _0xf3cb18;
                    if (_0x14d497) {
                        _0x5cfda7(_0xf3cb18);
                    }
                    _0x17ae44();
                    if (_0x4062b1) {
                        _0x3da849("general", "cbgDataURL", _0xf3cb18);
                    }
                } else {
                    _0x12bbfc("Error: the background image did not load successfully. Please try again.", false, false, 0, 10);
                    _0x350e59('');
                }
                _0x35c5f = null;
                _0x37e4bf = false;
            };
            _0x35c5f.onerror = function() {
                _0x12bbfc("Error: the background image could not be loaded", false, false, 0, 10);
                _0x350e59('');
                _0x35c5f = null;
                _0x37e4bf = false;
            };
            _0x35c5f.src = _0xf3cb18;
        } catch (_0x48bca4) {
            _0x12bbfc("Error: something went wrong while loading the background image", false, false, 0, 10);
            _0x37e4bf = false;
        }
    } else {
        $("#customBackContainer").addClass("nocustomback");
        _0x1b3496 = null;
        _0x2d537c = '';
        if (_0x14d497) {
            _0x5cfda7('');
        }
        _0x17ae44();
        if (_0x4062b1) {
            _0x3da849("general", "cbgDataURL", '');
        }
    }
}

function _0x5cfda7(_0x16b03a) {
    var _0x5a7db6 = _0x1b3496;
    var _0x8862f2 = _0x5a7db6 && _0x5a7db6.complete && 0 != _0x5a7db6.width;
    var _0x1ff456 = $("#customBackImgHolder");
    var _0x5b18c3 = {
        "background-color": _0xe0e646 ? _0x32edda : '',
        border: _0x1407a2 ? "3px solid rgba(204,48,48,0.8)" : '',
        margin: _0x1407a2 ? "-2px" : '',
        "box-shadow": _0x1407a2 ? "none" : ''
    };
    $("#customBackContainer").css(_0x5b18c3);
    if (undefined !== _0x16b03a && (_0x1ff456.css("background-image", ''), '' != _0x16b03a)) {
        _0x1ff456.css("background-image", "url(\"" + _0x16b03a + "\")").hide(0).show(0);
    }
    _0x1ff456.css({
        "opacity": (_0x1cf392 ? Math.max(_0x537d17, 0.1) : _0x537d17).toString(),
        "background-size": 2 == _0x19d645 ? (_0x8862f2 ? Math.clamp(~~(50 * _0x5a7db6.width / 1024 + 0.5), 2, 50) : 50).toString() + "%" : 1 == _0x19d645 ? "cover" : "100% 100%",
        "background-repeat": 2 == _0x19d645 ? "repeat" : "no-repeat"
    });
}

function _0x17ae44() {
    delete _0x46d4aa[(_0x3cea75 = "customback_fit") + "1"];
    delete _0x46d4aa[_0x3cea75 + "2"];
    delete _0x46d4aa[_0x3cea75 + "4"];
    delete _0x46d4aa[_0x3cea75 + "8"];
    var _0x3cea75 = "customback_pattern";
    delete _0x46d4aa[_0x3cea75 + "1"];
    delete _0x46d4aa[_0x3cea75 + "2"];
    delete _0x46d4aa[_0x3cea75 + "4"];
    delete _0x46d4aa[_0x3cea75 + "8"];
    delete _0x46d4aa[_0x3cea75 + "16"];
    delete _0x43c4be[_0x3cea75 + "1"];
    delete _0x43c4be[_0x3cea75 + "2"];
    delete _0x43c4be[_0x3cea75 + "4"];
    delete _0x43c4be[_0x3cea75 + "8"];
    delete _0x43c4be[_0x3cea75 + "16"];
}

function _0x4c0e03() {
    var _0x5c9ea3;
    var _0x2ef3a3 = _0x1b3496;
    if (_0x12e7a7 && _0x2ef3a3 && _0x2ef3a3.complete && 0 != _0x2ef3a3.width) {
        if (2 == _0x19d645) {
            if (null == _0x46d4aa[(_0x5c9ea3 = "customback_pattern") + "1"]) {
                var _0x4449a4 = _0x2ef3a3;
                var _0xc96bba = _0x2ef3a3.width;
                var _0x4a2633 = _0x2ef3a3.height;
                var _0x1597ee = Math.max(_0xc96bba, _0x4a2633);
                var _0xcbd6dc = 1;
                var _0x103d00 = document.createElement("canvas");
                var _0x472f02 = _0x103d00.getContext("2d");
                if (1024 < _0x1597ee) {
                    _0xaf4812 = 1024 / _0x1597ee;
                    _0x4034c3 = (_0x42313b = Math.max(~~(_0xc96bba * _0xaf4812 + 0.5), 1)) / _0xc96bba;
                    _0x130c18 = (_0x260157 = Math.max(~~(_0x4a2633 * _0xaf4812 + 0.5), 1)) / _0x4a2633;
                    _0x103d00.width = _0xc96bba = _0x42313b;
                    _0x103d00.height = _0x4a2633 = _0x260157;
                    _0x472f02.save();
                    _0x472f02.scale(_0x4034c3, _0x130c18);
                    _0x472f02.drawImage(_0x4449a4, 0, 0);
                    _0x472f02.restore();
                    _0x4449a4 = _0x103d00;
                }
                var _0x4e1f35 = Math.max(~~(512 / _0xc96bba), 1);
                var _0x29b87d = Math.max(~~(512 / _0x4a2633), 1);
                var _0x1cc51d = (_0x16a988 = document.createElement("canvas")).getContext("2d");
                _0x16a988.width = _0xc96bba * _0x4e1f35;
                _0x16a988.height = _0x4a2633 * _0x29b87d;
                for (var _0x1022f6 = 0; _0x1022f6 < _0x4e1f35; _0x1022f6++) {
                    for (var _0x4a0a2d = 0; _0x4a0a2d < _0x29b87d; _0x4a0a2d++) {
                        _0x1cc51d.drawImage(_0x4449a4, _0x1022f6 * _0xc96bba, _0x4a0a2d * _0x4a2633);
                    }
                }
                _0xc96bba *= _0x4e1f35;
                _0x4a2633 *= _0x29b87d;
                _0x16a988.complete = true;
                _0x46d4aa[_0x5c9ea3 + _0xcbd6dc.toString()] = _0x4449a4 = _0x16a988;
                for (var _0x5a1e6c = 0; _0x5a1e6c < 4; _0x5a1e6c++) {
                    _0xcbd6dc *= 2;
                    _0x103d00.width = 2 * _0xc96bba;
                    _0x103d00.height = 2 * _0x4a2633;
                    for (_0x1022f6 = 0; _0x1022f6 < 2; _0x1022f6++) {
                        for (_0x4a0a2d = 0; _0x4a0a2d < 2; _0x4a0a2d++) {
                            _0x472f02.drawImage(_0x4449a4, _0x1022f6 * _0xc96bba, _0x4a0a2d * _0x4a2633);
                        }
                    }
                    _0x4449a4 = _0x103d00;
                    _0x1cc51d = (_0x16a988 = document.createElement("canvas")).getContext("2d");
                    _0x16a988.width = _0xc96bba;
                    _0x16a988.height = _0x4a2633;
                    _0x1cc51d.save();
                    _0x1cc51d.scale(0.5, 0.5);
                    _0x1cc51d.drawImage(_0x4449a4, 0, 0);
                    _0x1cc51d.restore();
                    _0x16a988.complete = true;
                    _0x46d4aa[_0x5c9ea3 + _0xcbd6dc.toString()] = _0x4449a4 = _0x16a988;
                }
            }
        } else {
            if (null == _0x46d4aa[(_0x5c9ea3 = "customback_fit") + "1"]) {
                var _0xaf4812;
                var _0x42313b;
                var _0x260157;
                var _0x16a988;
                var _0x4449a4 = _0x2ef3a3;
                var _0x4034c3 = 1;
                var _0x130c18 = 1;
                var _0xc96bba = _0x2ef3a3.width;
                var _0x4a2633 = _0x2ef3a3.height;
                var _0x1597ee = Math.max(_0xc96bba, _0x4a2633);
                var _0xabc85a = 4096;
                var _0xcbd6dc = 1;
                for (var _0x5a1e6c = 0; _0x5a1e6c < 4; _0x5a1e6c++) {
                    if (_0xabc85a < _0x1597ee) {
                        _0xaf4812 = _0xabc85a / _0x1597ee;
                        _0x4034c3 = (_0x42313b = Math.max(~~(_0xc96bba * _0xaf4812 + 0.5), 1)) / _0xc96bba;
                        _0x130c18 = (_0x260157 = Math.max(~~(_0x4a2633 * _0xaf4812 + 0.5), 1)) / _0x4a2633;
                        _0xc96bba = _0x42313b;
                        _0x4a2633 = _0x260157;
                    }
                    if (_0xabc85a < _0x1597ee || 0 == _0x5a1e6c) {
                        _0x1cc51d = (_0x16a988 = document.createElement("canvas")).getContext("2d");
                        _0x16a988.width = _0xc96bba;
                        _0x16a988.height = _0x4a2633;
                        _0x1cc51d.save();
                        _0x1cc51d.scale(_0x4034c3, _0x130c18);
                        _0x1cc51d.drawImage(_0x4449a4, 0, 0);
                        _0x1cc51d.restore();
                        _0x16a988.complete = true;
                        _0x4449a4 = _0x16a988;
                    }
                    _0x46d4aa[_0x5c9ea3 + _0xcbd6dc.toString()] = _0x4449a4;
                    _0x1597ee = Math.max(_0xc96bba, _0x4a2633);
                    _0xabc85a = ~~(0.5 * _0xabc85a + 0.5);
                    _0xcbd6dc *= 2;
                }
            }
        }
    }
}

function _0xbe31b4(_0x2d5cb7) {
    if (window.indexedDB) {
        if (_0x123859) {
            if ("function" == typeof _0x2d5cb7) {
                _0x2d5cb7();
            }
        } else {
            try {
                var _0x528aaf = window.indexedDB.open("AgmaDB", 1);
                _0x528aaf.onsuccess = function(_0x47659b) {
                    (_0x123859 = _0x528aaf.result).onclose = function(_0x1efd6b) {
                        _0x123859 = null;
                    };
                    _0x123859.onversionchange = function(_0x2a7b9a) {
                        _0x123859.close();
                        _0x123859 = null;
                    };
                    if ("function" == typeof _0x2d5cb7) {
                        _0x2d5cb7();
                    }
                };
                _0x528aaf.onupgradeneeded = function(_0x29f845) {
                    _0x29f845 = _0x29f845.target.result;
                    if (!_0x29f845.objectStoreNames.contains("general")) {
                        _0x29f845.createObjectStore("general");
                    }
                };
            } catch (_0x28e305) {}
        }
    }
}

function _0x3da849(_0x2f4860, _0x2262ae, _0x185f55, _0x59fa77) {
    function _0x31da82() {
        try {
            _0x123859.transaction(_0x2f4860, "readwrite").objectStore(_0x2f4860).put(_0x185f55, _0x2262ae).onsuccess = function(_0x574974) {
                if ("function" == typeof _0x59fa77) {
                    _0x59fa77();
                }
            };
        } catch (_0xedd220) {}
    }
    if (_0x123859) {
        _0x31da82();
    } else {
        _0xbe31b4(_0x31da82);
    }
}

function _0x4b57bd(_0x28c810) {
    if (_0x2412c8 != _0x28c810) {
        _0x2412c8 = _0x28c810;
        $("#gamemodeCollapse > i").removeClass("fa-caret-" + (_0x2412c8 ? "left" : "right")).addClass("fa-caret-" + (_0x2412c8 ? "right" : "left"));
        if (_0x2412c8) {
            $("#gamemodeBox").addClass("collapsed");
        } else {
            $("#gamemodeBox").removeClass("collapsed");
        }
        if (undefined !== window.localStorage) {
            window.localStorage.gmbCollapsed = _0x2412c8;
        }
        _0x2d6730();
    }
}

function _0x39f84f(_0x397ccf) {
    console.log(_0x397ccf);
    if (_0x397ccf) {
        $(".challenges-modal-btn").hide();
    } else {
        $(".challenges-modal-btn").show();
    }
    _0x536680 = true;
    if (_0x41140e != _0x397ccf) {
        _0x41140e = _0x397ccf;
        $("#challengeInfoCollapse > i").removeClass("fa-caret-" + (_0x41140e ? "left" : "right")).addClass("fa-caret-" + (_0x41140e ? "right" : "left"));
        if (_0x41140e) {
            $("#challengeInfoBox").addClass("collapsed");
        } else {
            $("#challengeInfoBox").removeClass("collapsed");
        }
        if (_0x41140e) {
            $("#challengeInfoCollapse").css("margin-top", "1px");
        } else {
            $("#challengeInfoCollapse").css("margin-top", "8px");
        }
        _0x4c5e78(_0x41140e ? 0 : 2);
        _0x58c913 = !!_0x41140e;
    }
}

function _0x1deadf(_0xc59515) {
    if (_0x22bf19 != _0xc59515) {
        _0x22bf19 = _0xc59515;
        $("#partyCollapse > i").removeClass("fa-caret-" + (_0x22bf19 ? "left" : "right")).addClass("fa-caret-" + (_0x22bf19 ? "right" : "left"));
        if (_0x22bf19) {
            $("#partyBox").addClass("collapsed");
        } else {
            $("#partyBox").removeClass("collapsed");
        }
        _0x1a0f0b();
    }
}

function _0x5ccb42(_0x3c154e) {
    if (_0x59182a != _0x3c154e && ((_0x59182a = _0x3c154e) ? $("#chat").addClass("dimmed") : $("#chat").removeClass("dimmed"), undefined !== window.localStorage)) {
        window.localStorage.chatDimmed = _0x59182a;
    }
}

function _0x4e459c(_0x27a0fe, _0x427b0f) {
    $("#" + _0x27a0fe).prop("checked", _0x427b0f).change();
    _0x427b0f = $("#" + _0x27a0fe).closest("label", document.getElementById("settings"));
    var _0x35377f = {
        paddingLeft: "5px"
    };
    var _0x41a17f = {
        paddingLeft: "0px"
    };
    if (_0x427b0f) {
        _0x427b0f.finish().animate(_0x35377f, 50).animate(_0x41a17f, 150);
    }
}
window.prevVideo = function() {
    if (0 < _0x255800.length && 0 < _0x1643ef) {
        setVideo(_0x1643ef - 1);
    }
};
window.nextVideo = function() {
    if (0 < _0x255800.length && _0x1643ef < _0x255800.length - 1) {
        setVideo(_0x1643ef + 1);
    }
};
window.setVideo = function(_0x424569) {
    if (_0x1643ef != _0x424569 && 0 <= _0x424569 && _0x424569 <= _0x255800.length - 1) {
        _0xdf2e2d = _0x1643ef = _0x424569;
        _0x424569 = _0x255800[_0x1643ef];
        $("#featuredVideo").attr("src", "https://www.youtube.com/embed/" + encodeURIComponent(_0x424569.vid));
        $("#featuredDescription").text(_0x424569.descr);
        $(".featured-btn").removeClass("selected");
        $("#featuredBtn" + _0x1643ef).addClass("selected");
    }
};
window.clearVideo = function() {
    $("#featuredVideo").attr("src", '');
    $("#featuredDescription").text('');
    _0x1643ef = -1;
};
window.purchaseSkin = function(_0x1e4706, _0x24b987) {
    if (_0x29ae07 && isReady()) {
        swal({
            "title": "Confirm",
            "text": "If you click \"Buy\", you will purchase this skin. It costs " + _0x1e4706,
            "type": "warning",
            "showCancelButton": true,
            "confirmButtonColor": "#4CAF50",
            "confirmButtonText": "Yes, confirm purchase",
            "cancelButtonText": "No, cancel purchase"
        }, function() {
            if (isReady()) {
                new PacketWriter(3).setUint8(44).setUint16(_0x24b987).send();
            }
        });
    }
};
window.purchaseCustomSkin = function(_0x50e431) {
    if (_0x29ae07 && isReady()) {
        swal({
            "title": "Confirm",
            "text": "If you click \"Yes\", you will purchase a new custom skin slot. It costs " + _0x50e431 + "<br><span style=\"font-size:13px;\"><br>(click here for <a href=\"#customSkinInstructions\" onclick=\"swal.close();\">instructions</a>)</span><br><br>",
            "type": "warning",
            "html": true,
            "showCancelButton": true,
            "confirmButtonColor": "#4CAF50",
            "confirmButtonText": "Yes, confirm purchase",
            "cancelButtonText": "No, cancel purchase"
        }, function() {
            sendSignal(50);
        });
    }
};
window.editCustomSkin = function(_0x332f75) {
    function _0x352370() {
        if (isReady()) {
            new PacketWriter(3).setUint8(51).setUint16(_0x332f75).send();
        }
        if (_0x28aabd == _0x332f75) {
            _0x5df715(0);
        }
        $("#skinContainer" + _0x332f75).removeClass("saved-mode approved-mode rejected-mode enabled-mode").addClass("edit-mode nonapproved-mode pending-mode disabled-mode");
    }
    if (_0x29ae07 && isReady() && _0x109288 && !_0x7f089d) {
        if ($("#skinContainer" + _0x332f75).hasClass("enabled-mode")) {
            swal({
                "title": "Confirm",
                "text": "Are you sure you want to change this skin? Please be reminded if you press Yes, you cannot play with this skin anymore until it is re-approved by staff.",
                "type": "warning",
                "showCancelButton": true,
                "confirmButtonColor": "#4CAF50",
                "confirmButtonText": "Yes, change skin",
                "cancelButtonText": "Cancel"
            }, _0x352370);
        } else {
            _0x352370();
        }
    }
};
window.saveCustomSkin = function(_0x164677) {
    if (_0x29ae07 && isReady() && _0x109288 && !_0x7f089d) {
        if (3 <= parseInt($("#skinContainer" + _0x164677).attr("data-pendingapproval"))) {
            _0x12bbfc("Please upload an image before saving", false, false, 0, 10);
        } else {
            var _0x4a7a01 = $("#skinNameInput" + _0x164677).val().toString().substr(0, 30);
            var _0x220cea = $("#skinSharedPublicInput" + _0x164677).is(":checked");
            for (var _0x256897 = 0; _0x256897 < _0x4a7a01.length; _0x256897++) {
                if (!/[\x20-\xff]/.test(_0x4a7a01.charAt(_0x256897))) {
                    return void _0x12bbfc("Please choose another skinname - unicode characters are not allowed", false, false, 0, 10);
                }
            }
            _0x34efff(true);
            if (isReady()) {
                new PacketWriter(4 + 2 * _0x4a7a01.length).setUint8(52).setUint16(_0x164677).setUint8(_0x220cea ? 1 : 0).setString(_0x4a7a01).send();
            }
            $("#skinName" + _0x164677).text(_0x4a7a01);
            if (_0x220cea) {
                $("#skinSharedPublic" + _0x164677).removeClass("private-skin");
            } else {
                $("#skinSharedPublic" + _0x164677).addClass("private-skin");
            }
            $("#skinContainer" + _0x164677).removeClass("edit-mode approved-mode rejected-mode enabled-mode").addClass("saved-mode nonapproved-mode pending-mode disabled-mode");
        }
    }
};
window.uploadCustomSkin = function(_0x4fd1d3) {
    if (!(!_0x29ae07 || !(isReady()) || !_0x109288 || _0x7f089d || _0x12c3b0 > Date.now())) {
        _0x12c3b0 = Date.now() + 1000;
        $("#skinUploadBtn" + _0x4fd1d3).blur();
        $("#uploadFile").off("change").val('').attr("accept", ".png, .jpg, .jpeg").one("change", function() {
            var _0x375b8d;
            if (_0x109288) {
                _0x34efff(_0x7f089d = true);
                $("#skinContainer" + _0x4fd1d3).addClass("is-uploading");
                document.body.style.cursor = "progress";
                $("#uploadMaxFileSize").val(1048576);
                _0x375b8d = {
                    "username": _0xea465f,
                    "password": _0x170269,
                    "skinId": _0x4fd1d3
                };
                $("#uploadForm").ajaxSubmit(_0x416ef7(_0x4fd1d3, _0x375b8d));
            }
        }).trigger("click");
    }
};
window.dragFileOverSkin = function(_0x500ec7, _0x3f751c) {
    _0x500ec7.preventDefault();
    _0x500ec7.stopPropagation();
    if (_0x5ebb13) {
        if (_0x500ec7.dataTransfer) {
            _0x500ec7.dataTransfer.dropEffect = "copy";
        }
        $("#skinContainer" + _0x3f751c).addClass("drag-over");
    }
};
window.dragFileLeaveSkin = function(_0x380e97, _0x55ac06) {
    _0x380e97.preventDefault();
    _0x380e97.stopPropagation();
    if (_0x5ebb13) {
        if (_0x380e97.dataTransfer) {
            _0x380e97.dataTransfer.dropEffect = "none";
        }
        $("#skinContainer" + _0x55ac06).removeClass("drag-over");
    }
};
window.dropFileOnSkin = function(_0x13c4f9, _0x4dc317) {
    var _0x2f5c3b;
    _0x13c4f9.preventDefault();
    _0x13c4f9.stopPropagation();
    if (_0x5ebb13 && (_0x13c4f9.dataTransfer && (_0x13c4f9.dataTransfer.dropEffect = "copy"), $("#skinContainer" + _0x4dc317).removeClass("drag-over"), _0x29ae07) && isReady() && _0x109288 && _0x13c4f9.dataTransfer && _0x13c4f9.dataTransfer.files && 0 < _0x13c4f9.dataTransfer.files.length) {
        _0x34efff(_0x7f089d = true);
        $("#skinContainer" + _0x4dc317).addClass("is-uploading");
        document.body.style.cursor = "progress";
        _0x13c4f9 = _0x13c4f9.dataTransfer.files[0];
        (_0x2f5c3b = new FormData()).append("MAX_FILE_SIZE", 1048576);
        _0x2f5c3b.append("uploadFile", _0x13c4f9);
        _0x2f5c3b.append("username", _0xea465f);
        _0x2f5c3b.append("password", _0x170269);
        _0x2f5c3b.append("skinId", _0x4dc317);
        $.ajax(_0x416ef7(_0x4dc317, _0x2f5c3b));
    }
};
window.uploadCustomBack = function() {
    if (!(_0x7f089d || _0x12c3b0 > Date.now())) {
        if ("FileReader" in window) {
            _0x12c3b0 = Date.now() + 1000;
            $("#customBackBtn").blur();
            $("#uploadFile").off("change").val('').attr("accept", "image/*").one("change", function() {
                var _0x2cd62f = document.getElementById("uploadFile");
                if (_0x2cd62f && _0x2cd62f.files && 0 < _0x2cd62f.files.length) {
                    _0x24c563(_0x2cd62f.files[0]);
                }
            }).trigger("click");
        } else {
            _0x12bbfc("Sorry, custom backgrounds are not supported on your system. Maybe try another browser?", false, false, 0, 10);
        }
    }
};
window.showPublicSkinsPage = function(_0x79939c) {
    if (_0x29ae07 && isReady()) {
        $("#skinsCustom .publicskins-nav-btn").addClass("btn-primary").filter(".publicskins-nav-btn-" + _0x79939c.toLowerCase()).removeClass("btn-primary").addClass("btn-default");
        document.getElementById("publicSkinsPage").innerHTML = document.getElementById("publicSkinsPageContent" + _0x79939c).textContent;
        $("#publicSkinsPage .skin-container").removeClass("selected");
        $("#publicSkinsPage .skinuse-btn").removeClass("btn-default").addClass("btn-primary").text("Use");
        if (0 != _0x28aabd) {
            $("#skinContainer" + _0x28aabd).addClass("selected");
            $("#skinUseBtn" + _0x28aabd).removeClass("btn-primary").addClass("btn-default").text("Cancel");
        }
        document.getElementById("publicSkinsHeader").scrollIntoView();
    }
};
window.tgWblGc = function(_0x164aab, _0x2c53fd, _0x4286f5, _0x1b40b7, _0x18a457) {
    if (isReady()) {
        _0x5f4edb(_0x164aab, _0x2c53fd, _0x4286f5, _0x1b40b7, _0x18a457);
    }
};
window.toggleWearable = function(_0x3acdc5, _0x75f1be, _0x1acae1, _0x26b773, _0x25e189) {
    if (_0x3e08c0 && _0x529909 && isReady()) {
        var _0x551068 = false;
        for (var _0x3e19ac = 0; _0x3e19ac < _0x4bb827.length; _0x3e19ac++) {
            if (_0x4bb827[_0x3e19ac].wearId == _0x3acdc5) {
                _0x551068 = true;
                break;
            }
        }
        if (_0x551068) {
            _0x5eb440(_0x3acdc5);
        } else {
            if (0 != _0x26b773) {
                var _0x323f5e = _0x4bb827.length;
                for (var _0xe8fbe7 = 0; _0xe8fbe7 < _0x323f5e; _0xe8fbe7++) {
                    if (_0x4bb827[_0xe8fbe7].wearGroup == _0x26b773 && (_0x5eb440(_0x4bb827[_0xe8fbe7].wearId), _0x4bb827.length < _0x323f5e)) {
                        _0x323f5e--;
                        _0xe8fbe7--;
                    }
                }
            }
            if (5 <= _0x4bb827.length) {
                return void _0x12bbfc("You cannot select more than 5 wearables. Please remove one before selecting another wearable.", false, false, 0, 10);
            }
            _0x5f4edb(_0x3acdc5, _0x75f1be, _0x1acae1, _0x26b773, _0x25e189);
            if (!_0x4b4ed5) {
                _0x4e459c("cWearables", true);
            }
        }
        _0xbb1a8c();
    }
};
window.purchaseWearable = function(_0x1d3ed8, _0x27391e) {
    if (_0x529909 && isReady()) {
        swal({
            "title": "Confirm",
            "text": "If you click \"Buy\", you will purchase this wearable. It costs " + _0x1d3ed8,
            "type": "warning",
            "showCancelButton": true,
            "confirmButtonColor": "#4CAF50",
            "confirmButtonText": "Yes, confirm purchase",
            "cancelButtonText": "No, cancel purchase"
        }, function() {
            if (isReady()) {
                _0x5eb440(_0x27391e);
                new PacketWriter(3).setUint8(43).setUint16(_0x27391e).send();
            }
        });
    }
};
window.toggleGamemodeCollapse = function() {
    _0x4b57bd(_0x2412c8 ? 0 : 1);
};
window.toggleChallengeInfoCollapse = function() {
    _0x39f84f(_0x41140e ? 0 : 1);
};
window.animateExpReward = function() {
    let _0x341dc0 = document.getElementById("xpReward");
    var _0x2d1dc8 = document.getElementById("chall-rewards-box");
    let _0x2959f4 = document.getElementById("sr-progress-bar");
    _0x341dc0.style.transform = "translate(0, 0)";
    _0x341dc0.style.opacity = 1;
    _0x341dc0.style.display = "block";
    if (_0x38a139 < 1) {
        _0x38a139 = 10;
    }
    _0x341dc0.textContent = "+" + _0x38a139 + "% EXP";
    _0x341dc0.getBoundingClientRect();
    var _0x2d1dc8 = _0x2d1dc8.getBoundingClientRect();
    var _0x415edb = _0x2959f4.getBoundingClientRect();
    var _0x519db9 = _0x415edb.left - _0x2d1dc8.left + _0x415edb.width / 2;
    var _0x2d1dc8 = _0x415edb.top - _0x2d1dc8.top + _0x415edb.height / 2;
    var _0x2666d3 = {
        transform: "translate(0, 0)",
        opacity: 1
    };
    var _0x59deeb = {
        duration: 1500,
        easing: "ease-out",
        fill: "forwards"
    };
    _0x341dc0.animate([_0x2666d3, {
        "transform": "translate(" + _0x519db9 + "px, " + _0x2d1dc8 + "px)",
        "opacity": 0.9
    }], _0x59deeb).onfinish = () => {
        _0x2959f4.classList.add("highlight");
        setTimeout(() => {
            _0x2959f4.classList.remove("highlight");
        }, 1000);
        _0x341dc0.style.display = "none";
        _0x341dc0.style.transform = "translate(0, 100%)";
    };
    let _0xd7fb0a = document.getElementById("notificationc");
    var _0x5ee026 = {
        transform: "translateY(100%)",
        opacity: 0
    };
    var _0x2c4b54 = {
        transform: "translateY(0)",
        opacity: 1
    };
    var _0xbd00e0 = {
        duration: 500,
        easing: "ease-out",
        fill: "forwards"
    };
    _0xd7fb0a.textContent = "Congratulations, completed reward!";
    _0xd7fb0a.style.display = "block";
    _0xd7fb0a.style.opacity = 1;
    _0xd7fb0a.animate([_0x5ee026, _0x2c4b54], _0xbd00e0);
    setTimeout(() => {
        var _0x38cf42 = {
            transform: "translateY(0)",
            opacity: 1
        };
        var _0x22a6b5 = {
            transform: "translateY(100%)",
            opacity: 0
        };
        var _0x59ace1 = {
            duration: 500,
            easing: "ease-out",
            fill: "forwards"
        };
        _0xd7fb0a.animate([_0x38cf42, _0x22a6b5], _0x59ace1).onfinish = () => {
            _0xd7fb0a.style.display = "none";
            _0xd7fb0a.style.opacity = 1;
        };
    }, 5000);
};
window.toggleInfoCollapse = function() {
    var _0x165444;
    if (_0x2fe589 != (_0x165444 = _0x2fe589 ? 0 : 1)) {
        _0x2fe589 = _0x165444;
        $("#infoCollapse > i").removeClass("fa-caret-" + (_0x2fe589 ? "left" : "right")).addClass("fa-caret-" + (_0x2fe589 ? "right" : "left"));
        if (_0x2fe589) {
            $("#infoBox").addClass("collapsed");
        } else {
            $("#infoBox").removeClass("collapsed");
        }
        _0x39b68a();
    }
};
window.togglePartyCollapse = function() {
    _0x1deadf(_0x22bf19 ? 0 : 1);
};
window.toggleChatDimmed = function() {
    _0x5ccb42(_0x59182a ? 0 : 1);
};
window.checkUserLoggedIn = function() {
    return !!_0x109288 || (swal("Login first", "Please log in on agma or register a new user account to use this functionality"), false);
};
window.coinsXopen = function(_0x34f7cb) {
    _0x34f7cb = "cprd=" + (_0x34f7cb = _0x34f7cb || 1) + "&cpn=" + _0xea465f + "&cpcid=" + _0x5bbe63;
    if ('' == _0xea465f) {
        return swal("Login first", "Please log in on agma or register a new user account to use this functionality");
    }
    $.ajax({
        "type": "GET",
        "url": "../xsl/gtk.php",
        "data": _0x34f7cb,
        "beforeSend": function() {},
        "success": function(_0x5b9f71) {
            if ("error" != _0x5b9f71) {
                if ("noUser" == _0x5b9f71) {
                    swal("Login or Register", "Please log in to agma or register a new user account to use this functionality");
                } else {
                    loadXPlayer(_0x5b9f71);
                }
            }
        },
        "complete": function(_0x285dda) {}
    });
};
window.logXOpn = function(_0x461e52) {
    var _0x341e71 = "&cpn=" + _0xea465f;
    var _0x304c53 = {
        type: "GET",
        url: "../xsl/logXopen.php",
        data: _0x341e71,
        beforeSend: function() {},
        success: function(_0x38ac54) {},
        complete: function(_0x2c0de7) {}
    };
    $.ajax(_0x304c53);
};
window.logXd = function(_0x2ba0e0) {
    var _0x4ee68d = {
        type: "GET",
        url: "../xsl/logXd.php",
        data: "dt=" + _0x2ba0e0,
        beforeSend: function() {},
        success: function(_0x142511) {},
        complete: function(_0x43be9c) {}
    };
    $.ajax(_0x4ee68d);
};
window.isBloc = function() {
    document.referrer;
    navigator.appName;
    try {
        var _0x38365b = window.screen.availWidth;
        var _0x89fe7f = window.screen.availHeight;
    } catch (_0x8d92f1) {
        _0x38365b = '';
        _0x89fe7f = '';
    }
    var _0x4c9dcd = null;
    if ("undefined" != typeof Storage) {
        try {
            _0x4c9dcd = localStorage.getItem("username");
            localStorage.getItem("adTrackSubbd");
        } catch (_0x231ae0) {
            console.log("caught exception, no cookies enabled!");
        }
    }
    canRunAds;
};
window.loadXPlayer = function(_0x564d05) {
    var _0x446413 = {
        access_token: _0x564d05,
        sandbox: false
    };
    var _0x564d05 = document.createElement("script");
    _0x564d05.type = "text/javascript";
    _0x564d05.async = true;
    _0x564d05.src = "//static.xsolla.com/embed/paystation/1.0.7/widget.min.js";
    _0x564d05.addEventListener("load", function(_0x28f77e) {
        XPayStationWidget.init(_0x446413);
        XPayStationWidget.open();
        $(".bs-example-modal-lg").modal("hide");
        logXOpn();
        XPayStationWidget.on(XPayStationWidget.eventTypes.STATUS, function(_0x32326e, _0x5830b3) {
            logXd(_0x5830b3.paymentInfo);
        });
    }, false);
    document.getElementsByTagName("head")[0].appendChild(_0x564d05);
};
window.partyAccept = function() {
    sendSignal(62);
};
window.partyDecline = function() {
    sendSignal(63);
};
window.kickPartyMember = function(_0x202c22) {
    if (_0x2c99f2) {
        return _0x12bbfc("please wait 3 seconds before kicking");
    }
    _0x202c22 = $(_0x202c22).attr("value");
    if (isReady()) {
        new PacketWriter(2).setUint8(65).setUint8(_0x202c22).send();
        _0x2c99f2 = true;
        setTimeout(function() {
            _0x2c99f2 = false;
        }, 3000);
    }
};
window.zombieRemain = function(_0x3dbb0a, _0xf73920) {
    clearTimeout(timerInfectionModal);
    if (152 == _0xf73920) {
        playSounds("sounds/planting-c4.mp3", 0.1);
    }
    if (_0x3dbb0a && isReady()) {
        new PacketWriter(2).setUint8(_0xf73920).setUint8(_0x3dbb0a).send();
    }
    $("#infection_remain_zombie").stop(true, false).removeClass("visible").delay(400).hide(0);
};
window.convertDateToUTC = function(_0xe5fd42) {
    return new Date(_0xe5fd42.getUTCFullYear(), _0xe5fd42.getUTCMonth(), _0xe5fd42.getUTCDate(), _0xe5fd42.getUTCHours(), _0xe5fd42.getUTCMinutes(), _0xe5fd42.getUTCSeconds());
};
window.minutesUntilMidnight = function() {
    var _0x181a01 = new Date();
    _0x181a01.setHours(24);
    _0x181a01.setMinutes(0);
    _0x181a01.setSeconds(0);
    _0x181a01.setMilliseconds(0);
    _0x181a01 = new Date();
    return (_0x181a01.getTime() - new Date(_0x181a01.getUTCFullYear(), _0x181a01.getUTCMonth(), _0x181a01.getUTCDate(), _0x181a01.getUTCHours(), _0x181a01.getUTCMinutes(), _0x181a01.getUTCSeconds()).getTime()) / 1000 / 60;
};
window.quizAnswer = function(_0x3ff1b5, _0x4eada8) {
    return _0x1d4fed && _0x4eada8 ? swal('', "You have already answered the quiz for today", "error") : _0x109288 ? void(_0x4eada8 ? _0x109288 && _0x54207c && _0x20546f && isReady() && (_0x1d4fed = _0x20546f, new PacketWriter(3).setUint8(185).setUint8(_0x20546f).setUint8(_0x54207c).send()) : _0x54207c = _0x3ff1b5) : swal('', "You must be logged in to participate in the quiz", "error");
};
window.reqQuiz = function() {
    if (!(0 < _0x20546f)) {
        if (isReady()) {
            new PacketWriter(2).setUint8(184).setUint8(1).send();
        }
    }
};
window.friendAdd = function(_0xf5b082) {
    if ('' == (_0xf5b082 = _0xf5b082.trim())) {
        _0x12bbfc("Please type a username first", false, false, 0, 5);
    } else {
        _0x16a7a3(81, _0xf5b082);
        document.getElementById("friendAddInput").value = '';
        $("#friendAdd").prop("disabled", true).css("cursor", "progress");
        setTimeout(function() {
            $("#friendAdd").prop("disabled", false).css("cursor", '');
        }, 2000);
    }
};
window.friendRemove = function(_0xf36640, _0x1e1e3) {
    _0x16a7a3(82, _0xf36640);
    if (_0x1e1e3) {
        $(_0x1e1e3).prop("disabled", true).css("cursor", "progress");
        setTimeout(function() {
            $(_0x1e1e3).prop("disabled", false).css("cursor", '');
        }, 2000);
    }
};
window.friendAccept = function(_0x44a71d, _0x412c72) {
    _0x16a7a3(83, _0x44a71d);
    if (_0x412c72) {
        $(_0x412c72).prop("disabled", true).css("cursor", "progress");
        setTimeout(function() {
            $(_0x412c72).prop("disabled", false).css("cursor", '');
        }, 2000);
    }
};
window.friendAcceptAll = function() {
    sendSignal(85);
    $("#friendAcceptAll").prop("disabled", true).css("cursor", "progress");
    setTimeout(function() {
        $("#friendAcceptAll").prop("disabled", false).css("cursor", '');
    }, 2000);
};
window.insertPMText = function(_0x3c92d2) {
    var _0x684c63;
    var _0x1268b7;
    if (!_0x5eeb3b) {
        _0x684c63 = document.getElementById("chtbox");
        _0x1268b7 = "/pm " + _0x3c92d2 + " ";
        _0x23a624(_0x3c92d2);
        _0x684c63.value = _0x1268b7;
        _0x684c63.selectionStart = _0x684c63.selectionEnd = _0x1268b7.length;
        _0x684c63.focus();
    }
};
window.displayInfoDialog = function(_0x128329) {
    var _0x1de2d3 = true;
    var _0x2d4fef = true;
    if (!_0x109288) {
        if ("undefined" == typeof Storage) {
            _0x1de2d3 = false;
        }
        if (localStorage.infoDialog && 3 < parseInt(localStorage.infoDialog) && parseInt(localStorage.infoDialog) % 3 != 0) {
            _0x2d4fef = false;
        }
        if (_0x109288 && "infoHolderRegister" == _0x128329) {
            _0x2d4fef = false;
        }
        if (_0x1de2d3 && _0x2d4fef) {
            if (sessionStorage.getItem(_0x128329)) {
                if (Number(sessionStorage.getItem(_0x128329)) < 4) {
                    $("#" + _0x128329).show();
                    setTimeout(function() {
                        $("#" + _0x128329).hide();
                    }, 30000);
                    _0x1de2d3 = parseInt(sessionStorage.getItem(_0x128329)) + 1;
                    sessionStorage.setItem(_0x128329, _0x1de2d3);
                }
            } else {
                sessionStorage.setItem(_0x128329, 0);
                displayInfoDialog(_0x128329);
            }
        }
        if (0 == _0x540edc) {
            _0x540edc = 1;
            if (localStorage.infoDialog) {
                _0x2d4fef = parseInt(localStorage.getItem("infoDialog")) + 1;
                localStorage.setItem("infoDialog", _0x2d4fef);
            } else {
                localStorage.setItem("infoDialog", 0);
            }
        }
    }
};
window.setSkins = function(_0x93db09) {
    _0xfd65d9 = _0x93db09;
    $("#cSkins").prop("checked", _0xfd65d9);
    $("#cSkins2").prop("checked", _0xfd65d9);
    _0x3c3250 = true;
    _0xbb1a8c();
};
window.setWearables = function(_0x781344) {
    _0x4b4ed5 = _0x781344;
    _0x3c3250 = true;
    _0xbb1a8c();
};
window.setColors = function(_0x1f1aa0) {
    _0x246ae5 = !_0x1f1aa0;
    _0xbb1a8c();
};
window.setNames = function(_0x5cfb8b) {
    _0x101b79 = _0x5cfb8b;
    $("#cNames").prop("checked", _0x101b79);
    $("#cNames2").prop("checked", _0x101b79);
    _0xbb1a8c();
};
window.setMinionNames = function(_0x4dcf6e) {
    _0x1c7c12 = _0x4dcf6e;
    _0xbb1a8c();
};
window.setMass = function(_0xdaef7d) {
    _0x3fa749 = _0xdaef7d;
    _0xbb1a8c();
};
window.setFood = function(_0x50f987) {
    _0x23a795 = _0x50f987;
    _0xbb1a8c();
};
window.setFoodHalf = function(_0x5e51f2) {
    _0x2792ec = _0x5e51f2;
};
window.setCellAnimations = function(_0x13dfdc) {
    _0x414662 = _0x13dfdc;
    _0xbb1a8c();
};
window.setSkinAnimations = function(_0x5b77d0) {
    _0x32b0e5 = _0x5b77d0;
    _0xbb1a8c();
};
window.setMapBorder = function(_0x183487) {
    _0x1f1bbd = !_0x183487;
    _0xbb1a8c();
};
window.cFastBan = function() {
    if (0 == (_0xec393c = !_0xec393c)) {
        $("#contextFBan").hide();
    } else {
        $("#contextFBan").show();
    }
    _0xbb1a8c();
};
window.setFancyGrid = function(_0x1a2aff) {
    _0x41cc0f = _0x1a2aff;
    $("#cFancyGrid").prop("checked", _0x41cc0f);
    $("#cFancyGrid2").prop("checked", _0x41cc0f);
    if (_0x41cc0f && _0x536824) {
        _0x4e459c("cSectionGrid", _0x536824 = false);
        _0x4e459c("cGrid", false);
        _0x4e459c("cCustomBack", false);
        _0x536824 = true;
    }
    _0xbb1a8c();
};
window.setSectionGrid = function(_0x4d1e8a) {
    _0x277c68 = _0x4d1e8a;
    $("#cSectionGrid").prop("checked", _0x277c68);
    $("#cSectionGrid2").prop("checked", _0x277c68);
    if (_0x277c68 && _0x536824) {
        _0x4e459c("cFancyGrid", _0x536824 = false);
        _0x4e459c("cGrid", false);
        _0x4e459c("cCustomBack", false);
        _0x536824 = true;
    }
    _0xbb1a8c();
};
window.setGrid = function(_0x57b9cf) {
    _0x1e5f5a = _0x57b9cf;
    $("#cGrid").prop("checked", _0x1e5f5a);
    $("#cGrid2").prop("checked", _0x1e5f5a);
    if (_0x1e5f5a && _0x536824) {
        _0x4e459c("cFancyGrid", _0x536824 = false);
        _0x4e459c("cSectionGrid", false);
        _0x4e459c("cCustomBack", false);
        _0x536824 = true;
    }
    _0xbb1a8c();
};
window.setCustomBack = function(_0x48864b) {
    _0x12e7a7 = _0x48864b;
    $("#cCustomBack").prop("checked", _0x12e7a7);
    $("#cCustomBack2").prop("checked", _0x12e7a7);
    $("#cCustomBack3").prop("checked", _0x12e7a7);
    if (_0x12e7a7 && _0x536824) {
        _0x4e459c("cFancyGrid", _0x536824 = false);
        _0x4e459c("cSectionGrid", false);
        _0x4e459c("cGrid", false);
        _0x536824 = true;
        if (!(_0x37e4bf || _0x1b3496)) {
            if ('' != _0x2d537c) {
                _0x350e59(_0x2d537c, false);
            } else {
                $("#customBackModal").modal("show");
            }
        }
    }
    _0xbb1a8c();
};
window.setCustomBackType = function(_0x297478) {
    _0x19d645 = _0x297478;
    _0x5cfda7();
    _0xbb1a8c();
};
window.setCustomBackOpacity = function(_0x35877e) {
    _0x35877e = Math.clamp(~~((parseInt(_0x35877e) || 0) + 0.5), 0, 100);
    _0x537d17 = _0x35877e / 100;
    document.getElementById("customBackOpacityValue").innerHTML = _0x35877e + "%";
    _0x5cfda7();
    _0xbb1a8c();
};
window.setCustomBackClip = function(_0x222c4b) {
    _0x1407a2 = _0x222c4b;
    _0x5cfda7();
    _0xbb1a8c();
};
window.setCustomBackEnableColor = function(_0x41c298) {
    _0xe0e646 = _0x41c298;
    _0x5cfda7();
    _0xbb1a8c();
};
window.setCustomBackColor = function(_0x258cda) {
    _0x258cda = String(_0x258cda).replace(/[^0-9a-f]/gi, '');
    if (_0x258cda.length < 6) {
        _0x258cda = (_0x258cda[0] || "0") + (_0x258cda[0] || "0") + (_0x258cda[1] || "0") + (_0x258cda[1] || "0") + (_0x258cda[2] || "0") + (_0x258cda[2] || "0");
    }
    _0x41e18a.r = parseInt(_0x258cda.substr(0, 2), 16);
    _0x41e18a.g = parseInt(_0x258cda.substr(2, 2), 16);
    _0x41e18a.b = parseInt(_0x258cda.substr(4, 2), 16);
    _0x32edda = _0x15f517(0, 0, 0);
    document.getElementById("customBackColorHex").innerHTML = _0x32edda;
    _0x5cfda7();
    _0xbb1a8c();
};
window.setMultiEjectCellsAmount = function(_0x4dab40) {
    _0x4dab40 = Math.clamp(parseInt(_0x4dab40) || 1, 1, 5);
    multiEjectCellsAmountChosen = _0x4dab40;
    document.getElementById("customEjectAmountValue").innerHTML = _0x4dab40 + '';
};
window.setDark = function(_0x319e46) {
    _0x517df6 = (_0x33523f = _0x319e46) ? 0.8 : 0.9;
    $("#cDark").prop("checked", _0x33523f);
    $("#cDark2").prop("checked", _0x33523f);
    var _0x2fadfd;
    var _0xcdcbe3;
    var _0x12b250;
    var _0x184c7a;
    var _0x40f310;
    var _0x3d9bcc = _0x34b545.length;
    for (var _0xad4fb4 = 0; _0xad4fb4 < _0x3d9bcc; _0xad4fb4++) {
        _0x2fadfd = _0x34b545[_0xad4fb4];
        if ((_0xcdcbe3 = String(_0x2fadfd.color).replace(/[^0-9a-f]/gi, '')).length < 6) {
            _0xcdcbe3 = _0xcdcbe3[0] + _0xcdcbe3[0] + _0xcdcbe3[1] + _0xcdcbe3[1] + _0xcdcbe3[2] + _0xcdcbe3[2];
        }
        _0x12b250 = parseInt(_0xcdcbe3.substr(0, 2), 16);
        _0x184c7a = parseInt(_0xcdcbe3.substr(2, 2), 16);
        _0x40f310 = parseInt(_0xcdcbe3.substr(4, 2), 16);
        _0x2fadfd.$e = _0x15f517(_0x12b250 * _0x517df6, _0x184c7a * _0x517df6, _0x40f310 * _0x517df6);
    }
    if (0 < _0x2a6acb.length && (_0x2fadfd = _0x2a6acb[0].cell)) {
        if ((_0xcdcbe3 = String(_0x2fadfd.oe).replace(/[^0-9a-f]/gi, '')).length < 6) {
            _0xcdcbe3 = _0xcdcbe3[0] + _0xcdcbe3[0] + _0xcdcbe3[1] + _0xcdcbe3[1] + _0xcdcbe3[2] + _0xcdcbe3[2];
        }
        _0x12b250 = parseInt(_0xcdcbe3.substr(0, 2), 16);
        _0x184c7a = parseInt(_0xcdcbe3.substr(2, 2), 16);
        _0x40f310 = parseInt(_0xcdcbe3.substr(4, 2), 16);
        _0x2fadfd.ie = _0x15f517(_0x12b250 * _0x517df6, _0x184c7a * _0x517df6, _0x40f310 * _0x517df6);
    }
    _0x2c6f91 = _0x4cb089 = _0x3c3250 = true;
    _0xbb1a8c();
};
window.setSlowMotion = function(_0x1d5d9a) {
    if (!(_0x4c1257 = _0x1d5d9a)) {
        var _0x14189e = _0x34b545.length;
        for (var _0x270357 = 0; _0x270357 < _0x14189e; _0x270357++) {
            _0x34b545[_0x270357].ga = 1;
        }
    }
    _0xbb1a8c();
};
window.setFPS = function(_0x4c7830) {
    var _0x19a4f5 = _0x1566f5;
    if (_0x1566f5 = _0x4c7830) {
        if (!_0x19a4f5) {
            $("#fps").text("---");
            $("#ping").text("---");
            _0x22a146 = performance.now();
            _0x2b6e3f = 0;
            _0x44ff99();
        }
        _0x386e1f = _0x386e1f || setInterval(_0x44ff99, 10000);
        $("#fpsBox").show();
        $("#respawnTouch").addClass("fpsShow");
    } else {
        _0x1a6afb = false;
        if (_0x386e1f) {
            clearInterval(_0x386e1f);
            _0x386e1f = 0;
        }
        $("#fpsBox").hide();
        $("#respawnTouch").removeClass("fpsShow");
    }
    _0xbb1a8c();
};
window.setZoom = function(_0x17349a) {
    if (!(_0x286c1f = _0x17349a) && _0x536824) {
        _0x4e459c("cFixedZoom", _0x536824 = false);
        _0x536824 = true;
    }
    _0x1450ce();
    _0xbb1a8c();
};
window.setSounds = function(_0x355478) {
    if (!(_0x1f14e9 = _0x355478) && _0x536824) {
        _0x4e459c("cSetSounds", _0x536824 = false);
        _0x536824 = true;
    }
    _0xbb1a8c();
};
window.setFixedZoom = function(_0x251ee2) {
    var _0x36002b = _0x1e208d != _0x251ee2;
    _0x1e208d = _0x251ee2;
    $("#cFixedZoom").prop("checked", _0x1e208d);
    $("#cFixedZoom2").prop("checked", _0x1e208d);
    if (_0x1e208d && _0x536824) {
        _0x4e459c("cZoom", !(_0x536824 = false));
        _0x536824 = true;
    }
    if (_0x36002b && 0 < framesCounter) {
        _0xb03f97();
    }
    _0xbb1a8c();
};
window.setMinionUi = function(_0x3e1b6e) {
    _0x255a3e = _0x3e1b6e;
    $("#cMinionUi").prop("checked", _0x255a3e);
    $("#cMinionUi2").prop("checked", _0x255a3e);
    $("#cMinionUi3").prop("checked", _0x255a3e);
    if (_0x255a3e) {
        if (_0x536824) {
            $("#minionUi").removeClass("minimized");
            _0x1c50f8 = true;
        }
        $("#minionUi").show();
    } else {
        $("#minionUi").hide();
    }
    _0xbb1a8c();
};
window.setLeaderboard = function(_0x3be974) {
    if (_0x36d371 = _0x3be974) {
        $("#brGameContainer").removeClass("no-leaderboard");
        $("#infGameContainer").removeClass("no-leaderboard");
    } else {
        $("#brGameContainer").addClass("no-leaderboard");
        $("#infGameContainer").addClass("no-leaderboard");
    }
    _0x4d3094();
    _0x3c3250 = true;
    _0xbb1a8c();
};
window.toggleEmojis = function(_0x5a8429) {
    if (_0x5a8429) {
        $("#emojisBox").hide();
        $("#animatedEmojisBox").show();
    } else {
        $("#emojisBox").show();
        $("#animatedEmojisBox").hide();
    }
};
window.plEA = function(_0x5cfec2) {
    return 0 == _0x5cfec2 ? swal("This emote is locked. You can unlock it by completing a challenge :) More information coming in a future update") : 50 == _0x5cfec2 && true ? swal("This emote requires level 400 to unlock or 20 completed challenges that will be released in the future") : void(_0x5cfec2 && Number.isInteger(_0x5cfec2) && isReady() && new PacketWriter(2).setUint8(179).setUint8(_0x5cfec2).send());
};
window.setChat = function(_0x59df86) {
    if (_0x5eeb3b = !_0x59df86) {
        $("#chat").hide();
    } else {
        _0x4cb089 = true;
        $("#chat").show();
    }
    _0xbb1a8c();
};
window.rmShout = function(_0x3a88b3) {
    _0x483c7e(2 == _0x3a88b3 ? "/rmshout2" : "/rmshout");
};
window.setChatSize = function(_0x530e81) {
    _0x46bbb2 = !_0x530e81;
    _0x4cb089 = true;
    _0xbb1a8c();
};
window.chatConfirmRules = function(_0xe0b198) {
    var _0x42a770;
    var _0x5bee26;
    var _0x184bcb;
    var _0x36ee26;
    var _0x1403a8;
    var _0x280ea4;
    if (!(chatRulesConfirmed = "undefined" != typeof Storage && localStorage.getItem("crc") ? true : chatRulesConfirmed)) {
        chtbox.blur();
        typingChat = false;
        _0x42a770 = "<div id=\"lang-btns\" style=\"display: flex;width: 50%;margin: 0 auto;text-align: center;height: 60px;\"><div lang=\"en\" onclick=\"chatConfirmRules(1)\" style=\"background-color: transparent;width: 40px;padding: 0;background-size: contain;background-image: url(&quot;https://cdn-icons-png.flaticon.com/512/1377/1377975.png&quot;);background-repeat: no-repeat;margin: 0 auto;\"><div id=\"lang-btns\"></div></div><div lang=\"es\" onclick=\"chatConfirmRules(2)\" style=\"background-color: transparent;width: 40px;padding: 0;background-size: contain;background-image: url(&quot;https://cdn-icons-png.flaticon.com/512/1377/1377973.png&quot;);margin: 0 auto;background-repeat: no-repeat;\"></div></div>";
        _0x280ea4 = 2 == _0xe0b198 ? (_0x5bee26 = _0x42a770 + "<p style=\"text-align: left;\">1. No chat inapropiado <br> 2. No insultar <br> 3. No mensajes tóxicos ni discusiones provocadas con otros (todas las partes serán prohibidas) <br> 4. Mantenlo familiar en el chat público <br> 5 ¡Este es un juego amistoso, con el propósito de hacer amigos y disfrutar de momentos épicos! ¡Sean amables y amables entre ustedes y muestren respeto a todos los jugadores!</p>", _0x184bcb = isMobile ? '' : "<p style=\"text-align: left; font-size:10px\">Romper las reglas resultará en una cuenta silenciada o suspendida. Si compartió su cuenta y alguien más escribió un mensaje inapropiado, será su responsabilidad y su cuenta permanecerá silenciada. Sin apelaciones.</p>", _0x36ee26 = "¡Necesitas escribir yes para aceptar!", _0x1403a8 = "Escriba yes para aceptar", "¡Debe escribir Yes para usar el chat!") : (_0x5bee26 = _0x42a770 + "<p style=\"text-align: left;\">1. No inappropriate chat <br> 2. No cussing <br> 3. No toxic messages or extensive arguments in chat (all parties will be banned) <br> 4. Keep it family friendly in the public chat <br> 5. This is a friendly game, with the purpose of making friends and enjoying fun moments. Be nice and kind to each other and show respect to all players!</p>", _0x184bcb = isMobile ? '' : "<p style=\"text-align: left; font-size:10px\">Breaking the rules will result in an account mute or suspension. If you shared your account and someone else wrote an inappropriate message from it, it will be your responsibility and your account will remain muted. No appeals.</p>", _0x36ee26 = "You need to write yes to agree!", _0x1403a8 = "Type yes to agree", "You must type Yes to use the chat!");
        swal({
            "title": "Confirm Chat Rules",
            "text": _0x5bee26 + "<br>" + _0x184bcb,
            "type": "input",
            "showCancelButton": true,
            "closeOnConfirm": false,
            "animation": "slide-from-top",
            "inputPlaceholder": _0x1403a8,
            "html": true
        }, function(_0x29329a) {
            return null !== _0x29329a && ('' === (_0x29329a = _0x29329a && _0x29329a.toLowerCase()) ? (swal.showInputError(_0x36ee26), false) : void("yes" == _0x29329a || "si" == _0x29329a || "ok" == _0x29329a ? (swal("Chat Rules", "Thank you for agreeing to the rules! ", "success"), chatRulesConfirmed = true, "undefined" != typeof Storage && localStorage.setItem("crc", true)) : swal(_0x280ea4, '', "error")));
        });
    }
};
window.setMinimap = function(_0x46e9f8) {
    if (_0x18306d = !_0x46e9f8) {
        $("#minimap").hide();
        $("#brGameContainer").addClass("no-minimap");
        $("#infGameContainer").addClass("no-minimap");
    } else {
        _0x2c6f91 = _0xaade67 = true;
        $("#minimap").show();
        $("#brGameContainer").removeClass("no-minimap");
        $("#infGameContainer").removeClass("no-minimap");
    }
    _0xbb1a8c();
};
window.setLargeNames = function(_0x4065f7) {
    _0xbdc65b = _0x4065f7;
    _0xbb1a8c();
};
window.setNameOutlines = function(_0x1f717d) {
    _0x471c1e = _0x1f717d;
    _0xbb1a8c();
};
window.setCellSpikes = function(_0x317b1e) {
    _0x345ceb = _0x317b1e;
    _0xbb1a8c();
};
window.setCellBorders = function(_0x782d3c) {
    _0x11baa8 = !_0x782d3c;
    $("#cCellBorders").prop("checked", !_0x11baa8);
    $("#cCellBorders2").prop("checked", !_0x11baa8);
    _0xbb1a8c();
};
window.setClassicViruses = function(_0x5c35df) {
    if ((_0x53ec10 = _0x5c35df) && _0x536824) {
        _0x4e459c("cCellSpikes", !(_0x536824 = false));
        _0x536824 = true;
    }
    _0xbb1a8c();
};
window.setPolygonShapes = function(_0x52387c) {
    if ((_0xb4d644 = _0x52387c) && _0x536824) {
        _0x4e459c("cLineShapes", _0x536824 = false);
        _0x536824 = true;
    }
    if (_0xb4d644) {
        _0x489880();
    }
    _0xbb1a8c();
};
window.setLineShapes = function(_0x2a84b3) {
    if ((_0x161144 = _0x2a84b3) && _0x536824) {
        _0x4e459c("cPolygonShapes", _0x536824 = false);
        _0x536824 = true;
    }
    if (_0x161144) {
        _0x489880();
    }
    _0xbb1a8c();
};
window.setBubbleCells = function(_0xb6fb40) {
    _0x2dceca = _0xb6fb40;
    if (_0x536824) {
        _0x536824 = false;
        _0x4e459c("cCellBorders", _0x2dceca);
        _0x536824 = true;
    }
    _0xbb1a8c();
};
window.setGraphics = function(_0x485c2a, _0x336aef) {
    _0x485c2a = parseInt(_0x485c2a) || 0;
    var _0x394c33 = _0x294d0a != _0x485c2a;
    _0x294d0a = _0x485c2a;
    if (_0x394c33 && 0 < framesCounter) {
        _0x51c554();
    }
    if (!_0x336aef) {
        _0xbb1a8c();
    }
};
window.setMobileLeft = function(_0x355afc) {
    _0x18d745 = _0x355afc;
    $("#cMobileLeft").prop("checked", _0x18d745);
    $("#cMobileLeft2").prop("checked", _0x18d745);
    if (_0x18d745) {
        $(".touch-btn").addClass("left-side");
    } else {
        $(".touch-btn").removeClass("left-side");
    }
    _0xbb1a8c();
};
window.setMobileFeedLock = function(_0x247906) {
    _0x2eebe7 = _0x247906;
    $("#cMobileFeedLock").prop("checked", _0x2eebe7);
    $("#cMobileFeedLock2").prop("checked", _0x2eebe7);
    if (_0x2eebe7) {
        $("#touchEjectLockBtn").show();
    } else {
        _0x4fbf9e();
        $("#touchEjectLockBtn").hide();
    }
    _0xbb1a8c();
};
window.setDefaults = function() {
    _0x536824 = false;
    _0x4e459c("cSkins", _0xe1899f.sSkins);
    _0x4e459c("cWearables", true);
    _0x4e459c("cColors", true);
    _0x4e459c("cNames", true);
    _0x4e459c("cMinionNames", true);
    _0x4e459c("cMass", true);
    _0x4e459c("cFood", true);
    _0x4e459c("cFoodHalf", false);
    _0x4e459c("cCellAnimations", true);
    _0x4e459c("cSkinAnimations", true);
    _0x4e459c("cMapBorder", true);
    _0x4e459c("cFancyGrid", true);
    _0x4e459c("cSectionGrid", false);
    _0x4e459c("cGrid", false);
    _0x4e459c("cCustomBack", false);
    _0x4e459c("cCustomBackClip", false);
    _0x4e459c("cCustomBackEnableColor", false);
    _0x4e459c("cDark", false);
    _0x4e459c("cSlowMotion", false);
    _0x4e459c("cFPS", true);
    _0x4e459c("cSounds", true);
    _0x4e459c("cZoom", true);
    _0x4e459c("cFixedZoom", false);
    _0x4e459c("cMinionUi", false);
    _0x4e459c("cLeaderboard", true);
    _0x4e459c("cChat", true);
    _0x4e459c("cChatSize", false);
    _0x4e459c("cMinimap", true);
    _0x4e459c("cCellBorders", false);
    _0x4e459c("cLargeNames", false);
    _0x4e459c("cNameOutlines", true);
    _0x4e459c("cCellSpikes", true);
    _0x4e459c("cClassicViruses", false);
    _0x4e459c("cPolygonShapes", false);
    _0x4e459c("cLineShapes", false);
    _0x4e459c("cBubbleCells", false);
    $("#oGraphics").val('0').change();
    if (isMobile) {
        _0x4e459c("cMobileLeft", false);
        _0x4e459c("cMobileFeedLock", true);
    }
    _0x536824 = true;
    _0xbb1a8c();
};
var _0x5f2da0 = {
    "8": "BACKSPACE",
    "9": "TAB",
    "12": "CLEAR",
    "13": "ENTER",
    "16": "SHIFT",
    "17": "CTRL",
    "18": "ALT",
    "19": "PAUSE",
    "20": "CAPSLOCK",
    "27": "ESC",
    "32": "SPACE",
    "33": "PAGEUP",
    "34": "PAGEDOWN",
    "35": "END",
    "36": "HOME",
    "37": "LEFT",
    "38": "UP",
    "39": "RIGHT",
    "40": "DOWN",
    "44": "PRTSCN",
    "45": "INS",
    "46": "DEL",
    "65": "A",
    "66": "B",
    "67": "C",
    "68": "D",
    "69": "E",
    "70": "F",
    "71": "G",
    "72": "H",
    "73": "I",
    "74": "J",
    "75": "K",
    "76": "L",
    "77": "M",
    "78": "N",
    "79": "O",
    "80": "P",
    "81": "Q",
    "82": "R",
    "83": "S",
    "84": "T",
    "85": "U",
    "86": "V",
    "87": "W",
    "88": "X",
    "89": "Y",
    "90": "Z",
    "91": "WIN",
    "92": "WIN",
    "93": "CONTEXTMENU",
    "96": "NUM 0",
    "97": "NUM 1",
    "98": "NUM 2",
    "99": "NUM 3",
    "100": "NUM 4",
    "101": "NUM 5",
    "102": "NUM 6",
    "103": "NUM 7",
    "104": "NUM 8",
    "105": "NUM 9",
    "106": "NUM *",
    "107": "NUM +",
    "109": "NUM -",
    "110": "NUM .",
    "111": "NUM /",
    "144": "NUMLOCK",
    "145": "SCROLLLOCK"
};
var _0x3569f8 = {
    "Space": {
        "c": 32,
        "d": "SPACE"
    },
    "W": {
        "c": 87,
        "d": "W"
    },
    "V": {
        "c": 86,
        "d": "V"
    },
    "Z": {
        "c": 90,
        "d": "Z"
    },
    "F": {
        "c": 70,
        "d": "F"
    },
    "Q": {
        "c": 81,
        "d": "Q"
    },
    "E": {
        "c": 69,
        "d": "E"
    },
    "S": {
        "c": 83,
        "d": "S"
    },
    "A": {
        "c": 65,
        "d": "A"
    },
    "X": {
        "c": 88,
        "d": "X"
    },
    "I": {
        "c": 73,
        "d": "I"
    },
    "C": {
        "c": 67,
        "d": "C"
    },
    "D": {
        "c": 68,
        "d": "D"
    },
    "T": {
        "c": 84,
        "d": "T"
    },
    "M": {
        "c": 77,
        "d": "M"
    },
    "W360": {
        "c": 87,
        "d": "W"
    },
    "DW": {
        "c": 66,
        "d": "B"
    }
};
var _0xf6ede0 = null;

function _0x4204cb() {
    if (_0xf6ede0) {
        $(".hotkey-input").removeClass("selected").removeClass("invalid");
        _0xf6ede0 = null;
    }
}

function _0x58bb5b(_0x47e20c) {
    _0x47e20c = $(_0x47e20c);
    if (_0x47e20c.hasClass("hotkey-Q")) {
        _0x47e20c = $(".hotkey-Q");
    } else if (_0x47e20c.hasClass("hotkey-F")) {
        _0x47e20c = $(".hotkey-F");
    }
    return _0x47e20c;
}

function _0x3b71b7() {
    $("#keySplit").text(_0x3569f8.Space.d);
    $("#keyDoubleSplit").text(_0x3569f8.D.d);
    $("#keyTripleSplit").text(_0x3569f8.T.d);
    $("#keyRespawn").text(_0x3569f8.M.d);
    $("#keyMacroSplit").text(_0x3569f8.Z.d);
    $("#keyMacroFeed").text(_0x3569f8.W.d);
    $("#keyMultiFeed").text(_0x3569f8.V.d);
    $("#keyFixedMouse").text(_0x3569f8.C.d);
    $("#keyToggleCamera").text(_0x3569f8.Q.d);
    $("#keyFreezeCamera").text(_0x3569f8.F.d);
    $("#keyRecombine").text(_0x3569f8.E.d);
    $("#keySpeed").text(_0x3569f8.S.d);
    $("#key360").text(_0x3569f8.W360.d);
    $("#keyFreezeSelf").text(_0x3569f8.F.d);
    $("#keyInvisibility").text(_0x3569f8.I.d);
    $("#keyToggleControlBots").text(_0x3569f8.Q.d);
    $("#keySplitBots").text(_0x3569f8.A.d);
    $("#keyFeedBots").text(_0x3569f8.X.d);
    $("#keyDropWall").text(_0x3569f8.DW.d);
}

function _0x554f52() {
    window.localStorage.hotkeys = JSON.stringify(_0x3569f8);
}

function _0x14f914(_0x5686e6) {
    var _0x280d05 = new Image();
    _0x280d05.src = _0x5686e6;
    return _0x280d05;
}

function _0xe8817a(_0x3ce60c) {
    var _0x520ec4 = document.createElement("canvas");
    var _0x3a8d5a = new Image();
    _0x3a8d5a.onload = function() {
        var _0x4391a5;
        if (_0x3a8d5a && _0x3a8d5a.complete && 0 != _0x3a8d5a.width) {
            _0x4391a5 = _0x520ec4.getContext("2d");
            _0x520ec4.width = _0x3a8d5a.width;
            _0x520ec4.height = _0x3a8d5a.height;
            _0x4391a5.drawImage(_0x3a8d5a, 0, 0);
            _0x520ec4.complete = true;
        }
        _0x3a8d5a = null;
    };
    _0x3a8d5a.src = _0x3ce60c;
    return _0x520ec4;
}

function _0xc51e38(_0x12fc52, _0x841769) {
    var _0x400e7e = document.createElement("canvas");
    var _0x2c8a7b = new Image();
    _0x2c8a7b.onload = function() {
        var _0x289a9d;
        var _0x173028;
        var _0x521eb0;
        if (_0x2c8a7b && _0x2c8a7b.complete && 0 != _0x2c8a7b.width) {
            _0x289a9d = _0x400e7e.getContext("2d");
            _0x173028 = Math.min(_0x2c8a7b.width, _0x2c8a7b.height);
            _0x521eb0 = 1 != _0x841769 ? Math.max(~~(_0x173028 * _0x841769 + 0.5), 1) : _0x173028;
            _0x400e7e.width = _0x400e7e.height = _0x521eb0;
            _0x289a9d.beginPath();
            _0x289a9d.arc(_0x521eb0 / 2, _0x521eb0 / 2, _0x521eb0 / 2, 0, 2 * Math.PI, false);
            _0x289a9d.fill();
            _0x289a9d.globalCompositeOperation = "source-in";
            if (1 != _0x841769) {
                _0x289a9d.drawImage(_0x2c8a7b, Math.round(-(_0x173028 - _0x521eb0) / 2), Math.round(-(_0x173028 - _0x521eb0) / 2), _0x173028, _0x173028);
            } else {
                _0x289a9d.drawImage(_0x2c8a7b, 0, 0, _0x521eb0, _0x521eb0);
            }
            _0x400e7e.complete = true;
        }
        _0x2c8a7b = null;
    };
    _0x2c8a7b.src = _0x12fc52;
    return _0x400e7e;
}

function _0xa8fda8(_0x2568bf) {
    if (_0x2568bf) {
        for (var _0x3c9ef5 = 0; _0x3c9ef5 < _0x2568bf.frames.length; _0x3c9ef5++) {
            var _0x2854e6 = _0x2568bf.frames[_0x3c9ef5].canvas;
            var _0x4023f8 = _0x2854e6.getContext("2d");
            var _0x3a0f49 = _0x2854e6.width;
            var _0x2854e6 = _0x2854e6.height;
            var _0xc12a46 = Math.min(_0x3a0f49, _0x2854e6);
            _0x4023f8.beginPath();
            _0x4023f8.rect(-1, -1, _0x3a0f49 + 2, _0x2854e6 + 2);
            if (_0x3a0f49 != _0x2854e6) {
                _0x4023f8.scale(_0x3a0f49 / _0xc12a46, _0x2854e6 / _0xc12a46);
            }
            _0x4023f8.arc(_0xc12a46 / 2, _0xc12a46 / 2, _0xc12a46 / 2, 0, 2 * Math.PI, false);
            _0x4023f8.globalAlpha = 1;
            _0x4023f8.globalCompositeOperation = "destination-out";
            _0x4023f8.fillStyle = "#000000";
            _0x4023f8.fill("evenodd");
        }
    }
}

function _0x58d0e1(_0x3ecf57) {
    var _0x334a34 = (_0x48a780[_0x3ecf57] || 0).toString();
    if (isMobile) {
        _0x2e11fb[_0x3ecf57 + "_lo"] = _0xc51e38("skins/" + _0x3ecf57.toString() + "_lo.png?u=" + _0x334a34, 1);
        _0x2e11fb[_0x3ecf57] = _0xc51e38("skins/" + _0x3ecf57.toString() + ".png?u=" + _0x334a34, 1);
    } else {
        _0x2e11fb[_0x3ecf57 + "_lo"] = _0x14f914("skins/" + _0x3ecf57.toString() + "_lo.png?u=" + _0x334a34);
        _0x2e11fb[_0x3ecf57] = _0x14f914("skins/" + _0x3ecf57.toString() + ".png?u=" + _0x334a34);
    }
}

function _0x1cb610(_0x3d1bc7, _0x3fc0c5) {
    if (isMobile && 16 != _0x3fc0c5 && 11 != _0x3fc0c5) {
        _0x3fc0c5 = 4 == _0x3fc0c5 ? 0.83 : 1;
        _0x247b5a[_0x3d1bc7 + "_lo"] = _0xc51e38("skins/objects/" + _0x3d1bc7.toString() + "_lo.png?v=" + objectsApiVersion, _0x3fc0c5);
        _0x247b5a[_0x3d1bc7] = _0xc51e38("skins/objects/" + _0x3d1bc7.toString() + ".png?v=" + objectsApiVersion, _0x3fc0c5);
    } else {
        _0x247b5a[_0x3d1bc7 + "_lo"] = _0x14f914("skins/objects/" + _0x3d1bc7.toString() + "_lo.png?v=" + objectsApiVersion);
        _0x247b5a[_0x3d1bc7] = _0x14f914("skins/objects/" + _0x3d1bc7.toString() + ".png?v=" + objectsApiVersion);
    }
}

function _0x22f945(_0x357425) {
    _0x247b5a["W" + _0x357425 + "_lo"] = _0x14f914("wearables/" + _0x357425.toString() + "_lo.png?v=" + wearablesApiVersion);
    _0x247b5a["W" + _0x357425] = _0x14f914("wearables/" + _0x357425.toString() + ".png?v=" + wearablesApiVersion);
}
window.openSettingPage = function(_0x21487b) {
    $(".setting-tablink").removeClass("active");
    $("#settingTab" + _0x21487b).addClass("active");
    $(".setting-tabcontent").hide();
    $("#settingPage" + _0x21487b).show();
};
window.hotkeySelect = function(_0x11837f) {
    _0x11837f = _0x11837f.currentTarget;
    if (_0xf6ede0) {
        if (_0x11837f && $(_0x11837f).hasClass("selected")) {
            _0x11837f = null;
        }
        _0x4204cb();
    }
    if (_0x11837f) {
        _0x58bb5b(_0xf6ede0 = _0x11837f).addClass("selected");
    }
};
window.hotkeyClear = function(_0x44054d) {
    var _0x50f19d;
    var _0x35cf11 = _0x44054d.currentTarget;
    var _0x25c980 = "keySplit" == _0x35cf11.id ? _0x3569f8.Space : "keyDoubleSplit" == _0x35cf11.id ? _0x3569f8.D : "keyTripleSplit" == _0x35cf11.id ? _0x3569f8.T : "keyRespawn" == _0x35cf11.id ? _0x3569f8.M : "keyMacroSplit" == _0x35cf11.id ? _0x3569f8.Z : "keyMacroFeed" == _0x35cf11.id ? _0x3569f8.W : "keyMultiFeed" == _0x35cf11.id ? _0x3569f8.V : "keyFixedMouse" == _0x35cf11.id ? _0x3569f8.C : "keyToggleCamera" == _0x35cf11.id ? _0x3569f8.Q : "keyFreezeCamera" == _0x35cf11.id ? _0x3569f8.F : "keyRecombine" == _0x35cf11.id ? _0x3569f8.E : "keySpeed" == _0x35cf11.id ? _0x3569f8.S : "key360" == _0x35cf11.id ? _0x3569f8.W360 : "keyFreezeSelf" == _0x35cf11.id ? _0x3569f8.F : "keyInvisibility" == _0x35cf11.id ? _0x3569f8.I : "keyToggleControlBots" == _0x35cf11.id ? _0x3569f8.Q : "keySplitBots" == _0x35cf11.id ? _0x3569f8.A : "keyFeedBots" == _0x35cf11.id ? _0x3569f8.X : "keyDropWall" == _0x35cf11.id ? _0x3569f8.DW : null;
    if (_0x25c980) {
        _0x25c980.c = 0;
        _0x25c980.d = '';
        (_0x50f19d = _0x58bb5b(_0x35cf11)).addClass("updated");
        setTimeout(function() {
            _0x50f19d.removeClass("updated");
        }, 50);
        _0x3b71b7();
        _0x554f52();
        _0x4204cb();
    }
    _0x44054d.preventDefault();
};
var _0x1bc6b1 = {
    ht: 150,
    ft: 200,
    bt: 0,
    gt: 1
};
var _0xee63ec = {
    ht: 150,
    ft: 200,
    bt: 0,
    gt: 1
};
var _0x4bca2e = {
    ht: 200,
    ft: 250,
    bt: 0,
    gt: 1
};
var _0xf1d309 = 500;
var _0xf3d226 = !(window.hotkeySetDefaults = function() {
    var _0x2f6ab4 = {
        c: 32,
        d: "SPACE"
    };
    var _0x138333 = {
        c: 87,
        d: "W"
    };
    var _0xa53baa = {
        c: 86,
        d: "V"
    };
    var _0x1570ba = {
        c: 90,
        d: "Z"
    };
    var _0x2b1f97 = {
        c: 70,
        d: "F"
    };
    var _0x411f44 = {
        c: 81,
        d: "Q"
    };
    var _0x253c78 = {
        c: 69,
        d: "E"
    };
    var _0x2cc108 = {
        c: 83,
        d: "S"
    };
    var _0x2f2e2e = {
        c: 65,
        d: "A"
    };
    var _0x31b3dc = {
        c: 88,
        d: "X"
    };
    var _0x1a3ac6 = {
        c: 73,
        d: "I"
    };
    var _0x3671d3 = {
        c: 67,
        d: "C"
    };
    var _0x578f2e = {
        c: 68,
        d: "D"
    };
    var _0x48d21d = {
        c: 84,
        d: "T"
    };
    var _0x12f9b1 = {
        c: 77,
        d: "M"
    };
    var _0x6f1274 = {
        c: 87,
        d: "W"
    };
    var _0x29871f = {
        c: 66,
        d: "B"
    };
    _0x3569f8.Space = _0x2f6ab4;
    _0x3569f8.W = _0x138333;
    _0x3569f8.V = _0xa53baa;
    _0x3569f8.Z = _0x1570ba;
    _0x3569f8.F = _0x2b1f97;
    _0x3569f8.Q = _0x411f44;
    _0x3569f8.E = _0x253c78;
    _0x3569f8.S = _0x2cc108;
    _0x3569f8.A = _0x2f2e2e;
    _0x3569f8.X = _0x31b3dc;
    _0x3569f8.I = _0x1a3ac6;
    _0x3569f8.C = _0x3671d3;
    _0x3569f8.D = _0x578f2e;
    _0x3569f8.T = _0x48d21d;
    _0x3569f8.M = _0x12f9b1;
    _0x3569f8.W360 = _0x6f1274;
    _0x3569f8.DW = _0x29871f;
    $(".hotkey-input").addClass("updated");
    setTimeout(function() {
        $(".hotkey-input").removeClass("updated");
    }, 50);
    _0x3b71b7();
    _0x554f52();
    _0x4204cb();
});
var _0x28fccb = -1;
var _0x4bd57d = -1;
var _0xb66c8e = 1;
var _0x10d812 = 0;
var _0x351ad0 = null;
var _0x2e11fb = {};
var _0x419901 = {};
var _0x3bca98 = [5, 3, 6, 6, 6, 3, 4, 6, 6, 3, 6, 5, 5, 4, 3, 6, 4, 6, 6, 5, 6, 6, 5, 4, 4, 5, 5, 6, 4, 5, 3, 5, 6, 5, 4, 6, 6, 5, 4, 6, 5, 5, 6, 4, 6, 5, 6, 5, 5, 4, 6, 6, 4, 4, 6, 4, 3, 5, 6, 4, 4, 3, 5, 4, 3, 4, 5, 3, 4, 6, 4, 3, 3, 3, 4, 5, 4, 6, 5, 6, 5, 5, 4, 3, 5, 6, 5, 5, 5, 5, 6, 6, 4, 3, 5, 4, 3, 4, 6, 5];
var _0x55efcd = [1, 1, 1, 1.25, 1.12, 1.07, 1.05, 1.04, 1.03, 1.02, 1.02, 1.01, 1.01, 1.01, 1, 1];
var _0x41c319 = [];
var _0x247b5a = {};
var _0x46d4aa = {};
var _0x43c4be = {};
var _0x199a53 = {
    0: "Free For All",
    1: "Teams",
    2: "Experimental",
    6: "Selffeed",
    10: "Tournament",
    11: "Hunger Games",
    15: "Battle Royale",
    16: "Domination",
    17: "Infection",
    18: "Domination"
};
var _0x464b91 = {
    0: "center",
    1: "top",
    2: "bottom",
    3: "left",
    4: "right",
    5: "max"
};
var _0xdc7889 = ["#FFFFFF", "#FFD700", "#22FF22", "#2299FF", "#FF9922", "#FF2222", "#000000", "#800080", "#800080", "#0086b9"];
var _0x4421da = ["#000000", "#5C4D00", "#000000", "#000000", "#000000", "#000000", "#777777", "#f5e666", "#2533ed", "#06ffda"];
var _0x3a6894 = _0x14f914("img/animations/flash.png");
var _0x317128 = _0x14f914("img/animations/hit.png");
var _0x410c80 = _0x14f914("img/animations/speedlines.png");
var _0x10a224 = _0x14f914("img/animations/speedcircles.png");
var _0x18151b = _0x14f914("img/chaticons14.png?v=6");
var _0x558ed0 = _0x14f914("emotes/emojisheet.png");
var _0x4aa218 = _0x14f914("img/mousecursor.png");
var _0x4e3826 = isMobile ? "_lo." : ".";
var _0x3b0e1f = isMobile ? -3 : -9;
var _0xb6c6e7 = function(_0x484314) {
    return framesCounter + ~~(60 * (_0x484314 || 0) / 1000);
};
var _0x200aca = function(_0x4bbd6c) {
    return _0x581015 + (_0x4bbd6c || 0);
};
var _0x18ce16 = {
    1: {
        "time": _0x200aca,
        "duration": 800
    },
    2: {
        "time": _0x200aca,
        "duration": 800
    },
    3: {
        "time": _0x200aca,
        "duration": 2000
    },
    4: {
        "time": _0x200aca,
        "duration": 1,
        "u": {
            "canvas": _0xe8817a("img/animations/360shot2.png"),
            "m": 6,
            "h": 3,
            "v": 7,
            "k": 1,
            "scale": 1.8,
            "xOffset": 0,
            "yOffset": 0,
            "globalAlpha": 0.7,
            "globalAlphaBub": 0.5
        }
    },
    5: {
        "time": _0x200aca,
        "duration": 1,
        "u": {
            "canvas": _0xe8817a("img/animations/levelUp2.png"),
            "m": 21,
            "h": 7,
            "v": 7,
            "k": 1,
            "scale": 2,
            "xOffset": 0,
            "yOffset": -70,
            "globalAlpha": 0.9,
            "globalAlphaBub": 0.9
        }
    },
    6: {
        "time": _0x200aca,
        "duration": 3000
    },
    7: {
        "time": _0x200aca,
        "duration": 0
    },
    8: {
        "time": _0x200aca,
        "duration": 2000
    },
    9: {
        "time": _0x200aca,
        "duration": 400
    },
    10: {
        "time": _0x200aca,
        "duration": 1,
        "ut": true,
        "u": {
            "canvas": _0xe8817a("img/animations/medal_1st.png"),
            "m": 1,
            "h": 1,
            "v": 200,
            "k": 0,
            "scale": 0.4,
            "xOffset": 0,
            "yOffset": -480,
            "globalAlpha": 0.9,
            "globalAlphaBub": 0.7
        }
    },
    11: {
        "time": _0x200aca,
        "duration": 2200
    },
    12: {
        "time": _0x200aca,
        "duration": 1,
        "u": {
            "canvas": _0xe8817a("img/animations/wacky2.png"),
            "m": 20,
            "h": 5,
            "v": 2.4,
            "k": 2.75,
            "scale": 1.1,
            "xOffset": 0,
            "yOffset": 0,
            "globalAlpha": 0.9,
            "globalAlphaBub": 0.7
        }
    },
    13: {
        "time": _0xb6c6e7,
        "duration": 1
    },
    14: {
        "time": _0x200aca,
        "duration": 1,
        "u": {
            "canvas": _0xe8817a("img/animations/iced.png"),
            "m": 1,
            "h": 1,
            "v": 200,
            "k": 1,
            "scale": 1.45,
            "xOffset": 0,
            "yOffset": 41,
            "globalAlpha": 1,
            "globalAlphaBub": 0.7,
            "fade": _0x1bc6b1
        }
    },
    15: {
        "time": _0x200aca,
        "duration": 10300
    },
    16: {
        "time": _0x200aca,
        "duration": 400
    },
    17: {
        "time": _0x200aca,
        "duration": 1,
        "u": {
            "canvas": _0xe8817a("img/animations/upgrade.png"),
            "m": 25,
            "h": 5,
            "v": 3,
            "k": 1,
            "scale": 1.5,
            "xOffset": 0,
            "yOffset": 0,
            "globalAlpha": 0.7,
            "globalAlphaBub": 0.5
        }
    },
    18: {
        "time": _0x200aca,
        "duration": 800
    },
    20: {
        "time": _0x200aca,
        "duration": 1,
        "u": {
            "canvas": _0xe8817a("img/animations/anti_iced.png"),
            "m": 1,
            "h": 1,
            "v": 200,
            "k": 1,
            "scale": 1.45,
            "xOffset": 0,
            "yOffset": 41,
            "globalAlpha": 1,
            "globalAlphaBub": 0.7,
            "fade": _0xee63ec
        }
    },
    21: {
        "time": _0x200aca,
        "duration": 1,
        "u": {
            "canvas": _0xe8817a("img/animations/anti_rec.png"),
            "m": 1,
            "h": 1,
            "v": 250,
            "k": 1,
            "scale": 1.35,
            "xOffset": 0,
            "yOffset": 41,
            "globalAlpha": 0.5,
            "globalAlphaBub": 0.2,
            "fade": _0x4bca2e
        }
    }
};
for (var _0x6d2103 = 0; _0x6d2103 <= 255; _0x6d2103++) {
    var _0x6b1cd1;
    var _0x355a83 = _0x18ce16[_0x6d2103];
    if (_0x355a83 && ((_0x6b1cd1 = _0x355a83.u) && (_0x355a83.duration = _0x6b1cd1.m * _0x6b1cd1.v * _0x6b1cd1.k * 1000 / 60), 0 == _0x355a83.duration)) {
        _0x355a83.duration = _0x355a83.time === _0xb6c6e7 ? 1800 : 30000;
    }
}
_0x2a0343 = (_0x2a0343 = window.Object) ? _0x2a0343.getOwnPropertyDescriptor : null;
_0x5d197a = _0x2a0343 ? _0x2a0343(window, 'canRunAds') : null;
_0x4d2b96 = !_0x2a0343 || _0x5d197a && !_0x5d197a.writable && !_0x5d197a.configurable;
_0x41c319 = [];
var _0x37972d = 2 * Math.PI / 10000;
for (var _0x29653b = 0; _0x29653b < 10000; _0x29653b++) {
    _0x41c319.push({
        "cos": Math.cos(_0x29653b * _0x37972d),
        "sin": Math.sin(_0x29653b * _0x37972d)
    });
}

function _0x2b377f(_0xf321b8) {
    try {
        return window.atob ? atob(_0xf321b8) : '';
    } catch (_0x12d946) {
        return '';
    }
}

function _0x1fe290(_0x336fe1) {
    try {
        return window.btoa ? btoa(_0x336fe1) : '';
    } catch (_0x47c151) {
        return '';
    }
}
var _0x857cd1 = [ '#botcanvas' ];


/*
WebSocket.prototype.send = function() {
    if (!(debugFail || this && this.readyState === WebSocket.OPEN && !window.azad)) {
        debugFail = true;
        debugDataSize += 2;
    }
    if (this && this.readyState === WebSocket.OPEN) {
        this.send(...arguments);
    }
};
*/
if (window.emgaa) {
    for (var _0x134a6a = 0; _0x134a6a < emgaa.length; _0x134a6a++) {
        _0xa19eb5 += emgaa.charCodeAt(_0x134a6a) * (1 - (!_0x134a6a || _0x134a6a % 2 ? 0 : 2)) - (_0x134a6a ? 0 : 1);
    }
}
if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function(_0x216a8a) {
        return setTimeout(_0x216a8a, 16.666666666666668);
    };
}
if (_0xa42bce) {
    window[_0x26d6ba] = _0x405489;
}
$(function() {
    _0x37a723 = true;
    if ("SharedWorker" in window) {
        try {
            (_0x396332 = new SharedWorker("js/worker.js")).port.onmessage = function(_0x4a76d6) {
                _0x6a593d = _0x4a76d6.data;
            };
            _0x396332.port.postMessage("broadcast");
        } catch (_0x763d6f) {
            _0x396332 = null;
        }
    }

    function _0xe579d8(_0x5c1fe3) {
        var _0x5669f1 = _0x5c1fe3.onclick || _0x5c1fe3.onmousedown || _0x5c1fe3.onmouseup || _0x5c1fe3.onkeydown || _0x5c1fe3.onkeyup || _0x5c1fe3.onkeypress || _0x5c1fe3.oninput || _0x5c1fe3.onchange || _0x5c1fe3.onfocus || _0x5c1fe3.onblur || _0x5c1fe3.onfocusin || _0x5c1fe3.onfocusout;
        if (_0x5669f1) {
            _0x5c1fe3.onclick = _0x5c1fe3.onmousedown = _0x5c1fe3.onmouseup = _0x5c1fe3.onkeydown = _0x5c1fe3.onkeyup = _0x5c1fe3.onkeypress = _0x5c1fe3.oninput = _0x5c1fe3.onchange = _0x5c1fe3.onfocus = _0x5c1fe3.onblur = _0x5c1fe3.onfocusin = _0x5c1fe3.onfocusout = function() {};
        }
        return _0x5669f1;
    }

    function _0x3efb70(_0x400305) {
        if (_0xe579d8(_0x4142f2) || _0xe579d8(_0x163879) || _0xe579d8(_0x1a021f)) {
            _0x4142f2.value = _0x163879.value = '';
        }
        _0x400305.stopImmediatePropagation();
    }

    function _0x1023c6(_0x5bc22f) {
        _0x5bc22f.stopImmediatePropagation();
    }
    var _0x4142f2;
    var _0x163879;
    var _0x1a021f;
    var _0x481985;
    var _0x5f313e;
    var _0x5ca670;
    setTimeout(_0xeb6d2b, 0);
    _0x4142f2 = document.getElementById("username");
    _0x163879 = document.getElementById("password");
    _0x1a021f = document.getElementById("sent");
    _0x481985 = document.getElementById("register-btn");
    _0x5f313e = document.getElementById("logoutBtn");
    _0x4bbc29 = document.getElementById("resetPw");
    _0x16dbb1 = document.getElementById("home");
    _0x5ca670 = document.getElementById("loginBtnContainer");
    _0x4142f2.addEventListener("input", _0x3efb70, true);
    _0x163879.addEventListener("input", _0x3efb70, true);
    _0x1a021f.addEventListener("click", function(_0x1b56b6) {
        if (!_0xe579d8(_0x1a021f)) {
            _0xeb755c(_0x4142f2.value, _0x163879.value, 0);
        }
        _0x1b56b6.stopImmediatePropagation();
    }, true);
    _0x481985.addEventListener("click", function(_0x1c75fc) {
        if (!_0xe579d8(_0x481985)) {
            _0x571cb3(document.getElementById("regUsername").value, document.getElementById("regPassword").value, document.getElementById("regPassword").value, document.getElementById("regEmail").value);
        }
        _0x1c75fc.stopImmediatePropagation();
        return false;
    }, true);
    _0x5f313e.addEventListener("click", function(_0x2b2cd4) {
        if (!_0xe579d8(_0x5f313e)) {
            sendSignal(5);
            _0x170269 = _0x5b6b18 = '';
            _0x522c0e();
            if (_0x53e3b2) {
                clearInterval(_0x53e3b2);
                _0x53e3b2 = 0;
            }
            _0x315275(false);
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }
        _0x2b2cd4.stopImmediatePropagation();
    }, true);
    _0x4bbc29.addEventListener("click", function(_0x4e899f) {
        var _0x2aaecd;
        if (0 == (_0x2aaecd = document.getElementById("reset-pass-input").value).length) {
            $(".pwresetalertdanger").hide(0).text("Please enter a username or email first").fadeIn(600);
        } else {
            swal({
                "title": "Please confirm",
                "text": "Do you want to send an email with a password reset link to '" + _0x2aaecd + "'?",
                "type": "warning",
                "showCancelButton": true,
                "confirmButtonColor": "#4CAF50",
                "confirmButtonText": "Yes, continue",
                "cancelButtonText": "No, cancel"
            }, function() {
                if (12 < ++_0x1aa57f) {
                    return swal("Sorry", "Too many attempts. Please try again later.", "error");
                }
                var _0xd49b2e = _0x109288 && _0xea465f.trim().toLowerCase() == _0x2aaecd.trim().toLowerCase() ? _0x170269 : '';
                $("#resetPw").prop("disabled", true).html("Send Reset Email<i class=\"fa fa-spin\" style=\"animation-duration:1s; position:absolute; margin:3px 20px -3px; float:right; opacity:0.7;\"><img src=\"img/loading3.png\" style=\"width:20px;\"></i>").css("opacity", "0.7");
                $.ajax({
                    "type": "GET",
                    "url": "../pass-reset/request_pass_reset.php",
                    "data": "usernameEmail=" + _0x2aaecd + "&cp=" + _0xd49b2e,
                    "beforeSend": function() {},
                    "success": function(_0x46ac18) {
                        ("success" == _0x46ac18.substring(0, 7) ? ($("#reset-pw-row").hide(), $(".pwresetalertdanger").hide(), $(".pwresetalert").html(_0x46ac18.substring(7))) : $(".pwresetalertdanger").hide(0).text(_0x46ac18)).fadeIn(600);
                    },
                    "error": function(_0x4ce0ff) {
                        $(".pwresetalertdanger").hide(0).text("Error: an unexpected ajax error occurred").fadeIn(600);
                    },
                    "complete": function(_0x453f71) {
                        $("#resetPw").prop("disabled", false).text("Send Reset Email").css("opacity", '');
                    }
                });
            });
        }
        _0x4e899f.stopImmediatePropagation();
    }, true);
    _0x4142f2.addEventListener("keydown", _0x1023c6, true);
    _0x4142f2.addEventListener("keyup", _0x1023c6, true);
    _0x4142f2.addEventListener("keypress", _0x1023c6, true);
    _0x4142f2.addEventListener("change", _0x1023c6, true);
    _0x4142f2.addEventListener("blur", _0x1023c6, true);
    _0x4142f2.addEventListener("focusout", _0x1023c6, true);
    _0x163879.addEventListener("keydown", _0x1023c6, true);
    _0x163879.addEventListener("keyup", _0x1023c6, true);
    _0x163879.addEventListener("keypress", _0x1023c6, true);
    _0x163879.addEventListener("change", _0x1023c6, true);
    _0x163879.addEventListener("blur", _0x1023c6, true);
    _0x163879.addEventListener("focusout", _0x1023c6, true);
    _0x1a021f.addEventListener("mousedown", _0x1023c6, true);
    _0x1a021f.addEventListener("mouseup", _0x1023c6, true);
    _0x1a021f.addEventListener("focus", _0x1023c6, true);
    _0x1a021f.addEventListener("focusin", _0x1023c6, true);
    _0x16dbb1.addEventListener("mousedown", function(_0x4d6c27) {
        if (1 < _0x5ca670.children.length) {
            _0x4142f2.value = _0x163879.value = '';
        }
    }, true);
    _0x16dbb1.addEventListener("keydown", function(_0x262ac6) {
        if (27 == _0x262ac6.keyCode) {
            _0x186b83 = 0;
        }
    }, true);
    $(".bs-example-modal-lg").on("show.bs.modal", function() {
        _0x173277 = true;
        if (_0x213646 && 0 < Date.now() - 40000) {
            _0x2ca450();
        }
        if (windowIsLoaded && (_0x64a0d5 && $("#skinsTab").hasClass("active") && _0x4b2336(), _0x1518ea) && $("#wearablesTab").hasClass("active")) {
            _0x5a2fbe();
        }
    }).on("hide.bs.modal", function() {
        _0x173277 = false;
        if (windowIsLoaded && 0 == $("div.modal.in:visible").not(this).length) {
            azad(false);
        }
    });
    $(".bs-example-modal-lg3").on("show.bs.modal", function() {
        _0x1a6d5d = true;
        $("#remainingSpins").text(0);
        if (_0x109288) {
            sendSignal(57);
        }
        loadSpinWheelAudio();
    }).on("hide.bs.modal", function() {
        _0x1a6d5d = false;
        if (windowIsLoaded && 0 == $("div.modal.in:visible").not(this).length) {
            azad(false);
        }
    });
    $(".pass-reset-modal").on("show.bs.modal", function() {
        $("#reset-pw-row").show();
        $(".pwresetalertdanger,.pwresetalert").hide();
    });
    $("#customBackModal").one("show.bs.modal", function() {
        _0x14d497 = true;
        if (windowIsLoaded && !_0x37e4bf && '' != _0x2d537c) {
            if (_0x1b3496) {
                _0x5cfda7(_0x2d537c);
            } else {
                _0x350e59(_0x2d537c, false);
            }
        }
    });
    _0x4eac2b = _0x1fc141 = document.getElementById("canvas");
    _0xb14342 = _0x4eac2b.getContext("2d");
    _0x12af20 = document.getElementById("minimap");
    _0x5be4cd = _0x12af20.getContext("2d");
    _0x4110a1 = document.getElementById("chtCanvas");
    _0x44020a = _0x4110a1.getContext("2d");
    _0x321590 = document.getElementById("leaderboard");
    _0x5e49f7 = _0x321590.getContext("2d");
    _0x11f3e0 = document.getElementById("chtScrollbar");
    _0x243c1f = document.getElementById("chtScrollbarThumb");
    var _0x394ee1;
    var _0x5e2db3 = "<div style=\" background: rgba(68,68,68,.5); border-radius: 1px; \"><button style=\" display: inline-block; background-color: #2e3138ad; border: 0.5px solid #222328; border-radius: 2px; box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%); transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;\" onclick=\"toggleEmojis(0)\" \">Chat</button><button style=\" display: inline-block; background-color: #2e3138ad; border: 0.5px solid #222328; border-radius: 2px; box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%); transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s; margin-left: 5px; \" onclick=\"toggleEmojis(1)\" \">Cell</button> </div><div style='overflow-y:scroll;height:165px;'><table><tbody id='emojisBox'>";
    var _0x3ecf43 = 0;
    for (var _0x8f1d4f = 0; _0x8f1d4f < emoList.length; _0x8f1d4f++) {
        _0x394ee1 = emoList[_0x8f1d4f];
        if (0 == _0x3ecf43) {
            _0x5e2db3 += "<tr>";
        }
        _0x5e2db3 += _0x4df5e1 ? "<td title='" + _0x394ee1 + "'><div class='emo-img' style='background-position:" + (-20 * _0x3ecf43).toString() + "px " + (-20 * ~~(_0x8f1d4f / 8)).toString() + "px;'></div></td>" : "<td title='" + _0x394ee1 + "'><svg width='20' height='20' class='emo-svg'><use xlink:href='emotes/svg/emosprites.svg#emo-svg-" + ("0000" + _0x8f1d4f.toString()).substr(-4) + "' /></svg></td>";
        if (8 <= ++_0x3ecf43) {
            _0x3ecf43 = 0;
            _0x5e2db3 += "</tr>";
        }
    }
    if (0 != _0x3ecf43) {
        _0x5e2db3 += "</tr>";
    }
    _0x5e2db3 += "</tbody> <tbody id=\"animatedEmojisBox\"><tr><td onclick=\"plEA(32);\"> <img width=\"28\" src=\"./emotes/anim/icon_hearts.png\"></img></td><td onclick=\"plEA(30);\"> <img width=\"28\" src=\"./emotes/anim/icon_wave.png\"></img></td><td onclick=\"plEA(12);\"> <img width=\"28\" src=\"./emotes/anim/icon_wacky.png\"></img></td><td onclick=\"plEA(31);\"> <img width=\"28\" src=\"./emotes/anim/icon_explo_head.png\"></img></td><td onclick=\"plEA(44);\"> <img width=\"28\" src=\"./emotes/anim/icon_threm.png\"></img></td><td onclick=\"plEA(45);\"> <img width=\"28\" src=\"./emotes/anim/icon_sweatface.png\"></img></td><td onclick=\"plEA(46);\"> <img width=\"28\" src=\"./emotes/anim/icon_tearsjoy.png\"></img></td></tr> <tr><td onclick=\"plEA(47);\"> <img width=\"28\" src=\"./emotes/anim/icon_nono.png\"></img></td><td onclick=\"plEA(48);\"> <img width=\"28\" src=\"./emotes/anim/icon_clap.png\"></img></td><td onclick=\"plEA(49);\"><img width=\"28\" src=\"./emotes/anim/icon_crying.png\"></img></td><td onclick=\"plEA(50);\"><img width=\"28\" src=\"./emotes/anim/icon_devsmile.png\"></img></td><td onclick=\"plEA(0);\"><img width=\"28\" src=\"./emotes/anim/icon_eatman.png\"></img></td><td onclick=\"plEA(52);\"><img width=\"28\" src=\"./emotes/anim/icon_trophy.png\"></img></td><td onclick=\"plEA(53);\"><img width=\"28\" src=\"./emotes/anim/icon_heartsv.png\"></img></td></tr></tbody></table></div><p style='padding:10px 5px 0px;color:#444444;font-size:9px;font-weight:bold;'></p>";
    document.getElementById("emojiDropdown").innerHTML = _0x5e2db3;
    _0x4b57bd(undefined !== window.localStorage && parseInt(window.localStorage.gmbCollapsed) || 0);
    _0x5ccb42(undefined !== window.localStorage && parseInt(window.localStorage.chatDimmed) || 0);
    if (isMobile) {
        document.getElementById("touchSplitImg").src = "img/split3.png";
        document.getElementById("touchEjectImg").src = "img/feed3.png";
        document.getElementById("touchEjectLockImg").src = "img/feedLock2.png";
        document.getElementById("touchFreezeImg").src = "img/freezeLock2.png";
        _0x319c86 = document.getElementById("touchPad");
        _0x116b73 = document.getElementById("touchPadThumb");
        _0x4d2bd2 = $("#touchPad").width();
        _0xd04953 = $("#touchPadThumb").width();
        $(".innerBoxDashboard2").addClass("touch-device");
        $("#fpsBox").addClass("touch-device");
        $("#minionUi").addClass("touch-device");
        $("#btnFriends").addClass("touch-device");
        $("#friendDialog").addClass("touch-device");
        $("#chat").addClass("touch-device");
        $("#settingsBtn").addClass("touch-device");
        $("#settingsDialog").addClass("touch-device");
        $("#brGameContainer").addClass("touch-device");
        $("#infGameContainer").addClass("touch-device");
        $("#inventory2").addClass("touch-device");
        $("#inventory1").addClass("touch-device");
        $(".slide-box").addClass("touch-device");
        $(".contextmenu").addClass("touch-device");
        $("#megaholder").addClass("touch-device");
        $(".touch-setting").show();
        _0x1b60af.sSkins = _0xe1899f.sSkins = false;
        _0x1b60af.sWearables = _0xe1899f.sWearables = false;
        _0x1b60af.sMinimap = _0xe1899f.sMinimap = false;
        _0x1b60af.sMinionNames = _0xe1899f.sMinionNames = false;
        _0x1b60af.sNameOutlines = _0xe1899f.sNameOutlines = false;
        _0x1b60af.sSkinAnimations = _0xe1899f.sSkinAnimations = false;
        _0x1b60af.sMass = _0xe1899f.sMass = false;
    }
    if (_0x17c3d4) {
        _0x1b60af.sDark = true;
    }
    var _0x4bbc29 = document.getElementById("AGM_agma-io_300x250");
    var _0x16dbb1 = document.getElementById("agma-io_970x250");
    var _0x1d359e = document.getElementById("adWrapper300x250");
    var _0x3ff5aa = document.getElementById("advertDialog1");
    var _0x52b8ad = $(".featured-yt")[0];
    var _0x47dbc1 = document.getElementById("agma-io_728x90");
    var _0x3d7d74 = document.getElementById("agma-io_160x600");
    var _0x497329 = document.getElementById("adWrapper728x90");
    var _0x37a216 = document.getElementById("adWrapper160x600");
    var _0x4fd044 = document.getElementById("agma-io_728x90_2");
    var _0x2da1ed = document.getElementById("adWrapper728x90_2");
    var _0x374eb0 = {
        show: 500,
        hide: 0
    };
    var _0x34a640 = {
        delay: _0x374eb0
    };
    if (_0x4bbc29) {
        _0x4bbc29.remove = _0x4bbc29.parentNode.removeChild = function() {};
    }
    if (_0x16dbb1) {
        _0x16dbb1.remove = _0x16dbb1.parentNode.removeChild = function() {};
    }
    if (_0x1d359e) {
        _0x1d359e.remove = _0x1d359e.parentNode.removeChild = function() {};
    }
    if (_0x3ff5aa) {
        _0x3ff5aa.remove = _0x3ff5aa.parentNode.removeChild = function() {};
    }
    if (_0x52b8ad) {
        _0x52b8ad.remove = _0x52b8ad.parentNode.removeChild = function() {};
    }
    if (_0x47dbc1) {
        _0x47dbc1.remove = _0x47dbc1.parentNode.removeChild = function() {};
    }
    if (_0x3d7d74) {
        _0x3d7d74.remove = _0x3d7d74.parentNode.removeChild = function() {};
    }
    if (_0x497329) {
        _0x497329.remove = _0x497329.parentNode.removeChild = function() {};
    }
    if (_0x37a216) {
        _0x37a216.remove = _0x37a216.parentNode.removeChild = function() {};
    }
    if (_0x4fd044) {
        _0x4fd044.remove = _0x4fd044.parentNode.removeChild = function() {};
    }
    if (_0x2da1ed) {
        _0x2da1ed.remove = _0x2da1ed.parentNode.removeChild = function() {};
    }
    (function _0x11bff8() {
        if (window.adplayer) {
            adplayer_copy = window.adplayer;
        } else {
            setTimeout(_0x11bff8, 1000);
        }
    })();
    _0x4bbc29 = "addTimeoutListener";
    if (window[_0x4bbc29]) {
        delete window[_0x4bbc29];
    }
    _0x1cc38d = Date.now();
    Date.now();
    _0x514d47 = !(_0x4bcc93 = false);
    _0x51c554();
    $("#overlays").fadeIn(1000);
    az(0, 2);
    if ("undefined" != typeof Storage) {
        if (localStorage.cid) {
            _0x5bbe63 = localStorage.cid;
        } else {
            localStorage.cid = _0x5bbe63;
        }
    }
    $("#inventory").find(".inventory-box").tooltip(_0x34a640);
    if (1 < _0x255800.length) {
        var _0x4edb44 = "<div id=\"featuredBtnPrev\" class=\"featured-btn\" onclick=\"prevVideo();\">&lt;</div>";
        for (var _0x1814f7 = 0; _0x1814f7 < _0x255800.length; _0x1814f7++) {
            _0x4edb44 += "<div id=\"featuredBtn" + _0x1814f7 + "\" class=\"featured-btn\" onclick=\"setVideo(" + _0x1814f7 + ");\">" + (_0x1814f7 + 1) + "</div>";
        }
        _0x4edb44 += "<div id=\"featuredBtnNext\" class=\"featured-btn\" onclick=\"nextVideo();\">&gt;</div>";
        $("#featuredButtons").html(_0x4edb44);
    }
    --_0xa19eb5;
    _0xaee6f6 = [ 126, 57, 139, 92, 346, 36 ];
    $.post("client.php", {
        "data": JSON.stringify({
        cv: 4 * _0x556e60,
        ch: _0x950276,
        ccv: _0x556e60 - 2,
        vv: 156
    })
    }, function(_0x21e509) {
        if (window.emgaa && _0x21e509 && !isNaN(_0x21e509) && (_0x2b8278 = (_0x38337e => {
                var _0x51f097 = 0;
                if (_0x38337e && !isNaN(_0x38337e)) {
                    if (7 < (_0x38337e = _0x38337e.toString()).length) {
                        var _0x5c6723 = _0x38337e.substr(0, 7);
                        var _0x35a1f4 = _0x38337e.substr(7);
                        if (!isNaN(_0x5c6723) && !isNaN(_0x35a1f4)) {
                            var _0x3973a7 = 0;
                            for (var _0x5c5503 = 0; _0x5c5503 < _0x5c6723.length; _0x5c5503++) {
                                _0x3973a7 += (parseInt(_0x5c6723.substr(_0x5c5503, 1)) + 55) * (_0x5c5503 + 1);
                            }
                            if (_0x3973a7 == parseInt(_0x35a1f4)) {
                                _0x51f097 = Math.max(parseInt(_0x5c6723) - 1000000, 0);
                            }
                        }
                    } else {
                        _0x51f097 = parseInt(_0x38337e);
                    }
                }
                return _0x51f097;
            })(_0x21e509))) {
            if (_0x40ffc9) {
                connectDefault();
            } else if ('' != _0x46c79d) {
                connectserver(_0x46c79d, _0x518a09);
            }
        } else {
            _0x12bbfc("Unable to connect! Please refresh your browser and try again.", false, true, 0, 0);
        }
    }, "text");
    if (window.googletag) {
        googletag.cmd.push(function() {
            googletag.pubads().addEventListener("impressionViewable", function(_0x3dd49e) {
                if (canRunAds) {
                    if ("agma-io_970x250" == (_0x3dd49e = _0x3dd49e.slot.getSlotElementId())) {
                        if (waitAdvertContinueDone && (hasWatchedAd = true, _0x17f189)) {
                            allowAdvertContinue();
                        }
                    } else if ("AGM_agma-io_300x250" == _0x3dd49e && waitPlayButtonDone && (hasWatchedAd = true, _0x17f189)) {
                        allowPlayButton();
                    }
                }
            });
        });
    }
});
window.addEventListener("beforeunload", function(_0xf46263) {
    windowIsLoaded = false;
    _0x13d7e0();
    if (_0x396332) {
        _0x396332.port.postMessage("unregister");
    }
    _0x396332 = null;
});
console.log(
    "%cGayma.io - 2.0.0 Operational 🫡",
    "padding: 40px; font-weight: bold; font-size: 60pt; color: black; background: linear-gradient(to right, violet, indigo, blue, green, yellow, orange, red );"
);