part of 'landingpage_bloc.dart';

@immutable
abstract class LandingpageEvent extends Equatable {
  const LandingpageEvent();
}
class WantMobileOrTablet extends LandingpageEvent {
  
  final bool isOnPrincipal;
 final bool isOnConocenos;
 final bool isOnContactanos;

 WantMobileOrTablet(this.isOnPrincipal,this.isOnConocenos,this.isOnContactanos);



  

  List<Object> get props => [isOnPrincipal,isOnConocenos];


}
class WantIsDesktop extends LandingpageEvent {
  
final bool isOnPrincipal;
 final bool isOnConocenos;
 final bool isOnContactanos;
 
 WantIsDesktop(this.isOnPrincipal,this.isOnConocenos,this.isOnContactanos);


  

  List<Object> get props => [isOnPrincipal,isOnConocenos,isOnContactanos];


}
