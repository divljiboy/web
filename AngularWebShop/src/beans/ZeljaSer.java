package beans;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.util.ArrayList;
import java.util.List;

public class ZeljaSer {
private	List<Zelja> lista= new ArrayList<Zelja>();
    
	@SuppressWarnings("unchecked")
	public ZeljaSer(){
		FileInputStream fis = null;
	    ObjectInputStream in = null;
	    try {
	      fis = new FileInputStream("./zelja.ser");
	      in = new ObjectInputStream(fis);
	      lista = (List<Zelja>) in.readObject();
	      in.close();
	    } catch (Exception ex) {
	      ex.printStackTrace();
	    }
	}
	public List<Zelja> readData(){
		FileInputStream fis = null;
	    ObjectInputStream in = null;
	    try {
	      fis = new FileInputStream("./zelja.ser");
	      in = new ObjectInputStream(fis);
	      lista = (List<Zelja>) in.readObject();
	      in.close();
	    } catch (Exception ex) {
	      ex.printStackTrace();
	    }
		return lista;
		
	}

	public List<Zelja> getLista() {
		return lista;
	}

	public void setLista(List<Zelja> lista) {
		this.lista = lista;
	}


	public void serijalizuj(List<Zelja> trenutna) {
		String filename = "./zelja.ser";
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
