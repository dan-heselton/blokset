import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "pricing-09",
  "prefix": "pricing09",
  "name": "Pricing / Plan builder",
  "category": "pricing",
  "collection": "saas",
  "description": "Pricing / Plan builder for Harborline.",
  "props": {
    "heading": {
      "type": "text",
      "default": "Pay for the business you have"
    }
  },
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "heading",
        "div-3",
        "div-62"
      ]
    }
  },
  "tree": {
    "role": "section",
    "style": {
      "base": {
        "font-family": "token(font-saas)",
        "color": "#0F1115",
        "background-color": "#FFFFFF",
        "padding-top": "clamp(56px, 8vw, 96px)",
        "padding-right": "clamp(20px, 4vw, 48px)",
        "padding-bottom": "clamp(56px, 8vw, 96px)",
        "padding-left": "clamp(20px, 4vw, 48px)"
      }
    },
    "children": [
      {
        "tag": "div",
        "key": "div-63",
        "style": {
          "base": {
            "max-width": "1200px",
            "margin-top": "0",
            "margin-right": "auto",
            "margin-bottom": "0",
            "margin-left": "auto",
            "display": "flex",
            "flex-direction": "column",
            "row-gap": "32px",
            "column-gap": "32px"
          }
        },
        "children": [
          {
            "tag": "div",
            "key": "div-3",
            "style": {
              "base": {
                "display": "flex",
                "flex-direction": "column",
                "row-gap": "14px",
                "column-gap": "14px",
                "max-width": "640px"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "div-1",
                "style": {
                  "base": {
                    "font-family": "token(font-saas-mono)",
                    "font-size": "12px",
                    "letter-spacing": "0.08em",
                    "text-transform": "uppercase",
                    "color": "#5B616B"
                  }
                },
                "text": "Build your plan"
              },
              {
                "tag": "h2",
                "key": "heading",
                "style": {
                  "base": {
                    "margin-top": "0",
                    "margin-right": "0",
                    "margin-bottom": "0",
                    "margin-left": "0",
                    "font-size": "clamp(34px, 4.4vw, 56px)",
                    "line-height": "1.02",
                    "letter-spacing": "-0.04em",
                    "font-weight": "600"
                  }
                },
                "bind": "heading"
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-62",
            "style": {
              "base": {
                "display": "flex",
                "flex-wrap": "wrap",
                "row-gap": "20px",
                "column-gap": "20px",
                "align-items": "flex-start"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "div-41",
                "style": {
                  "base": {
                    "flex-grow": "999",
                    "flex-shrink": "1",
                    "flex-basis": "560px",
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "14px",
                    "column-gap": "14px"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-15",
                    "style": {
                      "base": {
                        "padding-top": "22px",
                        "padding-right": "22px",
                        "padding-bottom": "22px",
                        "padding-left": "22px",
                        "border-top-left-radius": "18px",
                        "border-top-right-radius": "18px",
                        "border-bottom-right-radius": "18px",
                        "border-bottom-left-radius": "18px",
                        "background-color": "#F4F5F1",
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "12px",
                        "column-gap": "12px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-4",
                        "style": {
                          "base": {
                            "font-size": "14px",
                            "color": "#4E545D"
                          }
                        },
                        "text": "1 · Base plan"
                      },
                      {
                        "tag": "div",
                        "key": "div-14",
                        "style": {
                          "base": {
                            "display": "grid",
                            "grid-template-columns": "repeat(2, minmax(0, 1fr))",
                            "row-gap": "8px",
                            "column-gap": "8px"
                          },
                          "md": {
                            "grid-template-columns": "repeat(3, minmax(0, 1fr))"
                          }
                        },
                        "attrs": {
                          "role": "radiogroup",
                          "aria-label": "Base plan",
                          "data-blok-choices": ""
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-7",
                            "style": {
                              "base": {
                                "display": "flex",
                                "flex-direction": "column",
                                "align-items": "flex-start",
                                "row-gap": "4px",
                                "column-gap": "4px",
                                "padding-top": "14px",
                                "padding-right": "14px",
                                "padding-bottom": "14px",
                                "padding-left": "14px",
                                "border-top-left-radius": "12px",
                                "border-top-right-radius": "12px",
                                "border-bottom-right-radius": "12px",
                                "border-bottom-left-radius": "12px",
                                "cursor": "pointer",
                                "text-align": "left",
                                "border-top-width": "2px",
                                "border-top-style": "solid",
                                "border-top-color": "#E2E4DE",
                                "border-right-width": "2px",
                                "border-right-style": "solid",
                                "border-right-color": "#E2E4DE",
                                "border-bottom-width": "2px",
                                "border-bottom-style": "solid",
                                "border-bottom-color": "#E2E4DE",
                                "border-left-width": "2px",
                                "border-left-style": "solid",
                                "border-left-color": "#E2E4DE",
                                "background-color": "#FFFFFF",
                                "color": "#0F1115"
                              }
                            },
                            "attrs": {
                              "role": "radio",
                              "aria-checked": "false",
                              "data-base": "19",
                              "data-seat": "8",
                              "data-blok-choice": ""
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-5",
                                "style": {
                                  "base": {
                                    "font-size": "16px",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Essentials"
                              },
                              {
                                "tag": "div",
                                "key": "div-6",
                                "style": {
                                  "base": {
                                    "font-size": "13px",
                                    "color": "#5B616B"
                                  }
                                },
                                "text": "Schedule and invoice"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-10",
                            "style": {
                              "base": {
                                "display": "flex",
                                "flex-direction": "column",
                                "align-items": "flex-start",
                                "row-gap": "4px",
                                "column-gap": "4px",
                                "padding-top": "14px",
                                "padding-right": "14px",
                                "padding-bottom": "14px",
                                "padding-left": "14px",
                                "border-top-left-radius": "12px",
                                "border-top-right-radius": "12px",
                                "border-bottom-right-radius": "12px",
                                "border-bottom-left-radius": "12px",
                                "cursor": "pointer",
                                "text-align": "left",
                                "border-top-width": "2px",
                                "border-top-style": "solid",
                                "border-top-color": "#2D4BF0",
                                "border-right-width": "2px",
                                "border-right-style": "solid",
                                "border-right-color": "#2D4BF0",
                                "border-bottom-width": "2px",
                                "border-bottom-style": "solid",
                                "border-bottom-color": "#2D4BF0",
                                "border-left-width": "2px",
                                "border-left-style": "solid",
                                "border-left-color": "#2D4BF0",
                                "background-color": "#FFFFFF",
                                "color": "#0F1115"
                              }
                            },
                            "attrs": {
                              "role": "radio",
                              "aria-checked": "true",
                              "data-base": "49",
                              "data-seat": "12",
                              "data-blok-choice": ""
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-8",
                                "style": {
                                  "base": {
                                    "font-size": "16px",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Pro"
                              },
                              {
                                "tag": "div",
                                "key": "div-9",
                                "style": {
                                  "base": {
                                    "font-size": "13px",
                                    "color": "#5B616B"
                                  }
                                },
                                "text": "Plus dispatch and texts"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-13",
                            "style": {
                              "base": {
                                "display": "flex",
                                "flex-direction": "column",
                                "align-items": "flex-start",
                                "row-gap": "4px",
                                "column-gap": "4px",
                                "padding-top": "14px",
                                "padding-right": "14px",
                                "padding-bottom": "14px",
                                "padding-left": "14px",
                                "border-top-left-radius": "12px",
                                "border-top-right-radius": "12px",
                                "border-bottom-right-radius": "12px",
                                "border-bottom-left-radius": "12px",
                                "cursor": "pointer",
                                "text-align": "left",
                                "border-top-width": "2px",
                                "border-top-style": "solid",
                                "border-top-color": "#E2E4DE",
                                "border-right-width": "2px",
                                "border-right-style": "solid",
                                "border-right-color": "#E2E4DE",
                                "border-bottom-width": "2px",
                                "border-bottom-style": "solid",
                                "border-bottom-color": "#E2E4DE",
                                "border-left-width": "2px",
                                "border-left-style": "solid",
                                "border-left-color": "#E2E4DE",
                                "background-color": "#FFFFFF",
                                "color": "#0F1115"
                              }
                            },
                            "attrs": {
                              "role": "radio",
                              "aria-checked": "false",
                              "data-base": "99",
                              "data-seat": "15",
                              "data-blok-choice": ""
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-11",
                                "style": {
                                  "base": {
                                    "font-size": "16px",
                                    "font-weight": "600"
                                  }
                                },
                                "text": "Fleet"
                              },
                              {
                                "tag": "div",
                                "key": "div-12",
                                "style": {
                                  "base": {
                                    "font-size": "13px",
                                    "color": "#5B616B"
                                  }
                                },
                                "text": "Plus roles and reports"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-33",
                    "style": {
                      "base": {
                        "padding-top": "22px",
                        "padding-right": "22px",
                        "padding-bottom": "22px",
                        "padding-left": "22px",
                        "border-top-left-radius": "18px",
                        "border-top-right-radius": "18px",
                        "border-bottom-right-radius": "18px",
                        "border-bottom-left-radius": "18px",
                        "background-color": "#F4F5F1",
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "12px",
                        "column-gap": "12px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-16",
                        "style": {
                          "base": {
                            "font-size": "14px",
                            "color": "#4E545D"
                          }
                        },
                        "text": "2 · People"
                      },
                      {
                        "tag": "div",
                        "key": "div-24",
                        "style": {
                          "base": {
                            "display": "flex",
                            "justify-content": "space-between",
                            "align-items": "center",
                            "row-gap": "12px",
                            "column-gap": "12px",
                            "padding-top": "10px",
                            "padding-right": "14px",
                            "padding-bottom": "10px",
                            "padding-left": "14px",
                            "border-top-left-radius": "12px",
                            "border-top-right-radius": "12px",
                            "border-bottom-right-radius": "12px",
                            "border-bottom-left-radius": "12px",
                            "background-color": "#FFFFFF"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-19",
                            "style": {
                              "base": {
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "2px",
                                "column-gap": "2px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-17",
                                "style": {
                                  "base": {
                                    "font-size": "16px",
                                    "font-weight": "500"
                                  }
                                },
                                "text": "Crew members"
                              },
                              {
                                "tag": "div",
                                "key": "div-18",
                                "style": {
                                  "base": {
                                    "font-size": "13px",
                                    "color": "#5B616B"
                                  }
                                },
                                "text": "$12 each on this plan",
                                "attrs": {
                                  "data-blok-seat-hint": ""
                                }
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-23",
                            "style": {
                              "base": {
                                "display": "flex",
                                "align-items": "center",
                                "row-gap": "6px",
                                "column-gap": "6px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-20",
                                "style": {
                                  "base": {
                                    "width": "44px",
                                    "height": "44px",
                                    "border-top-left-radius": "10px",
                                    "border-top-right-radius": "10px",
                                    "border-bottom-right-radius": "10px",
                                    "border-bottom-left-radius": "10px",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#DDE0D8",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#DDE0D8",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#DDE0D8",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#DDE0D8",
                                    "background-color": "#FFFFFF",
                                    "cursor": "pointer",
                                    "font-size": "18px",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "line-height": "1",
                                    "flex-shrink": "0",
                                    "padding-top": "0px",
                                    "padding-right": "0px",
                                    "padding-bottom": "0px",
                                    "padding-left": "0px"
                                  }
                                },
                                "attrs": {
                                  "aria-label": "Fewer Crew members",
                                  "data-blok-step-dec": ""
                                },
                                "text": "−"
                              },
                              {
                                "tag": "div",
                                "key": "div-21",
                                "style": {
                                  "base": {
                                    "min-width": "40px",
                                    "text-align": "center",
                                    "font-family": "token(font-saas-mono)",
                                    "font-size": "18px"
                                  }
                                },
                                "text": "4",
                                "attrs": {
                                  "data-blok-step-value": ""
                                }
                              },
                              {
                                "tag": "div",
                                "key": "div-22",
                                "style": {
                                  "base": {
                                    "width": "44px",
                                    "height": "44px",
                                    "border-top-left-radius": "10px",
                                    "border-top-right-radius": "10px",
                                    "border-bottom-right-radius": "10px",
                                    "border-bottom-left-radius": "10px",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#DDE0D8",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#DDE0D8",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#DDE0D8",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#DDE0D8",
                                    "background-color": "#FFFFFF",
                                    "cursor": "pointer",
                                    "font-size": "18px",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "line-height": "1",
                                    "flex-shrink": "0",
                                    "padding-top": "0px",
                                    "padding-right": "0px",
                                    "padding-bottom": "0px",
                                    "padding-left": "0px"
                                  }
                                },
                                "attrs": {
                                  "aria-label": "More Crew members",
                                  "data-blok-step-inc": ""
                                },
                                "text": "+"
                              }
                            ],
                            "attrs": {
                              "data-blok-step": "",
                              "data-min": "1",
                              "data-max": "99",
                              "data-step": "1",
                              "data-kind": "crew"
                            }
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-32",
                        "style": {
                          "base": {
                            "display": "flex",
                            "justify-content": "space-between",
                            "align-items": "center",
                            "row-gap": "12px",
                            "column-gap": "12px",
                            "padding-top": "10px",
                            "padding-right": "14px",
                            "padding-bottom": "10px",
                            "padding-left": "14px",
                            "border-top-left-radius": "12px",
                            "border-top-right-radius": "12px",
                            "border-bottom-right-radius": "12px",
                            "border-bottom-left-radius": "12px",
                            "background-color": "#FFFFFF"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-27",
                            "style": {
                              "base": {
                                "display": "flex",
                                "flex-direction": "column",
                                "row-gap": "2px",
                                "column-gap": "2px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-25",
                                "style": {
                                  "base": {
                                    "font-size": "16px",
                                    "font-weight": "500"
                                  }
                                },
                                "text": "Office users"
                              },
                              {
                                "tag": "div",
                                "key": "div-26",
                                "style": {
                                  "base": {
                                    "font-size": "13px",
                                    "color": "#5B616B"
                                  }
                                },
                                "text": "$10 each"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-31",
                            "style": {
                              "base": {
                                "display": "flex",
                                "align-items": "center",
                                "row-gap": "6px",
                                "column-gap": "6px"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-28",
                                "style": {
                                  "base": {
                                    "width": "44px",
                                    "height": "44px",
                                    "border-top-left-radius": "10px",
                                    "border-top-right-radius": "10px",
                                    "border-bottom-right-radius": "10px",
                                    "border-bottom-left-radius": "10px",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#DDE0D8",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#DDE0D8",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#DDE0D8",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#DDE0D8",
                                    "background-color": "#FFFFFF",
                                    "cursor": "pointer",
                                    "font-size": "18px",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "line-height": "1",
                                    "flex-shrink": "0",
                                    "padding-top": "0px",
                                    "padding-right": "0px",
                                    "padding-bottom": "0px",
                                    "padding-left": "0px"
                                  }
                                },
                                "attrs": {
                                  "aria-label": "Fewer Office users",
                                  "data-blok-step-dec": ""
                                },
                                "text": "−"
                              },
                              {
                                "tag": "div",
                                "key": "div-29",
                                "style": {
                                  "base": {
                                    "min-width": "40px",
                                    "text-align": "center",
                                    "font-family": "token(font-saas-mono)",
                                    "font-size": "18px"
                                  }
                                },
                                "text": "2",
                                "attrs": {
                                  "data-blok-step-value": ""
                                }
                              },
                              {
                                "tag": "div",
                                "key": "div-30",
                                "style": {
                                  "base": {
                                    "width": "44px",
                                    "height": "44px",
                                    "border-top-left-radius": "10px",
                                    "border-top-right-radius": "10px",
                                    "border-bottom-right-radius": "10px",
                                    "border-bottom-left-radius": "10px",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#DDE0D8",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#DDE0D8",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#DDE0D8",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#DDE0D8",
                                    "background-color": "#FFFFFF",
                                    "cursor": "pointer",
                                    "font-size": "18px",
                                    "display": "flex",
                                    "align-items": "center",
                                    "justify-content": "center",
                                    "line-height": "1",
                                    "flex-shrink": "0",
                                    "padding-top": "0px",
                                    "padding-right": "0px",
                                    "padding-bottom": "0px",
                                    "padding-left": "0px"
                                  }
                                },
                                "attrs": {
                                  "aria-label": "More Office users",
                                  "data-blok-step-inc": ""
                                },
                                "text": "+"
                              }
                            ],
                            "attrs": {
                              "data-blok-step": "",
                              "data-min": "1",
                              "data-max": "20",
                              "data-step": "1",
                              "data-kind": "office"
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-40",
                    "style": {
                      "base": {
                        "padding-top": "22px",
                        "padding-right": "22px",
                        "padding-bottom": "22px",
                        "padding-left": "22px",
                        "border-top-left-radius": "18px",
                        "border-top-right-radius": "18px",
                        "border-bottom-right-radius": "18px",
                        "border-bottom-left-radius": "18px",
                        "background-color": "#F4F5F1",
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "12px",
                        "column-gap": "12px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-34",
                        "style": {
                          "base": {
                            "font-size": "14px",
                            "color": "#4E545D"
                          }
                        },
                        "text": "3 · Extras"
                      },
                      {
                        "tag": "div",
                        "key": "div-39",
                        "style": {
                          "base": {
                            "display": "flex",
                            "flex-wrap": "wrap",
                            "row-gap": "8px",
                            "column-gap": "8px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-35",
                            "style": {
                              "base": {
                                "height": "44px",
                                "padding-top": "0",
                                "padding-right": "14px",
                                "padding-bottom": "0",
                                "padding-left": "14px",
                                "border-top-left-radius": "999px",
                                "border-top-right-radius": "999px",
                                "border-bottom-right-radius": "999px",
                                "border-bottom-left-radius": "999px",
                                "cursor": "pointer",
                                "font-size": "14px",
                                "border-top-width": "1px",
                                "border-top-style": "solid",
                                "border-top-color": "#0F1115",
                                "border-right-width": "1px",
                                "border-right-style": "solid",
                                "border-right-color": "#0F1115",
                                "border-bottom-width": "1px",
                                "border-bottom-style": "solid",
                                "border-bottom-color": "#0F1115",
                                "border-left-width": "1px",
                                "border-left-style": "solid",
                                "border-left-color": "#0F1115",
                                "background-color": "#0F1115",
                                "color": "#FFFFFF",
                                "display": "flex",
                                "align-items": "center",
                                "justify-content": "center"
                              }
                            },
                            "attrs": {
                              "aria-pressed": "true",
                              "data-extra": "20",
                              "data-blok-choice": ""
                            },
                            "text": "✓ Route optimization · $20"
                          },
                          {
                            "tag": "div",
                            "key": "div-36",
                            "style": {
                              "base": {
                                "height": "44px",
                                "padding-top": "0",
                                "padding-right": "14px",
                                "padding-bottom": "0",
                                "padding-left": "14px",
                                "border-top-left-radius": "999px",
                                "border-top-right-radius": "999px",
                                "border-bottom-right-radius": "999px",
                                "border-bottom-left-radius": "999px",
                                "cursor": "pointer",
                                "font-size": "14px",
                                "border-top-width": "1px",
                                "border-top-style": "solid",
                                "border-top-color": "#DDE0D8",
                                "border-right-width": "1px",
                                "border-right-style": "solid",
                                "border-right-color": "#DDE0D8",
                                "border-bottom-width": "1px",
                                "border-bottom-style": "solid",
                                "border-bottom-color": "#DDE0D8",
                                "border-left-width": "1px",
                                "border-left-style": "solid",
                                "border-left-color": "#DDE0D8",
                                "background-color": "#FFFFFF",
                                "color": "#0F1115",
                                "display": "flex",
                                "align-items": "center",
                                "justify-content": "center"
                              }
                            },
                            "attrs": {
                              "aria-pressed": "false",
                              "data-extra": "10",
                              "data-blok-choice": ""
                            },
                            "text": "Customer portal · $10"
                          },
                          {
                            "tag": "div",
                            "key": "div-37",
                            "style": {
                              "base": {
                                "height": "44px",
                                "padding-top": "0",
                                "padding-right": "14px",
                                "padding-bottom": "0",
                                "padding-left": "14px",
                                "border-top-left-radius": "999px",
                                "border-top-right-radius": "999px",
                                "border-bottom-right-radius": "999px",
                                "border-bottom-left-radius": "999px",
                                "cursor": "pointer",
                                "font-size": "14px",
                                "border-top-width": "1px",
                                "border-top-style": "solid",
                                "border-top-color": "#DDE0D8",
                                "border-right-width": "1px",
                                "border-right-style": "solid",
                                "border-right-color": "#DDE0D8",
                                "border-bottom-width": "1px",
                                "border-bottom-style": "solid",
                                "border-bottom-color": "#DDE0D8",
                                "border-left-width": "1px",
                                "border-left-style": "solid",
                                "border-left-color": "#DDE0D8",
                                "background-color": "#FFFFFF",
                                "color": "#0F1115",
                                "display": "flex",
                                "align-items": "center",
                                "justify-content": "center"
                              }
                            },
                            "attrs": {
                              "aria-pressed": "false",
                              "data-extra": "15",
                              "data-blok-choice": ""
                            },
                            "text": "Extra texts · $15"
                          },
                          {
                            "tag": "div",
                            "key": "div-38",
                            "style": {
                              "base": {
                                "height": "44px",
                                "padding-top": "0",
                                "padding-right": "14px",
                                "padding-bottom": "0",
                                "padding-left": "14px",
                                "border-top-left-radius": "999px",
                                "border-top-right-radius": "999px",
                                "border-bottom-right-radius": "999px",
                                "border-bottom-left-radius": "999px",
                                "cursor": "pointer",
                                "font-size": "14px",
                                "border-top-width": "1px",
                                "border-top-style": "solid",
                                "border-top-color": "#DDE0D8",
                                "border-right-width": "1px",
                                "border-right-style": "solid",
                                "border-right-color": "#DDE0D8",
                                "border-bottom-width": "1px",
                                "border-bottom-style": "solid",
                                "border-bottom-color": "#DDE0D8",
                                "border-left-width": "1px",
                                "border-left-style": "solid",
                                "border-left-color": "#DDE0D8",
                                "background-color": "#FFFFFF",
                                "color": "#0F1115",
                                "display": "flex",
                                "align-items": "center",
                                "justify-content": "center"
                              }
                            },
                            "attrs": {
                              "aria-pressed": "false",
                              "data-extra": "25",
                              "data-blok-choice": ""
                            },
                            "text": "API access · $25"
                          }
                        ],
                        "attrs": {
                          "data-blok-choices": "",
                          "data-blok-multi": ""
                        }
                      }
                    ]
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-61",
                "style": {
                  "base": {
                    "flex-grow": "1",
                    "flex-shrink": "1",
                    "flex-basis": "320px",
                    "position": "sticky",
                    "top": "24px",
                    "padding-top": "26px",
                    "padding-right": "26px",
                    "padding-bottom": "26px",
                    "padding-left": "26px",
                    "border-top-left-radius": "20px",
                    "border-top-right-radius": "20px",
                    "border-bottom-right-radius": "20px",
                    "border-bottom-left-radius": "20px",
                    "background-color": "#0F1115",
                    "color": "#F4F5F1",
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "16px",
                    "column-gap": "16px"
                  }
                },
                "attrs": {
                  "role": "status"
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-42",
                    "style": {
                      "base": {
                        "font-size": "15px",
                        "color": "#A7ADB6"
                      }
                    },
                    "text": "Your plan"
                  },
                  {
                    "tag": "div",
                    "key": "div-55",
                    "style": {
                      "base": {
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "10px",
                        "column-gap": "10px"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-45",
                        "style": {
                          "base": {
                            "display": "flex",
                            "justify-content": "space-between",
                            "row-gap": "12px",
                            "column-gap": "12px",
                            "font-size": "15px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-43",
                            "style": {
                              "base": {
                                "color": "#C9CDD4"
                              }
                            },
                            "text": "Pro base"
                          },
                          {
                            "tag": "div",
                            "key": "div-44",
                            "style": {
                              "base": {
                                "font-family": "token(font-saas-mono)"
                              }
                            },
                            "text": "$49"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-48",
                        "style": {
                          "base": {
                            "display": "flex",
                            "justify-content": "space-between",
                            "row-gap": "12px",
                            "column-gap": "12px",
                            "font-size": "15px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-46",
                            "style": {
                              "base": {
                                "color": "#C9CDD4"
                              }
                            },
                            "text": "4 crew seats × $12"
                          },
                          {
                            "tag": "div",
                            "key": "div-47",
                            "style": {
                              "base": {
                                "font-family": "token(font-saas-mono)"
                              }
                            },
                            "text": "$48"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-51",
                        "style": {
                          "base": {
                            "display": "flex",
                            "justify-content": "space-between",
                            "row-gap": "12px",
                            "column-gap": "12px",
                            "font-size": "15px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-49",
                            "style": {
                              "base": {
                                "color": "#C9CDD4"
                              }
                            },
                            "text": "2 office users"
                          },
                          {
                            "tag": "div",
                            "key": "div-50",
                            "style": {
                              "base": {
                                "font-family": "token(font-saas-mono)"
                              }
                            },
                            "text": "$20"
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-54",
                        "style": {
                          "base": {
                            "display": "flex",
                            "justify-content": "space-between",
                            "row-gap": "12px",
                            "column-gap": "12px",
                            "font-size": "15px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-52",
                            "style": {
                              "base": {
                                "color": "#C9CDD4"
                              }
                            },
                            "text": "Route optimization"
                          },
                          {
                            "tag": "div",
                            "key": "div-53",
                            "style": {
                              "base": {
                                "font-family": "token(font-saas-mono)"
                              }
                            },
                            "text": "$20"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-58",
                    "style": {
                      "base": {
                        "display": "flex",
                        "justify-content": "space-between",
                        "align-items": "baseline",
                        "padding-top": "16px",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#2C3037"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-56",
                        "style": {
                          "base": {
                            "font-size": "15px",
                            "color": "#A7ADB6"
                          }
                        },
                        "text": "Per month"
                      },
                      {
                        "tag": "div",
                        "key": "div-57",
                        "style": {
                          "base": {
                            "font-size": "48px",
                            "font-weight": "600",
                            "letter-spacing": "-0.04em",
                            "line-height": "1"
                          }
                        },
                        "text": "$137",
                        "attrs": {
                          "data-blok-sum": ""
                        }
                      }
                    ]
                  },
                  {
                    "tag": "a",
                    "key": "a-59",
                    "style": {
                      "base": {
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "height": "48px",
                        "border-top-left-radius": "10px",
                        "border-top-right-radius": "10px",
                        "border-bottom-right-radius": "10px",
                        "border-bottom-left-radius": "10px",
                        "background-color": "#2D4BF0",
                        "color": "#FFFFFF",
                        "font-weight": "500",
                        "text-decoration": "none"
                      }
                    },
                    "href": "#",
                    "text": "Start with this plan"
                  },
                  {
                    "tag": "div",
                    "key": "div-60",
                    "style": {
                      "base": {
                        "font-size": "13px",
                        "color": "#8C929B"
                      }
                    },
                    "text": "Example prices. [Replace with your pricing.]"
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    "attrs": {
      "data-blok-plan": ""
    }
  }
};
spec.variants = {
  theme: themeVariant({
    palette: "saas",
    default: "light",
    map: { section: { "background-color": "bg", color: "fg" } },
  }),
};
export default spec;
