import 'package:flutter/material.dart';
import 'package:responsive_builder/responsive_builder.dart';
import 'package:EntrenaAPP/Pages/HomePage.dart';

void main() {
  
   ResponsiveSizingConfig.instance.setCustomBreakpoints(
    ScreenBreakpoints(desktop: 1025, tablet: 550, watch: 200),
  );
  runApp(MyApp());}
 
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    
    return MaterialApp(
      title: 'EntrenaAPP',
      debugShowCheckedModeBanner: false,
      home: HomePage(),
    );
  }
}



