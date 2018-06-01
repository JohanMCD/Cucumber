package cases;
import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;



public class test1 {

	@Given("^Aqui defino lo que deseo probar$")
	public void aqui_defino_lo_que_deseo_probar() throws Throwable {
		System.out.println("test given ");
	   
	}

	@When("^Definir el escenario en cuestion$")
	public void definir_el_escenario_en_cuestion() throws Throwable {
		System.out.println("test when");
	}

	@When("^Algun otro agregado del escenario anterior$")
	public void algun_otro_agregado_del_escenario_anterior() throws Throwable {
		System.out.println("test and");
	}

	@Then("^Resultado, Ej\\. resultado a ser comparado con datapool \"([^\"]*)\"$")
	public void resultado_Ej_resultado_a_ser_comparado_con_datapool(String arg1) throws Throwable {
		Assert.assertEquals(arg1, "dataTest");
	}

	@Then("^Otro resultado #en caso de que aplique$")
	public void otro_resultado_en_caso_de_que_aplique() throws Throwable {
	  
	}
}
