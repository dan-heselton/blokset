import { themeVariant } from "./_lib/themes.js";

const spec = {
  "id": "trust-03",
  "prefix": "trust03",
  "name": "Trust / Permissions matrix",
  "category": "trust",
  "collection": "saas",
  "description": "Trust / Permissions matrix for Harborline.",
  "props": {
    "heading": {
      "type": "text",
      "default": "Everyone sees exactly enough"
    },
    "subheading": {
      "type": "text",
      "default": "These are the defaults. Click any cell to try changing one."
    }
  },
  "motion": {
    "enter": {
      "preset": "fade-up",
      "stagger": 0.08,
      "targets": [
        "heading",
        "div-5",
        "div-70",
        "div-73"
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
        "key": "div-74",
        "style": {
          "base": {
            "max-width": "1100px",
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
                    "text": "Roles and permissions"
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
                "tag": "p",
                "key": "subheading",
                "style": {
                  "base": {
                    "margin-top": "0",
                    "margin-right": "0",
                    "margin-bottom": "0",
                    "margin-left": "0",
                    "max-width": "340px",
                    "font-size": "16px",
                    "line-height": "1.55",
                    "color": "#4E545D"
                  }
                },
                "bind": "subheading"
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-70",
            "style": {
              "base": {
                "border-top-left-radius": "20px",
                "border-top-right-radius": "20px",
                "border-bottom-right-radius": "20px",
                "border-bottom-left-radius": "20px",
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
                "overflow-x": "auto"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "div-69",
                "style": {
                  "base": {
                    "width": "100%",
                    "min-width": "640px",
                    "border-collapse": "collapse",
                    "font-size": "15px",
                    "display": "table"
                  }
                },
                "children": [
                  {
                    "tag": "div",
                    "key": "div-11",
                    "style": {
                      "base": {
                        "display": "table-header-group"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-10",
                        "style": {
                          "base": {
                            "display": "table-row"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-6",
                            "style": {
                              "base": {
                                "text-align": "left",
                                "padding-top": "16px",
                                "padding-right": "20px",
                                "padding-bottom": "16px",
                                "padding-left": "20px",
                                "background-color": "#F4F5F1",
                                "font-weight": "500",
                                "color": "#5B616B",
                                "display": "table-cell",
                                "vertical-align": "middle"
                              }
                            },
                            "text": "Permission"
                          },
                          {
                            "tag": "div",
                            "key": "div-7",
                            "style": {
                              "base": {
                                "padding-top": "16px",
                                "padding-right": "16px",
                                "padding-bottom": "16px",
                                "padding-left": "16px",
                                "background-color": "#F4F5F1",
                                "font-weight": "600",
                                "text-align": "center",
                                "width": "160px",
                                "display": "table-cell",
                                "vertical-align": "middle"
                              }
                            },
                            "text": "Owner"
                          },
                          {
                            "tag": "div",
                            "key": "div-8",
                            "style": {
                              "base": {
                                "padding-top": "16px",
                                "padding-right": "16px",
                                "padding-bottom": "16px",
                                "padding-left": "16px",
                                "background-color": "#F4F5F1",
                                "font-weight": "600",
                                "text-align": "center",
                                "width": "160px",
                                "display": "table-cell",
                                "vertical-align": "middle"
                              }
                            },
                            "text": "Dispatcher"
                          },
                          {
                            "tag": "div",
                            "key": "div-9",
                            "style": {
                              "base": {
                                "padding-top": "16px",
                                "padding-right": "16px",
                                "padding-bottom": "16px",
                                "padding-left": "16px",
                                "background-color": "#F4F5F1",
                                "font-weight": "600",
                                "text-align": "center",
                                "width": "160px",
                                "display": "table-cell",
                                "vertical-align": "middle"
                              }
                            },
                            "text": "Crew"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "div",
                    "key": "div-68",
                    "style": {
                      "base": {
                        "display": "table-row-group"
                      }
                    },
                    "children": [
                      {
                        "tag": "div",
                        "key": "div-19",
                        "style": {
                          "base": {
                            "display": "table-row"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-12",
                            "style": {
                              "base": {
                                "text-align": "left",
                                "padding-top": "0",
                                "padding-right": "20px",
                                "padding-bottom": "0",
                                "padding-left": "20px",
                                "height": "58px",
                                "font-weight": "500",
                                "border-top-width": "1px",
                                "border-top-style": "solid",
                                "border-top-color": "#ECEEE8",
                                "display": "table-cell",
                                "vertical-align": "middle"
                              }
                            },
                            "text": "See every crew’s schedule"
                          },
                          {
                            "tag": "div",
                            "key": "div-14",
                            "style": {
                              "base": {
                                "text-align": "center",
                                "border-top-width": "1px",
                                "border-top-style": "solid",
                                "border-top-color": "#ECEEE8",
                                "background-color": "transparent",
                                "display": "table-cell",
                                "flex-wrap": "wrap",
                                "align-items": "baseline",
                                "column-gap": "0.35rem",
                                "vertical-align": "middle"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-13",
                                "style": {
                                  "base": {
                                    "width": "44px",
                                    "height": "44px",
                                    "border-top-left-radius": "12px",
                                    "border-top-right-radius": "12px",
                                    "border-bottom-right-radius": "12px",
                                    "border-bottom-left-radius": "12px",
                                    "cursor": "pointer",
                                    "font-size": "17px",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#C5CFFB",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#C5CFFB",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#C5CFFB",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#C5CFFB",
                                    "background-color": "#E8ECFE",
                                    "color": "#2D4BF0",
                                    "display": "inline-flex",
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
                                  "role": "switch",
                                  "aria-checked": "true",
                                  "aria-label": "Owner: See every crew’s schedule",
                                  "data-blok-switch": "",
                                  "data-default": "true",
                                  "data-on-mark": "✓",
                                  "data-off-mark": "—",
                                  "data-on-bg": "#E8ECFE",
                                  "data-off-bg": "#FFFFFF",
                                  "data-on-fg": "#2D4BF0",
                                  "data-off-fg": "#9AA0A8",
                                  "data-on-border": "#C5CFFB",
                                  "data-off-border": "#E2E4DE",
                                  "data-flip-border": "#9A4A12",
                                  "data-flip-cell": "#FDF6F0"
                                },
                                "text": "✓"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-16",
                            "style": {
                              "base": {
                                "text-align": "center",
                                "border-top-width": "1px",
                                "border-top-style": "solid",
                                "border-top-color": "#ECEEE8",
                                "background-color": "transparent",
                                "display": "table-cell",
                                "flex-wrap": "wrap",
                                "align-items": "baseline",
                                "column-gap": "0.35rem",
                                "vertical-align": "middle"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-15",
                                "style": {
                                  "base": {
                                    "width": "44px",
                                    "height": "44px",
                                    "border-top-left-radius": "12px",
                                    "border-top-right-radius": "12px",
                                    "border-bottom-right-radius": "12px",
                                    "border-bottom-left-radius": "12px",
                                    "cursor": "pointer",
                                    "font-size": "17px",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#C5CFFB",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#C5CFFB",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#C5CFFB",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#C5CFFB",
                                    "background-color": "#E8ECFE",
                                    "color": "#2D4BF0",
                                    "display": "inline-flex",
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
                                  "role": "switch",
                                  "aria-checked": "true",
                                  "aria-label": "Dispatcher: See every crew’s schedule",
                                  "data-blok-switch": "",
                                  "data-default": "true",
                                  "data-on-mark": "✓",
                                  "data-off-mark": "—",
                                  "data-on-bg": "#E8ECFE",
                                  "data-off-bg": "#FFFFFF",
                                  "data-on-fg": "#2D4BF0",
                                  "data-off-fg": "#9AA0A8",
                                  "data-on-border": "#C5CFFB",
                                  "data-off-border": "#E2E4DE",
                                  "data-flip-border": "#9A4A12",
                                  "data-flip-cell": "#FDF6F0"
                                },
                                "text": "✓"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-18",
                            "style": {
                              "base": {
                                "text-align": "center",
                                "border-top-width": "1px",
                                "border-top-style": "solid",
                                "border-top-color": "#ECEEE8",
                                "background-color": "transparent",
                                "display": "table-cell",
                                "flex-wrap": "wrap",
                                "align-items": "baseline",
                                "column-gap": "0.35rem",
                                "vertical-align": "middle"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-17",
                                "style": {
                                  "base": {
                                    "width": "44px",
                                    "height": "44px",
                                    "border-top-left-radius": "12px",
                                    "border-top-right-radius": "12px",
                                    "border-bottom-right-radius": "12px",
                                    "border-bottom-left-radius": "12px",
                                    "cursor": "pointer",
                                    "font-size": "17px",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#E2E4DE",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#E2E4DE",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#E2E4DE",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#E2E4DE",
                                    "background-color": "#FFFFFF",
                                    "color": "#9AA0A8",
                                    "display": "inline-flex",
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
                                  "role": "switch",
                                  "aria-checked": "false",
                                  "aria-label": "Crew: See every crew’s schedule",
                                  "data-blok-switch": "",
                                  "data-default": "false",
                                  "data-on-mark": "✓",
                                  "data-off-mark": "—",
                                  "data-on-bg": "#E8ECFE",
                                  "data-off-bg": "#FFFFFF",
                                  "data-on-fg": "#2D4BF0",
                                  "data-off-fg": "#9AA0A8",
                                  "data-on-border": "#C5CFFB",
                                  "data-off-border": "#E2E4DE",
                                  "data-flip-border": "#9A4A12",
                                  "data-flip-cell": "#FDF6F0"
                                },
                                "text": "—"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-27",
                        "style": {
                          "base": {
                            "display": "table-row"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-20",
                            "style": {
                              "base": {
                                "text-align": "left",
                                "padding-top": "0",
                                "padding-right": "20px",
                                "padding-bottom": "0",
                                "padding-left": "20px",
                                "height": "58px",
                                "font-weight": "500",
                                "border-top-width": "1px",
                                "border-top-style": "solid",
                                "border-top-color": "#ECEEE8",
                                "display": "table-cell",
                                "vertical-align": "middle"
                              }
                            },
                            "text": "Move and reassign jobs"
                          },
                          {
                            "tag": "div",
                            "key": "div-22",
                            "style": {
                              "base": {
                                "text-align": "center",
                                "border-top-width": "1px",
                                "border-top-style": "solid",
                                "border-top-color": "#ECEEE8",
                                "background-color": "transparent",
                                "display": "table-cell",
                                "flex-wrap": "wrap",
                                "align-items": "baseline",
                                "column-gap": "0.35rem",
                                "vertical-align": "middle"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-21",
                                "style": {
                                  "base": {
                                    "width": "44px",
                                    "height": "44px",
                                    "border-top-left-radius": "12px",
                                    "border-top-right-radius": "12px",
                                    "border-bottom-right-radius": "12px",
                                    "border-bottom-left-radius": "12px",
                                    "cursor": "pointer",
                                    "font-size": "17px",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#C5CFFB",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#C5CFFB",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#C5CFFB",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#C5CFFB",
                                    "background-color": "#E8ECFE",
                                    "color": "#2D4BF0",
                                    "display": "inline-flex",
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
                                  "role": "switch",
                                  "aria-checked": "true",
                                  "aria-label": "Owner: Move and reassign jobs",
                                  "data-blok-switch": "",
                                  "data-default": "true",
                                  "data-on-mark": "✓",
                                  "data-off-mark": "—",
                                  "data-on-bg": "#E8ECFE",
                                  "data-off-bg": "#FFFFFF",
                                  "data-on-fg": "#2D4BF0",
                                  "data-off-fg": "#9AA0A8",
                                  "data-on-border": "#C5CFFB",
                                  "data-off-border": "#E2E4DE",
                                  "data-flip-border": "#9A4A12",
                                  "data-flip-cell": "#FDF6F0"
                                },
                                "text": "✓"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-24",
                            "style": {
                              "base": {
                                "text-align": "center",
                                "border-top-width": "1px",
                                "border-top-style": "solid",
                                "border-top-color": "#ECEEE8",
                                "background-color": "transparent",
                                "display": "table-cell",
                                "flex-wrap": "wrap",
                                "align-items": "baseline",
                                "column-gap": "0.35rem",
                                "vertical-align": "middle"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-23",
                                "style": {
                                  "base": {
                                    "width": "44px",
                                    "height": "44px",
                                    "border-top-left-radius": "12px",
                                    "border-top-right-radius": "12px",
                                    "border-bottom-right-radius": "12px",
                                    "border-bottom-left-radius": "12px",
                                    "cursor": "pointer",
                                    "font-size": "17px",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#C5CFFB",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#C5CFFB",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#C5CFFB",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#C5CFFB",
                                    "background-color": "#E8ECFE",
                                    "color": "#2D4BF0",
                                    "display": "inline-flex",
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
                                  "role": "switch",
                                  "aria-checked": "true",
                                  "aria-label": "Dispatcher: Move and reassign jobs",
                                  "data-blok-switch": "",
                                  "data-default": "true",
                                  "data-on-mark": "✓",
                                  "data-off-mark": "—",
                                  "data-on-bg": "#E8ECFE",
                                  "data-off-bg": "#FFFFFF",
                                  "data-on-fg": "#2D4BF0",
                                  "data-off-fg": "#9AA0A8",
                                  "data-on-border": "#C5CFFB",
                                  "data-off-border": "#E2E4DE",
                                  "data-flip-border": "#9A4A12",
                                  "data-flip-cell": "#FDF6F0"
                                },
                                "text": "✓"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-26",
                            "style": {
                              "base": {
                                "text-align": "center",
                                "border-top-width": "1px",
                                "border-top-style": "solid",
                                "border-top-color": "#ECEEE8",
                                "background-color": "transparent",
                                "display": "table-cell",
                                "flex-wrap": "wrap",
                                "align-items": "baseline",
                                "column-gap": "0.35rem",
                                "vertical-align": "middle"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-25",
                                "style": {
                                  "base": {
                                    "width": "44px",
                                    "height": "44px",
                                    "border-top-left-radius": "12px",
                                    "border-top-right-radius": "12px",
                                    "border-bottom-right-radius": "12px",
                                    "border-bottom-left-radius": "12px",
                                    "cursor": "pointer",
                                    "font-size": "17px",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#E2E4DE",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#E2E4DE",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#E2E4DE",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#E2E4DE",
                                    "background-color": "#FFFFFF",
                                    "color": "#9AA0A8",
                                    "display": "inline-flex",
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
                                  "role": "switch",
                                  "aria-checked": "false",
                                  "aria-label": "Crew: Move and reassign jobs",
                                  "data-blok-switch": "",
                                  "data-default": "false",
                                  "data-on-mark": "✓",
                                  "data-off-mark": "—",
                                  "data-on-bg": "#E8ECFE",
                                  "data-off-bg": "#FFFFFF",
                                  "data-on-fg": "#2D4BF0",
                                  "data-off-fg": "#9AA0A8",
                                  "data-on-border": "#C5CFFB",
                                  "data-off-border": "#E2E4DE",
                                  "data-flip-border": "#9A4A12",
                                  "data-flip-cell": "#FDF6F0"
                                },
                                "text": "—"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-35",
                        "style": {
                          "base": {
                            "display": "table-row"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-28",
                            "style": {
                              "base": {
                                "text-align": "left",
                                "padding-top": "0",
                                "padding-right": "20px",
                                "padding-bottom": "0",
                                "padding-left": "20px",
                                "height": "58px",
                                "font-weight": "500",
                                "border-top-width": "1px",
                                "border-top-style": "solid",
                                "border-top-color": "#ECEEE8",
                                "display": "table-cell",
                                "vertical-align": "middle"
                              }
                            },
                            "text": "See customer phone numbers"
                          },
                          {
                            "tag": "div",
                            "key": "div-30",
                            "style": {
                              "base": {
                                "text-align": "center",
                                "border-top-width": "1px",
                                "border-top-style": "solid",
                                "border-top-color": "#ECEEE8",
                                "background-color": "transparent",
                                "display": "table-cell",
                                "flex-wrap": "wrap",
                                "align-items": "baseline",
                                "column-gap": "0.35rem",
                                "vertical-align": "middle"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-29",
                                "style": {
                                  "base": {
                                    "width": "44px",
                                    "height": "44px",
                                    "border-top-left-radius": "12px",
                                    "border-top-right-radius": "12px",
                                    "border-bottom-right-radius": "12px",
                                    "border-bottom-left-radius": "12px",
                                    "cursor": "pointer",
                                    "font-size": "17px",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#C5CFFB",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#C5CFFB",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#C5CFFB",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#C5CFFB",
                                    "background-color": "#E8ECFE",
                                    "color": "#2D4BF0",
                                    "display": "inline-flex",
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
                                  "role": "switch",
                                  "aria-checked": "true",
                                  "aria-label": "Owner: See customer phone numbers",
                                  "data-blok-switch": "",
                                  "data-default": "true",
                                  "data-on-mark": "✓",
                                  "data-off-mark": "—",
                                  "data-on-bg": "#E8ECFE",
                                  "data-off-bg": "#FFFFFF",
                                  "data-on-fg": "#2D4BF0",
                                  "data-off-fg": "#9AA0A8",
                                  "data-on-border": "#C5CFFB",
                                  "data-off-border": "#E2E4DE",
                                  "data-flip-border": "#9A4A12",
                                  "data-flip-cell": "#FDF6F0"
                                },
                                "text": "✓"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-32",
                            "style": {
                              "base": {
                                "text-align": "center",
                                "border-top-width": "1px",
                                "border-top-style": "solid",
                                "border-top-color": "#ECEEE8",
                                "background-color": "transparent",
                                "display": "table-cell",
                                "flex-wrap": "wrap",
                                "align-items": "baseline",
                                "column-gap": "0.35rem",
                                "vertical-align": "middle"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-31",
                                "style": {
                                  "base": {
                                    "width": "44px",
                                    "height": "44px",
                                    "border-top-left-radius": "12px",
                                    "border-top-right-radius": "12px",
                                    "border-bottom-right-radius": "12px",
                                    "border-bottom-left-radius": "12px",
                                    "cursor": "pointer",
                                    "font-size": "17px",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#C5CFFB",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#C5CFFB",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#C5CFFB",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#C5CFFB",
                                    "background-color": "#E8ECFE",
                                    "color": "#2D4BF0",
                                    "display": "inline-flex",
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
                                  "role": "switch",
                                  "aria-checked": "true",
                                  "aria-label": "Dispatcher: See customer phone numbers",
                                  "data-blok-switch": "",
                                  "data-default": "true",
                                  "data-on-mark": "✓",
                                  "data-off-mark": "—",
                                  "data-on-bg": "#E8ECFE",
                                  "data-off-bg": "#FFFFFF",
                                  "data-on-fg": "#2D4BF0",
                                  "data-off-fg": "#9AA0A8",
                                  "data-on-border": "#C5CFFB",
                                  "data-off-border": "#E2E4DE",
                                  "data-flip-border": "#9A4A12",
                                  "data-flip-cell": "#FDF6F0"
                                },
                                "text": "✓"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-34",
                            "style": {
                              "base": {
                                "text-align": "center",
                                "border-top-width": "1px",
                                "border-top-style": "solid",
                                "border-top-color": "#ECEEE8",
                                "background-color": "transparent",
                                "display": "table-cell",
                                "flex-wrap": "wrap",
                                "align-items": "baseline",
                                "column-gap": "0.35rem",
                                "vertical-align": "middle"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-33",
                                "style": {
                                  "base": {
                                    "width": "44px",
                                    "height": "44px",
                                    "border-top-left-radius": "12px",
                                    "border-top-right-radius": "12px",
                                    "border-bottom-right-radius": "12px",
                                    "border-bottom-left-radius": "12px",
                                    "cursor": "pointer",
                                    "font-size": "17px",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#C5CFFB",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#C5CFFB",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#C5CFFB",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#C5CFFB",
                                    "background-color": "#E8ECFE",
                                    "color": "#2D4BF0",
                                    "display": "inline-flex",
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
                                  "role": "switch",
                                  "aria-checked": "true",
                                  "aria-label": "Crew: See customer phone numbers",
                                  "data-blok-switch": "",
                                  "data-default": "true",
                                  "data-on-mark": "✓",
                                  "data-off-mark": "—",
                                  "data-on-bg": "#E8ECFE",
                                  "data-off-bg": "#FFFFFF",
                                  "data-on-fg": "#2D4BF0",
                                  "data-off-fg": "#9AA0A8",
                                  "data-on-border": "#C5CFFB",
                                  "data-off-border": "#E2E4DE",
                                  "data-flip-border": "#9A4A12",
                                  "data-flip-cell": "#FDF6F0"
                                },
                                "text": "✓"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-43",
                        "style": {
                          "base": {
                            "display": "table-row"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-36",
                            "style": {
                              "base": {
                                "text-align": "left",
                                "padding-top": "0",
                                "padding-right": "20px",
                                "padding-bottom": "0",
                                "padding-left": "20px",
                                "height": "58px",
                                "font-weight": "500",
                                "border-top-width": "1px",
                                "border-top-style": "solid",
                                "border-top-color": "#ECEEE8",
                                "display": "table-cell",
                                "vertical-align": "middle"
                              }
                            },
                            "text": "Create and send invoices"
                          },
                          {
                            "tag": "div",
                            "key": "div-38",
                            "style": {
                              "base": {
                                "text-align": "center",
                                "border-top-width": "1px",
                                "border-top-style": "solid",
                                "border-top-color": "#ECEEE8",
                                "background-color": "transparent",
                                "display": "table-cell",
                                "flex-wrap": "wrap",
                                "align-items": "baseline",
                                "column-gap": "0.35rem",
                                "vertical-align": "middle"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-37",
                                "style": {
                                  "base": {
                                    "width": "44px",
                                    "height": "44px",
                                    "border-top-left-radius": "12px",
                                    "border-top-right-radius": "12px",
                                    "border-bottom-right-radius": "12px",
                                    "border-bottom-left-radius": "12px",
                                    "cursor": "pointer",
                                    "font-size": "17px",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#C5CFFB",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#C5CFFB",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#C5CFFB",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#C5CFFB",
                                    "background-color": "#E8ECFE",
                                    "color": "#2D4BF0",
                                    "display": "inline-flex",
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
                                  "role": "switch",
                                  "aria-checked": "true",
                                  "aria-label": "Owner: Create and send invoices",
                                  "data-blok-switch": "",
                                  "data-default": "true",
                                  "data-on-mark": "✓",
                                  "data-off-mark": "—",
                                  "data-on-bg": "#E8ECFE",
                                  "data-off-bg": "#FFFFFF",
                                  "data-on-fg": "#2D4BF0",
                                  "data-off-fg": "#9AA0A8",
                                  "data-on-border": "#C5CFFB",
                                  "data-off-border": "#E2E4DE",
                                  "data-flip-border": "#9A4A12",
                                  "data-flip-cell": "#FDF6F0"
                                },
                                "text": "✓"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-40",
                            "style": {
                              "base": {
                                "text-align": "center",
                                "border-top-width": "1px",
                                "border-top-style": "solid",
                                "border-top-color": "#ECEEE8",
                                "background-color": "transparent",
                                "display": "table-cell",
                                "flex-wrap": "wrap",
                                "align-items": "baseline",
                                "column-gap": "0.35rem",
                                "vertical-align": "middle"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-39",
                                "style": {
                                  "base": {
                                    "width": "44px",
                                    "height": "44px",
                                    "border-top-left-radius": "12px",
                                    "border-top-right-radius": "12px",
                                    "border-bottom-right-radius": "12px",
                                    "border-bottom-left-radius": "12px",
                                    "cursor": "pointer",
                                    "font-size": "17px",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#C5CFFB",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#C5CFFB",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#C5CFFB",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#C5CFFB",
                                    "background-color": "#E8ECFE",
                                    "color": "#2D4BF0",
                                    "display": "inline-flex",
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
                                  "role": "switch",
                                  "aria-checked": "true",
                                  "aria-label": "Dispatcher: Create and send invoices",
                                  "data-blok-switch": "",
                                  "data-default": "true",
                                  "data-on-mark": "✓",
                                  "data-off-mark": "—",
                                  "data-on-bg": "#E8ECFE",
                                  "data-off-bg": "#FFFFFF",
                                  "data-on-fg": "#2D4BF0",
                                  "data-off-fg": "#9AA0A8",
                                  "data-on-border": "#C5CFFB",
                                  "data-off-border": "#E2E4DE",
                                  "data-flip-border": "#9A4A12",
                                  "data-flip-cell": "#FDF6F0"
                                },
                                "text": "✓"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-42",
                            "style": {
                              "base": {
                                "text-align": "center",
                                "border-top-width": "1px",
                                "border-top-style": "solid",
                                "border-top-color": "#ECEEE8",
                                "background-color": "transparent",
                                "display": "table-cell",
                                "flex-wrap": "wrap",
                                "align-items": "baseline",
                                "column-gap": "0.35rem",
                                "vertical-align": "middle"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-41",
                                "style": {
                                  "base": {
                                    "width": "44px",
                                    "height": "44px",
                                    "border-top-left-radius": "12px",
                                    "border-top-right-radius": "12px",
                                    "border-bottom-right-radius": "12px",
                                    "border-bottom-left-radius": "12px",
                                    "cursor": "pointer",
                                    "font-size": "17px",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#E2E4DE",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#E2E4DE",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#E2E4DE",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#E2E4DE",
                                    "background-color": "#FFFFFF",
                                    "color": "#9AA0A8",
                                    "display": "inline-flex",
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
                                  "role": "switch",
                                  "aria-checked": "false",
                                  "aria-label": "Crew: Create and send invoices",
                                  "data-blok-switch": "",
                                  "data-default": "false",
                                  "data-on-mark": "✓",
                                  "data-off-mark": "—",
                                  "data-on-bg": "#E8ECFE",
                                  "data-off-bg": "#FFFFFF",
                                  "data-on-fg": "#2D4BF0",
                                  "data-off-fg": "#9AA0A8",
                                  "data-on-border": "#C5CFFB",
                                  "data-off-border": "#E2E4DE",
                                  "data-flip-border": "#9A4A12",
                                  "data-flip-cell": "#FDF6F0"
                                },
                                "text": "—"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-51",
                        "style": {
                          "base": {
                            "display": "table-row"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-44",
                            "style": {
                              "base": {
                                "text-align": "left",
                                "padding-top": "0",
                                "padding-right": "20px",
                                "padding-bottom": "0",
                                "padding-left": "20px",
                                "height": "58px",
                                "font-weight": "500",
                                "border-top-width": "1px",
                                "border-top-style": "solid",
                                "border-top-color": "#ECEEE8",
                                "display": "table-cell",
                                "vertical-align": "middle"
                              }
                            },
                            "text": "Take payment on site"
                          },
                          {
                            "tag": "div",
                            "key": "div-46",
                            "style": {
                              "base": {
                                "text-align": "center",
                                "border-top-width": "1px",
                                "border-top-style": "solid",
                                "border-top-color": "#ECEEE8",
                                "background-color": "transparent",
                                "display": "table-cell",
                                "flex-wrap": "wrap",
                                "align-items": "baseline",
                                "column-gap": "0.35rem",
                                "vertical-align": "middle"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-45",
                                "style": {
                                  "base": {
                                    "width": "44px",
                                    "height": "44px",
                                    "border-top-left-radius": "12px",
                                    "border-top-right-radius": "12px",
                                    "border-bottom-right-radius": "12px",
                                    "border-bottom-left-radius": "12px",
                                    "cursor": "pointer",
                                    "font-size": "17px",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#C5CFFB",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#C5CFFB",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#C5CFFB",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#C5CFFB",
                                    "background-color": "#E8ECFE",
                                    "color": "#2D4BF0",
                                    "display": "inline-flex",
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
                                  "role": "switch",
                                  "aria-checked": "true",
                                  "aria-label": "Owner: Take payment on site",
                                  "data-blok-switch": "",
                                  "data-default": "true",
                                  "data-on-mark": "✓",
                                  "data-off-mark": "—",
                                  "data-on-bg": "#E8ECFE",
                                  "data-off-bg": "#FFFFFF",
                                  "data-on-fg": "#2D4BF0",
                                  "data-off-fg": "#9AA0A8",
                                  "data-on-border": "#C5CFFB",
                                  "data-off-border": "#E2E4DE",
                                  "data-flip-border": "#9A4A12",
                                  "data-flip-cell": "#FDF6F0"
                                },
                                "text": "✓"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-48",
                            "style": {
                              "base": {
                                "text-align": "center",
                                "border-top-width": "1px",
                                "border-top-style": "solid",
                                "border-top-color": "#ECEEE8",
                                "background-color": "transparent",
                                "display": "table-cell",
                                "flex-wrap": "wrap",
                                "align-items": "baseline",
                                "column-gap": "0.35rem",
                                "vertical-align": "middle"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-47",
                                "style": {
                                  "base": {
                                    "width": "44px",
                                    "height": "44px",
                                    "border-top-left-radius": "12px",
                                    "border-top-right-radius": "12px",
                                    "border-bottom-right-radius": "12px",
                                    "border-bottom-left-radius": "12px",
                                    "cursor": "pointer",
                                    "font-size": "17px",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#E2E4DE",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#E2E4DE",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#E2E4DE",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#E2E4DE",
                                    "background-color": "#FFFFFF",
                                    "color": "#9AA0A8",
                                    "display": "inline-flex",
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
                                  "role": "switch",
                                  "aria-checked": "false",
                                  "aria-label": "Dispatcher: Take payment on site",
                                  "data-blok-switch": "",
                                  "data-default": "false",
                                  "data-on-mark": "✓",
                                  "data-off-mark": "—",
                                  "data-on-bg": "#E8ECFE",
                                  "data-off-bg": "#FFFFFF",
                                  "data-on-fg": "#2D4BF0",
                                  "data-off-fg": "#9AA0A8",
                                  "data-on-border": "#C5CFFB",
                                  "data-off-border": "#E2E4DE",
                                  "data-flip-border": "#9A4A12",
                                  "data-flip-cell": "#FDF6F0"
                                },
                                "text": "—"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-50",
                            "style": {
                              "base": {
                                "text-align": "center",
                                "border-top-width": "1px",
                                "border-top-style": "solid",
                                "border-top-color": "#ECEEE8",
                                "background-color": "transparent",
                                "display": "table-cell",
                                "flex-wrap": "wrap",
                                "align-items": "baseline",
                                "column-gap": "0.35rem",
                                "vertical-align": "middle"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-49",
                                "style": {
                                  "base": {
                                    "width": "44px",
                                    "height": "44px",
                                    "border-top-left-radius": "12px",
                                    "border-top-right-radius": "12px",
                                    "border-bottom-right-radius": "12px",
                                    "border-bottom-left-radius": "12px",
                                    "cursor": "pointer",
                                    "font-size": "17px",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#C5CFFB",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#C5CFFB",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#C5CFFB",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#C5CFFB",
                                    "background-color": "#E8ECFE",
                                    "color": "#2D4BF0",
                                    "display": "inline-flex",
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
                                  "role": "switch",
                                  "aria-checked": "true",
                                  "aria-label": "Crew: Take payment on site",
                                  "data-blok-switch": "",
                                  "data-default": "true",
                                  "data-on-mark": "✓",
                                  "data-off-mark": "—",
                                  "data-on-bg": "#E8ECFE",
                                  "data-off-bg": "#FFFFFF",
                                  "data-on-fg": "#2D4BF0",
                                  "data-off-fg": "#9AA0A8",
                                  "data-on-border": "#C5CFFB",
                                  "data-off-border": "#E2E4DE",
                                  "data-flip-border": "#9A4A12",
                                  "data-flip-cell": "#FDF6F0"
                                },
                                "text": "✓"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-59",
                        "style": {
                          "base": {
                            "display": "table-row"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-52",
                            "style": {
                              "base": {
                                "text-align": "left",
                                "padding-top": "0",
                                "padding-right": "20px",
                                "padding-bottom": "0",
                                "padding-left": "20px",
                                "height": "58px",
                                "font-weight": "500",
                                "border-top-width": "1px",
                                "border-top-style": "solid",
                                "border-top-color": "#ECEEE8",
                                "display": "table-cell",
                                "vertical-align": "middle"
                              }
                            },
                            "text": "See revenue reports"
                          },
                          {
                            "tag": "div",
                            "key": "div-54",
                            "style": {
                              "base": {
                                "text-align": "center",
                                "border-top-width": "1px",
                                "border-top-style": "solid",
                                "border-top-color": "#ECEEE8",
                                "background-color": "transparent",
                                "display": "table-cell",
                                "flex-wrap": "wrap",
                                "align-items": "baseline",
                                "column-gap": "0.35rem",
                                "vertical-align": "middle"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-53",
                                "style": {
                                  "base": {
                                    "width": "44px",
                                    "height": "44px",
                                    "border-top-left-radius": "12px",
                                    "border-top-right-radius": "12px",
                                    "border-bottom-right-radius": "12px",
                                    "border-bottom-left-radius": "12px",
                                    "cursor": "pointer",
                                    "font-size": "17px",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#C5CFFB",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#C5CFFB",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#C5CFFB",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#C5CFFB",
                                    "background-color": "#E8ECFE",
                                    "color": "#2D4BF0",
                                    "display": "inline-flex",
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
                                  "role": "switch",
                                  "aria-checked": "true",
                                  "aria-label": "Owner: See revenue reports",
                                  "data-blok-switch": "",
                                  "data-default": "true",
                                  "data-on-mark": "✓",
                                  "data-off-mark": "—",
                                  "data-on-bg": "#E8ECFE",
                                  "data-off-bg": "#FFFFFF",
                                  "data-on-fg": "#2D4BF0",
                                  "data-off-fg": "#9AA0A8",
                                  "data-on-border": "#C5CFFB",
                                  "data-off-border": "#E2E4DE",
                                  "data-flip-border": "#9A4A12",
                                  "data-flip-cell": "#FDF6F0"
                                },
                                "text": "✓"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-56",
                            "style": {
                              "base": {
                                "text-align": "center",
                                "border-top-width": "1px",
                                "border-top-style": "solid",
                                "border-top-color": "#ECEEE8",
                                "background-color": "transparent",
                                "display": "table-cell",
                                "flex-wrap": "wrap",
                                "align-items": "baseline",
                                "column-gap": "0.35rem",
                                "vertical-align": "middle"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-55",
                                "style": {
                                  "base": {
                                    "width": "44px",
                                    "height": "44px",
                                    "border-top-left-radius": "12px",
                                    "border-top-right-radius": "12px",
                                    "border-bottom-right-radius": "12px",
                                    "border-bottom-left-radius": "12px",
                                    "cursor": "pointer",
                                    "font-size": "17px",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#E2E4DE",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#E2E4DE",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#E2E4DE",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#E2E4DE",
                                    "background-color": "#FFFFFF",
                                    "color": "#9AA0A8",
                                    "display": "inline-flex",
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
                                  "role": "switch",
                                  "aria-checked": "false",
                                  "aria-label": "Dispatcher: See revenue reports",
                                  "data-blok-switch": "",
                                  "data-default": "false",
                                  "data-on-mark": "✓",
                                  "data-off-mark": "—",
                                  "data-on-bg": "#E8ECFE",
                                  "data-off-bg": "#FFFFFF",
                                  "data-on-fg": "#2D4BF0",
                                  "data-off-fg": "#9AA0A8",
                                  "data-on-border": "#C5CFFB",
                                  "data-off-border": "#E2E4DE",
                                  "data-flip-border": "#9A4A12",
                                  "data-flip-cell": "#FDF6F0"
                                },
                                "text": "—"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-58",
                            "style": {
                              "base": {
                                "text-align": "center",
                                "border-top-width": "1px",
                                "border-top-style": "solid",
                                "border-top-color": "#ECEEE8",
                                "background-color": "transparent",
                                "display": "table-cell",
                                "flex-wrap": "wrap",
                                "align-items": "baseline",
                                "column-gap": "0.35rem",
                                "vertical-align": "middle"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-57",
                                "style": {
                                  "base": {
                                    "width": "44px",
                                    "height": "44px",
                                    "border-top-left-radius": "12px",
                                    "border-top-right-radius": "12px",
                                    "border-bottom-right-radius": "12px",
                                    "border-bottom-left-radius": "12px",
                                    "cursor": "pointer",
                                    "font-size": "17px",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#E2E4DE",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#E2E4DE",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#E2E4DE",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#E2E4DE",
                                    "background-color": "#FFFFFF",
                                    "color": "#9AA0A8",
                                    "display": "inline-flex",
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
                                  "role": "switch",
                                  "aria-checked": "false",
                                  "aria-label": "Crew: See revenue reports",
                                  "data-blok-switch": "",
                                  "data-default": "false",
                                  "data-on-mark": "✓",
                                  "data-off-mark": "—",
                                  "data-on-bg": "#E8ECFE",
                                  "data-off-bg": "#FFFFFF",
                                  "data-on-fg": "#2D4BF0",
                                  "data-off-fg": "#9AA0A8",
                                  "data-on-border": "#C5CFFB",
                                  "data-off-border": "#E2E4DE",
                                  "data-flip-border": "#9A4A12",
                                  "data-flip-cell": "#FDF6F0"
                                },
                                "text": "—"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "tag": "div",
                        "key": "div-67",
                        "style": {
                          "base": {
                            "display": "table-row"
                          }
                        },
                        "children": [
                          {
                            "tag": "div",
                            "key": "div-60",
                            "style": {
                              "base": {
                                "text-align": "left",
                                "padding-top": "0",
                                "padding-right": "20px",
                                "padding-bottom": "0",
                                "padding-left": "20px",
                                "height": "58px",
                                "font-weight": "500",
                                "border-top-width": "1px",
                                "border-top-style": "solid",
                                "border-top-color": "#ECEEE8",
                                "display": "table-cell",
                                "vertical-align": "middle"
                              }
                            },
                            "text": "Change billing and plan"
                          },
                          {
                            "tag": "div",
                            "key": "div-62",
                            "style": {
                              "base": {
                                "text-align": "center",
                                "border-top-width": "1px",
                                "border-top-style": "solid",
                                "border-top-color": "#ECEEE8",
                                "background-color": "transparent",
                                "display": "table-cell",
                                "flex-wrap": "wrap",
                                "align-items": "baseline",
                                "column-gap": "0.35rem",
                                "vertical-align": "middle"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-61",
                                "style": {
                                  "base": {
                                    "width": "44px",
                                    "height": "44px",
                                    "border-top-left-radius": "12px",
                                    "border-top-right-radius": "12px",
                                    "border-bottom-right-radius": "12px",
                                    "border-bottom-left-radius": "12px",
                                    "cursor": "pointer",
                                    "font-size": "17px",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#C5CFFB",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#C5CFFB",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#C5CFFB",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#C5CFFB",
                                    "background-color": "#E8ECFE",
                                    "color": "#2D4BF0",
                                    "display": "inline-flex",
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
                                  "role": "switch",
                                  "aria-checked": "true",
                                  "aria-label": "Owner: Change billing and plan",
                                  "data-blok-switch": "",
                                  "data-default": "true",
                                  "data-on-mark": "✓",
                                  "data-off-mark": "—",
                                  "data-on-bg": "#E8ECFE",
                                  "data-off-bg": "#FFFFFF",
                                  "data-on-fg": "#2D4BF0",
                                  "data-off-fg": "#9AA0A8",
                                  "data-on-border": "#C5CFFB",
                                  "data-off-border": "#E2E4DE",
                                  "data-flip-border": "#9A4A12",
                                  "data-flip-cell": "#FDF6F0"
                                },
                                "text": "✓"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-64",
                            "style": {
                              "base": {
                                "text-align": "center",
                                "border-top-width": "1px",
                                "border-top-style": "solid",
                                "border-top-color": "#ECEEE8",
                                "background-color": "transparent",
                                "display": "table-cell",
                                "flex-wrap": "wrap",
                                "align-items": "baseline",
                                "column-gap": "0.35rem",
                                "vertical-align": "middle"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-63",
                                "style": {
                                  "base": {
                                    "width": "44px",
                                    "height": "44px",
                                    "border-top-left-radius": "12px",
                                    "border-top-right-radius": "12px",
                                    "border-bottom-right-radius": "12px",
                                    "border-bottom-left-radius": "12px",
                                    "cursor": "pointer",
                                    "font-size": "17px",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#E2E4DE",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#E2E4DE",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#E2E4DE",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#E2E4DE",
                                    "background-color": "#FFFFFF",
                                    "color": "#9AA0A8",
                                    "display": "inline-flex",
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
                                  "role": "switch",
                                  "aria-checked": "false",
                                  "aria-label": "Dispatcher: Change billing and plan",
                                  "data-blok-switch": "",
                                  "data-default": "false",
                                  "data-on-mark": "✓",
                                  "data-off-mark": "—",
                                  "data-on-bg": "#E8ECFE",
                                  "data-off-bg": "#FFFFFF",
                                  "data-on-fg": "#2D4BF0",
                                  "data-off-fg": "#9AA0A8",
                                  "data-on-border": "#C5CFFB",
                                  "data-off-border": "#E2E4DE",
                                  "data-flip-border": "#9A4A12",
                                  "data-flip-cell": "#FDF6F0"
                                },
                                "text": "—"
                              }
                            ]
                          },
                          {
                            "tag": "div",
                            "key": "div-66",
                            "style": {
                              "base": {
                                "text-align": "center",
                                "border-top-width": "1px",
                                "border-top-style": "solid",
                                "border-top-color": "#ECEEE8",
                                "background-color": "transparent",
                                "display": "table-cell",
                                "flex-wrap": "wrap",
                                "align-items": "baseline",
                                "column-gap": "0.35rem",
                                "vertical-align": "middle"
                              }
                            },
                            "children": [
                              {
                                "tag": "div",
                                "key": "div-65",
                                "style": {
                                  "base": {
                                    "width": "44px",
                                    "height": "44px",
                                    "border-top-left-radius": "12px",
                                    "border-top-right-radius": "12px",
                                    "border-bottom-right-radius": "12px",
                                    "border-bottom-left-radius": "12px",
                                    "cursor": "pointer",
                                    "font-size": "17px",
                                    "border-top-width": "1px",
                                    "border-top-style": "solid",
                                    "border-top-color": "#E2E4DE",
                                    "border-right-width": "1px",
                                    "border-right-style": "solid",
                                    "border-right-color": "#E2E4DE",
                                    "border-bottom-width": "1px",
                                    "border-bottom-style": "solid",
                                    "border-bottom-color": "#E2E4DE",
                                    "border-left-width": "1px",
                                    "border-left-style": "solid",
                                    "border-left-color": "#E2E4DE",
                                    "background-color": "#FFFFFF",
                                    "color": "#9AA0A8",
                                    "display": "inline-flex",
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
                                  "role": "switch",
                                  "aria-checked": "false",
                                  "aria-label": "Crew: Change billing and plan",
                                  "data-blok-switch": "",
                                  "data-default": "false",
                                  "data-on-mark": "✓",
                                  "data-off-mark": "—",
                                  "data-on-bg": "#E8ECFE",
                                  "data-off-bg": "#FFFFFF",
                                  "data-on-fg": "#2D4BF0",
                                  "data-off-fg": "#9AA0A8",
                                  "data-on-border": "#C5CFFB",
                                  "data-off-border": "#E2E4DE",
                                  "data-flip-border": "#9A4A12",
                                  "data-flip-cell": "#FDF6F0"
                                },
                                "text": "—"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "tag": "div",
            "key": "div-73",
            "style": {
              "base": {
                "display": "flex",
                "flex-wrap": "wrap",
                "align-items": "center",
                "row-gap": "14px",
                "column-gap": "14px"
              }
            },
            "children": [
              {
                "tag": "div",
                "key": "div-71",
                "style": {
                  "base": {
                    "font-size": "15px",
                    "color": "#4E545D"
                  }
                },
                "attrs": {
                  "role": "status"
                },
                "text": "Showing default permissions."
              },
              {
                "tag": "div",
                "key": "div-72",
                "style": {
                  "base": {
                    "height": "40px",
                    "padding-top": "0",
                    "padding-right": "14px",
                    "padding-bottom": "0",
                    "padding-left": "14px",
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
                    "font-size": "14px",
                    "display": "flex",
                    "align-items": "center",
                    "justify-content": "center"
                  }
                },
                "text": "Reset to defaults",
                "attrs": {
                  "data-blok-reset": ""
                }
              }
            ]
          }
        ]
      }
    ],
    "attrs": {
      "data-blok-switches": ""
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
