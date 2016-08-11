package beans;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.util.ArrayList;
import java.util.List;

public class DostavljacSer {
	

	
    private	List<Dostavljac> lista= new ArrayList<Dostavljac>();
    
	public DostavljacSer(){
		FileInputStream fis = null;
	    ObjectInputStream in = null;
	    try {
	      fis = new FileInputStream("./dostavljac.ser");
	      in = new ObjectInputStream(fis);
	      lista = (List<Dostavljac>) in.readObject();
	      in.close();
	    } catch (Exception ex) {
	      ex.printStackTrace();
	    }
	}
	@SuppressWarnings("unchecked")
	public List<Dostavljac> readData(){
		FileInputStream fis = null;
	    ObjectInputStream in = null;
	    try {
	      fis = new FileInputStream("./dostavljac.ser");
	      in = new ObjectInputStream(fis);
	      lista = (List<Dostavljac>) in.readObject();
	      in.close();
	    } catch (Exception ex) {
	      ex.printStackTrace();
	    }
		return lista;
		
	}

	public List<Dostavljac> getLista() {
		return lista;
	}

	public void setLista(List<Dostavljac> lista) {
		this.lista = lista;
	}


	public void serijalizuj(List<Dostavljac> trenutna) {
		String filename = "./dostavljac.ser";
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
