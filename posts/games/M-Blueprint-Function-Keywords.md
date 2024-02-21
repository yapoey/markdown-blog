
---
title: "M Blueprint Function Keywords"
subtitle: "The primary function keywords Unreal provides for exposing native code "
date: "2024-02-21"
---

The primary function keywords Unreal provides for exposing native code to blueprints are:
- BlueprintCallable
- BlueprintPure
- BlueprintNativeEvent
- BlueprintImplementableEvent

All function keywords are inserted within the `UFUNCTION(...)` macro above a function declaration.

```cpp
UFUNCTION(BlueprintCallable, Category="Defaults", meta=(EditCondition="bCanFooBar))
Foo* Bar();
```


## BlueprintCallable
This keyword exposes the associated function to blueprints, allowing the function to be callable.

```cpp
UFUNCTION(BlueprintCallable, ...)
Foo* Bar();
```



#### BlueprintPure


```cpp
UFUNCTION(BlueprintCallable, ...)
Foo* Bar();
```


#### BlueprintNativeEvent
Allows a default implementation in C++ to be provided, but can be overridden in blueprints.

```cpp
UFUNCTION(BlueprintNativeEvent, ...)
Foo* Bar();
```

note: function names in c++ will have a `_implementation` suffix to tell Unreal Engine the function is a blueprint native event.


#### BlueprintImplementableEvent
Does not require a definition to be declared in C++, as Unreal expects the method to be implemented in blueprint (per the name of the specifier)

```cpp
UFUNCTION(BlueprintImplementableEvent, ...)
Foo* Bar();
```


#### Reference Links
- https://docs.unrealengine.com/4.27/en-US/ProgrammingAndScripting/Blueprints/TechnicalGuide/ExtendingBlueprints/


#### Backlog
N/A