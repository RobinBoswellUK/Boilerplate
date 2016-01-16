package uk.co.doctorbobapplications.mathematicspractice;

import android.os.Bundle;
//import android.app.Activity;
import android.app.ListActivity;
import android.view.Menu;
import android.widget.ArrayAdapter;
import android.util.Log;
import java.util.ArrayList;
import java.lang.Thread;

/**
 * @author DoctorBob
 */
public class MainActivity extends ListActivity {
	public void onResume(){
		super.onResume();
	}

	public void onPause(){
		super.onPause();
	}

    @Override
    public void onSaveInstanceState(Bundle savedInstanceState) {
        // Always call the superclass so it can save the view hierarchy state
        super.onSaveInstanceState(savedInstanceState);
    }
    
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

	@Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.activity_main, menu);
        return true;
    }

}
