---
title: "M Using IsValid over standard null checks"
subtitle: " to check if an object exists instead of a standard null check.
Given the following variable"
date: "2024-02-03"
---

*{ . . . Last Updated on February 3rd, 2024 . . . }*


Where possible, use `IsValid()` to check if an object exists instead of a standard null check.

Given the following variable:

```cpp
UPROPERTY(...)
TObjectPtr<UMaterialInstance> FooMaterial;
```

The difference would be:

```cpp
// (standard null check)
if (FooMaterial) { ... }
```

```cpp
// (is valid check)
if (IsValid(FooMaterial)) { ... }
```

While both approaches perceivably accomplish the same objective, there is a small nuance in how the checks are done.


## IsValid() Check

When using an `IsValid()` check, Unreal not only checks whether the object exists, but investigates if the object being pointed to has been marked for garbage collection. The `IsValid()` method ensures the object both exists and is a valid object we can access.


## Standard Null Check

On the other hand, when using a standard null check, Unreal only checks to see if the object exists or not at the address. This means there can be edge cases where the standard null check returns `true` (an object exists), but the object returned may already be GC'd, or tagged for GC.


#### Link References
N/A


#### Backlog
N/A 