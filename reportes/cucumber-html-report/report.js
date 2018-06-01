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
  "name": "Que deseo probar StepDefinition : \"\u003cmensaje\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Definir el escenario parametros: prueba qa",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "agregado a este",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "resultado: \"\u003cmensaje\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "probar-algunos-escenarios!;testqa;",
  "rows": [
    {
      "cells": [
        "mensaje"
      ],
      "line": 10,
      "id": "probar-algunos-escenarios!;testqa;;1"
    },
    {
      "cells": [
        "dataTest"
      ],
      "line": 11,
      "id": "probar-algunos-escenarios!;testqa;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Testqa",
  "description": "",
  "id": "probar-algunos-escenarios!;testqa;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Que deseo probar StepDefinition : \"dataTest\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Definir el escenario parametros: prueba qa",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "agregado a este",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "resultado: \"dataTest\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "dataTest",
      "offset": 35
    }
  ],
  "location": "test1.que_deseo_probar_StepDefinition(String)"
});
formatter.result({
  "duration": 101711274,
  "status": "passed"
});
formatter.match({
  "location": "test1.definir_el_escenario_parametros_prueba_qa()"
});
formatter.result({
  "duration": 194560,
  "status": "passed"
});
formatter.match({
  "location": "test1.agregado_a_este()"
});
formatter.result({
  "duration": 218027,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dataTest",
      "offset": 12
    }
  ],
  "location": "test1.resultado(String)"
});
formatter.result({
  "duration": 4239784,
  "error_message": "junit.framework.AssertionFailedError: Test expected same:\u003cdataTest\u003e was not:\u003cdataTest\u003e\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.failNotSame(Assert.java:325)\r\n\tat junit.framework.Assert.assertSame(Assert.java:288)\r\n\tat cases.test1.resultado(test1.java:32)\r\n\tat ✽.Then resultado: \"dataTest\"(Test.feature:7)\r\n",
  "status": "failed"
});
});