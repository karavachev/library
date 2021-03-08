const Page = {
    body:  document.getElementsByTagName('body')[0],
    findById: (ID) => document.getElementById(`${ID}`),
    findByClass: (Class) => {
        const elements = document.getElementsByClassName(`${Class}`);
        for (let i = 0; i < elements.length; i++){
            return elements[i];
        }
    }
}



const inParent = true;

const inBody = false;

const byClass = "class";

const byID = "id";

const noContent = true;

// THE STYLE function -------- YOU CAN SET the style OF AN ELEMENT WITH style(byClass || byID, 'class name' || 'id name')
// or simply target all elements with style(elementName.Elements) 
// like style(byClass, 'Main').height="50vh" or style(main.Elements).height="70vh" ----------------------------------
function style(identifier, element) {
    if(identifier == byClass) {
        
        const elements = document.getElementsByClassName(element);
        for (let i = 0; i < elements.length; i++){
            return elements[i].style;
        }
    }
        
    if (identifier == byID) return document.getElementById(element).style;

    if((identifier !== byClass || byID)  && element === undefined) {
        const elements = document.getElementsByTagName(identifier);
        for (let i = 0; i < elements.length; i++){
            return elements[i].style;
        }
    } 
    
    if (identifier  === undefined && element === undefined) {
        console.log("%cError, your f style() has 'undefined' values.", "font-size: 15px; font-weight: bold; color: red; ")
        console.log("%cGive first paramether that is an identifier and has to state byClass or byID followed by the element.name or just type element.name to apply to all elements of the same kind", "font-size: 15px; font-weight: bold; color: green;")
        console.log("%c \n Example: \n \n style(byClass, 'Main') will get all elements with class='Main' \n \n or \n \n style(h1.name) which will get all <h1></h1> elements", "font-size: 15px; font-weight: bold; color: blue;")
        console.log("%c \n \n Then apply .propertyName = 'propertyValue' like style(byID, 'h1_1').fontSize = '11px'", "font-size: 15px; font-weight: bold; color: orange;")
    }
    
};
  


class HTML_Element {
     constructor(name, DOMclass){
         this.name = name,
         this.DOMclass = DOMclass,
         this.Elements = this.name;
         this.parentIs = undefined,
         this.childIs = this.parentIs,
         this.create = (append, content, numberOfElements) => {

          if (numberOfElements === undefined){

            if (append === false && content === undefined){
                Page.body.innerHTML += `<${this.name} class=${this.DOMclass} id=${this.name}_${this.elements + 1}></${this.name}>`;
                this.elements++;
            }else if (append === false && content !== undefined){
                Page.body.innerHTML += `<${this.name} class=${this.DOMclass} id=${this.name}_${this.elements + 1}>` + content + `</${this.name}>`;
                this.elements++;
            }else if (append === true && content === undefined){
                this.elements++;
                return `<${this.name} class=${this.DOMclass} id=${this.name}_${this.elements + 1}></${this.name}>`;
            }else if (append === true && content !== undefined){
                this.elements++;
                return `<${this.name} class=${this.DOMclass} id=${this.name}_${this.elements + 1}>` + content + `</${this.name}>`
            }
        } 

          if (numberOfElements !== undefined && numberOfElements !== null){

            if (append === false && content === noContent){
                for(let i = 0; i < numberOfElements; i++){
                Page.body.innerHTML += `<${this.name} class=${this.DOMclass} id=${this.name}_${this.elements + 1}></${this.name}>`;
                this.elements++;
                }
            }else if (append === false && content !== undefined){
                for(let i = 0; i < numberOfElements; i++){
                Page.body.innerHTML += `<${this.name} class=${this.DOMclass} id=${this.name}_${this.elements + 1}>` + content + `</${this.name}>`;
                this.elements++;
                }
            }else if (append === true && content === noContent){
                for(let i = 0; i < numberOfElements; i++){
                this.elements++;
                return `<${this.name} class=${this.DOMclass} id=${this.name}_${this.elements + 1}></${this.name}>`;
                }
            }else if (append === true && content !== undefined){
                for(let i = 0; i < numberOfElements; i++){
                this.elements++;
                return `<${this.name} class=${this.DOMclass} id=${this.name}_${this.elements + 1}>` + content + `</${this.name}>`
                }
            }
            
          }
     },
        
         this.elements = 0;
   }
    
}

const main = new HTML_Element("main", "Main");

const section = new HTML_Element("section", "Section");

const article = new HTML_Element("article", "Article");

const div = new HTML_Element("div", "Div");

const span = new HTML_Element("span", "Span");

const h1 = new HTML_Element("h1", "H1");

const h2 = new HTML_Element("h2", "H2");

const h3 = new HTML_Element("h3", "H3");

const h4 = new HTML_Element("h4", "H4");

const p = new HTML_Element("p", "P");

const ul = new HTML_Element("ul", "Ul");

const li = new HTML_Element("li", "Li");

const input = new HTML_Element("input", "Input");

const a = new HTML_Element("a", "A");



main.create(inBody, section.create(inParent, h1.create(inParent, "Hi"))); 
article.create(inBody, h1.create(inParent, "Hey"));
style(byID, "h1_3").color="red";



