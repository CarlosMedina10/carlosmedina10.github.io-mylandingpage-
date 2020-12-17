part of 'landingpage_bloc.dart';

@immutable
abstract class LandingpageState extends Equatable {
  const LandingpageState();
}



class IsMobileOrTablet extends LandingpageState {
  final bool isOnPrincipal;
 final bool isOnConocenos;
 final bool isOnContactanos;

 IsMobileOrTablet(this.isOnPrincipal,this.isOnConocenos,this.isOnContactanos);
  @override
  List<Object> get props => [isOnPrincipal,isOnConocenos];
    @override
  String toString() => 'Estado { Pagina principal: $isOnPrincipal isOnConocenos: $isOnConocenos,}';

}

class IsDesktop extends LandingpageState {
  final bool isOnPrincipal;
 final bool isOnConocenos;
 final bool isOnContactanos;
 IsDesktop(this.isOnPrincipal,this.isOnConocenos,this.isOnContactanos);
  @override
  List<Object> get props => [isOnPrincipal,isOnConocenos,isOnContactanos];
   @override
  String toString() => 'Estado  desktop { Pagina principal: $isOnPrincipal isOnConocenos: $isOnConocenos,}';
 
}
