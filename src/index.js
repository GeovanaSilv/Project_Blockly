//const { extension } = require("showdown");


// um tipo de bloco para definir para receber as mensagens do usuario

// nesses blocos aqui, não tem como definir cor e nem tirar o encaixe, pois a função não pega.

Blockly.common.defineBlocksWithJsonArray([
  {
    type:'operacao_soma',
    message0: ' Operação Soma %1 + %2',
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
    colour:195
    
  },
]);

Blockly.common.defineBlocksWithJsonArray([
  {
    type:'operacao_sub',
    message0: ' Operação Subtração  %1 - %2',
    args0:[
      {
        type:'field_number',
        name:'NumA',
        value:0,
        min:0,
        precision:1,
      },
      {
        type:'field_number',
        name:'NumB',
        value:5,
        min:0,
        precision:1,
      },
    ],
    output:'chek',
    colour:160
    
  },
]);

Blockly.common.defineBlocksWithJsonArray([
  {
    type:'operacao_mult',
    message0: ' Operação de Multiplicação  %1 X %2',
    args0:[
      {
        type:'field_number',
        name:'vA',
        value:0,
        min:0,
        precision:1,
      },
      {
        type:'field_number',
        name:'vB',
        value:5,
        min:0,
        precision:1,
      },
    ],
    output:'chek',
    colour:35
  },
]);

Blockly.common.defineBlocksWithJsonArray([
  {
    type:'operacao_div',
    message0:'Operação de Divisão %1 / %2',
    args0:[
      {
        type:'field_number',
        name:'ValorA',
        value:0,
        min:0,
        precision:1,
      },
      {
        type:'field_number',
        name:'ValorB',
        value:0,
        min:0,
        precision:1,
      },
    ], output:'chek',
      colour:88
  }
]);


Blockly.Blocks['IMG'] ={
  init:function(){
  this.jsonInit({
        message0: '%1',
    args0:[
      {
      type:'field_image',
      src:'ras.jpeg',
      width:"150",
     height:"100"
      
      },
    ],
    output:'anf',
    colour:88
   
    
  })
  }
};


Blockly.Blocks['IMG2'] ={
  init:function(){
  this.jsonInit({
        message0: '%1',
    args0:[
      {
      type:'field_image',
      src:'salamandra.jpeg',
      width:"150",
     height:"100"
      
      },
    ],
    output:'anf',
    colour:30
  })
  }
};

Blockly.Blocks['IMG3'] ={
  init:function(){
  this.jsonInit({
        message0: '%1',
    args0:[
      {
      type:'field_image',
      src:'tritao.jpg',
      width:"150",
     height:"100"
      
      },
    ],output:'anf',colour:125
  })
  }
};

Blockly.Blocks['IMG4'] ={
  init:function(){
  this.jsonInit({
        message0: '%1',
    args0:[
      {
      type:'field_image',
      src:'tartaruga.jpg',
      width:"150",
     height:"100"
      
      },
    ],output:'rep',colour:168
  })
  }
};

Blockly.Blocks['IMG5'] ={
  init:function(){
  this.jsonInit({
        message0: '%1',
    args0:[
      {
      type:'field_image',
      src:'crocodilo.jpg',
      width:"200",
     height:"140"
      
      },
    ],output:'rep',colour:96
  })
  }
};



Blockly.Blocks['ANF'] ={
  init:function(){
  this.jsonInit({
        message0: 'ANFÍBIO %1',
    args0:[
      {
      type:'input_value',
      name:"A",
      check:"anf"  
      
      },
    ], colour:865
   
    
  })
  }
};

Blockly.Blocks['REP'] ={
  init:function(){
  this.jsonInit({
        message0: 'REPTEIS %1',
    args0:[
      {
      type:'input_value',
      name:"A",
      check:"rep"  
      
      },
    ], colour:52
   
    
  })
  }
};




/* Aqui é designada a função para aquele bloco especifico, para isso chamamos o nome do bloco.
Dentro dessa função pegamos o id da variavel, onde irá puxar o conteudo que foi digitado e por fim retorna o resultado */ 


javascript.javascriptGenerator.forBlock['operacao_soma'] = function(block){
  const first = this.getFieldValue('FIRST');
  const last = this.getFieldValue('LAST');
   const soma = first+last;
  return[soma, javascript.Order.NONE];
};


javascript.javascriptGenerator.forBlock['operacao_sub'] = function(block){
  const primeiro = this.getFieldValue('NumA');
  const segundo = this.getFieldValue('NumB');
   const subtracao = primeiro-segundo;
  return[subtracao, javascript.Order.NONE];
};

javascript.javascriptGenerator.forBlock['operacao_mult'] = function(block){
  const primeiro = this.getFieldValue('vA');
  const segundo = this.getFieldValue('vB');
   const multiplicacao = primeiro*segundo;
  return[multiplicacao, javascript.Order.NONE];
};

javascript.javascriptGenerator.forBlock['operacao_div'] = function(block){
  const primeiro = this.getFieldValue('ValorA');
  const segundo  = this.getFieldValue('ValorB');
  const divisao = primeiro/segundo;
  return[divisao, javascript.Order.NONE];
};


// aqui é a caixa de ferramentas, onde em cada categoria contém seus respectivos blocos. 
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
          type:'operacao_sub'
        },
        {
          kind:'block',
          type:'operacao_mult'
        },
        {
          kind:'block',
          type:'operacao_div'
        }
       
      ],
    },
    {
      kind:"category",
      name:"Inglês",
      contents:[
        {
          kind:"block",
         // type:""
        }
      ], colour:66
    },
    {
      kind:"Category",
      name:"Quebra-Cabeças",
    
      contents:[
        {
        kind:'block',
         type:'IMG',
        },
        {
          kind:'block',
          type:'IMG2'
        },
        {
          kind:'block',
          type:'IMG3'
        },
        {
          kind:'block',
          type:'ANF',
        },
        {
          kind:'block',
          type:'IMG4'
        },
        {
          kind:'block',
          type:'IMG5'
        },
        {
          kind:'block',
          type:'REP'
        }
      ], colour:32
    },

  ]
};

let workspace = null;


// inicialização da função.

function start() {
  // Create main workspace.
  workspace = Blockly.inject('blocklyDiv', {
    toolbox: toolbox,
  });

  /*
  - Sempre que o usuário faz alterações no espaço de trabalho (por exemplo, adiciona ou modifica blocos), 
  o ouvinte de mudanças é acionado.
  
  - Gera Código JavaScript:
  O método workspaceToCode converte o espaço de trabalho atual em uma string de código
  JavaScript com base nos blocos presentes.
  
  - Atualiza a Exibição do Código:
   O código gerado é então exibido em um campo HTML específico, 
   permitindo que o usuário veja o código correspondente à sua programação visual.
  */


workspace.addChangeListener((event) => {
  const code = javascript.javascriptGenerator.workspaceToCode(workspace);
  document.getElementById('generatedCodeContainer').value = code;
});

}

/*- Gera Código JavaScript: A função gera o código JavaScript correspondente 
ao conteúdo do espaço de trabalho do Blockly.

- Executa o Código: O código gerado é então executado usando a função eval*/

function executeCode() {
  
  const code = javascript.javascriptGenerator.workspaceToCode(workspace);
 eval(code);
};


