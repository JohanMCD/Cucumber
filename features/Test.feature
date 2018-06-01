Feature: Probar algunos escenarios!

  Scenario Outline: Testqa
    Given Aqui defino lo que deseo probar
    When Definir el escenario en cuestion 
    And  Algun otro agregado del escenario anterior
    Then Resultado, Ej. resultado a ser comparado con datapool "<resultado>"
    And  Otro resultado #en caso de que aplique

    Examples: 
      | resultado    |
      | dataTest |
      
