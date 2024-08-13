//const { extension } = require("showdown");




Blockly.common.defineBlocksWithJsonArray([
  {
    type:'operacao_soma',
    message0: ' Operação Soma  %1 + %2',
    args0:[
      {
        type:'field_number',
        name:'FIRST',
        value:0,
        min:0,
        precision:1,
      },
      {
        type:'field_number',
        name:'LAST',
        value:5,
        min:0,
        precision:1,
      },
    ],
    output:'chek',
    style:'list_blocks',
   

  },
]);




javascript.javascriptGenerator.forBlock['operacao_soma'] = function(block){
  const first = this.getFieldValue('FIRST');
  const last = this.getFieldValue('LAST');
   const soma = first+last;
  return[soma, javascript.Order.NONE];
};
Blockly.Blocks['entrada']={
  init:function(){
      this.jsonInit({
          message0:'Operacao Soma: %1',
          args0:[{
                  type:"input_value",
                  name:"A",
                check:"che"  
            }
          ], colour:85
      })
  }
}







const  toolbox = {
  kind:"categoryToolbox",
  contents:[
    {
      kind:"category",
      name:"Matematica",
      categorystyle:'list_category',
      contents:[
      
        {
          kind:'block',
         type:'operacao_soma'
        },
        {
          kind:'block',
          type:'entrada'
        }
      ], colour:44

    },
    {
      kind:"category",
      name:"Inglês",
      contents:[
        {
          kind:"block",
         // type:""
        }
      ], colour:30
    },
    {
      kind:"Category",
      name:"Quebra-Cabeças",
      contents:[
        {
          kind:"block",
          //type:""
        }
      ],colour:10
    },

  ]
};

let workspace = null;



function start() {
  // Create main workspace.
  workspace = Blockly.inject('blocklyDiv', {
    toolbox: toolbox,
  });



workspace.addChangeListener((event) => {
  const code = javascript.javascriptGenerator.workspaceToCode(workspace);
  document.getElementById('generatedCodeContainer').value = code;
});

}

function executeCode() {
  
  const code = javascript.javascriptGenerator.workspaceToCode(workspace);
 eval(code);
};


