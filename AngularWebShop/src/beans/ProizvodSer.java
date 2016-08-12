package beans;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.util.ArrayList;
import java.util.List;

public class ProizvodSer {
	
	
	
    private	List<Proizvod> lista= new ArrayList<Proizvod>();
    
	@SuppressWarnings("unchecked")
	public ProizvodSer(){
		FileInputStream fis = null;
	    ObjectInputStream in = null;
	    try {
	      fis = new FileInputStream("./izvestaj.ser");
	      in = new ObjectInputStream(fis);
	      lista = (List<Proizvod>) in.readObject();
	      in.close();
	    } catch (Exception ex) {
	      ex.printStackTrace();
	    }
	}
	public List<Proizvod> readData(){
		FileInputStream fis = null;
	    ObjectInputStream in = null;
	    try {
	      fis = new FileInputStream("./izvestaj.ser");
	      in = new ObjectInputStream(fis);
	      lista = (List<Proizvod>) in.readObject();
	      in.close();
	    } catch (Exception ex) {
	      ex.printStackTrace();
	    }
		return lista;
		
	}

	public List<Proizvod> getLista() {
		return lista;
	}

	public void setLista(List<Proizvod> lista) {
		this.lista = lista;
	}


	public void serijalizuj(List<Proizvod> trenutna) {
		String filename = "./izvestaj.ser";
	    FileOutputStream fos = null;
	    ObjectOutputStream out = null;
	    
	    try {
			fos = new FileOutputStream(filename);
			out= new ObjectOutputStream(fos);
			out.writeObject(trenutna);
			out.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
}
