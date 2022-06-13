"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[2112],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return g}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(t),g=i,f=u["".concat(l,".").concat(g)]||u[g]||c[g]||a;return t?r.createElement(f,s(s({ref:n},p),{},{components:t})):r.createElement(f,s({ref:n},p))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var d=2;d<a;d++)s[d]=t[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7605:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return c}});var r=t(3117),i=t(102),a=(t(7294),t(3905)),s=["components"],o={sidebar_label:"Write the Validation Logic",title:""},l="Writing the validation logic",d={unversionedId:"writing-policies/go/validation",id:"writing-policies/go/validation",title:"",description:"It's now time to write the actual validation logic. This is done",source:"@site/docs/writing-policies/go/04-validation.md",sourceDirName:"writing-policies/go",slug:"/writing-policies/go/validation",permalink:"/writing-policies/go/validation",editUrl:"https://github.com/kubewarden/docs/edit/main/docs/writing-policies/go/04-validation.md",tags:[],version:"current",lastUpdatedAt:1654782139,formattedLastUpdatedAt:"6/9/2022",sidebarPosition:4,frontMatter:{sidebar_label:"Write the Validation Logic",title:""},sidebar:"docs",previous:{title:"Define Policy Settings",permalink:"/writing-policies/go/policy-settings"},next:{title:"End-to-end testing",permalink:"/writing-policies/go/e2e-tests"}},p={},c=[{value:"Testing the validation code",id:"testing-the-validation-code",level:2}],u={toc:c};function g(e){var n=e.components,t=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"writing-the-validation-logic"},"Writing the validation logic"),(0,a.kt)("p",null,"It's now time to write the actual validation logic. This is done\ninside of the ",(0,a.kt)("inlineCode",{parentName:"p"},"validate.go")," file."),(0,a.kt)("p",null,"The scaffolded policy has already a ",(0,a.kt)("inlineCode",{parentName:"p"},"validate")," function, we will need to make\nvery few changes to it."),(0,a.kt)("p",null,"This is how the function has to look like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func validate(payload []byte) ([]byte, error) {\n    // NOTE 1\n    if !gjson.ValidBytes(payload) {\n        return kubewarden.RejectRequest(\n            kubewarden.Message("Not a valid JSON document"),\n            kubewarden.Code(400))\n    }\n\n    // NOTE 2\n    settings, err := NewSettingsFromValidationReq(payload)\n    if err != nil {\n        return kubewarden.RejectRequest(\n            kubewarden.Message(err.Error()),\n            kubewarden.Code(400))\n    }\n\n    // NOTE 3\n    data := gjson.GetBytes(\n        payload,\n        "request.object.metadata.labels")\n\n    // NOTE 4\n    data.ForEach(func(key, value gjson.Result) bool {\n        label := key.String()\n\n        // NOTE 5\n        if settings.DeniedLabels.Contains(label) {\n            err = fmt.Errorf("Label %s is on the deny list", label)\n            // stop iterating over labels\n            return false\n        }\n\n        // NOTE 6\n        regExp, found := settings.ConstrainedLabels[label]\n        if found {\n            // This is a constrained label\n            if !regExp.Match([]byte(value.String())) {\n                err = fmt.Errorf("The value of %s doesn\'t pass user-defined constraint", label)\n                // stop iterating over labels\n                return false\n            }\n        }\n\n        return true\n    })\n\n    // NOTE 7\n    if err != nil {\n        return kubewarden.RejectRequest(\n            kubewarden.Message(err.Error()),\n            kubewarden.NoCode)\n    }\n\n    return kubewarden.AcceptRequest()\n}\n')),(0,a.kt)("p",null,"The code has some ",(0,a.kt)("inlineCode",{parentName:"p"},"NOTE")," sections inside of it. Let's get through them:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The function ensures the JSON payload is properly formatted. This\nis done using a function provided by the ",(0,a.kt)("inlineCode",{parentName:"li"},"gjson")," library"),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"Settings")," instance is created using one of the constructor\nmethods we defined inside of ",(0,a.kt)("inlineCode",{parentName:"li"},"settings.go")),(0,a.kt)("li",{parentName:"ol"},"We use a ",(0,a.kt)("inlineCode",{parentName:"li"},"gjson")," selector to get the ",(0,a.kt)("inlineCode",{parentName:"li"},"label")," map provided by the object\nembedded into the request"),(0,a.kt)("li",{parentName:"ol"},"We use a ",(0,a.kt)("inlineCode",{parentName:"li"},"gjson")," helper to iterate over the results of the query. If the query\nhas no results the loop will never take place."),(0,a.kt)("li",{parentName:"ol"},"We look for the ",(0,a.kt)("inlineCode",{parentName:"li"},"label")," of the object inside of the list of denied labels\nprovided by the user via the policy settings. If the ",(0,a.kt)("inlineCode",{parentName:"li"},"label")," is a denied\none, we set the value of the ",(0,a.kt)("inlineCode",{parentName:"li"},"err")," variable and exit from the loop (that\nhappens by returning ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," instead of ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),")."),(0,a.kt)("li",{parentName:"ol"},"We look for the ",(0,a.kt)("inlineCode",{parentName:"li"},"label")," of the object inside of the list of constrained labels\nprovided by the user via the policy settings. When we have a match we use\nthe regular expression provided by the user to validate the value of the label.\nIf the validation fails, we set the value of the ",(0,a.kt)("inlineCode",{parentName:"li"},"err")," variable and exit\nfrom the loop (that happens by returning ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," instead of ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),")."),(0,a.kt)("li",{parentName:"ol"},"If the ",(0,a.kt)("inlineCode",{parentName:"li"},"err")," variable is not ",(0,a.kt)("inlineCode",{parentName:"li"},"nil"),", we use the helper provided by Kubewarden's\nSDK to reject the request. Otherwise we accept it.")),(0,a.kt)("h2",{id:"testing-the-validation-code"},"Testing the validation code"),(0,a.kt)("p",null,"It's now time to write some unit tests to ensure the validation code is behaving\nproperly. These tests are going to be located inside of the ",(0,a.kt)("inlineCode",{parentName:"p"},"validate_test.go"),"\nfile."),(0,a.kt)("p",null,"The tests will rely on some ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Test_fixture#Software"},"test fixtures"),"\nlocated inside of the ",(0,a.kt)("inlineCode",{parentName:"p"},"test_data")," directory. This directory has already\nbeen populated by the template repository with an example\n",(0,a.kt)("inlineCode",{parentName:"p"},"admissionreview.request")," object that matches this tutorial, but you would need\nto craft one with the correct Kubernetes object you are writing the policy for,\nas we covered in ",(0,a.kt)("a",{parentName:"p",href:"/writing-policies/spec/validating-policies"},'"validating\npolicies"')),(0,a.kt)("p",null,"We will start by including the following packages:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "encoding/json"\n    "testing"\n\n    "github.com/deckarep/golang-set"\n    kubewarden_testing "github.com/kubewarden/policy-sdk-go/testing"\n)\n')),(0,a.kt)("p",null,"The first unit test will ensure that having no user settings leads\nto the request to be accepted:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func TestEmptySettingsLeadsToRequestAccepted(t *testing.T) {\n    settings := Settings{}\n\n    payload, err := kubewarden_testing.BuildValidationRequest(\n        "test_data/ingress.json",\n        &settings)\n    if err != nil {\n        t.Errorf("Unexpected error: %+v", err)\n    }\n\n    responsePayload, err := validate(payload)\n    if err != nil {\n        t.Errorf("Unexpected error: %+v", err)\n    }\n\n    var response kubewarden_testing.ValidationResponse\n    if err := json.Unmarshal(responsePayload, &response); err != nil {\n        t.Errorf("Unexpected error: %+v", err)\n    }\n\n    if response.Accepted != true {\n        t.Error("Unexpected rejection")\n    }\n}\n')),(0,a.kt)("p",null,"As you can see we are using some test helper functions and structures provided\nby the Kubewarden SDK."),(0,a.kt)("p",null,"The next test ensures a request can be accepted when none of its labels\nis relevant to the user:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func TestRequestAccepted(t *testing.T) {\n    constrainedLabels := make(map[string]*RegularExpression)\n    re, err := CompileRegularExpression(`^world-`)\n    if err != nil {\n        t.Errorf("Unexpected error: %+v", err)\n    }\n    constrainedLabels["hello"] = re\n\n    settings := Settings{\n        DeniedLabels:      mapset.NewThreadUnsafeSetFromSlice([]interface{}{"bad1", "bad2"}),\n        ConstrainedLabels: constrainedLabels,\n    }\n\n    payload, err := kubewarden_testing.BuildValidationRequest(\n        "test_data/ingress.json",\n        &settings)\n    if err != nil {\n        t.Errorf("Unexpected error: %+v", err)\n    }\n\n    responsePayload, err := validate(payload)\n    if err != nil {\n        t.Errorf("Unexpected error: %+v", err)\n    }\n\n    var response kubewarden_testing.ValidationResponse\n    if err := json.Unmarshal(responsePayload, &response); err != nil {\n        t.Errorf("Unexpected error: %+v", err)\n    }\n\n    if response.Accepted != true {\n        t.Error("Unexpected rejection")\n    }\n}\n')),(0,a.kt)("p",null,"Next we will ensure a request is accepted when one of its labels satisfies\nthe constraint provided by the user:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func TestAcceptRequestWithConstraintLabel(t *testing.T) {\n    constrainedLabels := make(map[string]*RegularExpression)\n    re, err := CompileRegularExpression(`^team-`)\n    if err != nil {\n        t.Errorf("Unexpected error: %s", err)\n    }\n    constrainedLabels["owner"] = re\n    settings := Settings{\n        DeniedLabels:      mapset.NewThreadUnsafeSetFromSlice([]interface{}{"bad1", "bad2"}),\n        ConstrainedLabels: constrainedLabels,\n    }\n\n    payload, err := kubewarden_testing.BuildValidationRequest(\n        "test_data/ingress.json",\n        &settings)\n    if err != nil {\n        t.Errorf("Unexpected error: %+v", err)\n    }\n\n    responsePayload, err := validate(payload)\n    if err != nil {\n        t.Errorf("Unexpected error: %+v", err)\n    }\n\n    var response kubewarden_testing.ValidationResponse\n    if err := json.Unmarshal(responsePayload, &response); err != nil {\n        t.Errorf("Unexpected error: %+v", err)\n    }\n\n    if response.Accepted != true {\n        t.Error("Unexpected rejection")\n    }\n}\n')),(0,a.kt)("p",null,"It's now time to test the rejection of requests."),(0,a.kt)("p",null,"This test verifies a request is rejected when one of the labels is\non the deny list:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func TestRejectionBecauseDeniedLabel(t *testing.T) {\n    constrainedLabels := make(map[string]*RegularExpression)\n    re, err := CompileRegularExpression(`^world-`)\n    if err != nil {\n        t.Errorf("Unexpected error: %+v", err)\n    }\n    constrainedLabels["hello"] = re\n\n    settings := Settings{\n        DeniedLabels:      mapset.NewThreadUnsafeSetFromSlice([]interface{}{"owner"}),\n        ConstrainedLabels: constrainedLabels,\n    }\n\n    payload, err := kubewarden_testing.BuildValidationRequest(\n        "test_data/ingress.json",\n        &settings)\n    if err != nil {\n        t.Errorf("Unexpected error: %+v", err)\n    }\n\n    responsePayload, err := validate(payload)\n    if err != nil {\n        t.Errorf("Unexpected error: %+v", err)\n    }\n\n    var response kubewarden_testing.ValidationResponse\n    if err := json.Unmarshal(responsePayload, &response); err != nil {\n        t.Errorf("Unexpected error: %+v", err)\n    }\n\n    if response.Accepted != false {\n        t.Error("Unexpected accept response")\n    }\n\n    expected_message := "Label owner is on the deny list"\n    if response.Message != expected_message {\n        t.Errorf("Got \'%s\' instead of \'%s\'", response.Message, expected_message)\n    }\n}\n')),(0,a.kt)("p",null,"The next test ensures a request is rejected when one of the user defined\nconstraints is not satisfied:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func TestRejectionBecauseConstrainedLabelNotValid(t *testing.T) {\n    constrainedLabels := make(map[string]*RegularExpression)\n    re, err := CompileRegularExpression(`^cc-\\d+$`)\n    if err != nil {\n        t.Errorf("Unexpected error: %+v", err)\n    }\n    constrainedLabels["cc-center"] = re\n\n    settings := Settings{\n        DeniedLabels:      mapset.NewThreadUnsafeSetFromSlice([]interface{}{}),\n        ConstrainedLabels: constrainedLabels,\n    }\n\n    payload, err := kubewarden_testing.BuildValidationRequest(\n        "test_data/ingress.json",\n        &settings)\n    if err != nil {\n        t.Errorf("Unexpected error: %+v", err)\n    }\n\n    responsePayload, err := validate(payload)\n    if err != nil {\n        t.Errorf("Unexpected error: %+v", err)\n    }\n\n    var response kubewarden_testing.ValidationResponse\n    if err := json.Unmarshal(responsePayload, &response); err != nil {\n        t.Errorf("Unexpected error: %+v", err)\n    }\n\n    if response.Accepted != false {\n        t.Error("Unexpected accept response")\n    }\n\n    expected_message := "The value of cc-center doesn\'t pass user-defined constraint"\n    if response.Message != expected_message {\n        t.Errorf("Got \'%s\' instead of \'%s\'", response.Message, expected_message)\n    }\n}\n')),(0,a.kt)("p",null,"We can now run all the unit tests, including the one defined inside of ",(0,a.kt)("inlineCode",{parentName:"p"},"settings_test.go"),",\nby using this simple command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"make test\n")),(0,a.kt)("p",null,"This will produce the following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"go test -v\n=== RUN   TestParseValidSettings\n--- PASS: TestParseValidSettings (0.00s)\n=== RUN   TestParseSettingsWithInvalidRegexp\n--- PASS: TestParseSettingsWithInvalidRegexp (0.00s)\n=== RUN   TestDetectValidSettings\n--- PASS: TestDetectValidSettings (0.00s)\n=== RUN   TestDetectNotValidSettingsDueToBrokenRegexp\n--- PASS: TestDetectNotValidSettingsDueToBrokenRegexp (0.00s)\n=== RUN   TestDetectNotValidSettingsDueToConflictingLabels\n--- PASS: TestDetectNotValidSettingsDueToConflictingLabels (0.00s)\n=== RUN   TestEmptySettingsLeadsToRequestAccepted\n--- PASS: TestEmptySettingsLeadsToRequestAccepted (0.00s)\n=== RUN   TestRequestAccepted\n--- PASS: TestRequestAccepted (0.00s)\n=== RUN   TestAcceptRequestWithConstraintLabel\n--- PASS: TestAcceptRequestWithConstraintLabel (0.00s)\n=== RUN   TestRejectionBecauseDeniedLabel\n--- PASS: TestRejectionBecauseDeniedLabel (0.00s)\n=== RUN   TestRejectionBecauseConstrainedLabelNotValid\n--- PASS: TestRejectionBecauseConstrainedLabelNotValid (0.00s)\nPASS\nok      github.com/kubewarden/safe-labels-policy    0.001s\n")),(0,a.kt)("p",null,"We can now move to the next step, write some end-to-end tests."))}g.isMDXComponent=!0}}]);