package com.snp.management.readingTest.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class ReadingTestController {

  @GetMapping("/api/readingTest")
  public String test()  {

//    JSONObject parent = new JSONObject();
//
//    JSONArray childrens = new JSONArray();
//
//    JSONObject child = new JSONObject();
//    child.put("speed", "0-100");
//    child.put("percent", 0.09);
//    childrens.add(child);
//
//    child.put("speed", "100-200");
//    child.put("percent",0.19);
//    childrens.add(child);
//
//    parent.put("children", childrens);


//    JSONObject json1 = new JSONObject();
//    json1.put("speed", "0-100");
//    json1.put("percent", 0.09);
//
//    JSONObject json2 = new JSONObject();
//    json2.put("speed", "100-200");
//    json2.put("percent", 0.19);
//
//    JSONObject json3 = new JSONObject();
//    json3.put("speed", "200-300");
//    json3.put("percent", 0.22);
//
//    JSONObject json4 = new JSONObject();
//    json4.put("speed", "300-400");
//    json4.put("percent", 0.19);
//
//    JSONObject json5 = new JSONObject();
//    json5.put("speed", "400-500");
//    json5.put("percent", 0.13);
//
//    JSONObject json6 = new JSONObject();
//    json6.put("speed", "500-600");
//    json6.put("percent", 0.08);
//
//    JSONObject json7 = new JSONObject();
//    json7.put("speed", "600-700");
//    json7.put("percent", 0.06);
//
//    JSONObject json8 = new JSONObject();
//    json8.put("speed", "700-800");
//    json8.put("percent", 0.03);
//
//    JSONObject json9 = new JSONObject();
//    json9.put("speed", "800-900");
//    json9.put("percent", 0.01);
//
//    JSONObject json10 = new JSONObject();
//    json10.put("speed", "900-1000");
//    json10.put("percent", 0.01);
//
//    JSONObject json11 = new JSONObject();
//    json11.put("speed", "1000-1100");
//    json11.put("percent", 0.01);
//
//    JSONObject json12 = new JSONObject();
//    json12.put("speed", "1100-1200");
//    json12.put("percent", 0.01);
//
//    JSONObject json13 = new JSONObject();
//    json13.put("speed", "1200-1300");
//    json13.put("percent", 0.01);
//
//    JSONObject json14 = new JSONObject();
//    json14.put("speed", "1300-1400");
//    json14.put("percent", 0.01);
//
//
//    JSONArray array = new JSONArray();
//    array.add(json1);
//    array.add(json2);
//    array.add(json3);
//    array.add(json4);
//    array.add(json5);
//    array.add(json6);
//    array.add(json7);
//    array.add(json8);
//    array.add(json9);
//    array.add(json10);
//    array.add(json11);
//    array.add(json12);
//    array.add(json13);
//    array.add(json14);

    return "test data";
  }
}
