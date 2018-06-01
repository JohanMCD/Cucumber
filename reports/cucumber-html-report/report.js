$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Test.feature");
formatter.feature({
  "line": 1,
  "name": "Probar algunos escenarios!",
  "description": "",
  "id": "probar-algunos-escenarios!",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Testqa",
  "description": "",
  "id": "probar-algunos-escenarios!;testqa",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Aqui defino lo que deseo probar",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Definir el escenario en cuestion",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Algun otro agregado del escenario anterior",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Resultado, Ej. resultado a ser comparado con datapool \"\u003cresultado\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Otro resultado #en caso de que aplique",
  "keyword": "And "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "probar-algunos-escenarios!;testqa;",
  "rows": [
    {
      "cells": [
        "resultado"
      ],
      "line": 11,
      "id": "probar-algunos-escenarios!;testqa;;1"
    },
    {
      "cells": [
        "dataTest"
      ],
      "line": 12,
      "id": "probar-algunos-escenarios!;testqa;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Testqa",
  "description": "",
  "id": "probar-algunos-escenarios!;testqa;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Aqui defino lo que deseo probar",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Definir el escenario en cuestion",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Algun otro agregado del escenario anterior",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Resultado, Ej. resultado a ser comparado con datapool \"dataTest\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Otro resultado #en caso de que aplique",
  "keyword": "And "
});
formatter.match({
  "location": "test1.aqui_defino_lo_que_deseo_probar()"
});
formatter.result({
  "duration": 96881411,
  "status": "passed"
});
formatter.match({
  "location": "test1.definir_el_escenario_en_cuestion()"
});
formatter.result({
  "duration": 198827,
  "status": "passed"
});
formatter.match({
  "location": "test1.algun_otro_agregado_del_escenario_anterior()"
});
formatter.result({
  "duration": 224000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dataTest",
      "offset": 55
    }
  ],
  "location": "test1.resultado_Ej_resultado_a_ser_comparado_con_datapool(String)"
});
formatter.result({
  "duration": 5090556,
  "status": "passed"
});
formatter.match({
  "location": "test1.otro_resultado_en_caso_de_que_aplique()"
});
formatter.result({
  "duration": 25173,
  "status": "passed"
});
});