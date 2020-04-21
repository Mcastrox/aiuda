package com.example.databinding

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import androidx.databinding.DataBindingUtil
import com.example.databinding.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {
    var inCounter = Counter("In", 0)
    var outCounter = Counter("Out", 0)

    private lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding = DataBindingUtil.setContentView(this, R.layout.activity_main)
        binding.inCounter=inCounter
        binding.outCounter=outCounter


        addCounterActions()
    }

    private fun addCounterActions() {
        binding.apply {

            buttonAddOut.setOnClickListener {
                outCounter.count++

            }

            buttonAddIn.setOnClickListener {
                inCounter.count++

            }
        }
    }

}
