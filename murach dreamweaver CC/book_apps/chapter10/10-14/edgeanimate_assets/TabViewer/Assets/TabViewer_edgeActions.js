
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){sym.setVariable("labels",{content1:"vProspect 2.0",content2:"vConvert 2.0",content3:"vRetain 1.0"});sym.getSymbol("tab").deleteSymbol();var prefix="content";var allTabs=[];var symbolDefns=sym.getComposition().symbolDefns;for(var key in symbolDefns){if(symbolDefns.hasOwnProperty(key)&&key.search(new RegExp(prefix+"[0-9]{1,2}"))!=-1){var tab=sym.createChildSymbol("tab","navigation");tab.setVariable("contentId",key);sym.getVariable("firstTab")?null:sym.setVariable("firstTab",tab);allTabs.push(tab);tab.$("btnLabel").html(sym.getVariable("labels")[key]||"undefined");$tabEl=tab.getSymbolElement();$tabEl.data("sym",tab);$tabEl.css({float:"left",margin:"0 -1px 15px 0"});$tabEl.click(function(evt){var tabSym=$(evt.currentTarget).data("sym");$.each(allTabs,function(index,item){if(item!=tabSym){item.stop("normal");item.setVariable("active",false);}});var $content=sym.$("content").empty();sym.createChildSymbol(tabSym.getVariable("contentId"),"content");});}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){var firstTab=sym.getVariable("firstTab");firstTab.stop("active");firstTab.setVariable("active",true);});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'content1'
(function(symbolName){})("content1");
//Edge symbol end:'content1'

//=========================================================

//Edge symbol: 'tab'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){var el=sym.getSymbolElement();el.mouseenter(function(evt){if(!sym.getVariable("active"))sym.stop("over");});el.mouseleave(function(evt){if(!sym.getVariable("active"))sym.stop("normal");});el.mousedown(function(evt){if(!sym.getVariable("active"))sym.stop("down");});el.click(function(evt){sym.stop("active");sym.setVariable("active",true);});});
//Edge binding end
})("tab");
//Edge symbol end:'tab'

//=========================================================

//Edge symbol: 'content1_1'
(function(symbolName){})("content2");
//Edge symbol end:'content2'

//=========================================================

//Edge symbol: 'content2_1'
(function(symbolName){})("content3");
//Edge symbol end:'content3'
})(jQuery,AdobeEdge,"EDGE-50109628");