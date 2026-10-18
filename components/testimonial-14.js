import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "testimonial-14",
  "prefix": "testimonial14",
  "name": "Testimonials / Story grid",
  "category": "testimonial",
  "collection": "saas",
  "description": "Testimonials / Story grid for Harborline.",
  "props": {
    "heading": {
      "type": "text",
      "default": "Real crews, real routes"
    },
    "subheading": {
      "type": "text",
      "default": "Placeholder stories. [Replace with real customers, with permission.]"
    }
  },
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "heading",
        "div-5",
        "div-20",
        "div-37"
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
        "key": "div-39",
        "style": {
          "base": {
            "max-width": "1200px",
            "margin-top": "0",
            "margin-right": "auto",
            "margin-bottom": "0",
            "margin-left": "auto",
            "display": "flex",
            "flex-direction": "column",
            "row-gap": "28px",
            "column-gap": "28px"
          }
        },
        "children": [
          {
            "tag": "div",
            "key": "div-5",
            "style": {
              "base": {
                "display": "flex",
                "flex-wrap": "wrap",
                "justify-content": "space-between",
                "align-items": "flex-end",
                "row-gap": "16px",
                "column-gap": "16px"
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
                    "max-width": "620px"
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
                    "text": "Customer stories"
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
                "tag": "a",
                "key": "a-4",
                "style": {
                  "base": {
                    "font-weight": "500",
                    "text-decoration": "none",
                    "color": "#2D4BF0"
                  }
                },
                "href": "#",
                "text": "All stories →"
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-20",
            "style": {
              "base": {
                "display": "flex",
                "flex-wrap": "wrap",
                "row-gap": "20px",
                "column-gap": "20px",
                "padding-top": "clamp(20px, 3vw, 28px)",
                "padding-right": "clamp(20px, 3vw, 28px)",
                "padding-bottom": "clamp(20px, 3vw, 28px)",
                "padding-left": "clamp(20px, 3vw, 28px)",
                "border-top-left-radius": "22px",
                "border-top-right-radius": "22px",
                "border-bottom-right-radius": "22px",
                "border-bottom-left-radius": "22px",
                "background-color": "#0F1115",
                "color": "#F4F5F1"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "div-8",
                "style": {
                  "base": {
                    "flex-grow": "1",
                    "flex-shrink": "1",
                    "flex-basis": "420px",
                    "min-height": "280px",
                    "border-top-left-radius": "16px",
                    "border-top-right-radius": "16px",
                    "border-bottom-right-radius": "16px",
                    "border-bottom-left-radius": "16px",
                    "background-color": "#AFC0FF",
                    "display": "flex",
                    "align-items": "center",
                    "justify-content": "center",
                    "position": "relative"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-6",
                    "style": {
                      "base": {
                        "position": "absolute",
                        "top": "14px",
                        "left": "14px",
                        "font-family": "token(font-saas-mono)",
                        "font-size": "12px",
                        "color": "#0F1115",
                        "opacity": "0.6"
                      }
                    },
                    "text": "[Video or photo]"
                  },
                  {
                    "tag": "div",
                    "key": "div-7",
                    "style": {
                      "base": {
                        "width": "72px",
                        "height": "72px",
                        "border-top-left-radius": "50%",
                        "border-top-right-radius": "50%",
                        "border-bottom-right-radius": "50%",
                        "border-bottom-left-radius": "50%",
                        "background-color": "#0F1115",
                        "color": "#FFFFFF",
                        "display": "flex",
                        "align-items": "center",
                        "justify-content": "center",
                        "font-size": "22px"
                      }
                    },
                    "attrs": {
                      "aria-hidden": "true"
                    },
                    "text": "▶"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "stack-157",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-direction": "column",
                    "width": "100%"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-19",
                    "style": {
                      "base": {
                        "flex-grow": "1",
                        "flex-shrink": "1",
                        "flex-basis": "380px",
                        "display": "flex",
                        "flex-direction": "column",
                        "row-gap": "16px",
                        "column-gap": "16px",
                        "justify-content": "center"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-9",
                        "style": {
                          "base": {
                            "padding-top": "4px",
                            "padding-right": "10px",
                            "padding-bottom": "4px",
                            "padding-left": "10px",
                            "align-self": "flex-start",
                            "border-top-left-radius": "999px",
                            "border-top-right-radius": "999px",
                            "border-bottom-right-radius": "999px",
                            "border-bottom-left-radius": "999px",
                            "font-size": "12px",
                            "background-color": "#262A31",
                            "color": "#C9CDD4"
                          }
                        },
                        "text": "Bin cleaning"
                      },
                      {
                        "tag": "div",
                        "key": "div-10",
                        "style": {
                          "base": {
                            "font-size": "28px",
                            "line-height": "1.15",
                            "letter-spacing": "-0.025em",
                            "font-weight": "600"
                          }
                        },
                        "text": "[How they took recurring routes off a spreadsheet]"
                      },
                      {
                        "tag": "div",
                        "key": "div-17",
                        "style": {
                          "base": {
                            "display": "grid",
                            "grid-template-columns": "1fr 1fr",
                            "row-gap": "12px",
                            "column-gap": "12px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-13",
                            "style": {
                              "base": {
                                "padding-top": "14px",
                                "padding-right": "14px",
                                "padding-bottom": "14px",
                                "padding-left": "14px",
                                "border-top-left-radius": "12px",
                                "border-top-right-radius": "12px",
                                "border-bottom-right-radius": "12px",
                                "border-bottom-left-radius": "12px",
                                "background-color": "#181B20",
                                "display": "flex",
                                "flex-wrap": "wrap",
                                "align-items": "baseline",
                                "column-gap": "0.35rem"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-11",
                                "style": {
                                  "base": {
                                    "font-size": "12px",
                                    "color": "#8C929B",
                                    "margin-bottom": "6px"
                                  }
                                },
                                "text": "Before"
                              },
                              {
                                "tag": "div",
                                "key": "div-12",
                                "style": {
                                  "base": {
                                    "font-size": "14px",
                                    "line-height": "1.5",
                                    "color": "#C9CDD4"
                                  }
                                },
                                "text": "[What their week looked like]"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-16",
                            "style": {
                              "base": {
                                "padding-top": "14px",
                                "padding-right": "14px",
                                "padding-bottom": "14px",
                                "padding-left": "14px",
                                "border-top-left-radius": "12px",
                                "border-top-right-radius": "12px",
                                "border-bottom-right-radius": "12px",
                                "border-bottom-left-radius": "12px",
                                "background-color": "#181B20",
                                "display": "flex",
                                "flex-wrap": "wrap",
                                "align-items": "baseline",
                                "column-gap": "0.35rem"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-14",
                                "style": {
                                  "base": {
                                    "font-size": "12px",
                                    "color": "#8C929B",
                                    "margin-bottom": "6px"
                                  }
                                },
                                "text": "After"
                              },
                              {
                                "tag": "div",
                                "key": "div-15",
                                "style": {
                                  "base": {
                                    "font-size": "14px",
                                    "line-height": "1.5",
                                    "color": "#C9CDD4"
                                  }
                                },
                                "text": "[What changed, in their words]"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "tag": "a",
                        "key": "a-18",
                        "style": {
                          "base": {
                            "font-weight": "500",
                            "text-decoration": "none",
                            "color": "#2D4BF0"
                          }
                        },
                        "href": "#",
                        "text": "Read the story →"
                      }
                    ],
                    "attrs": {
                      "data-blok-panel": "",
                      "data-display": "flex"
                    }
                  },
                  {
                    "tag": "div",
                    "key": "div-58",
                    "style": {
                      "base": {
                        "flex-grow": "1",
                        "flex-shrink": "1",
                        "flex-basis": "380px",
                        "display": "none",
                        "flex-direction": "column",
                        "row-gap": "16px",
                        "column-gap": "16px",
                        "justify-content": "center"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-48",
                        "style": {
                          "base": {
                            "padding-top": "4px",
                            "padding-right": "10px",
                            "padding-bottom": "4px",
                            "padding-left": "10px",
                            "align-self": "flex-start",
                            "border-top-left-radius": "999px",
                            "border-top-right-radius": "999px",
                            "border-bottom-right-radius": "999px",
                            "border-bottom-left-radius": "999px",
                            "font-size": "12px",
                            "background-color": "#262A31",
                            "color": "#C9CDD4"
                          }
                        },
                        "text": "Pressure washing"
                      },
                      {
                        "tag": "div",
                        "key": "div-49",
                        "style": {
                          "base": {
                            "font-size": "28px",
                            "line-height": "1.15",
                            "letter-spacing": "-0.025em",
                            "font-weight": "600"
                          }
                        },
                        "text": "[How they cut no-shows with reminder texts]"
                      },
                      {
                        "tag": "div",
                        "key": "div-56",
                        "style": {
                          "base": {
                            "display": "grid",
                            "grid-template-columns": "1fr 1fr",
                            "row-gap": "12px",
                            "column-gap": "12px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-52",
                            "style": {
                              "base": {
                                "padding-top": "14px",
                                "padding-right": "14px",
                                "padding-bottom": "14px",
                                "padding-left": "14px",
                                "border-top-left-radius": "12px",
                                "border-top-right-radius": "12px",
                                "border-bottom-right-radius": "12px",
                                "border-bottom-left-radius": "12px",
                                "background-color": "#181B20",
                                "display": "flex",
                                "flex-wrap": "wrap",
                                "align-items": "baseline",
                                "column-gap": "0.35rem"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-50",
                                "style": {
                                  "base": {
                                    "font-size": "12px",
                                    "color": "#8C929B",
                                    "margin-bottom": "6px"
                                  }
                                },
                                "text": "Before"
                              },
                              {
                                "tag": "div",
                                "key": "div-51",
                                "style": {
                                  "base": {
                                    "font-size": "14px",
                                    "line-height": "1.5",
                                    "color": "#C9CDD4"
                                  }
                                },
                                "text": "[What their week looked like]"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-55",
                            "style": {
                              "base": {
                                "padding-top": "14px",
                                "padding-right": "14px",
                                "padding-bottom": "14px",
                                "padding-left": "14px",
                                "border-top-left-radius": "12px",
                                "border-top-right-radius": "12px",
                                "border-bottom-right-radius": "12px",
                                "border-bottom-left-radius": "12px",
                                "background-color": "#181B20",
                                "display": "flex",
                                "flex-wrap": "wrap",
                                "align-items": "baseline",
                                "column-gap": "0.35rem"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-53",
                                "style": {
                                  "base": {
                                    "font-size": "12px",
                                    "color": "#8C929B",
                                    "margin-bottom": "6px"
                                  }
                                },
                                "text": "After"
                              },
                              {
                                "tag": "div",
                                "key": "div-54",
                                "style": {
                                  "base": {
                                    "font-size": "14px",
                                    "line-height": "1.5",
                                    "color": "#C9CDD4"
                                  }
                                },
                                "text": "[What changed, in their words]"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "tag": "a",
                        "key": "a-57",
                        "style": {
                          "base": {
                            "font-weight": "500",
                            "text-decoration": "none",
                            "color": "#2D4BF0"
                          }
                        },
                        "href": "#",
                        "text": "Read the story →"
                      }
                    ],
                    "attrs": {
                      "data-blok-panel": "",
                      "data-display": "flex"
                    }
                  },
                  {
                    "tag": "div",
                    "key": "div-97",
                    "style": {
                      "base": {
                        "flex-grow": "1",
                        "flex-shrink": "1",
                        "flex-basis": "380px",
                        "display": "none",
                        "flex-direction": "column",
                        "row-gap": "16px",
                        "column-gap": "16px",
                        "justify-content": "center"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-87",
                        "style": {
                          "base": {
                            "padding-top": "4px",
                            "padding-right": "10px",
                            "padding-bottom": "4px",
                            "padding-left": "10px",
                            "align-self": "flex-start",
                            "border-top-left-radius": "999px",
                            "border-top-right-radius": "999px",
                            "border-bottom-right-radius": "999px",
                            "border-bottom-left-radius": "999px",
                            "font-size": "12px",
                            "background-color": "#262A31",
                            "color": "#C9CDD4"
                          }
                        },
                        "text": "Lawn care"
                      },
                      {
                        "tag": "div",
                        "key": "div-88",
                        "style": {
                          "base": {
                            "font-size": "28px",
                            "line-height": "1.15",
                            "letter-spacing": "-0.025em",
                            "font-weight": "600"
                          }
                        },
                        "text": "[How five crews share one dispatch board]"
                      },
                      {
                        "tag": "div",
                        "key": "div-95",
                        "style": {
                          "base": {
                            "display": "grid",
                            "grid-template-columns": "1fr 1fr",
                            "row-gap": "12px",
                            "column-gap": "12px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-91",
                            "style": {
                              "base": {
                                "padding-top": "14px",
                                "padding-right": "14px",
                                "padding-bottom": "14px",
                                "padding-left": "14px",
                                "border-top-left-radius": "12px",
                                "border-top-right-radius": "12px",
                                "border-bottom-right-radius": "12px",
                                "border-bottom-left-radius": "12px",
                                "background-color": "#181B20",
                                "display": "flex",
                                "flex-wrap": "wrap",
                                "align-items": "baseline",
                                "column-gap": "0.35rem"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-89",
                                "style": {
                                  "base": {
                                    "font-size": "12px",
                                    "color": "#8C929B",
                                    "margin-bottom": "6px"
                                  }
                                },
                                "text": "Before"
                              },
                              {
                                "tag": "div",
                                "key": "div-90",
                                "style": {
                                  "base": {
                                    "font-size": "14px",
                                    "line-height": "1.5",
                                    "color": "#C9CDD4"
                                  }
                                },
                                "text": "[What their week looked like]"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-94",
                            "style": {
                              "base": {
                                "padding-top": "14px",
                                "padding-right": "14px",
                                "padding-bottom": "14px",
                                "padding-left": "14px",
                                "border-top-left-radius": "12px",
                                "border-top-right-radius": "12px",
                                "border-bottom-right-radius": "12px",
                                "border-bottom-left-radius": "12px",
                                "background-color": "#181B20",
                                "display": "flex",
                                "flex-wrap": "wrap",
                                "align-items": "baseline",
                                "column-gap": "0.35rem"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-92",
                                "style": {
                                  "base": {
                                    "font-size": "12px",
                                    "color": "#8C929B",
                                    "margin-bottom": "6px"
                                  }
                                },
                                "text": "After"
                              },
                              {
                                "tag": "div",
                                "key": "div-93",
                                "style": {
                                  "base": {
                                    "font-size": "14px",
                                    "line-height": "1.5",
                                    "color": "#C9CDD4"
                                  }
                                },
                                "text": "[What changed, in their words]"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "tag": "a",
                        "key": "a-96",
                        "style": {
                          "base": {
                            "font-weight": "500",
                            "text-decoration": "none",
                            "color": "#2D4BF0"
                          }
                        },
                        "href": "#",
                        "text": "Read the story →"
                      }
                    ],
                    "attrs": {
                      "data-blok-panel": "",
                      "data-display": "flex"
                    }
                  },
                  {
                    "tag": "div",
                    "key": "div-136",
                    "style": {
                      "base": {
                        "flex-grow": "1",
                        "flex-shrink": "1",
                        "flex-basis": "380px",
                        "display": "none",
                        "flex-direction": "column",
                        "row-gap": "16px",
                        "column-gap": "16px",
                        "justify-content": "center"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-126",
                        "style": {
                          "base": {
                            "padding-top": "4px",
                            "padding-right": "10px",
                            "padding-bottom": "4px",
                            "padding-left": "10px",
                            "align-self": "flex-start",
                            "border-top-left-radius": "999px",
                            "border-top-right-radius": "999px",
                            "border-bottom-right-radius": "999px",
                            "border-bottom-left-radius": "999px",
                            "font-size": "12px",
                            "background-color": "#262A31",
                            "color": "#C9CDD4"
                          }
                        },
                        "text": "Window cleaning"
                      },
                      {
                        "tag": "div",
                        "key": "div-127",
                        "style": {
                          "base": {
                            "font-size": "28px",
                            "line-height": "1.15",
                            "letter-spacing": "-0.025em",
                            "font-weight": "600"
                          }
                        },
                        "text": "[How invoices went out from the driveway]"
                      },
                      {
                        "tag": "div",
                        "key": "div-134",
                        "style": {
                          "base": {
                            "display": "grid",
                            "grid-template-columns": "1fr 1fr",
                            "row-gap": "12px",
                            "column-gap": "12px"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-130",
                            "style": {
                              "base": {
                                "padding-top": "14px",
                                "padding-right": "14px",
                                "padding-bottom": "14px",
                                "padding-left": "14px",
                                "border-top-left-radius": "12px",
                                "border-top-right-radius": "12px",
                                "border-bottom-right-radius": "12px",
                                "border-bottom-left-radius": "12px",
                                "background-color": "#181B20",
                                "display": "flex",
                                "flex-wrap": "wrap",
                                "align-items": "baseline",
                                "column-gap": "0.35rem"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-128",
                                "style": {
                                  "base": {
                                    "font-size": "12px",
                                    "color": "#8C929B",
                                    "margin-bottom": "6px"
                                  }
                                },
                                "text": "Before"
                              },
                              {
                                "tag": "div",
                                "key": "div-129",
                                "style": {
                                  "base": {
                                    "font-size": "14px",
                                    "line-height": "1.5",
                                    "color": "#C9CDD4"
                                  }
                                },
                                "text": "[What their week looked like]"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-133",
                            "style": {
                              "base": {
                                "padding-top": "14px",
                                "padding-right": "14px",
                                "padding-bottom": "14px",
                                "padding-left": "14px",
                                "border-top-left-radius": "12px",
                                "border-top-right-radius": "12px",
                                "border-bottom-right-radius": "12px",
                                "border-bottom-left-radius": "12px",
                                "background-color": "#181B20",
                                "display": "flex",
                                "flex-wrap": "wrap",
                                "align-items": "baseline",
                                "column-gap": "0.35rem"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-131",
                                "style": {
                                  "base": {
                                    "font-size": "12px",
                                    "color": "#8C929B",
                                    "margin-bottom": "6px"
                                  }
                                },
                                "text": "After"
                              },
                              {
                                "tag": "div",
                                "key": "div-132",
                                "style": {
                                  "base": {
                                    "font-size": "14px",
                                    "line-height": "1.5",
                                    "color": "#C9CDD4"
                                  }
                                },
                                "text": "[What changed, in their words]"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "tag": "a",
                        "key": "a-135",
                        "style": {
                          "base": {
                            "font-weight": "500",
                            "text-decoration": "none",
                            "color": "#2D4BF0"
                          }
                        },
                        "href": "#",
                        "text": "Read the story →"
                      }
                    ],
                    "attrs": {
                      "data-blok-panel": "",
                      "data-display": "flex"
                    }
                  }
                ]
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-37",
            "style": {
              "base": {
                "display": "grid",
                "grid-template-columns": "1fr",
                "row-gap": "12px",
                "column-gap": "12px"
              },
              "md": {
                "grid-template-columns": "repeat(3, minmax(0, 1fr))"
              },
              "lg": {
                "grid-template-columns": "repeat(4, minmax(0, 1fr))"
              }
            },
            "attrs": {
              "role": "tablist",
              "aria-label": "Stories",
              "data-blok-choices": ""
            },
            "children": [
              {
                "tag": "div",
                "key": "div-24",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "10px",
                    "column-gap": "10px",
                    "padding-top": "18px",
                    "padding-right": "18px",
                    "padding-bottom": "18px",
                    "padding-left": "18px",
                    "border-top-left-radius": "16px",
                    "border-top-right-radius": "16px",
                    "border-bottom-right-radius": "16px",
                    "border-bottom-left-radius": "16px",
                    "cursor": "pointer",
                    "text-align": "left",
                    "border-top-width": "2px",
                    "border-top-style": "solid",
                    "border-top-color": "#0F1115",
                    "border-right-width": "2px",
                    "border-right-style": "solid",
                    "border-right-color": "#0F1115",
                    "border-bottom-width": "2px",
                    "border-bottom-style": "solid",
                    "border-bottom-color": "#0F1115",
                    "border-left-width": "2px",
                    "border-left-style": "solid",
                    "border-left-color": "#0F1115",
                    "background-color": "#FFFFFF",
                    "color": "#0F1115",
                    "align-items": "center",
                    "justify-content": "flex-start"
                  }
                },
                "attrs": {
                  "role": "tab",
                  "aria-selected": "true",
                  "data-blok-panel-go": "",
                  "data-blok-choice": ""
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-21",
                    "style": {
                      "base": {
                        "width": "100%",
                        "height": "6px",
                        "border-top-left-radius": "999px",
                        "border-top-right-radius": "999px",
                        "border-bottom-right-radius": "999px",
                        "border-bottom-left-radius": "999px",
                        "background-color": "#AFC0FF"
                      }
                    }
                  },
                  {
                    "tag": "div",
                    "key": "div-22",
                    "style": {
                      "base": {
                        "font-size": "13px",
                        "color": "#5B616B"
                      }
                    },
                    "text": "Bin cleaning"
                  },
                  {
                    "tag": "div",
                    "key": "div-23",
                    "style": {
                      "base": {
                        "font-size": "16px",
                        "font-weight": "600",
                        "line-height": "1.3"
                      }
                    },
                    "text": "[Company A]"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-28",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "10px",
                    "column-gap": "10px",
                    "padding-top": "18px",
                    "padding-right": "18px",
                    "padding-bottom": "18px",
                    "padding-left": "18px",
                    "border-top-left-radius": "16px",
                    "border-top-right-radius": "16px",
                    "border-bottom-right-radius": "16px",
                    "border-bottom-left-radius": "16px",
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
                    "color": "#0F1115",
                    "align-items": "center",
                    "justify-content": "flex-start"
                  }
                },
                "attrs": {
                  "role": "tab",
                  "aria-selected": "false",
                  "data-blok-panel-go": "",
                  "data-blok-choice": ""
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-25",
                    "style": {
                      "base": {
                        "width": "100%",
                        "height": "6px",
                        "border-top-left-radius": "999px",
                        "border-top-right-radius": "999px",
                        "border-bottom-right-radius": "999px",
                        "border-bottom-left-radius": "999px",
                        "background-color": "#F2B48A"
                      }
                    }
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
                    "text": "Pressure washing"
                  },
                  {
                    "tag": "div",
                    "key": "div-27",
                    "style": {
                      "base": {
                        "font-size": "16px",
                        "font-weight": "600",
                        "line-height": "1.3"
                      }
                    },
                    "text": "[Company B]"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-32",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "10px",
                    "column-gap": "10px",
                    "padding-top": "18px",
                    "padding-right": "18px",
                    "padding-bottom": "18px",
                    "padding-left": "18px",
                    "border-top-left-radius": "16px",
                    "border-top-right-radius": "16px",
                    "border-bottom-right-radius": "16px",
                    "border-bottom-left-radius": "16px",
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
                    "color": "#0F1115",
                    "align-items": "center",
                    "justify-content": "flex-start"
                  }
                },
                "attrs": {
                  "role": "tab",
                  "aria-selected": "false",
                  "data-blok-panel-go": "",
                  "data-blok-choice": ""
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-29",
                    "style": {
                      "base": {
                        "width": "100%",
                        "height": "6px",
                        "border-top-left-radius": "999px",
                        "border-top-right-radius": "999px",
                        "border-bottom-right-radius": "999px",
                        "border-bottom-left-radius": "999px",
                        "background-color": "#8FD3A8"
                      }
                    }
                  },
                  {
                    "tag": "div",
                    "key": "div-30",
                    "style": {
                      "base": {
                        "font-size": "13px",
                        "color": "#5B616B"
                      }
                    },
                    "text": "Lawn care"
                  },
                  {
                    "tag": "div",
                    "key": "div-31",
                    "style": {
                      "base": {
                        "font-size": "16px",
                        "font-weight": "600",
                        "line-height": "1.3"
                      }
                    },
                    "text": "[Company C]"
                  }
                ]
              },
              {
                "tag": "div",
                "key": "div-36",
                "style": {
                  "base": {
                    "display": "flex",
                    "flex-direction": "column",
                    "row-gap": "10px",
                    "column-gap": "10px",
                    "padding-top": "18px",
                    "padding-right": "18px",
                    "padding-bottom": "18px",
                    "padding-left": "18px",
                    "border-top-left-radius": "16px",
                    "border-top-right-radius": "16px",
                    "border-bottom-right-radius": "16px",
                    "border-bottom-left-radius": "16px",
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
                    "color": "#0F1115",
                    "align-items": "center",
                    "justify-content": "flex-start"
                  }
                },
                "attrs": {
                  "role": "tab",
                  "aria-selected": "false",
                  "data-blok-panel-go": "",
                  "data-blok-choice": ""
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-33",
                    "style": {
                      "base": {
                        "width": "100%",
                        "height": "6px",
                        "border-top-left-radius": "999px",
                        "border-top-right-radius": "999px",
                        "border-bottom-right-radius": "999px",
                        "border-bottom-left-radius": "999px",
                        "background-color": "#D9C2F2"
                      }
                    }
                  },
                  {
                    "tag": "div",
                    "key": "div-34",
                    "style": {
                      "base": {
                        "font-size": "13px",
                        "color": "#5B616B"
                      }
                    },
                    "text": "Window cleaning"
                  },
                  {
                    "tag": "div",
                    "key": "div-35",
                    "style": {
                      "base": {
                        "font-size": "16px",
                        "font-weight": "600",
                        "line-height": "1.3"
                      }
                    },
                    "text": "[Company D]"
                  }
                ]
              }
            ]
          },
          {
            "tag": "p",
            "key": "subheading",
            "style": {
              "base": {
                "margin-top": "0",
                "margin-right": "0",
                "margin-bottom": "0",
                "margin-left": "0",
                "font-size": "13px",
                "color": "#5B616B"
              }
            },
            "bind": "subheading"
          }
        ]
      }
    ],
    "attrs": {
      "data-blok-panels": ""
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
